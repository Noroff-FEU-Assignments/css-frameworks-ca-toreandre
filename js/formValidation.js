// get form on submit event and execute code
document.querySelector('.contact-form').addEventListener('submit', function(event) {
    // prevent default form submit
    event.preventDefault();
    let errors = 0;

    const name = document.querySelector("#name").value;
    const nameError = document.querySelector("#name-error");
    const message = document.querySelector("#message").value;
    const messageError = document.querySelector("#message-error");
    const website = document.querySelector("#website").value;
    const websiteError = document.querySelector("#website-error");
    const email = document.querySelector("#email").value;
    const emailError = document.querySelector("#email-error");
    const checkbox = document.querySelector("#checkbox").checked;
    const checkboxError = document.querySelector("#checkbox-error");

    if (inputCheck(name, 2) === true) {
        nameError.style.display = "none";
    } else {
        nameError.style.display = "block";
        errors++;
    }

    if (validateEmail(email) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
        errors++;
    }

    if (inputCheck(website, 4) === true) {
        websiteError.style.display = "none";
    } else {
        websiteError.style.display = "block";
        errors++;
    }

    if (inputCheck(message, 10) === true) {
        messageError.style.display = "none";
    } else {
        messageError.style.display = "block";
        errors++;
    }

    if (checkbox) {
        checkboxError.style.display = "none";
    } else {
        checkboxError.style.display = "block";
        errors++;
    }


    // Display submit success message if there are no validation errors
    if(errors == 0 ) {
        postForm();

    } else {
        // Reset the error counter so it is ready for a new check when the user press "submit"
        errors = 0;
    }
});


function postForm() {

    alert("The form was submitted!");
    location.reload();

}

function inputCheck(value, len) {
    if (value.trim().length >= len) {
      return true;
    } else {
      return false;
    }
}

function validateEmail(email) {
    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const patternMatch = regEx.test(email);
    return patternMatch;
}

