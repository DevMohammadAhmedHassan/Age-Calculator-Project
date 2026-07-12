// Variables
let dateEl = document.querySelector(".dateInput");
let dateBtn = document.querySelector(".btn");
let resultEl = document.querySelector(".age-output");

// Logic
const calculateAge = () => {
    if (dateEl.value === "") {
      resultEl.innerHTML = "Please select a date.";
      return;
    }
    
    let userAge = dateEl.value.split("-");

    if (Number(userAge[0]) <= new Date().getFullYear()) {
        // new Date().getFullYear(); returns the current year
        let calAge = new Date().getFullYear() - Number(userAge[0]);
        console.log(calAge);

        resultEl.innerHTML = `Your age is ${calAge} years old.`;
    }
    else{
        resultEl.innerHTML = "Please enter a valid year.";
    }
}

// event listener
dateBtn.addEventListener("click", calculateAge);