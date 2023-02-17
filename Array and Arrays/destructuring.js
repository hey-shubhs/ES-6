// Destructuring assignment gives us an easy way
// extract data from arrays and objects
 // and assign them to variable


 // Next is common example

 let cities = [
    "Delhi",
    "Mumbai",
    "Banglore",
    "Los Angeles",
    "Pune"
 ];

 console.log(cities[0]);

 // This code demonstrate deconstructuring
 let [first, , , , fifth] = [
    "Delhi",
    "Mumbai",
    "Banglore",
    "Los Angeles",
    "Pune"
 ];

 console.log(first);
 console.log(fifth);