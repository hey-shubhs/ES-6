// the map object holds key value pairs
// In a map, any value, both objects and primitive values
// may be used either as a key or a value
// Keys can be any type

let course =  new Map();

course.set("react", {decription:"ui"});
course.set("jest", {decription:"testing"});

console.log(course);
console.log(course.get("react"));

let details = new Map([
    [new Date(),"today"],
    [2, {javascript:["js","node","react"]}],
    ["items",[1,2]]
])

console.log(details.size);

console.log(details.get(2));

details.forEach(function(item){
    console.log(item);
})

