window.googletag&&typeof googletag._=='function'&&googletag._(function(_){var Ht=function(a,b){return _.aa[a]=b},Jt=function(a){var b=a._html_,c=b;if(_.v(b)){for(var d=/vu\(\s*["']([^)]+?)["']\s*\);?/g,e;null!==(e=d.exec(b));){var f=e[1];!f||-1==f.indexOf("/adview")&&-1==f.indexOf("/pcs/view")||(c=c.replace(e[0],""),It(window,f.replace("&amp;","&")))}a._html_=c}},Kt="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),Lt=function(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Kt.length;f++)c=Kt[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}},Mt={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"},Nt=function(a,b){_.Hb(b,function(b,d){b&&b.mb&&(b=b.Ua());"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:Mt.hasOwnProperty(d)?a.setAttribute(Mt[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,b):a[d]=b})},Ot=function(a){if(a&&"number"==typeof a.length){if(_.y(a))return"function"==typeof a.item||"string"==typeof a.item;if(_.Ga(a))return"function"==typeof a.item}return!1},Pt=function(a,b,c){function d(c){c&&b.appendChild(_.v(c)?a.createTextNode(c):c)}for(var e=2;e<c.length;e++){var f=c[e];!_.Fa(f)||_.y(f)&&0<f.nodeType?d(f):_.B(Ot(f)?_.xb(f):f,d)}};_.sd.prototype.l=Ht(6,function(a,b,c){var d=this.j,e=arguments,f=String(e[0]),g=e[1];if(!_.nd&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',_.cb(g.name),'"');if(g.type){f.push(' type="',_.cb(g.type),'"');var k={};Lt(k,g);delete k.type;g=k}f.push(">");f=f.join("")}f=d.createElement(f);g&&(_.v(g)?f.className=g:_.w(g)?f.className=g.join(" "):Nt(f,g));2<e.length&&Pt(d,f,e);return f});var Qt={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\","<":"<"},Rt={"'":"\\'"},St=function(a){a=String(a);for(var b=['"'],c=0;c<a.length;c++){var d=a.charAt(c),e=d.charCodeAt(0),f=c+1,g;if(!(g=Qt[d])){if(!(31<e&&127>e))if(d in Rt)d=Rt[d];else if(d in Qt)d=Rt[d]=Qt[d];else{g=d.charCodeAt(0);if(31<g&&127>g)e=d;else{if(256>g){if(e="\\x",16>g||256<g)e+="0"}else e="\\u",4096>g&&(e+="0");e+=g.toString(16).toUpperCase()}d=Rt[d]=e}g=d}b[f]=g}b.push('"');return b.join("")},Tt=function(){var a=["allow-top-navigation","allow-modals","allow-orientation-lock","allow-presentation"];return _.ea("allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-presentation allow-same-origin allow-scripts allow-top-navigation allow-top-navigation-by-user-activation".split(" "),function(b){return!_.rb(a,b)}).join(" ")},Ut=function(a){"number"==typeof a&&(a=Math.round(a)+"px");return a},Vt=function(a,b){var c=a.ampInaboxIframes=a.ampInaboxIframes||[];b&&c.push(b);a.ampInaboxPendingMessages=a.ampInaboxPendingMessages||[];c.google_amp_listener_added||(c.google_amp_listener_added=!0,_.Sd(a,"message",function(b){var c;a.ampInaboxPendingMessages&&(c=/^amp-(\d{15,20})?/.exec(b.data))&&(a.ampInaboxPendingMessages.push(b),a.document.querySelector('script[src$="amp4ads-host-v0.js"]')||_.dd(a.document,"https://cdn.ampproject.org/"+(c[1]?"rtv/"+c[1]+"/":"")+"amp4ads-host-v0.js"))}))},It=function(a,b,c){return _.ae(a,b,c)},Wt=function(){this.l=this.l;this.m=this.m};Wt.prototype.l=!1;Wt.prototype.v=function(){if(this.m)for(;this.m.length;)this.m.shift()()};var Xt=function(){},Yt={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Zt=function(a,b){b.push('"',a.replace(_.ne,function(a){var b=Yt[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),Yt[a]=b);return b}),'"')},$t=function(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(_.w(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),$t(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Zt(d,c),c.push(":"),$t(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Zt(b,c);break;case "number":c.push((0,window.isFinite)(b)&&!(0,window.isNaN)(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}},au=function(a){var b=[];$t(new Xt,a,b);return b.join("")},bu=function(a){this.j=a;this.l=_.ib()},cu=function(a){var b={};_.B(a,function(a){b[a.j]=a.l});return b},du=function(a){var b={};b.c=a.C;b.i=a.A;a.I&&(b.e=a.I);a.o.postMessage(au(b),a.D)},eu=function(a,b,c,d,e,f){Wt.call(this);this.C=a;this.status=1;this.o=b;this.D=c;this.N=d;this.Ka=!!e;this.A=Math.random();this.F={};this.j=null;this.H=(0,_.A)(this.M,this);this.I=f};_.Oa(eu,Wt);eu.prototype.M=function(a){if(a.origin===this.D&&(this.Ka||a.source==this.o)){var b=null;try{b=JSON.parse(a.data)}catch(c){}if(_.y(b)&&(a=b.i,b.c===this.C&&a!=this.A&&(2!==this.status&&(this.status=2,du(this),this.j&&(this.j(),this.j=null)),a=b.s,b=b.p,_.v(a)&&(_.v(b)||_.y(b))&&this.F.hasOwnProperty(a))))this.F[a](b)}};eu.prototype.J=function(){if(1===this.status){try{this.o.postMessage&&du(this)}catch(a){}window.setTimeout((0,_.A)(this.J,this),50)}};eu.prototype.connect=function(a){a&&(this.j=a);_.Sd(window,"message",this.H);this.N&&this.J()};eu.prototype.v=function(){this.status=3;_.Td(window,"message",this.H);eu.gc.v.call(this)};var fu=function(a,b,c){a.F[b]=c},gu=function(a,b,c){var d={};d.c=a.C;d.i=a.A;d.s=b;d.p=c;a.o.postMessage(au(d),a.D)},hu=function(a){return au({windowCoords_t:a.m.top,windowCoords_r:a.m.right,windowCoords_b:a.m.bottom,windowCoords_l:a.m.left,frameCoords_t:a.l.top,frameCoords_r:a.l.right,frameCoords_b:a.l.bottom,frameCoords_l:a.l.left,styleZIndex:a.o,allowedExpansion_t:a.j.top,allowedExpansion_r:a.j.right,allowedExpansion_b:a.j.bottom,allowedExpansion_l:a.j.left,xInView:a.v,yInView:a.A})},iu=function(a){this.m=a;this.v=null;this.J=this.status=0;this.l=null;this.ga="sfchannel"+a},ju=function(a){this.j=a},ku=function(a,b){this.Ra=a;this.Sa=b},lu=function(a,b,c,d,e,f,g,k){k=void 0===k?[]:k;this.v=a;this.l=b;this.m=c;this.permissions=d;this.o=e;this.A=f;this.Ka=g;this.hostpageLibraryTokens=k;this.j=""},mu=function(a){this.j=a},nu=function(a,b){this.j=a;this.version=b};_.Oa(nu,mu);nu.prototype.m=function(){return au({uid:this.j,version:this.version})};var ou=function(a,b,c){this.j=a;this.o=b;this.l=c};_.Oa(ou,mu);ou.prototype.m=function(){return au({uid:this.j,initialWidth:this.o,initialHeight:this.l})};var pu=function(a,b){this.j=a;this.l=b};_.Oa(pu,mu);pu.prototype.m=function(){return au({uid:this.j,description:this.l})};var qu=function(a,b,c){this.j=a;this.l=b;this.push=c};_.Oa(qu,mu);qu.prototype.m=function(){return au({uid:this.j,expand_t:this.l.top,expand_r:this.l.right,expand_b:this.l.bottom,expand_l:this.l.left,push:this.push})};var ru=function(a){this.j=a};_.Oa(ru,mu);ru.prototype.m=function(){return au({uid:this.j})};var su=function(a,b){this.j=a;this.o=b};_.Oa(su,mu);su.prototype.m=function(){var a={uid:this.j,newGeometry:hu(this.o)};return au(a)};var tu=function(a,b,c,d,e){su.call(this,a,c);this.v=b;this.l=d;this.push=e};_.Oa(tu,su);tu.prototype.m=function(){var a={uid:this.j,success:this.v,newGeometry:hu(this.o),expand_t:this.l.top,expand_r:this.l.right,expand_b:this.l.bottom,expand_l:this.l.left,push:this.push};return au(a)};var uu=function(a,b,c,d){this.j=a;this.width=b;this.height=c;this.l=void 0===d?"":d};_.Oa(uu,mu);uu.prototype.m=function(){var a={uid:this.j,width:this.width,height:this.height};this.l&&(a.sentinel=this.l);return au(a)};var vu=function(){this.j=[]},wu=function(a,b,c,d){this.m=a;this.j=(this.l=!!(_.u(d)&&a.style&&a.style.getPropertyPriority))?String(b).replace(/([A-Z])/g,"-$1").toLowerCase():b;this.o=this.l?a.style.getPropertyValue(this.j):a.style[this.j];this.v=this.l?a.style.getPropertyPriority(this.j):void 0;this.l?(a.style.removeProperty(this.j),a.style.setProperty(this.j,String(c),d)):a.style[this.j]=String(c)},xu=function(a,b,c,d,e){a.j.push(new wu(b,c,d,e))},yu=function(a,b,c,d){xu(a,b,c,d+"px",void 0)},zu=1,Au=!1,Bu=function(a,b,c){a.H?(b.style.width=Ut("100%"),b.style.height=Ut("auto")):(b.style.width=Ut(c.width),b.style.height=Ut(c.height))},Cu=function(a,b,c){c=_.zf(b,a.O,a.$,c);var d=[];a.V&&(b=_.md(b.location.href),d.push([0<b.length?"google_debug"+(b?"="+b:"")+"&":"","xpc=","sf-gdn-exp-"+a.m,"&p=",(0,window.encodeURIComponent)(_.t.document.location.protocol),"//",(0,window.encodeURIComponent)(_.t.document.location.host)].join("")));a.X.length&&d.push("eid="+a.X.join());d.length&&(c+="#"+d.join("&"));return c},Du=function(a,b,c,d,e,f,g){var k;if(a.H){var l=k=0;d="min-width:100%"}else k=d.width,l=d.height,d="";b={id:b,title:f||"",name:c,src:Cu(a,_.Ad(e),g),scrolling:"no",marginWidth:"0",marginHeight:"0",width:String(k),height:String(l),"data-is-safeframe":"true"};c=_.$b&&!_.sc(9)?"javascript:\"<html><body style='background:transparent'></body></html>\"":"about:blank";c={frameborder:0,style:"border:0;vertical-align:bottom;"+(d||""),allowTransparency:"true",src:c};b&&Lt(c,b);e=e.l("IFRAME",c);a.Z&&(e.sandbox=Tt());a.A.appendChild(e);return e},Eu=function(a,b){var c=_.ud(a.A),d=b.content;d=a.O+";"+d.length+";"+d;var e=new lu(a.m,a.ca,a.Y,a.T,new ju({shared:{sf_ver:a.O,ck_on:window.navigator.cookieEnabled?1:0,flash_ver:_.ze?_.Ae:"0"}}),a.H,a.da,a.fa);var f={};f.uid=e.v;f.hostPeerName=e.l;f.initialGeometry=hu(e.m);var g=e.permissions;g=au({expandByOverlay:g.Ra,expandByPush:g.Sa,readCookie:!1,writeCookie:!1});f=(f.permissions=g,f.metadata=au(e.o.j),f.reportCreativeGeometry=e.A,f.isDifferentSourceWindow=e.Ka,f.goog_safeframe_hlt=cu(e.hostpageLibraryTokens),f);e.j&&(f.sentinel=e.j);e=au(f);e=d+e;d=!1===b.lc;if(a.V&&b.size instanceof _.rd){f=b.lb;g=b.size;var k=_.ud(a.A);Au||(_.dd(k.j,(a.ha?"http:":"https:")+"//pagead2.googlesyndication.com/pagead/expansion_embed.js?source=safeframe"),Au=!0);k=_.Ad(k);k.google_eas_queue=k.google_eas_queue||[];k.google_eas_queue.push({a:f,b:k.location.protocol+"//tpc.googlesyndication.com",c:g.width,d:g.height,e:"sf-gdn-exp-"+a.m,f:void 0,g:void 0,h:void 0,i:void 0})}if(b.ce)if(k=b.lb,f=b.size,b=b.Tb,g=window.document.getElementById(k)){a:{try{var l=g.contentWindow||(g.contentDocument?_.xd(g.contentDocument):null);break a}catch(n){}l=null}l.name=e;_.Pb()&&0<=_.kb(_.Tb(),10)&&(g.name=e);a.H?(f=e=0,g.style.minWidth="100%"):(e=f.width,f=f.height);g.width=String(e);g.height=String(f);g.title=b||"";g.setAttribute("data-is-safeframe","true");l.location.replace(Cu(a,_.Ad(c),d));a.Z&&(g.sandbox=Tt());a.j=g}else a.j=Du(a,k,e,f,c,b,d);else a.j=Du(a,b.lb,e,b.size,c,b.Tb,d)},Fu=function(a){a.v=_.yf(a.j,a.I,a.P);a.P=null;gu(a.l,"geometry_update",(new su(a.m,a.v)).m())},Gu=function(a){iu.call(this,zu++);this.D=a.Ad;this.H=1==a.size;this.T=new ku(a.permissions.Ra&&!this.H,a.permissions.Sa&&!this.H);this.A=a.rb;this.X=a.Ud||[];this.fa=a.hostpageLibraryTokens||[];var b=window.location;this.ca="file:"==b.protocol?"*":b.protocol+"//"+b.host;this.da=!!a.Ka;this.aa=(!1===a.lc?"https:":window.location.protocol)+"//tpc.googlesyndication.com";this.V=!!a.jd;this.ha=!!a.de;this.Z=a.sandbox||!1;this.o=new vu;Bu(this,a.rb,a.size);this.I=a.ld||!1;this.v=this.Y=_.yf(a.rb,this.I);this.O=a.Vd||"1-0-13";this.$=a.dd||"";Eu(this,a);this.P=null;this.M=(0,_.A)(this.ib,this);this.N=-1;this.C=0;this.F=null;!a.wd||"function"!==typeof window.IntersectionObserver||_.hc||_.ec||(this.F=new window.IntersectionObserver((0,_.A)(function(a){this.P=a[a.length-1];this.ib()},this)));this.l=new eu(this.ga,this.j.contentWindow,this.aa,!1);fu(this.l,"init_done",(0,_.A)(this.xd,this));fu(this.l,"register_done",(0,_.A)(this.Rd,this));fu(this.l,"report_error",(0,_.A)(this.Td,this));fu(this.l,"expand_request",(0,_.A)(this.kd,this));fu(this.l,"collapse_request",(0,_.A)(this.ed,this));fu(this.l,"creative_geometry_update",(0,_.A)(this.gd,this));this.l.connect((0,_.A)(this.Od,this));var c=(0,_.A)(function(){this.j&&(this.j.name="",a.Yb&&a.Yb(),_.Td(this.j,"load",c))},this);_.Sd(this.j,"load",c)};_.Oa(Gu,iu);_.h=Gu.prototype;_.h.Od=function(){this.F&&this.j?this.F.observe(this.j):(_.Sd(window,"resize",this.M),_.Sd(window,"scroll",this.M))};_.h.xd=function(a){try{if(0!=this.status)throw Error("Container already initialized");if(!_.v(a))throw Error("Could not parse serialized message");var b=JSON.parse(a);if(!(_.y(b)&&_.m(b.uid)&&_.v(b.version)))throw Error("Cannot parse JSON message");var c=new nu(b.uid,b.version);if(this.m!=c.j||this.O!=c.version)throw Error("Wrong source container");this.status=1}catch(d){this.D.error("Invalid INITIALIZE_DONE message. Reason: "+d.message)}};_.h.Rd=function(a){try{if(1!=this.status)throw Error("Container not initialized");if(!_.v(a))throw Error("Could not parse serialized message");var b=JSON.parse(a);if(!(_.y(b)&&_.m(b.uid)&&_.m(b.initialWidth)&&_.m(b.initialHeight)))throw Error("Cannot parse JSON message");if(this.m!=(new ou(b.uid,b.initialWidth,b.initialHeight)).j)throw Error("Wrong source container");this.status=2}catch(c){this.D.error("Invalid REGISTER_DONE message. Reason: "+c.message)}};_.h.Td=function(a){try{if(!_.v(a))throw Error("Could not parse serialized message");var b=JSON.parse(a);if(!(_.y(b)&&_.m(b.uid)&&_.v(b.description)))throw Error("Cannot parse JSON message");var c=new pu(b.uid,b.description);if(this.m!=c.j)throw Error("Wrong source container");this.D.info("Ext reported an error. Description: "+c.l)}catch(d){this.D.error("Invalid REPORT_ERROR message. Reason: "+d.message)}};_.h.kd=function(a){try{if(2!=this.status)throw Error("Container is not registered");if(0!=this.J)throw Error("Container is not collapsed");if(!_.v(a))throw Error("Could not parse serialized message");var b=JSON.parse(a);if(!(_.y(b)&&_.m(b.uid)&&_.m(b.expand_t)&&_.m(b.expand_r)&&_.m(b.expand_b)&&_.m(b.expand_l)&&_.Ba(b.push)))throw Error("Cannot parse JSON message");var c=new qu(b.uid,new _.Bd(b.expand_t,b.expand_r,b.expand_b,b.expand_l),b.push);if(this.m!=c.j)throw Error("Wrong source container");if(!(0<=c.l.top&&0<=c.l.left&&0<=c.l.bottom&&0<=c.l.right))throw Error("Invalid expansion amounts");var d;if(d=c.push&&this.T.Sa||!c.push&&this.T.Ra){var e=c.l,f=c.push,g=this.v=_.yf(this.j,this.I);if(e.top<=g.j.top&&e.right<=g.j.right&&e.bottom<=g.j.bottom&&e.left<=g.j.left){if(!f)for(var k=this.j.parentNode;k&&k.style;k=k.parentNode)xu(this.o,k,"overflowX","visible","important"),xu(this.o,k,"overflowY","visible","important");var l=this.v.l,n=this.v.l,p=_.Ed(new _.Dd(0,0,l.right-l.left,n.bottom-n.top));_.y(e)?(p.top-=e.top,p.right+=e.right,p.bottom+=e.bottom,p.left-=e.left):(p.top-=e,p.right+=Number(void 0),p.bottom+=Number(void 0),p.left-=Number(void 0));xu(this.o,this.A,"position","relative");xu(this.o,this.j,"position","absolute");f?(yu(this.o,this.A,"width",p.right-p.left),yu(this.o,this.A,"height",p.bottom-p.top)):xu(this.o,this.j,"zIndex","10000");yu(this.o,this.j,"width",p.right-p.left);yu(this.o,this.j,"height",p.bottom-p.top);yu(this.o,this.j,"left",p.left);yu(this.o,this.j,"top",p.top);this.J=2;this.v=_.yf(this.j,this.I);d=!0}else d=!1}a=d;gu(this.l,"expand_response",(new tu(this.m,a,this.v,c.l,c.push)).m());if(!a)throw Error("Viewport or document body not large enough to expand into.");}catch(x){this.D.error("Invalid EXPAND_REQUEST message. Reason: "+x.message)}};_.h.ed=function(a){try{if(2!=this.status)throw Error("Container is not registered");if(2!=this.J)throw Error("Container is not expanded");if(!_.v(a))throw Error("Could not parse serialized message");var b=JSON.parse(a);if(!_.y(b)||!_.m(b.uid))throw Error("Cannot parse JSON message");if(this.m!=(new ru(b.uid)).j)throw Error("Wrong source container");_.Af(this);gu(this.l,"collapse_response",(new su(this.m,this.v)).m())}catch(c){this.D.error("Invalid COLLAPSE_REQUEST message. Reason: "+c.message)}};_.h.ib=function(){if(1==this.status||2==this.status)switch(this.C){case 0:Fu(this);this.N=window.setTimeout((0,_.A)(this.Qb,this),1E3);this.C=1;break;case 1:this.C=2;break;case 2:this.C=2}};_.h.gd=function(a){try{if(!_.v(a))throw Error("Could not parse serialized message");var b=JSON.parse(a);if(!(_.y(b)&&_.m(b.uid)&&_.m(b.width)&&_.m(b.height))||b.sentinel&&!_.v(b.sentinel))throw Error("Cannot parse JSON message");var c=new uu(b.uid,b.width,b.height,b.sentinel);if(this.m!=c.j)throw Error("Wrong source container");var d=String(c.height);this.H?d!=this.j.height&&(this.j.height=d,this.ib()):this.D.error("Got CreativeGeometryUpdate message in non-fluidcontainer. The container is not resized.")}catch(e){this.D.error("Invalid CREATIVE_GEOMETRY_UPDATE message. Reason: "+e.message)}};_.h.Qb=function(){if(1==this.status||2==this.status)switch(this.C){case 1:this.C=0;break;case 2:Fu(this),this.N=window.setTimeout((0,_.A)(this.Qb,this),1E3),this.C=1}};var Hu=function(){_.bi.is(_.qg.Sc)?_.G(_.ci,_.rg.Oa):_.Zf(_.bi)||_.G(_.ci,_.rg.ba);return _.ea(_.Ye(),function(a){return _.Vf[a]})},Iu=function(a){for(var b={},c=0;c<a.length;++c)_.D(a[c],function(a,c){b[c]=a});return b},Ju=function(){var a=_.Db;return null!=a&&-1!=a.indexOf("MSIE ")&&-1==a.indexOf("IEMobile")},Ku=function(a){if(!a||0==_.ul()||"hidden"!=a.style.visibility||"none"!=a.style.display)return!1;a.parentNode.removeChild(a);return!0},Lu=function(a,b,c,d,e,f,g,k,l,n,p){var x=_.wr,z;_.w(e)?z=new _.rd(e[0],e[1]):z=1;e=_.ai.is(_.pg.w);var J=_.Ni.is(_.ch.w);return new Gu({rb:b,lb:c,Tb:x,content:_.Sl(d),size:z,Ad:{info:function(){},G:function(){},error:function(){}},jd:l,Yb:f,sandbox:_.u(g.sandbox)?g.sandbox:!1,permissions:{Ra:_.u(g.allowOverlayExpansion)?g.allowOverlayExpansion:!k,Sa:_.u(g.allowPushExpansion)?g.allowPushExpansion:!1},ld:_.Uh.is(_.kg.w),Ka:!!_.Ff().fifWin,wd:e,Ud:Hu(),ce:n,Vd:_.gl(),dd:_.hl(a.location.host),de:_.sl(a,!0),lc:_.sl(a,J),hostpageLibraryTokens:p})},Mu=function(a,b,c,d){_.Tm(a,"ad_fetch_period",b,d);_.hf(_.kl.u(),(4).toString(),b);_.cn(a,c,"ad."+b)},Nu=function(a){return a.R?!!a.R._is_afc_:null},Ou=function(a){return a.R?!!a.R._afc_expandable_:!0},Pu=function(){var a=_.Sq.u();if((0,_.yp)()){var b=_.Tq(window);2!==a.j[b]&&3!==a.j[b]&&(a.j[b]=2,_.Uq(a,b,"preload"))}},Qu=function(a,b){var c=It(window,b,_.N(290,function(){a.j[b]=3;_.tb(window.google_image_requests,c)}))},Ru=function(a,b,c){a.Va||(a.Va=!0,a=function(){try{var a=b.document.createElement("iframe");a.id="ace-frame";a.src=c;a.style.visibility="hidden";a.style.display="none";b.document.body.appendChild(a)}catch(e){}},b.requestIdleCallback?b.requestIdleCallback(a):b.setTimeout(a,0))},Su=function(a,b){if(!a.cc&&b==b.top){a.cc=!0;try{_.Sd(b,"beforeunload",function(){try{var a=_.Kl()+"//www.googletagservices.com/tag/js/gpt.js";_.zp(b.document,a,"prefetch")}catch(d){}})}catch(c){}}},Tu=function(a,b,c){b.R=c;b.fetchEnded();null!=c._host_page_libraries_&&_.B(c._host_page_libraries_,function(c){var d=a.na;if(!_.rb(d.l,c))switch(c){case 1:var e=c+"_hostpage_library",f=_.dd(window.document,_.vf[c]);f&&(f.id=e);d.l.push(c);e=new bu(c);d.m.push(e);d=_.Ff();d.hostpageLibraryTokens||(d.hostpageLibraryTokens={});d.hostpageLibraryTokens[e.j]=e.l}d=a.na;d.j[c]||(d.j[c]=[]);d.j[c].push(b)});null!=c._cookies_&&_.Cq(a.Y,c);c._persistent_for_stream_&&(a.j.O[_.K(b)]=null);var d=c._a_exps_;if(d)for(var e=0,f=d.length;e<f;e++)_.Oh(d[e].toString(),!0);_.Oi.is(_.dh.w)&&a.v(c)&&Pu();(_.rj.is(_.Dh.w)||_.sj.is(_.Eh.w)||_.sj.is(_.Eh.Dc))&&Jt(c)},Uu=function(a,b,c){var d=void 0===d?window:d;if(a.l&&!_.w(b))return a=new _.L("sra_legacy_ad_response"),_.q(a),_.M(a),[];if(c.length){var e=c[0];Mu(a.La,e.getCsiId(),e.T,e.j)}_.w(b)||(b=[b]);e=[];for(var f=0;f<c.length;++f){var g=c[f],k=b[f][g.getAdUnitPath()];k&&(Tu(a,g,k),e.push(g))}switch(_.ag(_.Qi)){case _.fh.Cc:Ru(a,d,"https://www.googletagservices.com/cb/ace_frame.html");break;case _.fh.Bc:Ru(a,d,"https://www.googletagservices.com/cb/ace_frame.html#cbu=https%3A%2F%2Fwww.googletagservices.com%2Ftag%2Fjs%2Fgpt.js")}_.Xi.is(_.mh.w)&&Su(a,d);return e},Vu=function(a){(a=(a=a.R)&&a._resources_)&&_.B(a,function(a){if(a){var b=a.url;a=a.as;if(b&&a){var d=_.Sq.u();2!==d.j[b]&&3!==d.j[b]&&(d.j[b]=2,"image"==a?Qu(d,b):(0,_.yp)()&&_.Uq(d,b,"preload",a))}}})},Wu=function(a,b,c){a=a.La;var d=b.getCsiId(),e=b.j,f=Ou(b);b=!!Nu(b);_.Tm(a,"start_ad_render_period",d,e);_.Sm(a,"exr",d,e,f?1:0);_.hf(_.kl.u(),(5).toString(),d);_.t.google_timing_params=_.t.google_timing_params||{};_.t.google_timing_params["qqid."+d]=c;_.Ym(a,"is_backfill_at_render",""+d+"_"+b,e);_.Ym(a,"qqid",""+d+"_"+c,e)},Xu=function(a,b){if(a.Rc){var c=b.R;c&&!c._empty_&&(c=c._html_)&&-1==c.indexOf("adpnt")&&(b=b.getEscapedQemQueryId(),c=new _.L("gpt_qse_missing",_.tl(),1),_.r(c,"qemQueryId",b),_.q(c,a.j),_.M(c))}},Yu=function(a){var b=new _.L("gpt_fluid_not_sf",_.tl(),_.E.u().get(23));_.r(b,"impl",a.X());_.q(b,a.j);_.M(b)},Zu=function(a,b,c){Vt(a);_.t.setTimeout(_.N(214,function(){var d=_.xn(c,b);d?Vt(a,d):(d=new _.L("amp_inabox_failed"),_.q(d),_.M(d))}),0)},$u=function(a,b,c){var d={};d=(d[_.Og.Yc]=1.5,d[_.Og.Zc]=2,d[_.Og.$c]=2.5,d[_.Og.ad]=3,d)[_.ag(_.zi)];var e=b.pageYOffset;b=b.innerHeight;if(d&&_.m(e)&&_.m(b)){var f=e+b*d,g=function(a,b){a=(a=a.R)&&a._height_||0;return!!b&&b.y+a>=e&&b.y<f};_.Ab(c,function(b,c){var d=_.vq(a.j,b),e=_.vq(a.j,c);b=g(b,d);return b!=g(c,e)?b?-1:1:b?d.y-e.y:0})}},av=function(a,b){_.ag(_.Yi)&&_.t.IntersectionObserver&&(a.aa||(a.aa=new _.t.IntersectionObserver(function(a){_.B(a,function(a){var b=_.In(_.Kn(),a.target.id);if(b.$=a.isIntersecting)b.ka=a.time})},{rootMargin:"0px"})),a.aa.observe(b))},bv=function(a,b,c){_.hr(a,b,c,a.ja);b=_.vn(c);b.slotContentChanged=a.ja;c.renderEnded(b)},cv=function(a,b,c,d,e,f,g,k){var l=_.Bn(d,c);if(null!=l){var n=_.hi.is(_.wg.w);if(!n)for(var p;p=l.firstChild;)l.removeChild(p);a.j.o||(l.style.display="inline-block");k=Iu([k,a.j.N,d.ga]);b=Lu(b,l,_.An(d),f,e,g,k,!!Nu(d),Ou(d),n,a.na.m);d.m=b;d.o=!1;_.ur(a,_.xn(d,c),_.K(d))}},dv=function(a,b,c,d,e){var f=_.An(c),g=_.xn(c,b);if(null==g)if(a.Ga){var k=_.Bn(c,b);g=_.Zr(a,b,c,k,d);delete a.F[f]}else return;_.v(d)?Yu(a):(g.width=String(d[0]),g.height=String(d[1]),a.Ga&&(k=_.Bn(c,b),k.style.width="",k.style.height=""));_.Wl(g,e,!0);c.o=!1;_.ur(a,g,_.K(c))},ev=function(a,b,c){var d=c.R,e=c.getEscapedQemQueryId(),f=_.P(c,b);f&&f.setAttribute("data-google-query-id",e);Wu(a,c,e);c.renderStarted();if(null==d||d._empty_)bv(a,b,c);else if(a.N)c.renderEnded(_.vn(c));else{e=d._html_;if(!_.v(e)){_.Wr(a,c);return}_.uj.is(_.Hh.w)||_.Pl(_.P(c,b),!0);_.ds(a,c);var g;"height"==d._fluid_?g="fluid":g=[d._width_,d._height_];Zu(_.t,b,c);a.v(d)?cv(a,_.t,b,c,g,e,function(){_.Yr(a,c);a.loaded(c)},{sandbox:d._use_sandbox_||!1}):dv(a,b,c,g,e);_.sq(c,_.un(c,d))}d=c.getSlotElementId();Ku(a.T[d])&&delete a.T[d];a.ga(b,c);Xu(a,c)},fv=function(a,b,c,d){var e=c.getSlotElementId(),f=_.P(c,b);if(!_.tf(f))return!1;var g=_.jr(a,c);if(!g)return!1;var k=!!a.H[e];a.H[e]=function(){d&&(_.t.cancelIdleCallback?_.t.cancelIdleCallback(d):_.t.clearTimeout(d));ev(a,b,c)};k||g.observe(f);return!0},gv=function(a,b,c,d){var e=_.P(c,b),f=c.getSlotElementId(),g=function(){_.Dr(a,e,f,c);ev(a,b,c)};return _.t.requestIdleCallback?_.t.requestIdleCallback(g,{timeout:d}):_.t.setTimeout(g,d)},hv=function(a,b,c){if(!_.Ti.is(_.ih.Qa)&&!_.Vi.is(_.kh.w)&&!_.fj.is(_.sh.w)||!_.fo()||_.Br(a,_.t,0,c))return!1;_.Cr(a);if(!a.I)return!1;a.A[c.getSlotElementId()]=function(){return ev(a,b,c)};return!0},iv=function(a,b,c){if(_.Li.is(_.ah.vc))a=!1;else{var d=(d=c.R)&&d._timeout_render_;d=_.m(d)&&-1<d?d:null;var e=_.ir(c),f=_.P(c,b);f&&av(a,f);null==e&&null==d||_.Br(a,_.t,(e||0)/100,c)?d=!1:(f=null,null!=d&&(f=gv(a,b,c,d)),d=null!=e&&fv(a,b,c,f),d=null!=f||d);a=d||hv(a,b,c)}return a},jv=function(a,b){(a=_.P(a,b))&&a.parentNode&&""===a.innerHTML&&a.parentNode.removeChild(a)},kv=function(a,b,c,d,e,f,g,k){jv(d,c);var l=_.An(d)+"__container__";l='<div id="'+_.cb(l)+'"></div>';c.write(l);l=_.Bn(d,c);null!=l&&(a.j.o?l.style.margin="auto":l.style.display="inline-block",k=Iu([k,a.j.N,d.ga]),b=Lu(b,l,_.An(d),f,e,g,k,Nu(d)||!1,Ou(d)),d.m=b,_.ur(a,_.xn(d,c),_.K(d)))},lv=function(a,b,c,d){b=b.getSlotElementId()+"_ad_container";var e='<div id="'+_.cb(b)+'"';d&&"height"==d._fluid_?e+=' style="width:100%;">':a.j.o&&d?(e+=' style="width:'+d._width_,e+='px;margin:auto;">'):e+=">";d&&(e+=d._html_);c.write(e+"\n</div>\n");return b},mv=function(a,b,c){jv(b,c);var d=b.R;if(null!=d){var e=lv(a,b,c,d);d=_.un(b,d);b.renderEnded(d);(c=c.getElementById(e))&&_.ur(a,c,_.K(b))}},nv=function(a,b,c,d,e,f,g){g=void 0===g?window.document:g;jv(b,g);var k=_.An(b),l=[],n=0,p=0;_.w(e)?(n=e[0],p=e[1]):Yu(a);c=_.pl(c);l.push('<iframe id="',_.cb(k),'" title="',_.wr,'" name="',_.cb(k),'" width="',n,'" height="',p,'" vspace="0" hspace="0" allowtransparency="true" ','scrolling="no"',' marginwidth="0" marginheight="0" frameborder="0" style=','"border:0px;left:0;position:absolute;top:0;"',' src="',c,'"');null!=d&&l.push(' onload="',d,'"');l.push("></iframe>");d=[];c=b.getSlotElementId()+"_ad_container";d.push('<div id="',_.cb(c),'"');f&&d.push(' style="text-align:center" ');d.push(">");d.push('<ins style="position:relative;width:'+n+"px;height:"+p+'px;border:none;display:inline-table;vertical-align:bottom;">'+('<ins style="position:relative;width:'+n+"px;height:"+p+'px;border:none;display:block;">'+l.join("")+"</ins>")+"</ins>");d.push("</div>");g.write(d.join(""));(f=g.getElementById(k))&&_.ur(a,f,_.K(b))},ov=function(a,b,c){jv(b,c||window.document);return lv(a,b,c||window.document)};_.As.prototype.I=Ht(5,function(a,b,c){var d=this,e=c.R,f=c.getEscapedQemQueryId(),g=_.P(c,b);g&&g.setAttribute("data-google-query-id",f);Wu(this,c,f);if(null==e||e._empty_)_.hr(this,b,c,!1),c.renderEnded(_.vn(c));else if(this.N)c.renderEnded(_.vn(c));else if(this.v(e))if(f=function(){d.loaded(c)},g=e._html_){var k;"height"==e._fluid_?k="fluid":k=[e._width_,e._height_];Zu(a,b,c);kv(this,a,b,c,k,g,f,{sandbox:e._use_sandbox_||!1});_.sq(c,_.un(c,e))}else c.renderEnded(_.vn(c));else if(e._snippet_&&!e._is_afc_)mv(this,c,b);else if(Ju()){k="googletag.impl.pubads.syncAdSlotLoaded(this, '"+_.K(c)+"',"+c.j+");";f="about:blank";if(g=_.Fq(this.o,"google_domain_reset_url")){var l=_.te(g.match(_.se)[3]||null);if(null===l||0<=l.indexOf(window.document.domain))f=g}Zu(a,b,c);if("height"==e._fluid_){Yu(this);return}nv(this,c,f,k,[e._width_,e._height_],this.j.o,b)}else Zu(a,b,c),a=ov(this,c,b),b.write("<script>googletag.impl.pubads.createDomIframe("+St(a)+" ,"+St(_.K(c))+","+this.j.o+","+c.j+");\x3c/script>");this.ga(b,c);Xu(this,c);c.renderStarted()});_.As.prototype.ec=Ht(4,function(a){window.clearTimeout(this.T);Uu(this,a,this.F);this.F=null;this.C||(this.C=!0,_.Ds(this,this.D));this.A.length&&_.Bs(this,this.A.shift())});_.ts.prototype.ic=Ht(3,function(a,b,c,d,e){var f=this;e=void 0===e?window.document:e;var g=_.K(b);if(this.C[g]==a)if(this.N)delete this.C[g],b.renderStarted(),b.renderEnded(_.vn(b));else if(d&&delete this.C[g],a=b.R,a._empty_)b.renderStarted(),bv(this,e,b);else{a._html_=(a._html_||"")+c;var k=_.Li.is(_.ah.ab);if(!k||d&&!iv(this,e,b))if(this.v(a))d&&(Wu(this,b,b.getEscapedQemQueryId()),b.renderStarted(),cv(this,window,e,b,"height"==a._fluid_?"fluid":[a._width_,a._height_],a._html_,function(){return f.loaded(b)},{sandbox:!!a._use_sandbox_}),_.sq(b,_.un(b,b.R)));else if(e=_.xn(b,e)){var l=b.o;l&&(b.renderStarted(),Wu(this,b,b.getEscapedQemQueryId()));_.xs(b,e,k?a._html_:c,l,d);d&&(_.ur(this,e,g),_.sq(b,_.un(b,b.R)))}}});_.ts.prototype.mc=Ht(2,function(a,b,c,d){d=void 0===d?window.document:d;this.yb[a]||(this.yb[a]=!0,Mu(_.Km(),b.getCsiId(),b.T,b.j));var e=_.K(b);(c=c[b.getAdUnitPath()])&&_.rq(this.j,b)&&!this.C[e]&&(Tu(this,b,c),this.C[e]=a,_.ws(this,b,d))});_.V.prototype.Ba=Ht(1,function(a,b){b=void 0===b?window.document:b;try{var c=a.R;null==c||c._empty_||this.N||_.uj.is(_.Hh.w)&&_.Pl(_.P(a,b),!0);iv(this,b,a)?Vu(a):ev(this,b,a)}catch(d){}});_.V.prototype.dc=Ht(0,function(a,b,c){var d=this,e=this.da[c];e?(b=Uu(this,b,e),delete this.da[c],$u(this,a,b),_.B(b,function(a){return d.Ba(a)}),this.l||c!=this.Aa||(window.clearTimeout(this.Eb[_.K(e[0])]),_.as(this))):(a=new _.L("gpt_req_undef"),_.q(a),_.r(a,"req_id",String(c)),_.M(a))});var pv={},qv=(pv[1]=_.V.prototype.dc,pv[2]=_.As.prototype.ec,pv[3]=_.V.prototype.Ba,pv[4]=_.As.prototype.I,pv[5]=_.ts.prototype.ic,pv[6]=_.ts.prototype.mc,pv[7]=_.V.prototype.Wa,pv[8]=_.V.prototype.Xa,pv[9]=_.V.prototype.ha,pv);window.googletag._=function(a,b){b=void 0===b?qv:b;_.mm.push=_.N(339,function(a){var c=a&&b[a.ya];c&&c.apply(a.Ja,a.xa);return 0});_.B(_.mm,function(a){return _.mm.push(a)});_.mm.length=0};})