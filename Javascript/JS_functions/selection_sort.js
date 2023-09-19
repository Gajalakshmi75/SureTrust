function sort(arr)
{
    for(var i=0;i<arr.length-1;i++)
    {
        let minindex=i;
        for(var j=i+1;j<arr.length;j++)
        {
            if(arr[j]<arr[minindex])
            {
                minindex=j;
                
            }
        }
        const temp=arr[i];
        arr[i]=arr[minindex];
        arr[minindex]=temp;
    }
    console.log(arr);
    }
    var arr = [6,1,4,7,2,9,3];
    sort(arr);
     
	


    
    