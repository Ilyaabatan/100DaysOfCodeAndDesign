const passwordBox = document.getElementById("password");
const button = document.getElementById("btn");
const copyButton = document.getElementById("copy");


const generatePassword = () => {

    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    let password = "";
    const length = 16;

    for (let i = 0; i < length; i++) {
        password += charset.charAt(Math.floor(Math.random() * charset.length));
    

    }
    passwordBox.value = password;
}


button.addEventListener("click", generatePassword);

copyButton.addEventListener("click", () => {

    const passwordCopy = passwordBox.value.trim();
    if (!passwordCopy) {
        alert("No password to copy! Please generate a password first.");
        return;
    }

    navigator.clipboard.writeText(passwordCopy)
    .then(() => {
        alert("Password copied to clipboard");
    })
});