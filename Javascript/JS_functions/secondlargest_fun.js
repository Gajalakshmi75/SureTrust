//second largest number
function Array(a)
{
let firstlargenum=0;
let secondlargenum=0;

for(let i=0;i<a.length;i++)
{
    if(a[i]>firstlargenum){
        secondlargenum=firstlargenum;
        firstlargenum=a[i]
    }
    else if(a[i]>secondlargenum)
    {
        secondlargenum=a[i]
    }
}
console.log("array:",a);
console.log("The first largest number:",firstlargenum)
console.log("The second largest number:",secondlargenum);
}
Array([7,5,6,8,10,9,5,3,4]);