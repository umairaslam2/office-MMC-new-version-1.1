const oracledb = require("oracledb");
const jwt = require("jsonwebtoken");
const poolPromise = require("../database.js");

 const loginUser = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({
      success: false,
      message: "Username and password are required",
    });
  }

  let connection;

  try {
    const pool = await poolPromise;
    connection = await pool.getConnection();

    const result = await connection.execute(
      `BEGIN
         user_login1(:username, :password, :status, :message, :userrole);
       END;`,
      {
        username,
        password,
        status: { dir: oracledb.BIND_OUT, type: oracledb.NUMBER },
        message: { dir: oracledb.BIND_OUT, type: oracledb.STRING, maxSize: 200 },
        userrole: { dir: oracledb.BIND_OUT, type: oracledb.NUMBER },
      }
    );

    const { status, message, userrole } = result.outBinds;

    if (status === 1) {
      //  Generate JWT token
      const token = jwt.sign(
        {
          username,
          role: userrole === 1 ? "admin" : "screen",
        },
        process.env.JWT_SECRET
      );

      return res.status(200).json({
        success: true,
        message,
        role: userrole === 1 ? "admin" : "screen",
        token,
      });
    } else if (status === 0) {
      return res.status(401).json({ success: false, message });
    } else {
      return res.status(500).json({ success: false, message });
    }
  } catch (err) {
    console.error(" Error during login:", err);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error. Please try again later.",
    });
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (closeErr) {
        console.error("Error closing connection:", closeErr);
      }
    }
  }
};

module.exports = { loginUser };