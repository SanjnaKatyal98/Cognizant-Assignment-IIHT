class MyElement extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        let span = document.createElement('span');
        let style=this.getAttribute('style');
        let message= this.getAttribute('message');
        span.style=style;
        span.innerText =message;
        this.shadowRoot.appendChild(span);
        span.style="";
    }
}
customElements.define('my-element',MyElement);