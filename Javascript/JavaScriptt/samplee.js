let div1=document.querySelector('.div1');
let  div2=document.querySelector('.div2');
let para=document.querySelector('.para');
console.log(para);
para.textContent="This is paragraph";

div1.addEventListener("click",()=>{
    div2.classList.toggle('pink');

})
div2.addEventListener("click",()=>{
    div1.classList.toggle('green');

})
