//max number
let a=[7,5,6,8,9,5,3,4];
let max=a[0];
for(let i=0;i<a.length;i++)
{
    if(max<a[i]){
        max=a[i];
    }
}
console.log(max);

//min number
let num=[2,6,2,4,7,8,9,6];
let min=num[0];
for(let i=0;i<num.length;i++)
{
    if(num[i]<min)
    {
        min=num[i]
    }
}
console.log(min);