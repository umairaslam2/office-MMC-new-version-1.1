const oracledb = require("oracledb");
const poolPromise = require("../database.js");

 const manageScreen = async (req, res) => {
  let { action, id, screenname, createdby, heading, title, description } = req.body || {};
  let connection;

  try {
    
    const finalAction = (action || "").trim().toUpperCase();
    const validActions = ["ADD", "EDIT", "DELETE"];

    if (!finalAction || !validActions.includes(finalAction)) {
      return res.status(400).json({
        success: false,
        message: "Invalid or missing action. Must be ADD, EDIT, or DELETE.",
      });
    }

    if ((finalAction === "EDIT" || finalAction === "DELETE") && !id) {
      return res.status(400).json({
        success: false,
        message: "ID is required for EDIT or DELETE operation.",
      });
    }

    console.log(" Incoming Request:", {
      action: finalAction,
      id,
      screenname,
      createdby,
      heading,
      title,
      description,
    });

    const pool = await poolPromise;
    connection = await pool.getConnection();

    await connection.execute(
      `
      BEGIN
        manage_screen(
          p_action      => :action,
          p_id          => :id,
          p_screenname  => :screenname,
          p_createdby   => :createdby,
          p_heading     => :heading,
          p_title       => :title,
          p_description => :description
        );
      END;
      `,
      {
        action: finalAction,
        id: id || null,
        screenname: screenname || null,
        createdby: createdby || "Admin",
        heading: heading || null,
        title: title || null,
        description: description || null,
      },
      { autoCommit: false } 
    );

    await connection.commit();

    const messages = {
      ADD: "Screen added successfully.",
      EDIT: "Screen updated successfully.",
      DELETE: "Screen deleted successfully.",
    };

    res.status(200).json({
      success: true,
      message: messages[finalAction],
    });
  } catch (err) {
    console.error(" Error in manageScreen:", err);

    // rollback
    if (connection) {
      try {
        await connection.rollback();
      } catch (rollbackErr) {
        console.error(" Rollback failed:", rollbackErr);
      }
    }

    let errorMessage = "Database operation failed.";
    if (err.message.includes("ORA-")) {
      errorMessage = "Oracle database error.";
    }

    res.status(500).json({
      success: false,
      message: errorMessage,
      error: err.message,
    });
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (closeErr) {
        console.error(" Connection close failed:", closeErr);
      }
    }
  }
};

//-------- GET SCREENS -----------

 const getScreen = async (req, res) => {
  const { id } = req.query; 
  let connection;

  try {
    const pool = await poolPromise;
    connection = await pool.getConnection();


    const result = await connection.execute(
      `
      BEGIN
        get_screen(
          p_id     => :id,
          p_result => :result
        );
      END;
      `,
      {
        id: id || null,
        result: { dir: oracledb.BIND_OUT, type: oracledb.CURSOR },
      },
      { outFormat: oracledb.OUT_FORMAT_OBJECT }
    );

    const resultSet = result.outBinds.result;
    const rows = await resultSet.getRows(); 
    await resultSet.close();

    res.status(200).json({
      success: true,
      count: rows.length,
      data: rows,
    });
  } catch (err) {
    console.error(" Error in getScreen:", err);

    res.status(500).json({
      success: false,
      message: "Failed to fetch screen data.",
      error: err.message,
    });
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (closeErr) {
        console.error(" Connection close failed:", closeErr);
      }
    }
  }
};


module.exports = { manageScreen, getScreen };