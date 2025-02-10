function validateEmail() {
    var email1 = document.getElementById("email1").value;
    var email2 = document.getElementById("email2").value;
    if (email1 != email2) {
        alert("Email addresses do not match.");
        return false;
    }
    return true;
}
document.getElementById('questionForm').addEventListener('Submit', function(event) {
	event.preventDefault();
const question =
document.getElementById('question').value;
const responseDiv =
document.getElementById('response');
	responseDiv.innerHTML = `<p>You asked:
	${question}</p>`;
document.getElementById('question').value = '';
});