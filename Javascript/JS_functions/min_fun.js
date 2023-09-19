function minnum(num)
{
let min=num[0];
for(let i=0;i<num.length;i++)
{
    if(num[i]<min)
    {
        min=num[i]
    }
}
console.log(min);
}
minnum([6,4,7,8,9,6]);