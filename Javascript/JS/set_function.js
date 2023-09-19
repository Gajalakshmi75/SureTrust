let set = new Set();

let l = { name: "lakshmi" };
let s = { name: "lucky" };
let c = { name: "chinni" };

// visits, some users come multiple times
set.add(l);
set.add(s);
set.add(c);
set.add(l);
set.add(c);

// set keeps only unique values
console.log(set.size ); // 3

for (let user of set) {
  console.log(user.name);
}
console.log("----------------------------------------");
let se = new Set(["oranges", "apples", "bananas"]);

for (let value of se) {
    console.log(value);
}

// the same with forEach:
se.forEach((value, _valueAgain, se) => {
  console.log(value);
});
console.log("----------------------------------------");
function unique(arr) {
    return Array.from(new Set(arr));
  }
  
  let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  
  console.log( unique(values) ); // Hare, Krishna, :-O
console.log("----------------------------------------");
