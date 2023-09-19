function sumarr(arr)
{
    let sum=0;
    for(let i=0;i<arr.length;i++)
    {
        sum+=arr[i];
    }
    console.log(sum);
    return sum;
}
sumarr([1,2,3,4,5]);