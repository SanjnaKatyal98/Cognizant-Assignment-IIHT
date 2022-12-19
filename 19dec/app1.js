let postData={

    id:9,

    name:"sanjna",

    city:"delhi",

    clearedExam:true

}

async function post(){

    let studData= await fetch('https://jsonplaceholder.typicode.com/posts',{

        method:"POST",

        body: JSON.stringify(postData),

        headers: {"Content-type":"application/json"}

    })

    let data = await studData.json()

    console.log(data)

}

post()