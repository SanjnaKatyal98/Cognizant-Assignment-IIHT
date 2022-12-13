let post={
    "title": "HARRY POTTER",
    "body": "Life of harry potter"
}
getPost();

async function readPost() {
    let data = await fetch("./post.json");
    let list = await data.json();
    console.log(list);
}
readPost();

async function getPost(){
    let response= await fetch("post.json")
    let data = await response.json();
    console.log(data);
}
getPost()