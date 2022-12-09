newfunction=function(){
    console.log("in function");
    let e = document.getElementById("div1");
    console.log(e.className);
    if(e.className!="newclass"){
        e.classList.add("newclass");
    }
    else{
        e.classList.remove("newclass");
    }

}
disp=function(){
    let a = document.getElementById("in").value;
    console.log(a);
}
document.body.appendChild(div);