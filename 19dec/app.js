async function studentFetch(){
    let studData = await fetch("student.json");
    let data= await studData.json();
    console.log(data);
}
studentFetch()