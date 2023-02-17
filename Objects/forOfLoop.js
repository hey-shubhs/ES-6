for(let letter of "javascript"){
    console.log(letter);
}

// let topics = ["Javascript","Node", "CSS"]

// for (let topic of topics){
//     console.log(topic);
// }

let topics = new Map()
topics.set("HTML","/topic/html")
topics.set("CSS","/topic/CSS")
topics.set("javascript","/topic/javascript")

for(let topic of topics){
    console.log(topic);
}