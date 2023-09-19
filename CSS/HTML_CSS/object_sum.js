/*const info={
    add : function adding(a,b)
    {
        return a+b;
    },
    mult : function multiplication(a,b)
    {
        return a*b;
    },
    div:
    {
        div1 :function div(a,b){return a/b},
        div2 :function divv(a,b,c){return (a/b)/c},
    },
    sub : function subtraction(a,b)
    {
        return a-b;
    }
}
console.log(info.add(7,5));
console.log(info.mult(5,7));
console.log(info.div.div1(10,5));
console.log(info.sub(7,5));*/


/*const fun1=(a,b) =>{
    return(a+b);
}
console.log(fun1(7,5));*/

const info={
    add : (a,b) =>{ return a+b;},
    mult : (a,b) =>{ return a*b;},
    div:
    {
        div1 : (a,b) => {return a/b},
        div2 : (a,b,c) =>{return (a/b)/c},
    },
    sub : (a,b) =>{ return a-b;}
}
console.log(info.add(7,5));
console.log(info.mult(5,7));
console.log(info.div.div1(10,5));
console.log(info.sub(7,5));

