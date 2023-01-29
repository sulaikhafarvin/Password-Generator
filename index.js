const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwords1El = document.getElementById("password1")
let passwords2El = document.getElementById("password2")
let passwordLength = 15;



function generatePassword1(){
    passwords1El.textContent = ""
       for( let i = 0; i <= passwordLength; i++ ){
        let generatePasswordsIndex1 = Math.floor(Math.random() * characters.length)
        passwords1El.textContent += characters[generatePasswordsIndex1 ]
        
    }
    
}
  
function generatePassword2(){
    passwords2El.textContent = ""
    for( let i = 0; i <= passwordLength; i++ ){
        let generatePasswordsIndex2 = Math.floor(Math.random() * characters.length)
        passwords2El.textContent += characters[generatePasswordsIndex2 ]  
    }
    
}

function generatePasswords(){
     generatePassword1()
     generatePassword2() 
}








