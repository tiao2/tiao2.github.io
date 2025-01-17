document.addEventListener('click', function(event) {
    const clickedElement = event.target;
    const boundingRect = clickedElement.getBoundingClientRect();
    const x = event.clientX - boundingRect.left;
    const y = event.clientY - boundingRect.top;
    if (x >= 0 && x <= boundingRect.width && y >= 0 && y <= boundingRect.height) {void(0);} else {
        document.getElementById("project").style.display='none';
        document.getElementById("map").style.display='none';
        document.getElementById("pb").style.display='none';
    }
});

function pro(){
    document.getElementById("project").style.display='block';
    document.getElementById("map").style.display='none';
    document.getElementById("pb").style.display='none';
}

function mapd(){
   document.getElementById("map").style.display='block';
   document.getElementById("project").style.display='none';
   document.getElementById("pb").style.display='none';
}

function pbl(){
  document.getElementById("pb").style.display='block';
  document.getElementById("project").style.display='none';
  document.getElementById("map").style.display='none';
}

function og(){
  document.getElementById("pb").style.display='none';
  document.getElementById("project").style.display='none';
  document.getElementById("map").style.display='none';
  location.href="https://github.com/tiao2";
}
