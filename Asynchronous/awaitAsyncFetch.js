// Async functions returs a promise and resolves value of the promise will be whatever return from the function


// const delay = (second)=>
//     new Promise((resolves)=>
//         setTimeout(resolves, second*1000)
//     );

// const countToFive = async() => {
//     console.log("Zero seconds");
//     await delay(1);
//     console.log("one second");
//     await delay(2);
//     console.log("two seconds");
//     await delay(3);
//     console.log("three seconds");
// }

// countToFive()


const githubRequest = async(login)=>{
    let response = await fetch(`https://api.github.com/users/${login}`);
    let json = await response.json();
    let summary = `${json.name}, ${json.company}, ${json.location}`
    console.log(summary);
};


githubRequest("hey-shubhs")
