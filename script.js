const inputSlider = document.getElementById("inputSlider");
const sliderValue= document.getElementById("sliderValue");
const passBox = document.getElementById("passBox");
const lowercase = document.getElementById("lowercase");
const uppercase = document.getElementById("uppercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");
const getBtn = document.getElementById("getBtn");

const copyIcon = document.getElementById("copyIcon");


const lowercasel = "abcdefghijklmnopqrstuvwxyz";
const uppercasel = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const number = "0123456789";
const symbol = "!@#$%^&*()[]{}|\;',./<>?:";

sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener("input",()=>{
    sliderValue.textContent = inputSlider.value
})

getBtn.addEventListener("click",()=>{
    passBox.value = generatePassword();
})

function generatePassword(){

    const length = inputSlider.value;
    let characters = "";
    let password = "";

    characters += lowercase.checked ? lowercasel : "";
    characters += uppercase.checked ? uppercasel : "";
    characters += numbers.checked ? number : "";
    characters += symbols.checked ? symbol : "";

    for(let i =0;i<length;i++){
        password += characters.charAt(Math.floor(Math.random()*characters.length));
        console.log(password);
    }
    return password
}

copyIcon.addEventListener("click",()=>{

    if(passBox.value !="" || passBox.value.length >=10){
        navigator.clipboard.writeText(passBox.value);
        copyIcon.innerText = "check";

        setTimeout(()=>{
            copyIcon.innerHTML = "content_copy";
        },2000)
    }
})

