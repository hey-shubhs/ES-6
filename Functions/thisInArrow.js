// let person = {
//     first:"Angie",
//     hobbies:["Bike", "Hike", "Ski"],

   
//     printHobbies:function(){
//         let _this = this;
//         this.hobbies.forEach(function(hobby){
//             let string = `${_this.first} likes to ${hobby}`
//             console.log(string);
//         });
//     }
// }

let person = {
    first:"Angie",
    hobbies:["Bike", "Hike", "Ski"],

   
    printHobbies:function(){
        this.hobbies.forEach((hobby) =>{
            let string = `${this.first} likes to ${hobby}`
            console.log(string);
        });
    }
}

person.printHobbies();