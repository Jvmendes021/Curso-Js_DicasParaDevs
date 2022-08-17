const submitButton = document.querySelector("#submit-button");
const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");

submitButton.addEventListener("click", function (e) {
    e.preventDefault();

    const nameValue = nameInput.value;
    const emailValue = emailInput.value;

    if (nameValue === "" || emailValue === "") {
       return alert("Por gentileza preencher todos os campos!");
    }

    myForm.style.background = "red";
});

