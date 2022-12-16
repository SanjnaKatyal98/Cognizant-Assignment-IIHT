customElements.define("my-temp",

    class extends HTMLElement{

        constructor(){

            super();

            let temp1=document.getElementById("temp1");

            let content=temp1.content;

            let h1=document.getElementById("h1");

            let temp2=document.getElementById("temp2");

            let content2=temp2.content;



            let temp3=document.getElementById("temp3");

            let content3=temp3.content;

        



            const shadowRoot = this.attachShadow({ mode: "open" });

            h1.before(content);

            h1.after(content2);

           

            document.body.appendChild(content3);



        }

    }

);