const oracledb = require("oracledb");
const poolPromise = require("../database.js");

 const manageScreen1Headlines = async (req, res) => {
  const { action, upperheadline, lowerheadline } = req.body || {}; 
  let connection;

  try {
    const finalAction = (action || "").trim().toUpperCase();
    const validActions = ["ADD", "DELETE"];

    if (!validActions.includes(finalAction)) {
      return res.status(400).json({
        success: false,
        message: "Invalid action. Must be ADD or DELETE.",
      });
    }

    const pool = await poolPromise;
    connection = await pool.getConnection();

    await connection.execute(
      `
      BEGIN
        manage_screen1headlines(
          p_action        => :action,
          p_upperheadline => :upperheadline,
          p_lowerheadline => :lowerheadline,
          p_createdby     => :createdby,
          p_deletedby     => :deletedby
        );
      END;
      `,
      {
        action: finalAction,
        upperheadline,
        lowerheadline,
        createdby: finalAction === "ADD" ? "Admin" : null,
        deletedby: finalAction === "DELETE" ? "Admin" : null,
      },
      { autoCommit: false }
    );

    await connection.commit();

    const messages = {
      ADD: "Headline added successfully.",
      DELETE: "Headline deleted successfully.",
    };

    res.status(200).json({
      success: true,
      message: messages[finalAction],
    });
  } catch (err) {
    console.error("Error in manageScreen1Headlines:", err);
    if (connection) await connection.rollback();
    res.status(500).json({
      success: false,
      message: "Database operation failed.",
      error: err.message,
    });
  } finally {
    if (connection) await connection.close();
  }
};





// ----------GET-----------------

 const getScreen1Headlines = async (req, res) => {
  const { id } = req.query; 
  let connection;

  try {
    const pool = await poolPromise;
    connection = await pool.getConnection();

    const result = await connection.execute(
      `
      DECLARE
        p_result SYS_REFCURSOR;
      BEGIN
        get_screen1headlines(
          p_id => :p_id,
          p_result => :p_result
        );
      END;
      `,
      {
        p_id: id || null,
        p_result: { dir: oracledb.BIND_OUT, type: oracledb.CURSOR },
      },
      { outFormat: oracledb.OUT_FORMAT_OBJECT }
    );

    const cursor = result.outBinds.p_result;
    const rows = await cursor.getRows(); 
    await cursor.close();

    res.status(200).json({
      success: true,
      count: rows.length,
      data: rows,
    });
  } catch (error) {
    console.error("Error in getScreen1Headlines:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch headlines.",
      error: error.message,
    });
  } finally {
    if (connection) await connection.close();
  }
};

module.exports = { manageScreen1Headlines, getScreen1Headlines };