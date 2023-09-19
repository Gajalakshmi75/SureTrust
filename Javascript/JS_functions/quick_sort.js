/*function quicksort(arr)
{
    if(arr.lengt==1){
        return arr;
    }
    const pivot=arr[arr.length-1];
    const leftarr=[];
    const rightarr=[];
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]<pivot){
            leftarr.push(arr[i]);
        }
        else{
            rightarr.push(arr[i]);
        }
    }
    if(leftarr.length>0 && rightarr.length>0)
    {
        return [...quicksort(leftarr),pivot,...quicksort(rightarr)];
    }
    else if(leftarr.length>0)
    {
        return [...quicksort(leftarr),pivot];
    }
    else{
        return [pivot,...quicksort(rightarr)];
    }
}
const arr=[5,2,9,1,6,7,4,1];
console.log(quicksort(arr));*/
    
      function Quicksort(array){
         if (array.length < 2){
            return array;
         }
         let pivot_element = array[array.length - 1]
         let left_sub_array = [];
         let right_sub_array = [];
         for (let i = 0; i < array.length - 1; i++){
            if (array[i] < pivot_element) {
               left_sub_array.push(array[i])
            } else {
               right_sub_array.push(array[i])
            }
         }
         return [...Quicksort(left_sub_array), pivot_element, ...Quicksort(right_sub_array)];
      }
      const array = [0, 10, 4, 1, 3];
      console.log(Quicksort(array));

    