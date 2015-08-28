"use strict";
var cookieAlertClose;
window.onload = function(){
    if((function(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for(var i=0; i<ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1);
            if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
        }
        return undefined;
    })("cookies_accepted") === undefined){
		var cookie_box_duration = 800;
		var cookie_box = document.createElement("div");
		cookie_box.setAttribute("style","position:fixed;bottom:0px;left:0px;width:100vw;height:40px;transition:bottom "+cookie_box_duration+"ms linear;box-shadow: 0px 0px 5px #000;background: #fff;text-align: center;line-height: 40px;");
		cookie_box.innerHTML = "<p style=\"margin:0px;padding:0px;\">This site stores cookie files in your browser.<a href=\"javascript:cookieAlertClose();\">Understood.</a></p>";
		document.body.appendChild(cookie_box);
		cookieAlertClose = function(){//this one has to be accessible from link
			document.cookie="cookies_accepted=1; expires="+new Date(new Date().getTime() + (365*24*60*60*1000)).toUTCString()+"; path=/";
			if(typeof jQuery === "function"){
				$(cookie_box).fadeOut(cookie_box_duration,function(){$(this).remove();});
			}else{
				cookie_box.style.bottom = -parseInt(cookie_box.style.height)-20+"px";
				setTimeout(function(){cookie_box.remove();},cookie_box_duration);
			}
		};
	}
};