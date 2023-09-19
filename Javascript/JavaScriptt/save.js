const outerspan=document.querySelector('.outerspan');
const innerspan=document.querySelector('.innerspan');
const firstnote=document.querySelector('.notes');
const secondnote=document.querySelector('.secondnote');
let thenote='<div class="content"> <div class="note1"> <textarea class="writingpart"></textarea><button class="deletebtn">D</div></div>'
secondnote.classList.remove('hidden');

outerspan.addEventListener('click',()=>{
    firstnote.insertAdjacentHTML
    ('afterbegin',thenote);
});
innerspan.addEventListener('click',()=>{
    firstnote.insertAdjacentHTML
    ('afterbegin',thenote);
});
const deletebtn=document.querySelector('.deletebtn');
deletebtn.addEventListener('click',()=>{
    deletebtn.remove();
})
