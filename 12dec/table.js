class MyTable extends HTMLElement{




    constructor(){

        super();

        const shadow = this.attachShadow({mode:'open'});



        const div=document.createElement('div');



        const style= document.createElement('style');



        shadow.appendChild(style);

        shadow.appendChild(div);



    }
    connectedCallback(){

        console.log('custom table addded to the page');

        updateTable(this);

    }



}




customElements.define("my-table",MyTable);



function updateTable(e){

    const shadow=e.shadowRoot;



    let r=e.getAttribute('row');

    let c=e.getAttribute('column');




    for(let i=0;i<r;i++){

        let tr=document.createElement('tr');

        for(let j=0;j<c;j++){

            let td=document.createElement('td');

            td.innerHTML=i*j;

            tr.appendChild(td);

        }

        shadow.appendChild(tr);

    }



    shadow.querySelector('style').textContent=`

    td{

    width:${e.getAttribute('row')}px;

    height:${e.getAttribute('column')}px;

    background-color:${e.getAttribute('color')};

    border:1px solid black;

    }`




}
let mytable;



const sub=document.querySelector('.submit');



sub.onclick = function(){

    mytable=document.createElement('my-table');



    mytable.setAttribute('row',document.getElementById('row').value);

    mytable.setAttribute('column',document.getElementById('column').value);

    mytable.setAttribute('color','red');



    document.body.appendChild(mytable);



}