function search(arr)
{
let item=7;
let flag=false;
for(let i=0;i<arr.length;i++)
{
    if(arr[i]==item)
    {
        flag=true;
        break;
    }
}
console.log(flag);
}
search([2,7,5,3,5,7,9,6,4]);