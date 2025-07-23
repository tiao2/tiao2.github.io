(bt=>{
bt.innerHTML="获取数据";
bt.style="position:absolute;top:0%;right:0%;width:100px;height:20px;color:black;border:none";
bt.onclick=function(){
document.body.innerHTML+="<div id='dialog'><h3>输入内容…</h3><input id='psd' readonly/><button id='no'><b>取消</b></button><button id='yes'>确定</button></div>";
const style = document.createElement('style');
style.textContent =atob("aW5wdXQgewogICAgYm9yZGVyOiBub25lOwogICAgaGVpZ2h0OiAyMHB4OwogICAgd2lkdGg6IDgwJTsKfQoKaW5wdXQ6Zm9jdXMgewogICAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsMCwwLDApOwogICAgb3V0bGluZTogbm9uZTsKICAgIGJveC1zaGFkb3c6IDAgMCAwLjFweCByZ2JhKDI1NSwyNTUsMjU1LDApOwp9CgojZGlhbG9nIHsKICAgcG9zaXRpb246IGFic29sdXRlOwogICB0b3A6IDEwJTsKICAgbGVmdDogNDAlOwogICBoZWlnaHQ6IDIwJTsKICAgd2lkdGg6IDIwJTsKICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTsKICAgei1pbmRleDogMTAwOwogICBib3JkZXItcmFkaXVzOiAxMHB4OwogICBjb2xvcjogIzI4ODFFMDsKICAgdGV4dC1hbGlnbjogY2VudGVyOwogICBvdmVyZmxvdzogaGlkZGVuOwp9Cgojbm8gewogICBwb3NpdGlvbjogYWJzb2x1dGU7CiAgIGJvdHRvbTogLTElOwogICBsZWZ0OiAtMSU7CiAgIGJvcmRlcjogMC4xcHggc29saWQgIzU1NTsKICAgYm9yZGVyLXJhZGl1czogMHB4OwogICBoZWlnaHQ6IDMwcHg7CiAgIHdpZHRoOiA1MS4xJTsKICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwLDApOwp9CgojeWVzIHsKICAgcG9zaXRpb246IGFic29sdXRlOwogICBib3R0b206IC0xJTsKICAgcmlnaHQ6IC0xJTsKICAgYm9yZGVyOiAwLjFweCBzb2xpZCAjNTU1OwogICBib3JkZXItcmFkaXVzOiAwcHg7CiAgIGhlaWdodDogMzBweDsKICAgd2lkdGg6IDUxLjElOwogICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDAsMCk7Cn0=");
document.head.appendChild(style);
document.getElementById("psd").addEventListener('click', function(ev){
     navigator.clipboard.readText().then(text => {
      if(text.length!=0){
        document.getElementById("psd").value=text;
      }
    });
   });
document.getElementById("yes").onclick=function(){
    document.getElementsByClassName('cm-line')[2].innerText='set data "'+text.replace("\"","\\\"")+'"';
    setTimeout(()=>{
      document.getElementsByClassName('command-send')[0].click();
    },10);
    document.getElementById("dialog").style.display='none';
};
document.getElementById("no").onclick=function(){
    document.getElementsByClassName('cm-line')[2].innerText='error "用户没有输入数据"';
    setTimeout(()=>{
       document.getElementsByClassName('command-send')[0].click();
    },10);
    document.getElementById("dialog").style.display='none';
};
//TurtleEditor.Call({Type:"Visit",Target:"https://tucdb.my-board.org/con.php?user_id=62637a4cad27f22a08274d89&exp_id=686bd04e644b7b9bacb096a0"});
};
document.body.appendChild(bt);
})(document.createElement('button'));
