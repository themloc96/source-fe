var ftAction = document.getElementsByClassName('footer-action')[0];
var formMessage = document.getElementsByClassName('box-message-chat')[0];
var formContentChat = document.getElementsByClassName('message-contents')[0];

function openBoxMessage(e) {
	e.preventDefault();
	formMessage.classList.add('active');
	formContentChat.classList.add('active');
}
function hideBoxMessage() {
	formMessage.classList.remove('active');
	formContentChat.classList.remove('active');
}

ftAction.addEventListener('click', openBoxMessage);
formContentChat.addEventListener('click', hideBoxMessage);