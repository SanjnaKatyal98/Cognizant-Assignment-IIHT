fetch("https://jsonplaceholder.typicode.com/users").then(res =>
    res.json()).then(res =>
        {console.log(res);
         res.map(user=>
            console.log(`${user.id}  ${user.name}  ${user.website}`));})
    .catch(function(err){
            console.log(err)});
    fetch("https://jsonplaceholder.typicode.com/users").then(function(res){
        return res.json();
    }).then(function(data){
            console.log(data);
        }).catch(function(err){
            console.log(err);
        });

async function fetch2(){
    let response = await fetch("https://jsonplaceholder.typicode.com/users/2");
    let data = await response.json();
    console.log(data);
}

fetch2();