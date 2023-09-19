let add=document.querySelector(".add");
let heading=document.querySelector(".heading");
let html='<div style="height:200px;width:200px;border:1px solid black;background-color:pink;"><textarea cols='19' rows='10' placeholder="enter message...."></textarea></div>';
add.addEventListener('click',()=>{
    heading.insertAdjacentHTML("afterend",html);
})