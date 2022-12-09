let bttn=document.getElementById("button1");
bttn.addEventListener('click',Data);
function Data(){
    const xhr=new XMLHttpRequest();
    xhr.open('GET','index.txt',true);
    xhr.onprogress=function(){
        console.log('in ready state',xhr.readyState);
    }
    xhr.onload=function(){
        console.log('in ready state',xhr.readyState);
        if(this.status===200){
            document.getElementById('output').innerHTML=`<h1>${this.responseText}</h1>`;
        }
    }
    xhr.onerror=function(){
        console.log('error');
    }
    xhr.send();
};