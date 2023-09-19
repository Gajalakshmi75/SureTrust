let btnget=document.querySelector('button');
let mytable=document.querySelector('#table');
let student=[
    {name:"lakshmi",id:316,education:"BTECH",place:"andhra pradesh",phone_no:8764537381},
    {name:"venkateswari",id:852,education:"BTECH",place:"andhra pradesh",phone_no:8764537381},
    {name:"usha",id:775,education:"BTECH",place:"andhra pradesh",phone_no:8764537381},
    {name:"chinni",id:475,education:"BTECH",place:"andhra pradesh",phone_no:8764537381}
]
let headers=['name','id','education','place','phone_no'];
btnget.addEventListener('click',()=>{
    let table=document.createElement('table');
    let headerrow=document.createElement('tr');
    headers.forEach(headertext=>{
        let header=document.createElement('th');
        let textnode=document.createTextNode(headertext);
        header.appendChild(textnode);
        headerrow.appendChild(header);
    });
    table.appendChild(headerrow);
    student.forEach(emp=>{
           let row=document.createElement('tr');

           Object.values(emp).forEach(text=>{
            let cell=document.createElement('td');
            let textnode=document.createTextNode(text);
            cell.appendChild(textnode);
            row.appendChild(cell);
        })
        table.appendChild(row);
    });
    mytable.appendChild(table);
})