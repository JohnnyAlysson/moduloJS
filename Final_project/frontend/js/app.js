let currentUser = null;
const API_URL = "http://localhost:3000/api";

const loginSection = document.getElementById("loginSection");
const dashboardSection = document.getElementById("dashboardSection");
const loginForm = document.getElementById("loginForm");
const loginError = document.getElementById("loginError");
const logoutBtn = document.getElementById("logoutBtn");
const dashboardBtn = document.getElementById("dashboardBtn");
const usersBtn = document.getElementById("usersBtn");
const inventoryBtn = document.getElementById("inventoryBtn");
const dashboardView = document.getElementById("dashboardView");
const usersView = document.getElementById("usersView");
const inventoryView = document.getElementById("inventoryView");

//
loginForm.addEventListener("submit", handleLogin);
logoutBtn.addEventListener("click", handleLogout);
dashboardBtn.addEventListener("click", () => showView("dashboard"));
usersBtn.addEventListener("click", () => showView("users"));
inventoryBtn.addEventListener("click", () => showView("inventory"));

async function handleLogin(e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  try {
    const response = await fetch(`${API_URL}/users`);
    const users = await response.json();

    const user = users.find(
      (u) => u.user_name === username && u.user_password === password
    );

    if (user) {
      currentUser = user;
      loginSection.style.display = "none";
      dashboardSection.style.display = "block";
      loadDashboard();
    } else {
      loginError.textContent = "Invalid credentials";
      loginError.style.display = "block";
    }
  } catch (error) {
    loginError.textContent = "Error connecting to server";
    loginError.style.display = "block";
  }
}

function handleLogout() {
  currentUser = null;
  loginSection.style.display = "flex";
  dashboardSection.style.display = "none";
  loginForm.reset();
}

function showView(view) {
  dashboardView.style.display = "none";
  usersView.style.display = "none";
  inventoryView.style.display = "none";

  switch (view) {
    case "dashboard":
      dashboardView.style.display = "block";
      loadDashboard();
      break;
    case "users":
      usersView.style.display = "block";
      loadUsers();
      break;
    case "inventory":
      inventoryView.style.display = "block";
      loadInventory();
      break;
  }
}

async function loadDashboard() {
  try {
    const [usersResponse, itemsResponse] = await Promise.all([
      fetch(`${API_URL}/users`),
      fetch(`${API_URL}/items`),
    ]);

    const users = await usersResponse.json();
    const items = await itemsResponse.json();

    document.getElementById("totalUsers").textContent = users.length;
    document.getElementById("activeUsers").textContent = users.length;

    document.getElementById("totalItems").textContent = items.length;
    const itemsInUse = items.reduce((acc, item) => acc + item.in_use, 0);
    document.getElementById("itemsInUse").textContent = itemsInUse;
  } catch (error) {
    console.error("Error loading dashboard:", error);
  }
}

//
async function loadUsers() {
  try {
    const response = await fetch(`${API_URL}/users`);
    const users = await response.json();
    const tbody = document.querySelector("#usersTable tbody");
    tbody.innerHTML = "";

    users.forEach((user) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
                <td>${user.ID}</td>
                <td>${user.user_name}</td>
                <td>${user.user_role}</td>
                <td>
                    <button class="action-btn edit-btn" onclick="editUser(${user.ID})">Edit</button>
                    <button class="action-btn delete-btn" onclick="deleteUser(${user.ID})">Delete</button>
                </td>
            `;
      tbody.appendChild(tr);
    });
  } catch (error) {
    console.error("Error loading users:", error);
    showError("Error loading users list");
  }
}

async function loadInventory() {
  try {
    const response = await fetch(`${API_URL}/items`);
    const items = await response.json();
    const tbody = document.querySelector("#inventoryTable tbody");
    tbody.innerHTML = "";

    items.forEach((item) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
                <td>${item.ID}</td>
                <td>${item.item_name}</td>
                <td>${item.category}</td>
                <td>${item.qtde}</td>
                <td>${item.in_use}</td>
                <td>
                    <button class="action-btn edit-btn" onclick="editItem(${item.ID})">Edit</button>
                    <button class="action-btn delete-btn" onclick="deleteItem(${item.ID})">Delete</button>
                </td>
            `;
      tbody.appendChild(tr);
    });
  } catch (error) {
    console.error("Error loading inventory:", error);
    showError("Error loading inventory list");
  }
}

async function editUser(id) {
  try {
    const response = await fetch(`${API_URL}/users`);
    const users = await response.json();
    const user = users.find((u) => u.ID === id);

    if (user) {
      const form = document.createElement("form");
      form.innerHTML = `
                <div class="form-group">
                    <label for="edit-username">Username:</label>
                    <input type="text" id="edit-username" value="${
                      user.user_name
                    }" required>
                </div>
                <div class="form-group">
                    <label for="edit-role">Role:</label>
                    <select id="edit-role" required>
                        <option value="funcionário" ${
                          user.user_role === "funcionário" ? "selected" : ""
                        }>Funcionário</option>
                        <option value="gerente" ${
                          user.user_role === "gerente" ? "selected" : ""
                        }>Gerente</option>
                        <option value="administrador de segurança" ${
                          user.user_role === "administrador de segurança"
                            ? "selected"
                            : ""
                        }>Administrador de Segurança</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="edit-password">New Password:</label>
                    <input type="password" id="edit-password" placeholder="Leave blank to keep current">
                </div>
                <button type="submit" class="btn">Save Changes</button>
            `;

      const modal = document.createElement("div");
      modal.className = "modal";
      modal.appendChild(form);
      document.body.appendChild(modal);

      form.onsubmit = async (e) => {
        e.preventDefault();
        const updatedUser = {
          user_name: document.getElementById("edit-username").value,
          user_role: document.getElementById("edit-role").value,
          user_password:
            document.getElementById("edit-password").value ||
            user.user_password,
        };

        try {
          const response = await fetch(`${API_URL}/user/${id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedUser),
          });

          if (response.ok) {
            modal.remove();
            loadUsers();
            showSuccess("User updated successfully");
          } else {
            showError("Error updating user");
          }
        } catch (error) {
          console.error("Error updating user:", error);
          showError("Error updating user");
        }
      };
    }
  } catch (error) {
    console.error("Error editing user:", error);
    showError("Error editing user");
  }
}

async function deleteUser(id) {
  if (!confirm("Are you sure you want to delete this user?")) return;

  try {
    const response = await fetch(`${API_URL}/user/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      loadUsers();
      showSuccess("User deleted successfully");
    } else {
      showError("Error deleting user");
    }
  } catch (error) {
    console.error("Error deleting user:", error);
    showError("Error deleting user");
  }
}

async function editItem(id) {
  try {
    const response = await fetch(`${API_URL}/items`);
    const items = await response.json();
    const item = items.find((i) => i.ID === id);

    if (item) {
      const form = document.createElement("form");
      form.innerHTML = `
                <div class="form-group">
                    <label for="edit-item-name">Item Name:</label>
                    <input type="text" id="edit-item-name" value="${item.item_name}" required>
                </div>
                <div class="form-group">
                    <label for="edit-category">Category:</label>
                    <input type="text" id="edit-category" value="${item.category}" required>
                </div>
                <div class="form-group">
                    <label for="edit-quantity">Quantity:</label>
                    <input type="number" id="edit-quantity" value="${item.qtde}" required>
                </div>
                <div class="form-group">
                    <label for="edit-in-use">In Use:</label>
                    <input type="number" id="edit-in-use" value="${item.in_use}" required>
                </div>
                <button type="submit" class="btn">Save Changes</button>
            `;

      const modal = document.createElement("div");
      modal.className = "modal";
      modal.appendChild(form);
      document.body.appendChild(modal);

      form.onsubmit = async (e) => {
        e.preventDefault();
        const updatedItem = {
          item_name: document.getElementById("edit-item-name").value,
          category: document.getElementById("edit-category").value,
          qtde: document.getElementById("edit-quantity").value,
          in_use: document.getElementById("edit-in-use").value,
        };

        try {
          const response = await fetch(`${API_URL}/item/${id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedItem),
          });

          if (response.ok) {
            modal.remove();
            loadInventory();
            showSuccess("Item updated successfully");
          } else {
            showError("Error updating item");
          }
        } catch (error) {
          console.error("Error updating item:", error);
          showError("Error updating item");
        }
      };
    }
  } catch (error) {
    console.error("Error editing item:", error);
    showError("Error editing item");
  }
}

async function deleteItem(id) {
  if (!confirm("Are you sure you want to delete this item?")) return;

  try {
    const response = await fetch(`${API_URL}/item/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      loadInventory();
      showSuccess("Item deleted successfully");
    } else {
      showError("Error deleting item");
    }
  } catch (error) {
    console.error("Error deleting item:", error);
    showError("Error deleting item");
  }
}

function showSuccess(message) {
  const successMessage = document.createElement("div");
  successMessage.className = "success-message";
  successMessage.textContent = message;
  document.body.appendChild(successMessage);
  setTimeout(() => successMessage.remove(), 3000);
}

function showError(message) {
  const errorMessage = document.createElement("div");
  errorMessage.className = "error-message";
  errorMessage.textContent = message;
  document.body.appendChild(errorMessage);
  setTimeout(() => errorMessage.remove(), 3000);
}

document.addEventListener("DOMContentLoaded", () => {
  const storedUser = localStorage.getItem("currentUser");
  if (storedUser) {
    currentUser = JSON.parse(storedUser);
    loginSection.style.display = "none";
    dashboardSection.style.display = "block";
    loadDashboard();
  }
});
