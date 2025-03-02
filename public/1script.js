const bar=document.getElementById('bar');
const close=document.getElementById('close');
const nav=document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click',()=> {
      nav.classList.add('active');  
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

const forms=document.querySelector(".forms"),
   pwShowHide=document.querySelectorSelector("eyeicon");
   links=document.querySelectorSelector(".link");
pwshowhide.forEach(eyeIcon =>{
  eyeIcon.addEventListener("click",()=>{
    let pwfield =eye-Icon.parentElement.parentElement.querySelectorAll(".password");

    pwfield.forEach(password =>{
      if(password.type=="password"){
        password.type="text";
      }
    })
  })
})