function LightMode() {
    const lightMode = document.getElementById('light-mode');
    lightMode.classList.add('activate');

    const darkMode = document.getElementById('dark-mode');
    darkMode.classList.remove('activate');

    const bodyLight = document.getElementById('body');
    bodyLight.className = 'light-mode';

}


function DarkMode() {
    const lightMode = document.getElementById('light-mode');
    lightMode.classList.remove('activate');

    const darkMode = document.getElementById('dark-mode');
    darkMode.classList.add('activate');

    const bodyLight = document.getElementById('body');
    bodyLight.className = 'dark-mode';

}

function rating(n){

			
    const r1 = document.getElementById('r1');
    const r2 = document.getElementById('r2');
    const r3 = document.getElementById('r3');
    const r4 = document.getElementById('r4');
    const r5 = document.getElementById('r5');
    const rating = document.getElementById('rating');
    

    for( let i=0; i<n; i++){

    if(n==1){
        r1.src = './images/star(1).png';
        r2.src = './images/star.png';
        r3.src = './images/star.png';
        r4.src = './images/star.png';
        r5.src = './images/star.png';
    }

    
    
    else if(n==2){
        r1.src = './images/star(1).png';
        r2.src = './images/star(1).png';
        r3.src = './images/star.png';
        r4.src = './images/star.png';
        r5.src = './images/star.png';
    }
    

    else if(n==3){
        r1.src = './images/star(1).png'
        r2.src = './images/star(1).png'
        r3.src = './images/star(1).png'
        r4.src = './images/star.png';
        r5.src = './images/star.png';
    }

    else if(n==4){

        r1.src = './images/star(1).png'
        r2.src = './images/star(1).png'
        r3.src = './images/star(1).png'
        r4.src = './images/star(1).png'
        r5.src = './images/star.png';

    }

    else {

        r1.src = './images/star(1).png'
        r2.src = './images/star(1).png'
        r3.src = './images/star(1).png'
        r4.src = './images/star(1).png'
        r5.src = './images/star(1).png'
    }

    rating.innerText = "Rating is: "+n+"/5"
            
        
    }
}

function  changeImg(num){
    const mainImg=document.getElementById('main-class-img');
    if(num==1){
        mainImg.src="./images/trading-class-img2.jpg";

    }
    else if(num==2){
        mainImg.src="./images/trading-class-img3.jpg";
    }
    else if(num==3){
        mainImg.src="./images/trading-class-img4.jpg";
    }

    else if(num==4){
        mainImg.src="./images/trading-class-img.jpg";
    }
   
}




function submitBtn(){
    alert("Your response is been submited");

    const mobNum = document.getElementById('num');

    const mobileNumber = mobNum.value;
      if(mobileNumber <= 10){
         alert("Mobile Number Should contan at least 10 digit");
         return;
      }


      const pass = document.getElementById('pw');

      const password = pass.value;
        if(password <= 8){
           alert("password shoud contai atleast 8 digit");
           return;
        }
    
    
}

const registerNow = document.getElementById("register-btn");

       
registerNow.addEventListener("click", function () {
   
    window.location.href = "./register-form.html";

});


const LearnMore = document.getElementById("lm-btn");

       
LearnMore.addEventListener("click", function () {
   
    window.location.href = "./core-strategy.html";

});





let list = [];

const ListFormLocalStorage = localStorage.getItem("list");

if(ListFormLocalStorage)
 {
   list = JSON.parse(ListFormLocalStorage);

   randerList();
 }

 function submiButton(){
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
  
 





























































// const mobileNumber = ["1234567890","0987654321","0123456789"]

// function maskMobileNumber(mobile,i){
//     const funSplit = mobile.split('');

//     funSplit[2]="*";
//     funSplit[4]="*";
//     funSplit[6]="*";
//     funSplit[8]="*";
//     funSplit[10]="*";

//     return funSplit.join('');

// }

// const afterMask = mobileNumber.map(maskMobileNumber);
// console.log(afterMask);
