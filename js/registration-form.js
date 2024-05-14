
let list = [];

const ListFormLocalStorage = localStorage.getItem("list");

if(ListFormLocalStorage)
 {
   list = JSON.parse(ListFormLocalStorage);

   randerList();
 }

 function submiBtn(){
   const nameInput = document.getElementById("name");
   const emailInput = document.getElementById("email");
   const phoneInput = document.getElementById("phone");
   const passwordInput = document.getElementById("pass");

   list.push(nameInput.value);
   list.push(emailInput.value);
   list.push(phoneInput.value);
   list.push(passwordInput.value);

   localStorage.setItem("list", JSON.stringify(list));
   nameInput.value=" ";
   emailInput.value=" ";
   phoneInput.value=" ";
   passwordInput.value=" ";

   randerList();
 }

 function randerList(){
   const listItem = document.getElementById('list-items');

   listItem.innerHTML = " ";

   for(const item of list)

{
   listItem.innerHTML += `<div id="list-items"> ${item} </div>`;
}
 }
  
 






























