const arr1=[1,2,3,4];
const map1=arr1.map(x=>x*5);
console.log(map1);
console.log("------------------------------------\n");
//using map to reformat object in an array
const arr=[{key:1,value:100},{key:2,value:200},{key:3,value:300}];
const reformat=arr.map(({key,value})=>({[key]:value}));
console.log(reformat);
console.log(arr);
console.log("------------------------------------\n");
//map.set
let map=new Map();
map.set('1','str');
map.set(1,'num1');
map.set(true,'bool');
console.log(map.get(1));
console.log(map.get('1'));
console.log(map.size);
console.log("------------------------------------\n");
//Map can also use objects as keys.
let john = { name: "John" };

// for every user, let's store their visits count
let visitsCountMap = new Map();

// john is the key for the map
visitsCountMap.set(john, 123);
console.log( visitsCountMap.get(john) ); // 123