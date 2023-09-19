let arr=[2,7,5,3,5,7,9,6,4];
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

/*let a=[6,3,5,7,3,1,4,6];
let i=7;
for(let i=0;i<a.length;i++)
{
    if(a[i]==i)
    {
        console.log("item found");
    }
    else{
        console.log("item not found");
    }
}*/