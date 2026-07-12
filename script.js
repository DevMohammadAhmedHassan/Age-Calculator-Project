// Variables
let dateEl = document.querySelector(".dateInput");
let dateBtn = document.querySelector(".btn");
let resultEl = document.querySelector(".age-output");

// Logic
const calculateAge = () => {
    let userAge = dateEl.value.split("-");


    // new Date().getFullYear(); returns the current year
    let calAge = new Date().getFullYear() - Number(userAge[0]);
    console.log(calAge);

    resultEl.innerHTML = `Your age is ${calAge} years old.`;
}

// event listener
dateBtn.addEventListener("click", calculateAge);