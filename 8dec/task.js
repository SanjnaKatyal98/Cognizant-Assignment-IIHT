class Task{
    constructor(task){
        this.task=task;
    }
}


class UI{


     addTaskToList(task){
        let list=document.getElementById('search-list');
        let li=document.createElement('li');
        li.innerHTML=task;

        list.append(li);



     }

     clearFormField(){
        document.getElementById('task').value="";
     }


     

     showAlert(message,className){
        const div=document.createElement('div');
        div.className = `alert ${className}`;

        div.appendChild(document.createTextNode(message));

        const container=document.querySelector('.container');

        const form = document.querySelector('.row');

    // adding the alert in the container div
        container.insertBefore(div,form);


        setTimeout(function(){
            document.querySelector('.alert').remove();

        },2000);

    }


    clearTasks(){
        document.getElementById('result').innerHTML="";
    }








}


class Store{


    static getTasks(){
        let tasks;

        if(localStorage.getItem('tasks')==null){
            tasks=[];
        }else{
            tasks=JSON.parse(localStorage.getItem('tasks'));
        }

        return tasks;
    }


    static displayTasks(){
        const tasks=Store.getTasks();

        

        tasks.forEach((task)=>{
            const ui=new UI();
            ui.addTaskToList(task);
        })
        


    }

    static addTask(task){
        const tasks=Store.getTasks();
        tasks.push(task);
        localStorage.setItem('tasks',JSON.stringify(tasks));
    }


    static clearTasks(){

        localStorage.setItem('tasks',JSON.stringify([]));

    }

}

// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
    document.addEventListener('DOMContentLoaded',Store.displayTasks());
   
    //add your event listeners
}
document.getElementById('task-form').addEventListener('submit',function(e){

    let task=document.getElementById('task').value;

    const tas=new Task(task);

    Store.addTask(tas);

    const ui=new UI();

    if(task===""){
        ui.showAlert("please fill the input","error")

    }else{
        ui.addTaskToList(task);
        ui.showAlert("Added","success");
        ui.clearFormField();
    }
    e.preventDefault();

});

let cli=document.getElementById("clear");
cli.addEventListener('click',fn,true);
function fn(){
    Store.clearTasks();
    const ui=new UI();
    ui.clearTasks();
}








var input = document.querySelector('#search');
var items = document.querySelector('.search-list').getElementsByTagName('li');

input.addEventListener('keyup', function(ev) {
  var text = ev.target.value;
  var pat = new RegExp(text, 'i');
  for (var i=0; i < items.length; i++) {
    var item = items[i];
    if (pat.test(item.innerText)) {
      item.classList.remove("hidden");
    }
    else {console.log(item);
      item.classList.add("hidden");
    }
  }
});










// Get tasks from local storage
function getTasks() {
    //code to getTasks
}

// Add task
function addTask(e) {
//code to add task goes here

}

// Store task in local storage
function storeTaskInLocalStorage(task) {
   //code to store in localstorage
}

// Remove task
function removeTask(e) {
    //code to remove task from ui
}

// Remove task from local storage
function removeTaskFromLocalStorage(taskItem) {
   //remove from local storage
}

// Clear all tasks
function clearTasks(e) {
    //clear tasks from ui
}

// Clear tasks from local storage
function clearTasksFromLocalStorage() {
   //from local storage
}

// Filter tasks
function filterTasks(e) {
//code to filter tasks

}