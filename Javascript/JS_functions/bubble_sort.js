function sort(arr)
{
    for(var i=0;i<arr.length;i++)
    {
    for(var j=i+1;j<(arr.length-1);j++)
    {
        if(arr[i]>arr[j]){
        var temp=arr[i]
        arr[i]=arr[j]
        arr[j]=temp
        }
    }
    }
    console.log(arr);
    }
    var arr = [6,1,4,7,2,9,3];
    sort(arr);
    
	


    
    