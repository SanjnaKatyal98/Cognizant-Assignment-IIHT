async function getAllPosts(){
    console.log("Getiing All Posts");
    let res = await fetch("http://127.0.0.1:5500/FetchDemo/post.json");
    let parse = await res.json();
    console.log(parse);
    let ul = document.createElement("ul");
    for(let cu in parse){
        let li = document.createElement("li");
        console.log(parse[cu]);
        let data = JSON.parse(cu);
        console.log(data);
        li.innerHTML = `Title: ${parse[data]["title"]} , Body: ${parse[data]["body"]}`;
        ul.append(li);
    }
    document.getElementById("res").innerHTML = "";
    document.getElementById("res").appendChild(ul);
}


async function doPost(obj){
    let res = await fetch("http://127.0.0.1:5500/FetchDemo/post.json",{
        method:"POST",
        body:JSON.stringify(obj),
        headers:{"content-type":"application/json; charset=UTF-8"}
      });
    let response = await res.json();
    console.log(response);
}


function tapData(){
    let title = document.getElementById("title").value; 
    let body =  document.getElementById("body").value; 
    console.log(title + " " + body);
    doPost(
        {
            "title":title,
            "body":body
        }
    );
}