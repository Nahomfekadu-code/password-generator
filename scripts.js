function generatePassword(){
const length=document.getElementById('length').value

const charset='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+~`|}{[]:;?><,./-=';
let password='';
for(let i=0;i<length;i++){
    const randomIndex=Math.floor(Math.random()*charset.length)
    password+=charset[randomIndex]
}
document.getElementById('Password').innerText=password
}