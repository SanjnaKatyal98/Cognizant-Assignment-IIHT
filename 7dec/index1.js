let list1=document.getElementById('list1');
list1.insertAdjacentHTML('beforebegin','<h1>heading</h1>');
list1.insertAdjacentHTML('afterbegin','<li>css</li');
list1.insertAdjacentHTML('beforeend','<li>js</li');
list1.insertAdjacentHTML('afterend','<p>parah</p>');
let li=document.createElement('li');
li.textContent='mysql';