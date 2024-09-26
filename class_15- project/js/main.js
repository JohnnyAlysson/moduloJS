import { loadContacs, displayContacts } from "./contact.js";

document.addEventListener('DOMContentLoaded', () => {
  console.log("DOM fully loaded");
  
  loadContacs();

  const contactListLink = document.getElementById('contactListLink');
  const addContactLink = document.getElementById('addContactLink');
  const contactForm = document.getElementById('contactForm');
  const containerLista = document.getElementById('containerLista');
  const mainContentTitle = document.querySelector('.main-content h2');

  console.log("Elements found:", {
    contactListLink,
    addContactLink,
    contactForm,
    containerLista,
    mainContentTitle
  });

  function showContactList() {
    console.log("Showing contact list");
    contactForm.style.display = 'none';
    containerLista.style.display = 'grid';
    mainContentTitle.textContent = 'Lista de Contatos';
    contactListLink.classList.add('active');
    addContactLink.classList.remove('active');
  }

  function showAddContactForm() {
    console.log("Showing add contact form");
    contactForm.style.display = 'block';
    containerLista.style.display = 'none';
    mainContentTitle.textContent = 'Adicionar Contato';
    addContactLink.classList.add('active');
    contactListLink.classList.remove('active');
  }

  contactListLink.addEventListener('click', (e) => {
    console.log("Contact list link clicked");
    e.preventDefault();
    showContactList();
  });

  addContactLink.addEventListener('click', (e) => {
    console.log("Add contact link clicked");
    e.preventDefault();
    showAddContactForm();
  });


  console.log("Initially showing contact list");
  showContactList();
  displayContacts()
});