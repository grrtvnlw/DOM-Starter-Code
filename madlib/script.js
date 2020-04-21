const myButton = document.getElementById("clickMe");
const noun1 = document.getElementById("noun1");
const noun2 = document.getElementById("noun2");
const noun3 = document.getElementById("noun3");
const noun4 = document.getElementById("noun4");
const noun5 = document.getElementById("noun5");
const noun1Input = document.getElementById("noun1Input");
const noun2Input = document.getElementById("noun2Input");
const noun3Input = document.getElementById("noun3Input");
const noun4Input = document.getElementById("noun4Input");
const noun5Input = document.getElementById("noun5Input");

myButton.addEventListener('click', function (e) {
    e.preventDefault();
    
    noun1.innerHTML = noun1Input.value;
    noun2.innerHTML = noun2Input.value;
    noun3.innerHTML = noun3Input.value;
    noun4.innerHTML = noun4Input.value;

    if (noun5Input.value == "yes") {
        noun5.style.display = "block";
        
    }
});