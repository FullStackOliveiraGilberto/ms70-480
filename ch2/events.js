function onLoadHandlerInline(){
	document.getElementById('div1').innerHTML = 'text via inline handler';
}
function onLoadHandlerPrg(){
	$('#div2').html('text via js handler programmatically');
}
function windowEventHandler(e){
	// var evnt = window.event;
	//note that Firefox does not support window.event, so to be cross-browser safe use:
	var evnt = e || window.event
	console.log(evnt);
}
function addListeners(){
	window.addEventListener('load', onloadHandler, false);
	window.addEventListener('load', onloadHandler2, false);
	window.addEventListener('load', onloadHandler3, false);


}
function onloadHandler(){
	console.log('hello event 1');
	window.removeEventListener('load', onloadHandler2);
}
function onloadHandler2(){
	console.log('hello event 2');
}
function onloadHandler3(){
	console.log('hello event 3');
}
function addAnchorClickHandler(){
	 var a = document.getElementById('aLink');
	a.onclick = overrideAnchorClick;
	function overrideAnchorClick(){
		alert('Sorry, no nav to Google for You!');
		return false;
	}
}
function handleEventBubbling(){
	document.getElementById('outer').addEventListener('click', outerDivClick, false);
	document.getElementById('middle').addEventListener('click', middleDivClick, false);
	document.getElementById('inner').addEventListener('click', innerDivClick, false);
	document.getElementById("clearButton").addEventListener("click", clearList);
}
function outerDivClick() {
   appendText("outer Div Clicked");
}

function middleDivClick() {
   appendText("middle Div Clicked");
}

function innerDivClick(e) {
   appendText("inner Div Clicked");
   //window.event.cancelBubble = true;

   //e.cancelBubble = true;

}

function appendText(s) {
   var li = document.createElement("li");
   li.innerText = s;
   document.getElementById("eventOrder").appendChild(li);
}

function clearList() {
   var ol = document.createElement("ol");
   ol.id = "eventOrder";
   document.getElementById("bod").replaceChild(ol,document.getElementById("eventOrder"));           
}

function addChangeListener(){
	document.getElementById('aRange').addEventListener('change', rangeChangeEvent);


}
function rangeChangeEvent(){
	document.getElementById('rangeValue').innerText = this.value;
}
function addChangeListener2(){
	document.getElementById('aText').addEventListener('change', rangeChangeEvent2);

}
function rangeChangeEvent2(){
	document.getElementById('rangeValue').innerText = this.value;
}
function addBlurListener(){
	var firstName = document.getElementById('firstNameText');
	firstName.focus();
	firstName.addEventListener('blur', function(){
		var violation = document.getElementById('ruleViolation');
		if(this.value.length < 5){
			violation.innerHTML = 'First Name is required to be 5 letters.';
			violation.style.color = 'red';
			this.focus();
		}
		else{
			violation.innerHTML = '';
		}
	});
}
function addKeydownListener(){
	var firstName = document.getElementById('firstNameText2');
	firstName.focus();
	firstName.addEventListener('keydown', function(e){
		var keys = document.getElementById('keys');
		keys.innerHTML = e.keyCode;
	});
}
function addClickHandler(){
	document.getElementById('yellowBox').addEventListener('click', yellowBoxClick);
}
function yellowBoxClick(evt){
	var output = '';
	output = 'Client X: ' + evt.clientX + ' Client Y: ' + evt.clientY;
	output += '<br/>' + 'Offset X: ' + evt.offsetX + ' Offset Y: ' + evt.offsetY;
	output += '<br/>' + 'Screen X: ' + evt.screenX + ' Screen Y: ' + evt.screenY;
	document.getElementById('output').innerHTML = output;
}
function addClassOnMouseEnter(){
	document.getElementById("redBox").addEventListener("mouseenter", redBoxEnter);
    document.getElementById("redBox").addEventListener("mouseleave", redBoxLeave);
}
function redBoxEnter() {
            this.classList.add("scale");
        }

function redBoxLeave() {
    this.classList.remove("scale");
}
//drag and drop
function addDragAndDropStuff(){
 	var b1 = document.getElementById("bucket1");
    var b2 = document.getElementById("bucket2");
    var b3 = document.getElementById("bucket3");
    var chip = document.getElementById("chip");
   
    chip.addEventListener("dragstart", function (evt) {
    	evt.dataTransfer.setData("Text", this.id); 
    });

    b1.addEventListener("dragenter", function (evt) { b1.classList.add("over"); evt.returnValue = false; });
	b1.addEventListener("dragleave", function (evt) { b1.classList.remove("over"); });
	b1.addEventListener("dragover", function (evt) { evt.returnValue = false; });
	b1.addEventListener("drop", function (evt) {
	    evt.returnValue = false;
	    var data = event.dataTransfer.getData("Text");
	    var d = document.getElementById(data);
	    d.classList.remove("begin");
	    d.classList.add("dropped");
	    this.appendChild(d);                
	});

	b2.addEventListener("dragenter", function (evt) { b2.classList.add("over"); evt.returnValue = false; });
    b2.addEventListener("dragleave", function (evt) { b2.classList.remove("over"); });
    b2.addEventListener("dragover", function (evt) { evt.returnValue = false; });
    b2.addEventListener("drop", function (evt) {
        evt.returnValue = false;
        var data = event.dataTransfer.getData("Text");
        var d = document.getElementById(data);
        d.classList.remove("begin");
        d.classList.add("dropped");
        this.appendChild(d);
    });

    b3.addEventListener("dragenter", function (evt) { b3.classList.add("over"); evt.returnValue = false; });
    b3.addEventListener("dragleave", function (evt) { b3.classList.remove("over"); });
    b3.addEventListener("dragover", function (evt) {evt.returnValue = false; });
    b3.addEventListener("drop", function (evt) {
        evt.returnValue = false;
        var data = event.dataTransfer.getData("Text");
        var d = document.getElementById(data);
        d.classList.remove("begin");
        d.classList.add("dropped");
        this.appendChild(d);
    });            
}