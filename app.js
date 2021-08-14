

function animatedForm() {
    const arrows = document.querySelectorAll(".fa-arrow-right");

    arrows.forEach(arrow => {
        arrow.addEventListener("click", () => {
         const userInput = arrow.previousElementSibling;
         const currentForm = arrow.parentElement;
         const nextForm = currentForm.nextElementSibling;
         const progressBar = document.querySelector(".progress-username");
        

          //  Check for username validation
        
         if(userInput.type ===  "text" && validateUsername(userInput)) {
            nextSlide(currentForm, nextForm);
            errorHint("rgb(87, 189, 130)", "");
            progressBar.classList.add("progress-email")

            } 
            else if(userInput.type === "email" && validateEmail(userInput)) {
                nextSlide(currentForm, nextForm);
                errorHint("rgb(87, 189, 130)", "");
                progressBar.classList.add("progress-password")
            } 
            else if(userInput.type ===  "password" && validatePassword(userInput)) {
                nextSlide(currentForm, nextForm);
                errorHint("rgb(87, 189, 130)", "You are Done");  
                progressBar.classList.add("progress-done")
            }
            else {
                 currentForm.style.animation = "shake 0.5s ease";
            }
              
            parent.addEventListener('animationend', () =>  {
                setTimeout(() => {
                    currentForm.style.animation = "";
                }, 2000);
                 
            }) 
           
    

        });


    });
}


function validateUsername(userNameInput) {
    if(userNameInput.value.length < 6) {
        errorHint("rgb(189, 87, 87)", "Username must be more than 6 character");
       
        
    }
    else {
        errorHint("rgb(87, 189, 130)", "");
        return true;
    }
}

function validatePassword(passwordInput) {
    
    if(passwordInput.value.length < 6) {
        errorHint("rgb(189, 87, 87)", "Password must be more than 6 character");   
    }
    else {
        errorHint("rgb(87, 189, 130)", "");
        return true;
    }
}


function validateEmail(emailInput) {
    const validationCode = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (validationCode.test(emailInput.value)) {
        errorHint("rgb(87, 189, 130)", "");
        return true;
    }
    else {
        errorHint("rgb(189, 87, 87)", "Enter a valide email ");

    }
}


function nextSlide(currentForm, nextForm) { 
    currentForm.classList.add("inactive");
    currentForm.classList.remove("active");
    nextForm.classList.add("active");
}


function errorHint(color, note) {
    document.body.style.backgroundColor = color;
    document.querySelector(".error-note-field").textContent = note;
} 

animatedForm()