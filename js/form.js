(function () {
    Parse.initialize("VM9AJOTKLPWVOOJ7Ygo3YY4iKtvm8yERtFTkeK2B", "3NEtkqVDMnJ9RLpk7qz22yEaEfjMJXxU6LMiE0K5");
    Parse.serverURL = "https://parseapi.back4app.com/";
})();


const name = document.querySelector('#name');
const subject = document.querySelector('#subject');
const email = document.querySelector('#email');
const tel = document.querySelector('#tel');

function createParseContact() {
    let contact = Parse.Object.extend("contato");
    contact = new contact();
    contact.set("nome", name.value);
    contact.set("assunto", subject.value);
    contact.set("email", email.value);
    contact.set("telefone", tel.value);

    contact.save();

    document.querySelector('#form').style.display = "none";
    document.querySelector('#show-form').style.display = "flex";
    document.querySelector('#show-form p').innerHTML = `Hello ${name.value}, Thank you for your choice, we will contact you shortly`;

    setTimeout(() => {
        document.querySelector('#show-form').style.display = "none";
        document.querySelector('#form').style.display = "flex";
        name.value = "";
        subject.value = "";
        email.value = "";
        tel.value = "";
    }, 5000);
};

document.querySelector('#form').addEventListener("submit", (e) => {
    e.preventDefault();
    createParseContact();
});