class Book{
    constructor(title,author,isbn){
        this.title=title;
        this.author=author;
        this.isbn=isbn;
    }
}

class UI{
    //book which is to be added to the list is the input parameter , book
        addBookToList(book){
          //accessing the reference of element with id book-list
            const list = document.getElementById("book-list");
            const row =document.createElement('tr');
          //row will have 4 td - title author isbn delete icon x
            row.innerHTML=`<td>${book.title}</td>
                           <td>${book.author}</td>
                           <td>${book.isbn}</td>
                           <td><a href="#" class='delete'>X</a></td>`;
            //once the row is created and configured
            //next step 
            //add row to the table
            list.appendChild(row);
        }
         //after adding a book , you want to clear the form fields
          clearFormFields(){
           document.getElementById('title').value='';
           document.getElementById('author').value='';
           document.getElementById('isbn').value='';
          }
         
          //show the alert
          showAlert(message, className){
            //create the alert box
            //create the div
           const div =  document.createElement('div');
           div.className = `alert ${className}`;
           div.appendChild(document.createTextNode(message));
           //we are accesing the div with container class and storing in const container
           const constainer = document.querySelector('.container');
           //we are accessing the form from the dom and storing it in const form
           const form =  document.querySelector('#book-form');
           //adding the alert div in the container div
           constainer.insertBefore(div,form);
         //this will remove the  div with alert class from the container after 2 seconds of display
           setTimeout(function(){
            document.querySelector('.alert').remove();
           },3000);
          }
          //delete book
          deleteBook(target){
             if(target.className === 'delete')
               target.parentElement.parentElement.remove();
          }    
    }

    //Local Storage class to keep data after refreshing the page
    class Store{
      //getBooks -- what do you mean by static method 
        static getBooks(){
            let books;
            if(localStorage.getItem('books')=== null){
                books=[];
            }
            else{
                books=JSON.parse(localStorage.getItem('books'));
            }
            return books;
           }

          //displayBooks from Store
           static displayBooks(){
            //books arr
           const books = Store.getBooks();
           //iterating thru books array using forEach 
           books.forEach((book)=>{
            const ui=new UI;
            ui.addBookToList(book);
           });
           }
          //add Book in Store
           static addBook(book){
            const books = Store.getBooks();
            books.push(book);
            localStorage.setItem('books',JSON.stringify(books));
           }

           //Store --remove Book
           //we are defining removeBook
           static removeBook(isbn){
            //calling getBooks --will return  -books from localstorage
            const books=Store.getBooks();
            //iterating thru the books
            books.forEach((book,index)=>{
                if(book.isbn===isbn){
                    books.splice(index,1)
                }
            });
            localStorage.setItem('books',JSON.stringify(books));
           }
    }
    
    //DOM Load Event
    document.addEventListener('DOMContentLoaded',Store.displayBooks);
    //Event listener for form submit
    document.getElementById('book-form').addEventListener('submit',
    function(e){
        const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn=document.getElementById('isbn').value;
       
        //creating a new Book object from the form values
        const book=new Book(title,author,isbn);
        //call the method to add Book 
        Store.addBook(book);
        const ui=new UI();
        if(title === ""|| author === ""|| isbn === ""){
            ui.showAlert('Please populate fields','error');
        }else{
        ui.addBookToList(book);
        ui.showAlert('Your book has been added','success');
        ui.clearFormFields();
        }
       e.preventDefault();
    });

    //Event listener for delete
    document.getElementById('book-list').addEventListener
    ('click',function(e){
     const ui =new UI();
    //delete book when x link is clicked
     ui.deleteBook(e.target);
     //remove it from from local storage
     //it will give me isbn of the book
     Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
     ui.showAlert('Your book has been removed','success');
     e.preventDefault();
    });