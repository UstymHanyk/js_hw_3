/* YOUR CODE HERE! */
const boxes = document.getElementsByClassName('box')[0];
eventListenerAdder(boxes);

function clickHandler(event) {
 	if(event.shiftKey){  
 		// changes box size on shitf+ left click
 		event.currentTarget.classList.toggle('box-large');
 	}
}


let boxCounter = 1;
const boxContainer =document.getElementsByClassName('box-container')[0];

function doubleClickHandler(event) {
	if(event.altKey){
		// removes box on alt + double left click if it there are other boxes
		if(document.getElementsByClassName('box').length>1){
			event.currentTarget.remove();
		}
	}else{
		// adds new box on double left click
		const box = document.createElement('div');
		boxCounter+=1;
		const text = document.createTextNode(boxCounter);
		box.classList.add('box')
		box.style.top = `${parseInt(event.currentTarget.style.top.slice(0,-2)) +150}px`;
		box.style.left = `${parseInt(event.currentTarget.style.left.slice(0,-2)) +150}px`;
		box.appendChild(text);
		eventListenerAdder(box);
		boxContainer.appendChild(box)
	}

}


function rightClickHandler(event){
	// randomize bg color
  	event.preventDefault()
  	event.currentTarget.style.background=`rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
}

function eventListenerAdder(element){
	element.addEventListener('click', clickHandler);
	element.addEventListener('dblclick', doubleClickHandler);
	element.addEventListener('mousedown', mouseDownHandler);
	element.addEventListener('mouseup', mouseUpHandler);
	element.addEventListener('contextmenu', rightClickHandler);

}
function mouseDownHandler(event){
	// enable mouse movement tracking
	event.currentTarget.addEventListener('mousemove', mouseMoveHandler);
}

function mouseMoveHandler(event) {
	// moves box with the mouse position on mousedown event
    event.currentTarget.style.left=`${event.clientX-75}px`;
	event.currentTarget.style.top=`${event.clientY-75}px`;
}

function mouseUpHandler(event){
	// disables box movement on mouseup event
    event.currentTarget.removeEventListener('mousemove', mouseMoveHandler);
}
