console.log("Dom Loaded");


let student = new Map();

function saveData(){
    let name = document.forms["frm"]["name"].value;
    let number =  document.forms["frm"]["number"].value;
    console.log(name,number);
    if(student.has(name)){
        let datas = student.get(name);
        console.info(datas);
        datas.push(number);
        student.set(name,datas);
    }
    else{
        let datas = new Array();
        datas.push(number);
        student.set(name,datas);
        console.log(student);
    }
    return false;
}

function saveAll(){
    console.log("Saving All Data");
    let name = document.forms["frm"]["name"].value;
    let allData = document.forms["frm"]["all"].value;
    let arr = allData.split(" ");
    let all = new Array();
    arr.forEach(d=>{
        all.push(d);
    });
   console.log("ALl Datas Entered:",all);

    if(student.has(name)){
        console.log("Already Has The Name");
        let getAll = student.get(name);
        console.log("All The Previous:",getAll);
        getAll.push(all);
        console.log(getAll.flat(1));
        student.set(name,getAll.flat(1));
    }
    else{
        console.log("Fresh Entry");
        let carr = new Array();
        carr.push(all);
        console.log(carr);
        console.log(carr.flat(1));
        student.set(name,carr.flat(1));
    }
}

function fetchData(){
    let text = document.getElementById("search").value;
    console.log("fetching Data");
    document.querySelector("tbody").innerHTML = "";
    document.querySelector("thead").innerHTML = `
        <tr>
            <td>${text}</td>
        </tr>
    `
    student.get(text).forEach(
        (d)=>{
            let tr = document.createElement("tr");
            tr.innerHTML = `<td>${d}</td>`;
            document.querySelector("tbody").append(tr);
        }
    );
}


function ArithmaticOps(arr,op){
    switch(op){
        case 'Add':
            return arr?.reduce((x,y)=>{return parseInt(x)+parseInt(y);});
        case 'Average':
            return arr?.reduce((x,y)=>{return parseInt(x)+parseInt(y);})/arr?.length;
        default:
            return 0;
    }
}


function doTotal(){
    let text = document.getElementById("search").value;
    let arr = student.get(text);
    let ans = ArithmaticOps(arr,"Add");
    console.log(ans);
    document.getElementById("res").innerHTML = "";
    document.getElementById("res").innerHTML = `Total marks for ${text} is: ${ans}`;
}

function doAverage(){
    let text = document.getElementById("search").value;
    let arr = student.get(text);
    let ans = ArithmaticOps(arr,"Average");
    console.log(ans);
    document.getElementById("res").innerHTML = "";
    document.getElementById("res").innerHTML = `Average marks for ${text} is: ${ans}`;
}