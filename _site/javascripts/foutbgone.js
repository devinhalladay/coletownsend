var fbg=new function(){var b=this;var f=20;var a=3000;var c=100;this.rfu=null;var e=null;var d=null;this.hideFOUT=null;this.isFontFaceSupported=null;this.onFontFaceFailed=null;e=function(){};d=function(g){if(window.addEventListener){addEventListener("load",g,false)}else{attachEvent("onload",g)}};this.hideFOUT=function(l,B){if(navigator.appName!="Microsoft Internet Explorer"&&!/Firefox\/3/.test(navigator.userAgent)){return}B=B||c;var h=[];var m=[];var y=[];var C=true;for(var z=0;z<document.styleSheets.length;z++){var A=document.styleSheets[z];if(!A.cssRules){C=false;var p=A.cssText;p.replace(/@font-face\s*\{([^\}]+)\}/ig,function(E,j){var i=E.replace(/([\s\S]*)(font-family:\s*['"]?)([-_0-9a-zA-Z]+)([\s\S]*)/,"$3");h.push(i);return E})}var n=A.cssRules||A.rules;for(var x=0;x<n.length;x++){var u=n[x];if(C&&u instanceof CSSFontFaceRule){var w=u.cssText.replace(/([\s\S]*)(font-family:\s*['"]?)([-_0-9a-zA-Z]+)([\s\S]*)/,"$3");h.push(w)}else{m.push(u)}}}for(var z=0;z<h.length;z++){for(var x=0;x<m.length;x++){var v=C?m[x].cssText:m[x].style.cssText;if(v.indexOf(h[z])!=-1){y.push(m[x].selectorText)}}}var s=document.body||document.documentElement;var q=document.createElement("span");q.setAttribute("style","font:99px _,serif;position:absolute;visibility:hidden");q.style.visibility="hidden";q.innerHTML="-------";q.id="fonttest";s.appendChild(q);var g=document.createElement("style");document.getElementsByTagName("head")[0].appendChild(g);var o="";for(var z=0;z<y.length;z++){o+=(y[z]+(z<(y.length-1)?", ":" "))}o+="{visibility:hidden}";if(g.styleSheet){g.styleSheet.cssText=o}else{g.textContent=o}q.style.font='99px "'+h[h.length-1]+'",_,serif';var r=q.offsetWidth;var D="";var k=f;var t=function(){var i=setInterval(function(){if(!r&&document.body){s.removeChild(q);document.body.appendChild(q);r=q.offsetWidth}var j=q.offsetWidth;D+=(j+"   ");a-=k;if(r!=j||a<=0){clearInterval(i);setTimeout(function(){g.parentNode.removeChild(g)},B);if(a<=0&&b.onFontFaceFailed){b.onFontFaceFailed()}q.parentNode.removeChild(q)}},k)};if(l=="asap"){t()}else{if(l=="onload"){d(t)}else{t()}}if(window.TESTCAPTURE){d(function(){document.getElementById("hf_monitor_div").innerHTML=D;setTimeout(function(){document.getElementById("hf_monitor_div").innerHTML+="<br>Final: "+q.offsetWidth},1000)})}};this.isFontFaceSupported=function(){var j,l=document,i=l.head||l.getElementsByTagName("head")[0]||docElement,k=l.createElement("style"),g=l.implementation||{hasFeature:function(){return false}};k.type="text/css";i.insertBefore(k,i.firstChild);j=k.sheet||k.styleSheet;var h=g.hasFeature("CSS2","")?function(o){if(!(j&&o)){return false}var m=false;try{j.insertRule(o,0);m=!(/unknown/i).test(j.cssRules[0].cssText);j.deleteRule(j.cssRules.length-1)}catch(n){}return m}:function(m){if(!(j&&m)){return false}j.cssText=m;return j.cssText.length!==0&&!(/unknown/i).test(j.cssText)&&j.cssText.replace(/\r+|\n+/g,"").indexOf(m.split(" ")[0])===0};return h('@font-face { font-family: "font"; src: "font.ttf"; }')};e()}();