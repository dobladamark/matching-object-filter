function whatIsInAName(collection, source) {
let result = [];

let sourceKeys = Object.keys(source);

collection.forEach((item) =>{
  let match = true;

  sourceKeys.forEach((keys) => {
   if (item[keys] !== source[keys]) {
     match = false;
   }
  })

  if(match) {
    result.push(item);
  }
})
return result;
}

console.log(whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" }
  ],
  { last: "Capulet" }
))
