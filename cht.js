//Code Helper
function lr(l){
   var links=[
     "ol://console", //加载进程控制台
     "ol://jse", //JavaScript 编译器
     "ol://settings", //偏好设置
  ];
  var com=[];
  if(links.includes(l)){
(m=>{m.id='browser';m.style='position:absolute;top:0%;left:0%;z-index:100;width:100%;height:100%;background-color:whitesmoke',document.body.appendChild(m)})(document.createElement('div'));
(n=>{n.innerHTML='<strong>内置浏览器</strong>';n.id='browser-head';n.style='position:absolute;top:0%;left:0%;width:100.5%;height:5%;background-color:whitesmoke;z-index:101',document.getElementById('browser').appendChild(n)})(document.createElement('div'));
(n=>{n.value='https://tiao2.github.io/';n.id='browser-input';n.style='position:absolute;top:5%;left:0%;width:100.5%;height:5%;background-color:whitesmoke;z-index:100.5;border:1px solid black;border-radius:0px;';n.type='search';document.getElementById('browser').appendChild(n)})(document.createElement('input'));
(n=>{n.innerHTML='<div class="tag" id="tag-0"><code class="tn" id="tn-0">tiao2.github.io</code><button class="dt" id="dt-0">&times;</button></div>';n.id='browser-tags';n.style='position:absolute;top:10%;left:0%;width:100.5%;height:3%;background-color:whitesmoke;z-index:101',document.getElementById('browser').appendChild(n)})(document.createElement('div'));
(n=>{n.src='https://tiao2.github.io/';n.id='browser-main';n.style='position:absolute;top:13%;left:0%;width:100%;height:87%;background-color:white;z-index:101',document.getElementById('browser').appendChild(n)})(document.createElement('iframe'));
(n=>{n.innerHTML='&times;';n.onclick=()=>document.getElementById('browser').remove();n.style='position:absolute;top:10%;left:95%;width:5%;height:50%;background-color:whitesmoke;border:none;z-index:102',document.getElementById('browser-head').appendChild(n)})(document.createElement('div'));
var style = document.createElement('style');
style.textContent =atob("LnRhZyB7CiAgaGVpZ2h0OiAxMDAlOwogIGxpbmUtaGVpZ2h0OiAxMDAlOwogIHdpZHRoOiA1MCU7CiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7CiAgdGV4dC1hbGlnbjogY2VudGVyOwp9Ci5kdCB7CiAgcG9zaXRpb246IHJlbGF0aXZlOwogIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOwogIGJvcmRlcjogbm9uZTsKICB0b3A6IDEwJTsKICBsZWZ0OiAzMCU7CiAgei1pbmRleDogMTA1Owp9Cg==");
document.head.appendChild(style);
document.getElementById('browser-input').addEventListener('keydown', function(e){
   if(e.key==='Enter'){
    document.getElementById('browser-main').src=document.getElementById('browser-input').value;
   };
});
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
    Editor.CommandTab.Outputs.ShowWelcome = function() {
        if (Editor.CommandTab.Outputs.Subthread)
                return;
            // The user: How should I use this?
            Editor.CommandTab.Outputs.RenderRequest(Localized.Get("Command center welcome (user)"));
            // Default options
            var Options = [
                {
                    Label: "Check out the code tab",
                    Style: "enter",
                    Callback: () => Editor.CommandTab.Outputs.Tab.Editor.EditorTabs[0].Show(),
                },
                { Label: "Run NetLogo code directly", Callback: () => {
                        if (Editor.CommandTab.Outputs.Tab.Galapagos.GetCode() == "")
                            Editor.CommandTab.Outputs.Tab.Galapagos.SetCode("print \"Hello World!\"");
                        Editor.CommandTab.Outputs.Tab.Galapagos.Focus();
                    }
                },{ Label: "Set preferences",
                     Callback: ()=> lr("ol://settings")
                }
            ];
            // AI response
            if (ChatManager.Available) {
                Editor.CommandTab.Outputs.RenderResponses([
                    {
                        Content: Localized.Get("Command center welcome (assistant)"),
                        Type: ChatResponseType.Text
                    }
                ], false);
                Options.push({ Label: "Talk to the computer in natural languages", Callback: () => {
                        if (Editor.CommandTab.Outputs.Tab.Galapagos.GetCode() == "")
                            Editor.CommandTab.Outputs.Tab.Galapagos.SetCode("create some turtles around");
                        Editor.CommandTab.Outputs.Tab.Galapagos.Focus();
                    } });
                Options.push({ Label: "Ask questions about NetLogo", Callback: () => {
                        if (Editor.CommandTab.Outputs.Tab.Galapagos.GetCode() == "")
                           Editor.CommandTab.Outputs.Tab.Galapagos.SetCode("what's different between turtles and patches?");
                        Editor.CommandTab.Outputs.Tab.Galapagos.Focus();
                    } });
            }
            else {
                Editor.CommandTab.Outputs.RenderResponses([
                    {
                        Content: Localized.Get("Command center welcome (command)"),
                        Type: ChatResponseType.Text
                    }
                ], false);
                Options.push({ Label: "Look for the documentation", Callback: () => {
                        Editor.CommandTab.Outputs.Tab.ExecuteCommand("observer", "help", false);
                    } });
            }
            Editor.CommandTab.Outputs.RenderOptions(Options);
            Editor.CommandTab.Outputs.RenderResponses([], true);
            Editor.CommandTab.Outputs.Tab.RefreshPlaceholder();
        }
};
st();
