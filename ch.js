//Code Helper
function lr(l){
   var links=[
     "il://console", //自带控制台
     "il://editor", //自带编辑器
     "ol://console", //加载进程控制台
     "ol://jse", //JavaScript 编译器
     "ol://settings", //偏好设置
     "ol://scripts" //脚本
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

function zbgz(){
    Editor.CommandTab.Outputs.ShowWelcome=function(){
        if (Editor.CommandTab.Outputs.Subthread)
                return;
       // The user: How should I use this?
       Editor.CommandTab.Outputs.RenderRequest(Localized.Get("Command center welcome (user)"));
       // Default options
       var Options = [
           {
              Label: "Check out the code tab",
              Style: "enter",
              Callback: () => Editor.CommandTab.Outputs.Tab.Editor.EditorTabs[0].Show()
           },
           { Label: "Run NetLogo code directly", Callback: () => {
                  if (Editor.CommandTab.Outputs.Tab.Galapagos.GetCode() == "")
                        Editor.CommandTab.Outputs.Tab.Galapagos.SetCode("print \"Hello World!\"");
                        Editor.CommandTab.Outputs.Tab.Galapagos.Focus();
                }
            },
            { Label: "Set preferences", 
              Callback: () => lr("ol://settings")
            }
            ];
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
     };
};
st();
