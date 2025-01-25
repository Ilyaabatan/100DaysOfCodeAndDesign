const generateBtn = document.getElementById("generate-btn");
const numberElemant = document.getElementById("randomNo");

generateBtn.addEventListener("click",() =>{

    const randomNo = Math.floor(Math.random() * 100) +1;

    numberElemant.textContent = randomNo;
});
