const express = require("express");
const cors = require("cors");
const pool = require("./db.js");
const PORT = 3000;

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/users", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM users ");
    res.json(rows);
  } catch (error) {
    res.status(500).json({ message: " Error while getting users info" });
  }
});

app.post("/api/user", async (req, res) => {
  const { user_name, user_role, user_password } = req.body;

  try {

    if (!user_name || !user_role || !user_password) {
      return res
        .status(400)
        .json({ message: "all fields required", receivedData: req.body });
    }

    const query =
      "INSERT INTO users (user_name,user_role,user_password) VALUES (?,?,?)";

    await pool.query(query, [user_name, user_role, user_password]);

    res.status(201).json({ message: `User added successfully: ${user_name}` });
  } catch (error) {
    res.status(500).json({ message: "Error while adding an user" });
  }
});

app.put("/api/user/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const { user_name, user_role, user_password } = req.body;

    if (!user_name || !user_role || !user_password) {
      return res
        .status(400)
        .json({ message: "all fields required", receivedData: req.body });
    }

    const query =
      "UPDATE users SET user_name = ?, user_role = ? , user_password = ? WHERE id = ?";

    await pool.query(query, [user_name, user_role, user_password, id]);

    res.status(200).json({ message: "User updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error while updating user" });
  }
});

app.delete("/api/user/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const query = "DELETE FROM users WHERE ID =?";

    await pool.query(query, [id]);
    res.status(200).json({ message: "User deleted sucessfully" });
  } catch (error) {
    res.status(500).json({ message: "error while deleting user" });
  }
});


app.get("/api/items", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM stock ");
    res.json(rows);
  } catch (error) {
    res.status(500).json({ message: " Error while getting items info" });
  }
});



// ID INT AUTO_INCREMENT PRIMARY KEY,
// item_name VARCHAR (200),
// category VARCHAR (100),
// qtde INT,
// in_use INT

app.post("/api/item", async (req, res) => {
  const { item_name, category, qtde, in_use} = req.body;

  try {

    
    if (!item_name || !category || !qtde  || !in_use) {
      return res
        .status(400)
        .json({ message: "all fields required", receivedData: req.body });
    }


    const query =
      "INSERT INTO stock (item_name, category, qtde, in_use) VALUES (?,?,?, ?)";

    await pool.query(query, [item_name, category, qtde, in_use]);

    res.status(201).json({ message: `item added successfully: ${item_name}` });
  } catch (error) {
    res.status(500).json({ message: "Error while adding an item" });
  }
});

app.put("/api/item/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const { item_name, category, qtde, in_use } = req.body;

    if (!item_name || !category || !qtde  || !in_use) {
      return res
        .status(400)
        .json({ message: "all fields required", receivedData: req.body });
    }

    const query =
      "UPDATE items SET item_name = ?, category = ? , qtde = ? , in_use = ? WHERE id = ?";

    await pool.query(query, [item_name, item_role, item_password, id]);

    res.status(200).json({ message: "item updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error while updating item" });
  }
});

app.delete("/api/item/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const query = "DELETE FROM items WHERE ID =?";

    await pool.query(query, [id]);
    res.status(200).json({ message: "item deleted sucessfully" });
  } catch (error) {
    res.status(500).json({ message: "error while deleting item" });
  }
});




app.listen(PORT, () =>{
  console.log('App running')
})