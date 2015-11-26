var notOnLogin = window.location.pathname !== "/login";
var userHeader = document.getElementById("header-bottom-right");
var userText = userHeader.innerText;
var userLoggedIn = userText.includes("Log in or sign up");
if(userLoggedIn && notOnLogin) {
	window.location.href = "/login";
}

console.log("Hello World");