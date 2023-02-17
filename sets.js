// sets are collection of values that can be any type.
// but the rule with sets is that each value must be unique.
// The API of this is a little similar to Map

let books = new Set();

books.add("Pride and Prejudice");
books.add("7 Habits of highly effective poeple");
books.add("war and peace").add("Oliver Twist")
books.add("war and peace")
console.log(books);

console.log(books.size);

books.forEach(function(item){
    console.log(item);
});

books.delete("Oliver Twist")
console.log("has Oliver Twish", books.has("Oliver Twist"));