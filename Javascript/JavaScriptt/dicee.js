const dicee=document.querySelector('#btn');

const randomnumber=(to)=>{
    let randomnum=Math.floor(Math.random()*to);
    return randomnum;
}
    const ran=(min,max)=>{
        return Math.floor((Math.random() * (max-min)+min));
    }
    let dice1=document.querySelector('.dice1').src='C:\Users\Lakshmi\Desktop\SURE TRUST\JavaScriptt\image/${ran(1,6)}.jpeg';
    let dice2=document.querySelector('.dice2').src='C:\Users\Lakshmi\Desktop\SURE TRUST\JavaScriptt\image/${ran(1,6)}.jpeg';
    dicee.addEventListener('click',()=>{
        location.reload();
    })
// let play=document.querySelector(".playbtn"); 
// function random_img(){

// var num=Math.floor(Math.random()*6+1);
    
// num="img"+num+".jpeg";
//     return num;
// }
    
// function refresh(){
//     document.querySelector(".dice1").src=random_img(); 
//     document.querySelector(".dice2").src=random_img();
// }
// play.addEventListener('click', refresh);
