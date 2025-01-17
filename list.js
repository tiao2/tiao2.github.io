var lst=[{
   "title": "Projects",
   "showmore": {
     "sm": true,
     "id": "project",
     "blockset" : {
        "fieldset": {
           "set": true,
           "legend": "Public projects"
         },
         "lists": [{
            "name":"the organization of Physics Lab",
            "link":"./Physics-Lab-Organize/"
             },{
            "name":"Webppt creator",
            "link":"./webppt-creator/"
             },{
             "name":"Little plug-in",
             "link":"./little-plug-in/"
             },{
             "name":"Javascript Runner",
             "link":"./javascript-runner/"
          }]
      }
    }
  },{
 "title": "My active places",
   "showmore": {
     "sm": true,
     "id": "map",
     "blockset" : {
        "fieldset": {
           "set": false
         },
         "lists": [{
            "name":"<img height='15px' src='https://www.turtlesim.com/products/turtle-universe/content/image/icon.png'/>Turtle Universe",
            "link":"https://turtlesim.com/tuc/"
             },{
            "name":"<img height='15px' src='https://assets.bgithub.xyz/favicons/favicon.png'/>GitHub",
            "link":"https://github.com"
             }]
      }
    }
  },{
   "title": "Public library",
   "showmore": {
     "sm": true,
     "id": "pb",
     "blockset" : {
        "fieldset": {
           "set": true,
           "legend": "Public javascript library"
         },
         "lists": [{
            "name":"Color search",
            "link":"./csl.html?l=cs"
             },{
            "name":"File Import",
            "link": "./csl.html?l=fl"
            }]
      }
    }
  },{
 "title": "GitHub",
 "showmore": {
     "sm": false
     }
  }];

for(var l=0; l<lst.length; l++){
  var a=lst[l],b=a.title;
  var de=document.createElement("button");
  de.className='hr';
  de.addEventListener("click",function(e){pg(e.target.innerText);});
  if(a.showmore.sm===true){
    b+='<svg opacity="0.5" aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true"><path d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z"></path></svg>';
   if(a.showmore.blockset.fieldset.set===true){
             var def=document.createElement("fieldset");
             def.innerHTML='<legend>'+a.showmore.blockset.fieldset.legend+'</legend>';
             for(var dlx=0; dlx<a.showmore.blockset.lists.length; dlx++){
                var dll=a.showmore.blockset.lists[dlx];
                def.innerHTML+='<dt><a href="'+dll.link+'">'+dll.name+'</a></dt>';
             };
             document.getElementById(a.showmore.id).appendChild(def);
          } else {
             var defs=document.createElement("dl");
             for(var dlxs=0; dlxs<a.showmore.blockset.lists.length; dlxs++){
                var dlls=a.showmore.blockset.lists[dlxs];
                defs.innerHTML+='<dt><a href="'+dlls.link+'">'+dlls.name+'</a></dt>';
             };
             document.getElementById(a.showmore.id).appendChild(defs);
         };
  };
  de.innerHTML=b;
  document.getElementById('fh').appendChild(de);
}

function pg(t){
  if(t=="Projects"){pro();}else if(t=="My active places"){mapd();}else if(t=="Public library"){pbl();}else if(t=="GitHub"){og();};
 };
