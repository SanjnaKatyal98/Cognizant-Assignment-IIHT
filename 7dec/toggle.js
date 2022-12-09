function addRemoveClass() {
    let element = document.getElementById("mssg");
    if (element.classList.contains("mssg")){
      element.classList.remove("mssg");
    }
    else {
      element.classList.add("mssg");
    }
  }