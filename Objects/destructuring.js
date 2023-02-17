const vacation = {
    destination:"chile",
    travelers:2,
    activity:"skiing",
    cost:"so much"
};

function marketing({destination, activity}){
    return `come to ${destination} and do some ${activity}`;
}

console.log(marketing(vacation));


const {title, price} = {
    title:"Reuben",
    price:7,
    description:"A classic",
    ingredients:[
        "bread",
        "corned beef",
        "saurkraut",
        "cheese"
    ]
}

console.log(title);
console.log(price);