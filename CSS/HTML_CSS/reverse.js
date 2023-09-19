let arr=[6,3,8,2,1,3];
let i=0,j=arr.length-1;
while(i<j){
let temp=arr[i];
arr[i]=arr[j];
arr[j]=temp;
i++;j--;
}
console.log(arr)

