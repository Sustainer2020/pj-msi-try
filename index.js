let settingmenu=document.querySelector(".setting-menu");

function settingmenutoggle(){
    settingmenu.classList.toggle("setting-menu-height")   
}

let darktoggle=document.getElementById("dark-btn");

darktoggle.onclick=function (){
    darktoggle.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");

    if(localStorage.getItem("theme")=="light"){
        localStorage.setItem("theme","dark");
    }
    else{
        localStorage.setItem("theme","light");
    }
}

document.addEventListener(click,function(){
    if(settingmenu.classList.contains("setting-menu-height")===true){
        settingmenu.classList.remove("setting-menu-height");
    }
   })



//Code for the website to remember if dark mode was last on for the user.

if(localStorage.getItem("theme")=="light"){
    darktoggle.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme");
}
else if(localStorage.getItem("theme")=="dark"){
    darktoggle.classList.add("dark-btn-on");
    document.body.classList.add("dark-theme");
}
else{
    localStorage.setItem("theme","light");
}