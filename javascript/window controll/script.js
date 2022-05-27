// Make the DIV element draggable:
dragElement(document.getElementById("draggable"));
// 문서내에 id값이 draggable인 요소들의 함수 
function dragElement(elmnt) {

  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  document.getElementById(elmnt.id + "-header").onmousedown = dragMouseDown;
  // 함수 dragMouseDown은 문서내에 id값에 header가 들어간 요소를 누르는 행위이다. 
	document.getElementById(elmnt.id + "-resize").onmousedown = resizeMouseDown;
  // 함수 resizeMouseDown은 문서내에 id값에 resize가 들어간 요소를 누르는 행위이다.




  function dragMouseDown(e) {
    e = e || window.event;
    //
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    // 대상을 누르고있을때의 마우스 좌표를 pos3 pos4 변수에 대입
    
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }
	
	function resizeMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = 0;
    pos4 = 0;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementResize;
  }
	
	function elementResize(e) {
		e = e || window.event;
    e.preventDefault();
		var content = document.getElementById("draggable");
		var width = content.offsetWidth;
		var height = content.offsetHeight;
    
		pos1 = (e.clientX - width) - content.offsetLeft;
    pos2 = (e.clientY - height) - content.offsetTop;
		
		content.style.width = width + pos1 + 'px';
		content.style.height = height + pos2 + 'px';
	}

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}