const planet = "Earth";

// startWith returns true if starting characters matches else false
console.log(planet.startsWith("Ear"));// True   
console.log(planet.startsWith("th"))// False

// endsWith returs true if end characters matches else false
console.log(planet.endsWith("th")) // True
console.log(planet.endsWith("Ear")); //False

// includes returns if string contains any letter that matches when parsed
console.log(planet.includes("h"))  // True
console.log(planet.includes("b")) // False

// search will identify the index or the location in the string
console.log(planet.search("rt")) // 2
console.log(planet.search("m")) //  -1
