// const spacePeople = () => {
//     return new Promise((resolves, rejects) => {
//         const api = "http://api.open-notify.org/astros.json";
//         const request = new XMLHttpRequest();
//         request.open("GET", api);
//         request.onload = () => {
//             if(request.status === 200){
//                 resolves(JSON.parse(request.response));
//             }else{
//                 rejects(request.statusText)
//             }
            
//             };
//             request.onerror = err => rejects(err);
//             request.send();
//     });
// }

// spacePeople().then((spaceData)=>
//     console.log(spaceData),
//     (err) =>
//         console.log(new Error("Can't load people"))
// )


let getSpacePeople = () =>
    fetch("http://api.open-notify.org/astros.json")
    .then((res) => res.json());

let spaceNames = () =>
    getSpacePeople()
    .then(json => json.people)
    .then(people => people.map(p => p.name))
    .then(names => names.join(", "));
    spaceNames().then(console.log);