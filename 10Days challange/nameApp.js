const btnElement = document.querySelector('button');
const yourName = document.getElementById('update');

btnElement.onclick = function() {
    const yourName = prompt("Hi please Enter Your Name");
    const spanElement = document.querySelector('span');
    spanElement.textContent = yourName;
}
