function maxnum(a)
{
let max=a[0];
for(let i=0;i<a.length;i++)
{
    if(max<a[i]){
        max=a[i];
    }
}
console.log(max);
}
maxnum([7,5,6,8,9,5,3,4]);