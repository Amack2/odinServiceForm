const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#cPassword');
const submitBtn = document.querySelector(".submitBtn")
const email = document.querySelector('#email');



password.addEventListener("focusout", (event) => {
    if (confirmPassword.value.length > 0) {
        doThePasswordsMatch();
        testies();
    }
}
);

confirmPassword.addEventListener("focusout", (event) => {
    doThePasswordsMatch();
    testies();
}
);

function doThePasswordsMatch() {
    if (password.value === confirmPassword.value) {
        password.setAttribute("class", "validRow");
        confirmPassword.setAttribute("class", "validRow")
        submitBtn.disabled = false;
        } else {
        password.setAttribute("class", "invalidRow")
        confirmPassword.setAttribute("class", "invalidRow")
        submitBtn.disabled = true;
               
    }
};

email.addEventListener("focusout", (event) => {
    testies();
})

function testies() {
    if (email.value === "") {
        submitBtn.disabled = true;
    }
}

testies();

    

// // if password rows are class -> invalid row or if the other rows are invalid than disable the button
// document.getElementById("myBtn").disabled = true;