const emailInput = document.querySelector("#email-input")
const print = document.querySelector("#print")
const emailOutput = document.querySelector("#email-output")

print.addEventListener("click", event => {
    emailOutput.textContent = emailInput.value
})

