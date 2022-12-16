function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    console.log(ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    let item = document.getElementById(data);
    item.style.backgroundColor = "green";
    item.style.margin = "2px";
    ev.target.appendChild(item);
  }