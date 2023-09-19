const student=[
    {name:"lakshmi",id:316,education:"BTECH",place:"andhra pradesh",phone_no:8764537381},
    {name:"venkateswari",id:852,education:"BTECH",place:"andhra pradesh",phone_no:8764537381},
    {name:"usha",id:775,education:"BTECH",place:"andhra pradesh",phone_no:8764537381},
    {name:"chinni",id:475,education:"BTECH",place:"andhra pradesh",phone_no:8764537381}
]
const tablebody=document.querySelector('.tablebody');
console.log(tablebody);

const tabledata=document.querySelector('.tabeldata');
const heading=document.querySelector('.heading');
for(let i=0;i<student.length;i++)
{
let html='<tr class="tabeldata"> <td>${student[i].name}</td> <td>${student[i].id}</td> <td>${student[i].education}</td>  <td>${student[i].place}</td> <td>${student[i].phone_no}</td> </tr>';
tabledata.insertAdjacentHTML('afterend',html);
console.log(tabledata);
}