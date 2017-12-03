var list = document.getElementById('list');

var add =  document.getElementById('addElem');


add.addEventListener('click', function() {
	
	var element = document.createElement('li');
	element.innerHTML = 'item';
	var dlugosc = document.getElementsByTagName('li').length;
	console.log(dlugosc);
	list.getElementsByTagName("li");
	element.innerHTML = 'item ' + dlugosc;
	list.appendChild(element);
	
});


