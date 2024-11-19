const express = require("express");
const cors = require("cors");
require('dotenv').config();
const pool = require("./db.js");
const PORT = 3000;

const app = express();

app.use(cors());
app.use(express.json());


app.get("/api/users", async (req, res) => {
  try {
    const { rows } = await pool.query("SELECT * FROM users");
    res.json(rows);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: "Error while getting users info" });
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
      "INSERT INTO users (user_name, user_role, password) VALUES ($1, $2, $3) RETURNING *";

    const { rows } = await pool.query(query, [user_name, user_role, user_password]);

    res.status(201).json({ 
      message: `User added successfully: ${user_name}`,
      user: rows[0]
    });
  } catch (error) {
    console.error('Error adding user:', error);
    res.status(500).json({ message: "Error while adding a user" });
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
      "UPDATE users SET user_name = $1, user_role = $2, password = $3 WHERE id = $4 RETURNING *";

    const { rows } = await pool.query(query, [user_name, user_role, user_password, id]);

    if (rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ 
      message: "User updated successfully",
      user: rows[0]
    });
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ message: "Error while updating user" });
  }
});


app.delete("/api/user/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const query = "DELETE FROM users WHERE id = $1 RETURNING *";
    const { rows } = await pool.query(query, [id]);

    if (rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ message: "error while deleting user" });
  }
});


app.get("/api/items", async (req, res) => {
  try {
    const { rows } = await pool.query("SELECT * FROM stock");
    res.json(rows);
  } catch (error) {
    console.error('Error fetching items:', error);
    res.status(500).json({ message: "Error while getting items info" });
  }
});


app.post("/api/item", async (req, res) => {
  const { item_name, category, qtde, in_use } = req.body;

  try {
    if (!item_name || !category || !qtde || !in_use) {
      return res
        .status(400)
        .json({ message: "all fields required", receivedData: req.body });
    }

    const query =
      "INSERT INTO stock (item_name, category, qtde, in_use) VALUES ($1, $2, $3, $4) RETURNING *";

    const { rows } = await pool.query(query, [item_name, category, qtde, in_use]);

    res.status(201).json({ 
      message: `Item added successfully: ${item_name}`,
      item: rows[0]
    });
  } catch (error) {
    console.error('Error adding item:', error);
    res.status(500).json({ message: "Error while adding an item" });
  }
});


app.put("/api/item/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const { item_name, category, qtde, in_use } = req.body;

    if (!item_name || !category || !qtde || !in_use) {
      return res
        .status(400)
        .json({ message: "all fields required", receivedData: req.body });
    }

    const query =
      "UPDATE stock SET item_name = $1, category = $2, qtde = $3, in_use = $4 WHERE id = $5 RETURNING *";

    const { rows } = await pool.query(query, [item_name, category, qtde, in_use, id]);

    if (rows.length === 0) {
      return res.status(404).json({ message: "Item not found" });
    }

    res.status(200).json({ 
      message: "Item updated successfully",
      item: rows[0]
    });
  } catch (error) {
    console.error('Error updating item:', error);
    res.status(500).json({ message: "Error while updating item" });
  }
});


app.delete("/api/item/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const query = "DELETE FROM stock WHERE id = $1 RETURNING *";
    const { rows } = await pool.query(query, [id]);

    if (rows.length === 0) {
      return res.status(404).json({ message: "Item not found" });
    }

    res.status(200).json({ message: "Item deleted successfully" });
  } catch (error) {
    console.error('Error deleting item:', error);
    res.status(500).json({ message: "Error while deleting item" });
  }
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});