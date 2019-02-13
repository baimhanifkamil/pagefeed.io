// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
  apiKey: "AIzaSyAoon3uQDBBTrSmZbafxN6R6CX8r3ydsIQ",
  authDomain: "pagefeed-website.firebaseapp.com",
  databaseURL: "https://pagefeed-website.firebaseio.com",
  projectId: "pagefeed-website",
  storageBucket: "pagefeed-website.appspot.com",
  messagingSenderId: "886525706351"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('Leads');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);
document.getElementById('contactForm2').addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
  e.preventDefault();

  // Get values
  // var name = getInputVal('name');
  // var company = getInputVal('company');
  var email = getInputVal('email');
  var email = getInputVal('email2');
  // var phone = getInputVal('phone');
  // var message = getInputVal('message');

  // Save message
  // saveMessage(name, company, email, phone, message);
  saveMessage(email);

  // Show alert
  document.querySelector('.btn-sent').style.display = 'block';
  document.querySelector('.btn-before-sent').style.display = 'none';
  document.querySelector('.alert-after-sent').style.display = 'block';

  document.querySelector('.btn-sent2').style.display = 'block';
  document.querySelector('.btn-before-sent2').style.display = 'none';
  document.querySelector('.alert-after-sent2').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function() {
    document.querySelector('.btn-sent').style.display = 'none';
    document.querySelector('.btn-before-sent').style.display = 'block';

    document.querySelector('.btn-sent2').style.display = 'none';
    document.querySelector('.btn-before-sent2').style.display = 'block';
  }, 3000);

  setTimeout(function() {
    document.querySelector('.alert-after-sent').style.display = 'none';

    document.querySelector('.alert-after-sent2').style.display = 'none';
  }, 10000);

  // Clear form
  document.getElementById('contactForm').reset();
  document.getElementById('contactForm2').reset();
}

// Function to get get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save message to firebase
// function saveMessage(name, company, email, phone, message) {
function saveMessage(email) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    // name: name,
    // company: company,
    email: email,
    // phone: phone,
    // message: message
  });
}
