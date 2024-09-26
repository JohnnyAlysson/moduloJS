import { openContactModal, openDeleteConfirmationModal } from "./modal.js";

const contactsList = document.getElementById("containerLista");
const contactForm = document.getElementById('contactForm');
export let contacts = [];

export async function loadContacs() {
  try {
    const response = await fetch('contatos.json');
    contacts = await response.json();
    displayContacts(contacts);
    console.log(contacts);
  } catch (error) {
    console.error('Error loading contacts:', error);
  }
}

export function displayContacts(contacts) {
  contactsList.innerHTML = '';
  contacts.forEach(contact => {
    const contactCard = document.createElement('div');
    contactCard.className = 'contact-card';
    contactCard.innerHTML = `
      <div>
        <p>${contact.nome}</p>
        <p>${contact.email}</p>
        <p>${contact.telefone}</p>
        <button class="edit-btn" data-id="${contact.id}">Editar</button>
        <button class="delete-btn" data-id="${contact.id}">Excluir</button>
      </div>
    `;
    const editBtn = contactCard.querySelector('.edit-btn');
    editBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      openContactModal(contact.id);
    });
    const deleteBtn = contactCard.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      openDeleteConfirmationModal(contact.id);
    });
    contactsList.appendChild(contactCard);
  });
}

contactForm.addEventListener('submit', function(event) {
  event.preventDefault();
  if (validateForm()) {
    addContacts();
  }
});

function validateForm() {
  const nomeInput = contactForm.querySelector('input[name="nome"]');
  const emailInput = contactForm.querySelector('input[name="email"]');
  const telefoneInput = contactForm.querySelector('input[name="telefone"]');

  // Reset error messages
  clearErrorMessages();

  let isValid = true;

  // Name validation (not empty)
  if (nomeInput.value.trim() === '') {
    displayErrorMessage(nomeInput, 'Nome é obrigatório');
    isValid = false;
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value)) {
    displayErrorMessage(emailInput, 'Email inválido');
    isValid = false;
  }

  // Phone validation (Brazilian format)
  const phoneRegex = /^(\+55|55)?(\d{2})?\d{9}$/;
  if (!phoneRegex.test(telefoneInput.value.replace(/\D/g, ''))) {
    displayErrorMessage(telefoneInput, 'Número de telefone inválido');
    isValid = false;
  }

  return isValid;
}

function displayErrorMessage(input, message) {
  const errorElement = document.createElement('span');
  errorElement.className = 'error-message';
  errorElement.textContent = message;
  input.parentNode.insertBefore(errorElement, input.nextSibling);
  input.classList.add('error');
}

function clearErrorMessages() {
  const errorMessages = contactForm.querySelectorAll('.error-message');
  errorMessages.forEach(error => error.remove());
  const errorInputs = contactForm.querySelectorAll('.error');
  errorInputs.forEach(input => input.classList.remove('error'));
}

function addContacts() {
  const nomeInput = contactForm.querySelector('input[name="nome"]');
  const emailInput = contactForm.querySelector('input[name="email"]');
  const telefoneInput = contactForm.querySelector('input[name="telefone"]');

  const newContact = {
    id: contacts.length + 1,
    nome: nomeInput.value,
    email: emailInput.value,
    telefone: telefoneInput.value
  };

  contacts.push(newContact);
  displayContacts(contacts);
  reset();
}

export function updateContact(id, updatedContact) {
  const index = contacts.findIndex(contact => contact.id === id);
  if (index !== -1) {
    contacts[index] = { ...contacts[index], ...updatedContact };
    displayContacts(contacts);
  }
}

export function deleteContact(id) {
  const index = contacts.findIndex(contact => contact.id === id);
  if (index !== -1) {
    contacts.splice(index, 1);
    displayContacts(contacts);
  }
}

function reset(){
  const nomeInput = contactForm.querySelector('input[name="nome"]');
  const emailInput = contactForm.querySelector('input[name="email"]');
  const telefoneInput = contactForm.querySelector('input[name="telefone"]');
  nomeInput.value = "";
  emailInput.value = "";
  telefoneInput.value = "";
  clearErrorMessages();
}