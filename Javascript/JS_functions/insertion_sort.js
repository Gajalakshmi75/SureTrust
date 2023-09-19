function sort(arr)
{
    for(let i=1;i<arr.length;i++)
    {
        for(let j=i;j>0;j--){
            if(arr[j]<arr[j-1])
            {
                const temp=arr[j];
                arr[j]=arr[j-1];
                arr[j-1]=temp;
            }
            else{
                break;
            }
        }
    }
    console.log(arr);
    }
    var arr = [6,1,4,7,2,9,3];
    sort(arr);
    
	


    
    