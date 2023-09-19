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
console.log("-----------------------------------------\n");
const myMap = new Map();
myMap.set('bar', 'baz');
myMap.set(1, 'foo');

console.log(myMap.size);  // 2
console.log(myMap.has('bar')); // true

myMap.clear();

console.log(myMap.size);  // 0
console.log(myMap.has('bar')); // false

console.log("-----------------------------------------\n");

let fruitmap=new Map([['apple',700],['ornage',500],['grapes',250]]);
for(let fruit of fruitmap.keys()){
    console.log(fruit);
}
for(let amount of fruitmap.values()){
    console.log(amount);
}
for(let entry of fruitmap){
    console.log(entry);
}
//foreach
console.log("-----------------------------------------\n");
fruitmap.forEach((value,key,map)=>{
    console.log(`${key}:${value}`);
})
console.log("-----------------------------------------\n");
//map from object
let obj = {
    name: "lakshmi",
    age: 21
  };
  
  let mmap = new Map(Object.entries(obj));
  console.log( mmap.get('name') );
  console.log( mmap.get('age') );

  console.log("-----------------------------------------\n");

  let m = new Map();
m.set('banana', 1);
m.set('orange', 2);
m.set('meat', 4);

let ob = Object.fromEntries(m.entries()); // make a plain object (*)

// done!
// obj = { banana: 1, orange: 2, meat: 4 }
console.log(ob.meat); // 2
console.log("-----------------------------------------\n");

const myap = new Map();
myap.set('bar', 'foo');
console.log(myap.delete('bar')); // Returns true. Successfully removed.
console.log(myap.has('bar')); // Returns false. The "bar" element is no longer present.

console.log("-----------------------------------------\n");
const ma1 = new Map();
ma1.set('bar', 'baz');
ma1.set(1, 'foo');
console.log(ma1.size);
// Expected output: 2
ma1.clear();
console.log(ma1.size);