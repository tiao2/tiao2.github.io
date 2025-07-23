(bt=>{
bt.innerHTML="获取数据";
bt.style="position:absolute;top:0%;right:0%;width:100px;height:20px;color:black;border:none";
bt.onclick=function(){
// 创建新元素
const dialog = document.createElement('div');
dialog.id = 'dialog-input-data';
dialog.innerHTML = `
  <h3>输入内容…</h3>
  <input id="psd" readonly/>
  <button id="no"><b>取消</b></button>
  <button id="yes">确定</button>
`;

// 追加到 body 末尾（不影响现有元素）
document.body.appendChild(dialog);
const style = document.createElement('style');
style.textContent =atob("aW5wdXQgewogICAgYm9yZGVyOiBub25lOwogICAgaGVpZ2h0OiAyMHB4OwogICAgd2lkdGg6IDgwJTsKfQoKaW5wdXQ6Zm9jdXMgewogICAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsMCwwLDApOwogICAgb3V0bGluZTogbm9uZTsKICAgIGJveC1zaGFkb3c6IDAgMCAwLjFweCByZ2JhKDI1NSwyNTUsMjU1LDApOwp9CgojZGlhbG9nLWlucHV0LWRhdGEgewogICBwb3NpdGlvbjogYWJzb2x1dGU7CiAgIHRvcDogMTAlOwogICBsZWZ0OiA0MCU7CiAgIGhlaWdodDogMjAlOwogICB3aWR0aDogMjAlOwogICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlOwogICB6LWluZGV4OiAxMDA7CiAgIGJvcmRlci1yYWRpdXM6IDEwcHg7CiAgIGNvbG9yOiAjMjg4MUUwOwogICB0ZXh0LWFsaWduOiBjZW50ZXI7CiAgIG92ZXJmbG93OiBoaWRkZW47Cn0KCiNubyB7CiAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsKICAgYm90dG9tOiAtMSU7CiAgIGxlZnQ6IC0xJTsKICAgYm9yZGVyOiAwLjFweCBzb2xpZCAjNTU1OwogICBib3JkZXItcmFkaXVzOiAwcHg7CiAgIGhlaWdodDogMzBweDsKICAgd2lkdGg6IDUxLjElOwogICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDAsMCk7Cn0KCiN5ZXMgewogICBwb3NpdGlvbjogYWJzb2x1dGU7CiAgIGJvdHRvbTogLTElOwogICByaWdodDogLTElOwogICBib3JkZXI6IDAuMXB4IHNvbGlkICM1NTU7CiAgIGJvcmRlci1yYWRpdXM6IDBweDsKICAgaGVpZ2h0OiAzMHB4OwogICB3aWR0aDogNTEuMSU7CiAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCwwKTsKfQ==");
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
