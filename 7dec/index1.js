let na=document.getElementById("name");
na.addEventListener("blur",disp,true);
function disp(){
    console.log(document.getElementById("name").value);
}