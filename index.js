const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#cPassword');



const submitBtn = document.querySelector(".submitBtn")


password.addEventListener("focusout", (event) => {
    if (confirmPassword.value.length > 0) { doThePasswordsMatch(); }
}
);

confirmPassword.addEventListener("focusout", (event) => {
    doThePasswordsMatch();
}
);

function doThePasswordsMatch() {
    if (password.value === confirmPassword.value) {
        console.log("they do")
    } else {
        password.setAttribute("class", "invalidRow")
        confirmPassword.setAttribute("class", "invalidRow")
    
    }
};


