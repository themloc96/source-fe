// Switch Map & List in Customer List
// Install mapbox
mapboxgl.accessToken = 'pk.eyJ1IjoibmhpZGFuZyIsImEiOiJja2p3YWU5YW4wMWJsMnF0OHZ2MWxrOXRxIn0.a-OeW8cKGNtyvFqinwbAYQ';
var customerListMap = document.getElementById("mapCustomerList");
if (customerListMap !== null) {
    var map = new mapboxgl.Map({
        container: 'mapCustomerList',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [12.550343, 55.665957],
        zoom: 9,
        trackResize: true
    });
}

var btnViewMap = document.getElementsByClassName("btn-viewmap");
btnViewMap[0].addEventListener('click', function () {
    map.resize();
});
// End Switch Map & List in Customer List

// Add note
var addNote = document.getElementsByClassName('addnew-note')[0];
var formNote = document.getElementsByClassName('form-newnote')[0];
var closeNote = document.getElementsByClassName('close-note')[0];

function newNote(e) {
    formNote.classList.toggle('active');
    console.clear(e);
}
function hideNote(e) {
    formNote.classList.remove('active');
    console.clear();
}

addNote.addEventListener('click', newNote);
closeNote.addEventListener('click', hideNote);


// Add task
var addTask = document.getElementsByClassName('addnew-task')[0];
var formTask = document.getElementsByClassName('form-newtask')[0];
var closeTask = document.getElementsByClassName('close-task')[0];

function newTask(e) {
    formTask.classList.toggle('active');
}
function hideTask(e) {
    formTask.classList.remove('active');
}

addTask.addEventListener('click', newTask);
closeTask.addEventListener('click', hideTask);

// Add email
var addEmail = document.getElementsByClassName('addnew-email')[0];
var formEmail = document.getElementsByClassName('form-newemail')[0];
var closeEmail = document.getElementsByClassName('close-email')[0];

function newEmail(e) {
    formEmail.classList.toggle('active');
}
function hideEmail(e) {
    formEmail.classList.remove('active');
}

addEmail.addEventListener('click', newEmail);
closeEmail.addEventListener('click', hideEmail);


// Add more Email
var btnAddEmail = document.getElementById('btnEmail');
var emailAddMore = document.getElementById('addMoreEmail');
var removeAddmore = document.getElementById('removeEmail');

function addMoreEmail(e) {
    emailAddMore.classList.add('show');
}
function removeEmailAdded(e) {
    emailAddMore.classList.remove('show');
}

btnAddEmail.addEventListener('click', addMoreEmail);
removeAddmore.addEventListener('click', removeEmailAdded);

// Add CC Email
var btnCCEmail = document.getElementById('btnCcBilling');
var ccEmail = document.getElementById('addCCEmail');
var deleteCCEmail = document.getElementById('removeCCEmail');
var formCCEmailComplete = document.getElementById('formCCEmail');
var btnDoneCCEmail = document.getElementById('doneCCEmail');
var btncloseCCEmail = document.getElementById('close_formCCEmail');

function addCCEmail(e) {
    ccEmail.classList.add('show');
    this.classList.add('hide');
}
function removeCCEmail(e) {
    ccEmail.classList.remove('show');
    btnCCEmail.classList.remove('hide');
}
function completeCCemail(e) {
    ccEmail.classList.remove('show');
    formCCEmailComplete.classList.add('show');
}
function closeformCCEmail(e) {
    formCCEmailComplete.classList.remove('show');
    btnCCEmail.classList.remove('hide');
}

btnCCEmail.addEventListener('click', addCCEmail);
deleteCCEmail.addEventListener('click', removeCCEmail);
btnDoneCCEmail.addEventListener('click', completeCCemail);
btncloseCCEmail.addEventListener('click', closeformCCEmail);
// Add BCC Email
var btnBCCEmail = document.getElementById('btnBccBilling');
var bccEmail = document.getElementById('addBCCEmail');
var deleteBCCEmail = document.getElementById('removeBCCEmail');

function addBCCEmail(e) {
    bccEmail.classList.add('show');
    this.classList.add('hide');
}
function removeBCCEmail(e) {
    bccEmail.classList.remove('show');
    btnBCCEmail.classList.remove('hide');
}

btnBCCEmail.addEventListener('click', addBCCEmail);
deleteBCCEmail.addEventListener('click', removeBCCEmail);


// Show Add card in Stripe on modal Add new customer
var addStripe = document.getElementsByClassName('add-stripe')[0];
var formStripe = document.getElementsByClassName('form-addstripe')[0];
var cancelStripe = document.getElementsByClassName('close-stripe')[0];
var parentStripe = document.getElementsByClassName('dropdown-addmethod')[0];

addStripe.addEventListener('click', function () {
    formStripe.classList.add('show');
    parentStripe.classList.remove('active');
    console.clear();
});

cancelStripe.addEventListener('click', function () {
    formStripe.classList.remove('show');
});


// Hide Content popup
var hidePopupmenu = document.getElementsByClassName('hide-contents')[0];
var parentPopup = document.getElementsByClassName('dropdown-popup')[0];

function hideModalContent(e) {
    e.preventDefault();
    parentPopup.classList.remove('active');
}

hidePopupmenu.addEventListener('click', hideModalContent);