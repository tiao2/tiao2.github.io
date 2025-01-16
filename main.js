document.addEventListener('click', function(event) {
    const clickedElement = event.target;
    const boundingRect = clickedElement.getBoundingClientRect();
    const x = event.clientX - boundingRect.left;
    const y = event.clientY - boundingRect.top;
    if (x >= 0 && x <= boundingRect.width && y >= 0 && y <= boundingRect.height) {void(0);} else {
        document.getElementById("project").style.display='none';
        document.getElementById("map").style.display='none';
    }
});

function pro(){
    document.getElementById("project").style.display='block';
    document.getElementById("map").style.display='none';
}

function mapd(){
   document.getElementById("map").style.display='block';
   document.getElementById("project").style.display='none';
}
