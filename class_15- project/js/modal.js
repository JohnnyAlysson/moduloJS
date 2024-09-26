import { contacts, updateContact, deleteContact, displayContacts } from "./contact.js";

let currentContactId = null;

export function openContactModal(contactId) {
  const contact = contacts.find(c => c.id === contactId);
  currentContactId = contactId;
  
  const modal = document.getElementById('editModal');
  const nameInput = document.getElementById('editName');
  const emailInput = document.getElementById('editEmail');
  const phoneInput = document.getElementById('editPhone');
  
  nameInput.value = contact.nome;
  emailInput.value = contact.email;
  phoneInput.value = contact.telefone;
  
  modal.style.display = 'block';
}

export function openDeleteConfirmationModal(contactId) {
  currentContactId = contactId;
  const contact = contacts.find(c => c.id === contactId);
  
  const modal = document.getElementById('deleteModal');
  const confirmationMessage = document.getElementById('deleteConfirmationMessage');
  
  confirmationMessage.textContent = `Tem certeza que deseja excluir ${contact.nome}?`;
  
  modal.style.display = 'block';
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = 'none';
}

function saveContactChanges() {
  const nameInput = document.getElementById('editName');
  const emailInput = document.getElementById('editEmail');
  const phoneInput = document.getElementById('editPhone');
  
  const updatedContact = {
    nome: nameInput.value,
    email: emailInput.value,
    telefone: phoneInput.value
  };
  
  updateContact(currentContactId, updatedContact);
  closeModal('editModal');
}

function confirmDelete() {
  deleteContact(currentContactId);
  closeModal('deleteModal');
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
  const editCloseBtn = document.querySelector('#editModal .close');
  const saveBtn = document.getElementById('saveChanges');
  const deleteCloseBtn = document.querySelector('#deleteModal .close');
  const confirmDeleteBtn = document.getElementById('confirmDelete');
  const cancelDeleteBtn = document.getElementById('cancelDelete');
  
  editCloseBtn.addEventListener('click', () => closeModal('editModal'));
  saveBtn.addEventListener('click', saveContactChanges);
  deleteCloseBtn.addEventListener('click', () => closeModal('deleteModal'));
  confirmDeleteBtn.addEventListener('click', confirmDelete);
  cancelDeleteBtn.addEventListener('click', () => closeModal('deleteModal'));
});