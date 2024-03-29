let a = 1;

let change = val => {
  val = 2;
};

change(a);

console.log(a);
// ---------------------------------
let obj = { num: 1 };

let change2 = val => {
  val.num = 2; // mutating the object the old reference still exists
};

change2(obj);

console.log(obj);
// ---------------------------------
let b = { num: 1 };
let c = b;

b = {}; // re-assigne the whole object chnages it's reference to a new one.

console.log(b, " ", c);

// the assignment operator changes the reference when assigning a totally new empty object.

// JS always passing by reference.

/* 
Re-assigne new values to primitative or object always changes the reference, 
but mutating the value will keep the refernece and not change it.
 */
