//Code Helper
function lr(l){
   var links=[
     "ol://console", //加载进程控制台
     "ol://jse", //JavaScript 编译器
     "ol://settings", //偏好设置
  ];
  var com=[];
  if(links.search(l)>=0){
    
  } else {
    throw new Error("Unknown Link");
  };
}

function st(){
   var bl=document.createElement("div");
   bl.style="position: absolute; top: 40%; left: 20%; height: 30%; width: 60%; background-color: skyblue;";
   bl.id='0000';
   document.body.appendChild(bl);
   //边框
   var bl1=document.createElement("h1");
   bl1.style="color: white; font-size: 50px;";
   bl1.innerHTML='<center>Code Helper</center>';
   bl.appendChild(bl1);
   //文字
   var bl2=document.createElement("h1");
   bl2.style="color: white; font-size: 30px;";
   bl2.innerHTML='<center>正在加载中…</center>';
   bl.appendChild(bl2);
   //加载标识
   var bl3=document.createElement("a");
   bl3.style="color: white;";
   bl3.href='javascript:lr("ol://console")'
   bl3.innerHTML='<center>Console</center>';
   bl.appendChild(bl3);
   setTimeout(()=>{bl.style.display='none';}, 2000);
   zbgz();
};

function edt(){
   return((Editor.CommandTab.Visible)?'Console':'Editor');
}

function zbgz() {
    setInterval(()=>{
      if(document.getElementsByClassName('enter').length<2){
        (m=>{m.className='enter';m.innerHTML='<a href="javascript:void(0)">设置您的 <strong>偏好</strong></a>';document.getElementsByClassName('options')[0].appendChild(m);})(document.createElement('li'));
        document.getElementsByClassName('enter')[1].addEventListener('click',function(){
             lr("ol://settings");
         });
     };
   },10);
}
st();
