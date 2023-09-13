var e;(e=jQuery).fn.slide=function(t){return e.fn.slide.defaults={type:"slide",effect:"fade",autoPlay:!1,delayTime:500,interTime:2500,triggerTime:150,defaultIndex:0,titCell:".hd li",mainCell:".bd",targetCell:null,trigger:"mouseover",scroll:1,vis:1,titOnClassName:"on",autoPage:!1,prevCell:".prev",nextCell:".next",pageStateCell:".pageState",opp:!1,pnLoop:!0,easing:"swing",startFun:null,endFun:null,switchLoad:null,playStateCell:".playState",mouseOverStop:!0,defaultPlay:!0,returnDefault:!1},this.each(function(){var a=e.extend({},e.fn.slide.defaults,t),n=e(this),i=a.effect,s=e(a.prevCell,n),r=e(a.nextCell,n),o=e(a.pageStateCell,n),u=e(a.playStateCell,n),l=e(a.titCell,n),c=l.size(),f=e(a.mainCell,n),p=f.children().size(),d=a.switchLoad,h=e(a.targetCell,n),v=parseInt(a.defaultIndex),m=parseInt(a.delayTime),g=parseInt(a.interTime);parseInt(a.triggerTime);var w=parseInt(a.scroll),I=parseInt(a.vis),M="false"!=a.autoPlay&&!1!=a.autoPlay,C="false"!=a.opp&&!1!=a.opp,y="false"!=a.autoPage&&!1!=a.autoPage,x="false"!=a.pnLoop&&!1!=a.pnLoop,O="false"!=a.mouseOverStop&&!1!=a.mouseOverStop,b="false"!=a.defaultPlay&&!1!=a.defaultPlay,q="false"!=a.returnDefault&&!1!=a.returnDefault,k=0,P=0,Q=0,S=0,T=a.easing,L=null,j=null,B=null,D=a.titOnClassName,F=l.index(n.find("."+D)),E=v=-1==F?v:F,W=v,z=v,A=p>=I?p%w!=0?p%w:w:0,N="leftMarquee"==i||"topMarquee"==i,U=function(){e.isFunction(a.startFun)&&a.startFun(v,c,n,e(a.titCell,n),f,h,s,r)},H=function(){e.isFunction(a.endFun)&&a.endFun(v,c,n,e(a.titCell,n),f,h,s,r)},$=function(){l.removeClass(D),b&&l.eq(W).addClass(D)};//单独处理菜单效果
if("menu"==a.type){b&&l.removeClass(D).eq(v).addClass(D),l.hover(function(){er=e(this).find(a.targetCell);var t=l.index(e(this));j=setTimeout(function(){switch(v=t,l.removeClass(D).eq(v).addClass(D),U(),i){case"fade":er.stop(!0,!0).animate({opacity:"show"},m,T,H);break;case"slideDown":er.stop(!0,!0).animate({height:"show"},m,T,H)}},a.triggerTime)},function(){switch(clearTimeout(j),i){case"fade":er.animate({opacity:"hide"},m,T);break;case"slideDown":er.animate({height:"hide"},m,T)}}),q&&n.hover(function(){clearTimeout(B)},function(){B=setTimeout($,m)});return}if(0==c&&(c=p),N&&(c=2),y){if(p>=I){if("leftLoop"==i||"topLoop"==i)c=p%w!=0?(p/w^0)+1:p/w;else{var G=p-I;(c=1+parseInt(G%w!=0?G/w+1:G/w))<=0&&(c=1)}}else c=1;l.html("");var J="";if(!0==a.autoPage||"true"==a.autoPage)for(var K=0;K<c;K++)J+="<li>"+(K+1)+"</li>";else for(var K=0;K<c;K++)J+=a.autoPage.replace("$",K+1);l.html(J);var l=l.children();//重置导航子元素对象
}if(p>=I){f.children().each(function(){e(this).width()>Q&&(Q=e(this).width(),P=e(this).outerWidth(!0)),e(this).height()>S&&(S=e(this).height(),k=e(this).outerHeight(!0))});var R=f.children(),V=function(){for(var e=0;e<I;e++)R.eq(e).clone().addClass("clone").appendTo(f);for(var e=0;e<A;e++)R.eq(p-e-1).clone().addClass("clone").prependTo(f)};switch(i){case"fold":f.css({position:"relative",width:P,height:k}).children().css({position:"absolute",width:Q,left:0,top:0,display:"none"});break;case"top":f.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; height:'+I*k+'px"></div>').css({top:-(v*w)*k,position:"relative",padding:"0",margin:"0"}).children().css({height:S});break;case"left":f.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; width:'+I*P+'px"></div>').css({width:p*P,left:-(v*w)*P,position:"relative",overflow:"hidden",padding:"0",margin:"0"}).children().css({float:"left",width:Q});break;case"leftLoop":case"leftMarquee":V(),f.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; width:'+I*P+'px"></div>').css({width:(p+I+A)*P,position:"relative",overflow:"hidden",padding:"0",margin:"0",left:-(A+v*w)*P}).children().css({float:"left",width:Q});break;case"topLoop":case"topMarquee":V(),f.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; height:'+I*k+'px"></div>').css({height:(p+I+A)*k,position:"relative",padding:"0",margin:"0",top:-(A+v*w)*k}).children().css({height:S})}}//针对leftLoop、topLoop的滚动个数
var X=function(e){var t=e*w;return e==c?t=p:-1==e&&p%w!=0&&(t=-p%w),t},Y=function(t){var a=function(a){for(var n=a;n<I+a;n++)t.eq(n).find("img["+d+"]").each(function(){var t=e(this);if(t.attr("src",t.attr(d)).removeAttr(d),f.find(".clone")[0])for(var a=f.children(),n=0;n<a.size();n++)a.eq(n).find("img["+d+"]").each(function(){e(this).attr(d)==t.attr("src")&&e(this).attr("src",e(this).attr(d)).removeAttr(d)})})};switch(i){case"fade":case"fold":case"top":case"left":case"slideDown":a(v*w);break;case"leftLoop":case"topLoop":a(A+X(z));break;case"leftMarquee":case"topMarquee":var n="leftMarquee"==i?f.css("left").replace("px",""):f.css("top").replace("px",""),s="leftMarquee"==i?P:k,r=A;if(n%s!=0){var o=Math.abs(n/s^0);r=1==v?A+o:A+o-1}a(r)}}//doSwitchLoad end
,Z=function(e){// 当前页状态不触发效果
if(!b||E!=v||e||N){if(N?v>=1?v=1:v<=0&&(v=0):(z=v,v>=c?v=0:v<0&&(v=c-1)),U(),null!=d&&Y(f.children()),h[0]&&(er=h.eq(v),null!=d&&Y(h),"slideDown"==i?(h.not(er).stop(!0,!0).slideUp(m),er.slideDown(m,T,function(){f[0]||H()})):(h.not(er).stop(!0,!0).hide(),er.animate({opacity:"show"},m,function(){f[0]||H()}))),p>=I)switch(i){case"fade":f.children().stop(!0,!0).eq(v).animate({opacity:"show"},m,T,function(){H()}).siblings().hide();break;case"fold":f.children().stop(!0,!0).eq(v).animate({opacity:"show"},m,T,function(){H()}).siblings().animate({opacity:"hide"},m,T);break;case"top":f.stop(!0,!1).animate({top:-v*w*k},m,T,function(){H()});break;case"left":f.stop(!0,!1).animate({left:-v*w*P},m,T,function(){H()});break;case"leftLoop":var t=z;f.stop(!0,!0).animate({left:-(X(z)+A)*P},m,T,function(){t<=-1?f.css("left",-(A+(c-1)*w)*P):t>=c&&f.css("left",-A*P),H()});break;//leftLoop end
case"topLoop":var t=z;f.stop(!0,!0).animate({top:-(X(z)+A)*k},m,T,function(){t<=-1?f.css("top",-(A+(c-1)*w)*k):t>=c&&f.css("top",-A*k),H()});break;//topLoop end
case"leftMarquee":var a=f.css("left").replace("px","");0==v?f.animate({left:++a},0,function(){f.css("left").replace("px","")>=0&&f.css("left",-p*P)}):f.animate({left:--a},0,function(){f.css("left").replace("px","")<=-(p+A)*P&&f.css("left",-A*P)});break;// leftMarquee end
case"topMarquee":var n=f.css("top").replace("px","");0==v?f.animate({top:++n},0,function(){f.css("top").replace("px","")>=0&&f.css("top",-p*k)}):f.animate({top:--n},0,function(){f.css("top").replace("px","")<=-(p+A)*k&&f.css("top",-A*k)})}//switch end
l.removeClass(D).eq(v).addClass(D),E=v,x||(r.removeClass("nextStop"),s.removeClass("prevStop"),0==v&&s.addClass("prevStop"),v==c-1&&r.addClass("nextStop")),o.html("<span>"+(v+1)+"</span>/"+c)}};b&&Z(!0),q&&n.hover(function(){clearTimeout(B)},function(){B=setTimeout(function(){v=W,b?Z():"slideDown"==i?er.slideUp(m,$):er.animate({opacity:"hide"},m,$),E=v},300)});///自动播放函数
var _=function(e){L=setInterval(function(){C?v--:v++,Z()},e||g)},ee=function(e){L=setInterval(Z,e||g)},et=function(){O||(clearInterval(L),_())},ea=function(){(x||v!=c-1)&&(v++,Z(),N||et())},en=function(){(x||0!=v)&&(v--,Z(),N||et())},ei=function(){clearInterval(L),N?ee():_(),u.removeClass("pauseState")},es=function(){clearInterval(L),u.addClass("pauseState")};//前后按钮事件
if(M?N?(C?v--:v++,ee(),O&&f.hover(es,ei)):(_(),O&&n.hover(es,ei)):(N&&(C?v--:v++),u.addClass("pauseState")),u.click(function(){u.hasClass("pauseState")?ei():es()}),"mouseover"==a.trigger?l.hover(function(){var e=l.index(this);j=setTimeout(function(){v=e,Z(),et()},a.triggerTime)},function(){clearTimeout(j)}):l.click(function(){v=l.index(this),Z(),et()}),N){//前后按钮长按10倍加速
if(r.mousedown(ea),s.mousedown(en),x){var er,eo,eu=function(){eo=setTimeout(function(){clearInterval(L),ee(g/10^0)},150)},el=function(){clearTimeout(eo),clearInterval(L),ee()};r.mousedown(eu),r.mouseup(el),s.mousedown(eu),s.mouseup(el)}"mouseover"==a.trigger&&(r.hover(ea,function(){}),s.hover(en,function(){}))}else r.click(ea),s.click(en)});//each End
},jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,t,a,n,i){return jQuery.easing[jQuery.easing.def](e,t,a,n,i)},easeInQuad:function(e,t,a,n,i){return n*(t/=i)*t+a},easeOutQuad:function(e,t,a,n,i){return-n*(t/=i)*(t-2)+a},easeInOutQuad:function(e,t,a,n,i){return(t/=i/2)<1?n/2*t*t+a:-n/2*(--t*(t-2)-1)+a},easeInCubic:function(e,t,a,n,i){return n*(t/=i)*t*t+a},easeOutCubic:function(e,t,a,n,i){return n*((t=t/i-1)*t*t+1)+a},easeInOutCubic:function(e,t,a,n,i){return(t/=i/2)<1?n/2*t*t*t+a:n/2*((t-=2)*t*t+2)+a},easeInQuart:function(e,t,a,n,i){return n*(t/=i)*t*t*t+a},easeOutQuart:function(e,t,a,n,i){return-n*((t=t/i-1)*t*t*t-1)+a},easeInOutQuart:function(e,t,a,n,i){return(t/=i/2)<1?n/2*t*t*t*t+a:-n/2*((t-=2)*t*t*t-2)+a},easeInQuint:function(e,t,a,n,i){return n*(t/=i)*t*t*t*t+a},easeOutQuint:function(e,t,a,n,i){return n*((t=t/i-1)*t*t*t*t+1)+a},easeInOutQuint:function(e,t,a,n,i){return(t/=i/2)<1?n/2*t*t*t*t*t+a:n/2*((t-=2)*t*t*t*t+2)+a},easeInSine:function(e,t,a,n,i){return-n*Math.cos(t/i*(Math.PI/2))+n+a},easeOutSine:function(e,t,a,n,i){return n*Math.sin(t/i*(Math.PI/2))+a},easeInOutSine:function(e,t,a,n,i){return-n/2*(Math.cos(Math.PI*t/i)-1)+a},easeInExpo:function(e,t,a,n,i){return 0==t?a:n*Math.pow(2,10*(t/i-1))+a},easeOutExpo:function(e,t,a,n,i){return t==i?a+n:n*(-Math.pow(2,-10*t/i)+1)+a},easeInOutExpo:function(e,t,a,n,i){return 0==t?a:t==i?a+n:(t/=i/2)<1?n/2*Math.pow(2,10*(t-1))+a:n/2*(-Math.pow(2,-10*--t)+2)+a},easeInCirc:function(e,t,a,n,i){return-n*(Math.sqrt(1-(t/=i)*t)-1)+a},easeOutCirc:function(e,t,a,n,i){return n*Math.sqrt(1-(t=t/i-1)*t)+a},easeInOutCirc:function(e,t,a,n,i){return(t/=i/2)<1?-n/2*(Math.sqrt(1-t*t)-1)+a:n/2*(Math.sqrt(1-(t-=2)*t)+1)+a},easeInElastic:function(e,t,a,n,i){var s=1.70158,r=0,o=n;if(0==t)return a;if(1==(t/=i))return a+n;if(r||(r=.3*i),o<Math.abs(n)){o=n;var s=r/4}else var s=r/(2*Math.PI)*Math.asin(n/o);return-(o*Math.pow(2,10*(t-=1))*Math.sin((t*i-s)*(2*Math.PI)/r))+a},easeOutElastic:function(e,t,a,n,i){var s=1.70158,r=0,o=n;if(0==t)return a;if(1==(t/=i))return a+n;if(r||(r=.3*i),o<Math.abs(n)){o=n;var s=r/4}else var s=r/(2*Math.PI)*Math.asin(n/o);return o*Math.pow(2,-10*t)*Math.sin((t*i-s)*(2*Math.PI)/r)+n+a},easeInOutElastic:function(e,t,a,n,i){var s=1.70158,r=0,o=n;if(0==t)return a;if(2==(t/=i/2))return a+n;if(r||(r=i*(.3*1.5)),o<Math.abs(n)){o=n;var s=r/4}else var s=r/(2*Math.PI)*Math.asin(n/o);return t<1?-.5*(o*Math.pow(2,10*(t-=1))*Math.sin((t*i-s)*(2*Math.PI)/r))+a:o*Math.pow(2,-10*(t-=1))*Math.sin((t*i-s)*(2*Math.PI)/r)*.5+n+a},easeInBack:function(e,t,a,n,i,s){return void 0==s&&(s=1.70158),n*(t/=i)*t*((s+1)*t-s)+a},easeOutBack:function(e,t,a,n,i,s){return void 0==s&&(s=1.70158),n*((t=t/i-1)*t*((s+1)*t+s)+1)+a},easeInOutBack:function(e,t,a,n,i,s){return(void 0==s&&(s=1.70158),(t/=i/2)<1)?n/2*(t*t*(((s*=1.525)+1)*t-s))+a:n/2*((t-=2)*t*(((s*=1.525)+1)*t+s)+2)+a},easeInBounce:function(e,t,a,n,i){return n-jQuery.easing.easeOutBounce(e,i-t,0,n,i)+a},easeOutBounce:function(e,t,a,n,i){return(t/=i)<1/2.75?n*(7.5625*t*t)+a:t<2/2.75?n*(7.5625*(t-=1.5/2.75)*t+.75)+a:t<2.5/2.75?n*(7.5625*(t-=2.25/2.75)*t+.9375)+a:n*(7.5625*(t-=2.625/2.75)*t+.984375)+a},easeInOutBounce:function(e,t,a,n,i){return t<i/2?.5*jQuery.easing.easeInBounce(e,2*t,0,n,i)+a:.5*jQuery.easing.easeOutBounce(e,2*t-i,0,n,i)+.5*n+a}});//# sourceMappingURL=index.1cdcca68.js.map

//# sourceMappingURL=index.1cdcca68.js.map
