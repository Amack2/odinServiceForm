const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#cPassword');
const submitBtn = document.querySelector(".submitBtn")




password.addEventListener("focusout", (event) => {
    if (confirmPassword.value.length > 0) {
        doThePasswordsMatch();
    }
}
);

confirmPassword.addEventListener("focusout", (event) => {
    doThePasswordsMatch();
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

