(function(a){a.bigfoot=function(f){var c;var t=a.extend({actionOriginalFN:"hide",activateCallback:function(){},activateOnHover:false,allowMultipleFN:false,appendPopoversTo:undefined,breakpoints:{},deleteOnUnhover:false,hoverDelay:250,numberResetSelector:undefined,popoverDeleteDelay:300,popoverCreateDelay:100,positionNextToBlock:true,positionContent:true,preventPageScroll:true,scope:false,useFootnoteOnlyOnce:true,contentMarkup:'<aside class="footnote-content bottom"data-footnote-number="{{FOOTNOTENUM}}" data-footnote-identifier="{{FOOTNOTEID}}" alt="Footnote {{FOOTNOTENUM}}"><div class="footnote-main-wrapper"><div class="footnote-content-wrapper">{{FOOTNOTECONTENT}}</div></div><div class="bigfoot-tooltip"></div></aside>',buttonMarkup:'<a href="#" class="footnote-button" id="{{SUP:data-footnote-backlink-ref}}" data-footnote-number="{{FOOTNOTENUM}}" data-footnote-identifier="{{FOOTNOTEID}}" alt="See Footnote {{FOOTNOTENUM}}" rel="footnote"data-footnote-content="{{FOOTNOTECONTENT}}"><span class="footnote-circle" data-footnote-number="{{FOOTNOTENUM}}"></span><span class="footnote-circle"></span><span class="footnote-circle"></span></a>'},f);var s=function(){var L;L=!t.scope?'a[href*="#"]':t.scope+' a[href*="#"]';var M=a(L).filter(function(){var T=a(this);var U=T.attr("rel");if(!U||U=="null"){U=""}return(T.attr("href")+U).match(/(fn|footnote|note)[:\-_\d]/gi)&&T.closest("[class*=footnote]:not(a):not(sup)").length<1});var H=[],D=[],F=[],K,E,z;l(M,D);a(D).each(function(){K=a(this).attr("data-footnote-ref").replace(/[:.+~*\]\[]/g,"\\$&");if(t.useFootnoteOnlyOnce){K=K+":not(.footnote-processed)"}E=a(K).closest("li");if(E.length>0){H.push(E.first().addClass("footnote-processed"));F.push(this)}});var C,O,A=1,N,P,Q,I,B,R,S;Q=a("[data-footnote-identifier]:last");if(Q.length>0){P=+Q.data("footnote-identifier")}else{P=0}for(var J=0;J<H.length;J++){N=u(a(H[J]).html().trim(),a(F[J]).data("footnote-backlink-ref")).replace(/"/g,"&quot;").replace(/&lt;/g,"&ltsym;").replace(/&gt;/g,"&gtsym;");P+=1;R="";I=a(F[J]);B=a(H[J]);if(t.numberResetSelector){O=I.closest(t.numberResetSelector);if(O.is(C)){A+=1}else{A=1}C=O}else{A=P}if(N.indexOf("<")!==0){N="<p>"+N+"</p>"}R=t.buttonMarkup.replace(/\{\{FOOTNOTENUM\}\}/g,A).replace(/\{\{FOOTNOTEID\}\}/g,P).replace(/\{\{FOOTNOTECONTENT\}\}/g,N);R=k(R,"SUP",I);R=k(R,"FN",B);S=a(R).insertBefore(I);var G=B.parent();switch(t.actionOriginalFN.toLowerCase()){case"delete":I.remove();B.remove();x(G);break;case"hide":I.addClass("footnote-print-only");B.addClass("footnote-print-only");x(G);break;case"ignore":I.addClass("footnote-print-only");break}}};var l=function(D,z){var C,A,B,E;D.each(function(){var F=a(this);B="#"+(F.attr("href")).split("#")[1];C=F.closest("sup");A=F.find("sup");if(C.length>0){E=(C.attr("id")||"")+(F.attr("id")||"");z.push(C.attr({"data-footnote-backlink-ref":E,"data-footnote-ref":B}))}else{if(A.length>0){E=(A.attr("id")||"")+(F.attr("id")||"");z.push(F.attr({"data-footnote-backlink-ref":E,"data-footnote-ref":B}))}else{E=F.attr("id")||"";z.push(F.attr({"data-footnote-backlink-ref":E,"data-footnote-ref":B}))}}})};var x=function(z){var A;if(z.is(":empty")||z.children(":not(.footnote-print-only)").length===0){A=z.parent();if(t.actionOriginalFN.toLowerCase()==="delete"){z.remove()}else{z.addClass("footnote-print-only")}x(A)}else{if(z.children(":not(.footnote-print-only)").length==z.children("hr:not(.footnote-print-only)").length){A=z.parent();if(t.actionOriginalFN.toLowerCase()==="delete"){z.remove()}else{z.children("hr").addClass("footnote-print-only");z.addClass("footnote-print-only")}x(A)}}};var u=function(A,z){if(z.indexOf(" ")>=0){z=z.trim().replace(/ +/g,"|").replace(/(.*)/g,"($1)")}var B=new RegExp("(\\s|&nbsp;)*<\\s*a[^#<]*#"+z+"[^>]*>(.*?)<\\s*/\\s*a>","g");return A.replace(B,"").replace("[]","")};var k=function(C,F,B){var z=new RegExp("\\{\\{"+F+":([^\\}]*)\\}\\}","g"),A,D,E;A=z.exec(C);while(A){if(A[1]){D=B.attr(A[1])||"";C=C.replace("{{"+F+":"+A[1]+"}}",D)}A=z.exec(C)}return C};var y=function(C){if(t.activateOnHover){var A=a(C.target).closest(".footnote-button"),B='[data-footnote-identifier="'+A.attr("data-footnote-identifier")+'"]';if(A.hasClass("active")){return}A.addClass("hover-instantiated");if(!t.allowMultipleFN){var z=".footnote-content:not("+B+")";j(z)}r(".footnote-button"+B).addClass("hover-instantiated")}};var n=function(A){var z=a(A.target),B=z.closest(".footnote-button");$nearFootnote=z.closest(".footnote-content");if(B.length>0){A.preventDefault();h(B)}else{if($nearFootnote.length<1){if(a(".footnote-content").length>0){j()}}}};var h=function(z){z.blur();var A='data-footnote-identifier="'+z.attr("data-footnote-identifier")+'"';if(z.hasClass("changing")){return}else{if(!z.hasClass("active")){z.addClass("changing");setTimeout(function(){z.removeClass("changing")},t.popoverCreateDelay);r(".footnote-button["+A+"]");z.addClass("click-instantiated");if(!t.allowMultipleFN){j(".footnote-content:not(["+A+"])")}}else{if(!t.allowMultipleFN){j()}else{j(".footnote-content["+A+"]")}}}};var r=function(z){z=z||".footnote-button";var A;if(typeof(z)!=="string"&&t.allowMultipleFN){A=z}else{if(typeof(z)!=="string"){A=z.first()}else{if(t.allowMultipleFN){A=a(z).closest(".footnote-button")}else{A=a(z+":first").closest(".footnote-button")}}}var B=a();A.each(function(){var E=a(this),D;try{D=t.contentMarkup.replace(/\{\{FOOTNOTENUM\}\}/g,E.attr("data-footnote-number")).replace(/\{\{FOOTNOTEID\}\}/g,E.attr("data-footnote-identifier")).replace(/\{\{FOOTNOTECONTENT\}\}/g,E.attr("data-footnote-content").replace(/&gtsym;/,"&gt;").replace(/&ltsym;/,"&lt;"));D=k(D,"BUTTON",E)}finally{$content=a(D);try{t.activateCallback($content)}catch(C){}if(!t.appendPopoversTo){$nearestBlock=E.closest("p, div, pre, li, ul, section, article, main, aside");$siblingFootnote=$nearestBlock.siblings(".footnote-content:last");if($siblingFootnote.length>0){$content.insertAfter($siblingFootnote)}else{$content.insertAfter($nearestBlock)}}else{$content.appendTo(t.appendPopoversTo+":first")}$content.attr("data-bigfoot-max-height",$content.height());m();E.addClass("active");$content.find(".footnote-content-wrapper").bindScrollHandler();B=B.add($content)}});setTimeout(function(){B.addClass("active")},t.popoverCreateDelay);return B};a.fn.bindScrollHandler=function(){if(!t.preventPageScroll){return}a(this).on("DOMMouseScroll mousewheel",function(C){var D=a(this),z=D.scrollTop(),H=D[0].scrollHeight,G=parseInt(D.css("height")),A=D.closest(".footnote-content");if(D.scrollTop()>0&&D.scrollTop()<10){A.addClass("scrollable")}if(!A.hasClass("scrollable")){return}var F=(C.type=="DOMMouseScroll"?C.originalEvent.detail*-40:C.originalEvent.wheelDelta),B=F>0;var E=function(){C.stopPropagation();C.preventDefault();C.returnValue=false;return false};if(!B&&-F>H-G-z){D.scrollTop(H);A.addClass("fully-scrolled");return E()}else{if(B&&F>z){D.scrollTop(0);A.removeClass("fully-scrolled");return E()}else{A.removeClass("fully-scrolled")}}})};var p=function(z){if(t.deleteOnUnhover&&t.activateOnHover){setTimeout(function(){var A=a(z.target).closest(".footnote-content, .footnote-button");if(a(".footnote-button:hover, .footnote-content:hover").length<1){j()}},t.hoverDelay)}};var g=function(z){if(z.keyCode==27){j()}};var j=function(B,C){B=B||".footnote-content";C=C||t.popoverDeleteDelay;var E=a(),z,A,D;a(B).each(function(){D=a(this);z=D.attr("data-footnote-identifier");A=a('.footnote-button[data-footnote-identifier="'+z+'"]');if(!A.hasClass("changing")){E=E.add(A);A.removeClass("active hover-instantiated click-instantiated").addClass("changing");D.removeClass("active").addClass("disapearing");setTimeout(function(){D.remove();A.removeClass("changing")},C)}});return E};var m=function(){if(t.positionContent){a(".footnote-content").each(function(){var F=a(this),H='data-footnote-identifier="'+F.attr("data-footnote-identifier")+'"',E=F.find(".footnote-content-wrapper"),z=a(".footnote-button["+H+"]");var I=v(z),B=parseFloat(F.css("width")),A=parseFloat(F.css("margin-top")),D=+(F.attr("data-bigfoot-max-height")),C=2*A+D,G=10000;if(I.bottomRoom<C&&I.topRoom>I.bottomRoom){F.css({top:"auto",bottom:I.bottomRoom+"px"}).addClass("top").removeClass("bottom");G=I.topRoom-A-15;F.css({"transform-origin":(I.leftRelative*100)+"% 100%"})}else{F.css({bottom:"auto",top:I.topRoom+"px"}).addClass("bottom").removeClass("top");G=I.bottomRoom-A-15;F.css({"transform-origin":(I.leftRelative*100)+"% 0%"})}F.find(".footnote-content-wrapper").css({"max-height":Math.min(G,D)+"px"});F.css({left:(I.leftRoom-(I.leftRelative*B))+"px"});w(F,I.leftRelative);if(parseInt(F.css("height"))<F.find(".footnote-content-wrapper")[0].scrollHeight){F.addClass("scrollable")}})}};var w=function(B,z){z=z||0.5;var A=B.find(".bigfoot-tooltip");if(A.length>0){A.css({left:z*100+"%"})}};var v=function(H){var D={x:window.pageXOffset,y:window.pageYOffset},A={x:D.x+window.innerWidth,y:D.y+window.innerHeight},G=window.innerHeight/document.documentElement.clientHeight;var F=parseFloat(H.outerWidth()),z=parseFloat(H.outerHeight()),C=d(),B=H.offset().top-a(window).scrollTop()+z/2,E=H.offset().left+F/2;return{topRoom:B,bottomRoom:C.height-B,leftRoom:E,rightRoom:C.width-E,leftRelative:E/C.width,topRelative:B/C.height}};var d=function(){var D=document.createElement("div");var A={x:window.pageXOffset,y:window.pageYOffset},z={x:A.x+window.innerWidth,y:A.y+window.innerHeight},B=window.innerWidth/document.documentElement.clientWidth;D.style.cssText="position: fixed;top: 0;left: 0;bottom: 0;right: 0;";document.documentElement.insertBefore(D,document.documentElement.firstChild);var C={width:D.offsetWidth,height:D.offsetHeight};document.documentElement.removeChild(D);return C};var b=function(K,z,D,A,B){z=z||t.popoverDeleteDelay;if(D===null||D!==false){D=true}var H,C,J;if(typeof(K)==="string"){if(K.toLowerCase()==="iphone"){J="<320px"}else{if(K.toLowerCase()==="ipad"){J="<768px"}else{J=K}}if(J.charAt(0)===">"){C="min"}else{if(J.charAt(0)==="<"){C="max"}else{C=null}}var G=C?"("+C+"-width: "+J.substring(1)+")":J;H=window.matchMedia(G)}else{H=K}if(H.media&&H.media==="invalid"){return{added:false,mq:H,listener:null}}var F=C==="min",I=C==="max";A=A||o(D,z,F,function(L){L.addClass("fixed-bottom")});B=B||o(D,z,I,function(){});var E=function(L){if(L.matches){A(D,c)}else{B(D,c)}};H.addListener(E);E(H);t.breakpoints[K]={added:true,mq:H,listener:E};return t.breakpoints[K]};var o=function(A,z,B,C){return function(F,E){var D;if(F){D=E.close();E.updateSetting("activateCallback",C)}setTimeout(function(){E.updateSetting("positionContent",B);if(F){E.activate(D)}},z)}};var e=function(D,E){var B=null,z,C=false;if(typeof(D)==="string"){mqFound=t.breakpoints[D]!==undefined}else{for(z in t.breakpoints){if(t.breakpoints.hasOwnProperty(z)&&t.breakpoints[z].mq===D){mqFound=true;break}}}if(mqFound){var A=t.breakpoints[z||D];if(E){E({matches:false})}else{A.listener({matches:false})}A.mq.removeListener(A.listener);delete t.breakpoints[z||D]}return mqFound};var q=function(z,B){var A;if(typeof(z)==="string"){A=t[z];t[z]=B}else{A={};for(var C in z){if(z.hasOwnProperty(C)){A[C]=t[C];t[C]=z[C]}}}return A};var i=function(z){return t[z]};a(document).ready(function(){s();a(document).on("mouseenter",".footnote-button",y);a(document).on("touchend click",n);a(document).on("mouseout",".hover-instantiated",p);a(document).on("keyup",g);a(window).on("scroll resize",m)});c={close:function(z,A){return j(z,A)},activate:function(z){return r(z)},reposition:function(){return m()},addBreakpoint:function(B,z,C,A,D){return b(B,z,C,A,D)},removeBreakpoint:function(z,A){return e(z,A)},getSetting:function(z){return i(z)},updateSetting:function(z,A){return q(z,A)}};return c}})(jQuery);