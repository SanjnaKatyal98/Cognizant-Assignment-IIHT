async function getPost(){

    let response= await fetch("post.json")

    let data = await response.json()

    console.log(data)

}

getPost()
