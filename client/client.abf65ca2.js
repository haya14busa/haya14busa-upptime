function e(){}function t(e,t){for(const n in t)e[n]=t[n];return e}function n(e){return e()}function r(){return Object.create(null)}function s(e){e.forEach(n)}function o(e){return"function"==typeof e}function i(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function a(e,n,r,s){return e[1]&&s?t(r.ctx.slice(),e[1](s(n))):r.ctx}function c(e,t,n,r,s,o,i){const c=function(e,t,n,r){if(e[2]&&r){const s=e[2](r(n));if(void 0===t.dirty)return s;if("object"==typeof s){const e=[],n=Math.max(t.dirty.length,s.length);for(let r=0;r<n;r+=1)e[r]=t.dirty[r]|s[r];return e}return t.dirty|s}return t.dirty}(t,r,s,o);if(c){const s=a(t,n,r,i);e.p(s,c)}}function l(e){const t={};for(const n in e)"$"!==n[0]&&(t[n]=e[n]);return t}function u(e){return null==e?"":e}function f(e,t){e.appendChild(t)}function d(e,t,n){e.insertBefore(t,n||null)}function h(e){e.parentNode.removeChild(e)}function p(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function m(e){return document.createElement(e)}function g(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function b(e){return document.createTextNode(e)}function v(){return b(" ")}function $(){return b("")}function y(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function w(e){return function(t){return t.preventDefault(),e.call(this,t)}}function _(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function E(e,t){const n=Object.getOwnPropertyDescriptors(e.__proto__);for(const r in t)null==t[r]?e.removeAttribute(r):"style"===r?e.style.cssText=t[r]:"__value"===r?e.value=e[r]=t[r]:n[r]&&n[r].set?e[r]=t[r]:_(e,r,t[r])}function x(e){return Array.from(e.childNodes)}function S(e,t,n,r){for(let r=0;r<e.length;r+=1){const s=e[r];if(s.nodeName===t){let t=0;const o=[];for(;t<s.attributes.length;){const e=s.attributes[t++];n[e.name]||o.push(e.name)}for(let e=0;e<o.length;e++)s.removeAttribute(o[e]);return e.splice(r,1)[0]}}return r?g(t):m(t)}function P(e,t){for(let n=0;n<e.length;n+=1){const r=e[n];if(3===r.nodeType)return r.data=""+t,e.splice(n,1)[0]}return b(t)}function T(e){return P(e," ")}function A(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function I(e,t){e.value=null==t?"":t}let R,L;function N(){if(void 0===R){R=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(e){R=!0}}return R}function O(e,t){"static"===getComputedStyle(e).position&&(e.style.position="relative");const n=m("iframe");n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1;const r=N();let s;return r?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",s=y(window,"message",(e=>{e.source===n.contentWindow&&t()}))):(n.src="about:blank",n.onload=()=>{s=y(n.contentWindow,"resize",t)}),f(e,n),()=>{(r||s&&n.contentWindow)&&s(),h(n)}}function k(e,t=document.body){return Array.from(t.querySelectorAll(e))}class C{constructor(e=null){this.a=e,this.e=this.n=null}m(e,t,n=null){this.e||(this.e=m(t.nodeName),this.t=t,this.h(e)),this.i(n)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)d(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(h)}}function U(e){L=e}function j(){if(!L)throw new Error("Function called outside component initialization");return L}function H(e){j().$$.on_mount.push(e)}function G(e){j().$$.after_update.push(e)}function q(e){j().$$.on_destroy.push(e)}const M=[],D=[],B=[],J=[],V=Promise.resolve();let K=!1;function W(e){B.push(e)}let F=!1;const Y=new Set;function z(){if(!F){F=!0;do{for(let e=0;e<M.length;e+=1){const t=M[e];U(t),Q(t.$$)}for(U(null),M.length=0;D.length;)D.pop()();for(let e=0;e<B.length;e+=1){const t=B[e];Y.has(t)||(Y.add(t),t())}B.length=0}while(M.length);for(;J.length;)J.pop()();K=!1,F=!1,Y.clear()}}function Q(e){if(null!==e.fragment){e.update(),s(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(W)}}const X=new Set;let Z;function ee(){Z={r:0,c:[],p:Z}}function te(){Z.r||s(Z.c),Z=Z.p}function ne(e,t){e&&e.i&&(X.delete(e),e.i(t))}function re(e,t,n,r){if(e&&e.o){if(X.has(e))return;X.add(e),Z.c.push((()=>{X.delete(e),r&&(n&&e.d(1),r())})),e.o(t)}}function se(e,t){const n={},r={},s={$$scope:1};let o=e.length;for(;o--;){const i=e[o],a=t[o];if(a){for(const e in i)e in a||(r[e]=1);for(const e in a)s[e]||(n[e]=a[e],s[e]=1);e[o]=a}else for(const e in i)s[e]=1}for(const e in r)e in n||(n[e]=void 0);return n}function oe(e){return"object"==typeof e&&null!==e?e:{}}function ie(e){e&&e.c()}function ae(e,t){e&&e.l(t)}function ce(e,t,r){const{fragment:i,on_mount:a,on_destroy:c,after_update:l}=e.$$;i&&i.m(t,r),W((()=>{const t=a.map(n).filter(o);c?c.push(...t):s(t),e.$$.on_mount=[]})),l.forEach(W)}function le(e,t){const n=e.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ue(e,t){-1===e.$$.dirty[0]&&(M.push(e),K||(K=!0,V.then(z)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function fe(t,n,o,i,a,c,l=[-1]){const u=L;U(t);const f=n.props||{},d=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:a,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:r(),dirty:l,skip_bound:!1};let p=!1;if(d.ctx=o?o(t,f,((e,n,...r)=>{const s=r.length?r[0]:n;return d.ctx&&a(d.ctx[e],d.ctx[e]=s)&&(!d.skip_bound&&d.bound[e]&&d.bound[e](s),p&&ue(t,e)),n})):[],d.update(),p=!0,s(d.before_update),d.fragment=!!i&&i(d.ctx),n.target){if(n.hydrate){const e=x(n.target);d.fragment&&d.fragment.l(e),e.forEach(h)}else d.fragment&&d.fragment.c();n.intro&&ne(t.$$.fragment),ce(t,n.target,n.anchor),z()}U(u)}class de{$destroy(){le(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const he=[];function pe(t,n=e){let r;const s=[];function o(e){if(i(t,e)&&(t=e,r)){const e=!he.length;for(let e=0;e<s.length;e+=1){const n=s[e];n[1](),he.push(n,t)}if(e){for(let e=0;e<he.length;e+=2)he[e][0](he[e+1]);he.length=0}}}return{set:o,update:function(e){o(e(t))},subscribe:function(i,a=e){const c=[i,a];return s.push(c),1===s.length&&(r=n(o)||e),i(t),()=>{const e=s.indexOf(c);-1!==e&&s.splice(e,1),0===s.length&&(r(),r=null)}}}}const me={};var ge={owner:"haya14busa",repo:"haya14busa-upptime",sites:[{name:"haya14busa.dev",url:"https://haya14busa.dev"},{name:"haya14busa.com",url:"http://haya14busa.com"}],"status-website":{baseUrl:"/haya14busa-upptime",logoUrl:"https://raw.githubusercontent.com/upptime/upptime.js.org/master/static/img/icon.svg",name:"Upptime",introTitle:"**Upptime** is the open-source uptime monitor and status page, powered entirely by GitHub.",introMessage:"This is a sample status page which uses **real-time** data from our [GitHub repository](https://github.com/upptime/upptime). No server required — just GitHub Actions, Issues, and Pages. [**Get your own for free**](https://github.com/upptime/upptime)",navbar:[{title:"Status",href:"/haya14busa-upptime"},{title:"GitHub",href:"https://github.com/$OWNER/$REPO"}]},path:"https://haya14busa.github.io/haya14busa-upptime",i18n:{activeIncidents:"Active Incidents",allSystemsOperational:"All systems are operational",incidentReport:"Incident #$NUMBER report →",activeIncidentSummary:"Opened at $DATE with $POSTS posts",incidentTitle:"Incident $NUMBER Details",incidentDetails:"Incident Details",incidentFixed:"Fixed",incidentOngoing:"Ongoing",incidentOpenedAt:"Opened at",incidentClosedAt:"Closed at",incidentSubscribe:"Subscribe to Updates",incidentViewOnGitHub:"View on GitHub",incidentCommentSummary:"Posted at $DATE by $AUTHOR",incidentBack:"← Back to all incidents",pastIncidents:"Past Incidents",pastIncidentsResolved:"Resolved in $MINUTES minutes with $POSTS posts",liveStatus:"Live Status",overallUptime:"Overall uptime: $UPTIME",overallUptimeTitle:"Overall uptime",averageResponseTime:"Average response time: $TIMEms",averageResponseTimeTitle:"Average response",sevelDayResponseTime:"7-day response time",responseTimeMs:"Response time (ms)",up:"Up",down:"Down",degraded:"Degraded",ms:"ms",loading:"Loading",navGitHub:"GitHub",footer:"This page is [open source]($REPO), powered by [Upptime](https://upptime.js.org)",rateLimitExceededTitle:"Rate limit exceedeed",rateLimitExceededIntro:"You have exceeded the number of requests you can do in an hour, so you'll have to wait before accessing this website again. Alternately, you can add a GitHub Personal Access Token to continue to use this website.",rateLimitExceededWhatDoesErrorMean:"What does this error mean?",rateLimitExceededErrorMeaning:"This website uses the GitHub API to access real-time data about our websites' status. By default, GitHub allows each IP address 60 requests per hour, which you have consumed.",rateLimitExceededErrorHowCanFix:"How can I fix it?",rateLimitExceededErrorFix:"You can wait for another hour and your IP address' limit will be restored. Alternately, you can add your GitHub Personal Access Token, which gives you an additional 5,000 requests per hour.",rateLimitExceededGeneratePAT:"Learn how to generate a Personal Access Token",rateLimitExceededHasSet:"You have a personal access token set.",rateLimitExceededRemoveToken:"Remove token",rateLimitExceededGitHubPAT:"GitHub Personal Access Token",rateLimitExceededCopyPastePAT:"Copy and paste your token",rateLimitExceededSaveToken:"Save token",errorTitle:"An error occurred",errorIntro:"An error occurred in trying to get the latest status details.",errorText:"You can try again in a few moments.",errorHome:"Go to the homepage"}};function be(e,t,n){const r=e.slice();return r[1]=t[n],r}function ve(e){let t,n,r,s,o,i=e[1].title+"";return{c(){t=m("li"),n=m("a"),r=b(i),o=v(),this.h()},l(e){t=S(e,"LI",{});var s=x(t);n=S(s,"A",{"aria-current":!0,href:!0,class:!0});var a=x(n);r=P(a,i),a.forEach(h),o=T(s),s.forEach(h),this.h()},h(){_(n,"aria-current",s=e[0]===("/"===e[1].href?void 0:e[1].href)?"page":void 0),_(n,"href",e[1].href.replace("$OWNER",ge.owner).replace("$REPO",ge.repo)),_(n,"class","svelte-1sgaob0")},m(e,s){d(e,t,s),f(t,n),f(n,r),f(t,o)},p(e,t){1&t&&s!==(s=e[0]===("/"===e[1].href?void 0:e[1].href)?"page":void 0)&&_(n,"aria-current",s)},d(e){e&&h(t)}}}function $e(t){let n,r,s,o,i,a=ge["status-website"]&&ge["status-website"].logoUrl&&function(t){let n,r,s,o,i,a,c,l=ge["status-website"].name+"";return{c(){n=m("div"),r=m("a"),s=m("img"),i=v(),a=m("div"),c=b(l),this.h()},l(e){n=S(e,"DIV",{});var t=x(n);r=S(t,"A",{href:!0,class:!0});var o=x(r);s=S(o,"IMG",{alt:!0,src:!0,class:!0}),i=T(o),a=S(o,"DIV",{});var u=x(a);c=P(u,l),u.forEach(h),o.forEach(h),t.forEach(h),this.h()},h(){_(s,"alt",""),s.src!==(o=ge["status-website"].logoUrl)&&_(s,"src",o),_(s,"class","svelte-1sgaob0"),_(r,"href",ge["status-website"].logoHref||ge.path),_(r,"class","logo svelte-1sgaob0")},m(e,t){d(e,n,t),f(n,r),f(r,s),f(r,i),f(r,a),f(a,c)},p:e,d(e){e&&h(n)}}}(),c=ge["status-website"]&&ge["status-website"].navbar&&function(e){let t,n=ge["status-website"].navbar,r=[];for(let t=0;t<n.length;t+=1)r[t]=ve(be(e,n,t));return{c(){for(let e=0;e<r.length;e+=1)r[e].c();t=$()},l(e){for(let t=0;t<r.length;t+=1)r[t].l(e);t=$()},m(e,n){for(let t=0;t<r.length;t+=1)r[t].m(e,n);d(e,t,n)},p(e,s){if(1&s){let o;for(n=ge["status-website"].navbar,o=0;o<n.length;o+=1){const i=be(e,n,o);r[o]?r[o].p(i,s):(r[o]=ve(i),r[o].c(),r[o].m(t.parentNode,t))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(e){p(r,e),e&&h(t)}}}(t),l=ge["status-website"]&&ge["status-website"].navbarGitHub&&!ge["status-website"].navbar&&function(t){let n,r,s,o=ge.i18n.navGitHub+"";return{c(){n=m("li"),r=m("a"),s=b(o),this.h()},l(e){n=S(e,"LI",{});var t=x(n);r=S(t,"A",{href:!0,class:!0});var i=x(r);s=P(i,o),i.forEach(h),t.forEach(h),this.h()},h(){_(r,"href",`https://github.com/${ge.owner}/${ge.repo}`),_(r,"class","svelte-1sgaob0")},m(e,t){d(e,n,t),f(n,r),f(r,s)},p:e,d(e){e&&h(n)}}}();return{c(){n=m("nav"),r=m("div"),a&&a.c(),s=v(),o=m("ul"),c&&c.c(),i=v(),l&&l.c(),this.h()},l(e){n=S(e,"NAV",{class:!0});var t=x(n);r=S(t,"DIV",{class:!0});var u=x(r);a&&a.l(u),s=T(u),o=S(u,"UL",{class:!0});var f=x(o);c&&c.l(f),i=T(f),l&&l.l(f),f.forEach(h),u.forEach(h),t.forEach(h),this.h()},h(){_(o,"class","svelte-1sgaob0"),_(r,"class","container svelte-1sgaob0"),_(n,"class","svelte-1sgaob0")},m(e,t){d(e,n,t),f(n,r),a&&a.m(r,null),f(r,s),f(r,o),c&&c.m(o,null),f(o,i),l&&l.m(o,null)},p(e,[t]){ge["status-website"]&&ge["status-website"].logoUrl&&a.p(e,t),ge["status-website"]&&ge["status-website"].navbar&&c.p(e,t),ge["status-website"]&&ge["status-website"].navbarGitHub&&!ge["status-website"].navbar&&l.p(e,t)},i:e,o:e,d(e){e&&h(n),a&&a.d(),c&&c.d(),l&&l.d()}}}function ye(e,t,n){let{segment:r}=t;return e.$$set=e=>{"segment"in e&&n(0,r=e.segment)},[r]}class we extends de{constructor(e){super(),fe(this,e,ye,$e,i,{segment:0})}}var _e={"":["<em>","</em>"],_:["<strong>","</strong>"],"*":["<strong>","</strong>"],"~":["<s>","</s>"],"\n":["<br />"]," ":["<br />"],"-":["<hr />"]};function Ee(e){return e.replace(RegExp("^"+(e.match(/^(\t| )+/)||"")[0],"gm"),"")}function xe(e){return(e+"").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Se(e,t){var n,r,s,o,i,a=/((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^``` *(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:!\[([^\]]*?)\]\(([^)]+?)\))|(\[)|(\](?:\(([^)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,6})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*]|~~)/gm,c=[],l="",u=t||{},f=0;function d(e){var t=_e[e[1]||""],n=c[c.length-1]==e;return t?t[1]?(n?c.pop():c.push(e),t[0|n]):t[0]:e}function h(){for(var e="";c.length;)e+=d(c[c.length-1]);return e}for(e=e.replace(/^\[(.+?)\]:\s*(.+)$/gm,(function(e,t,n){return u[t.toLowerCase()]=n,""})).replace(/^\n+|\n+$/g,"");s=a.exec(e);)r=e.substring(f,s.index),f=a.lastIndex,n=s[0],r.match(/[^\\](\\\\)*\\$/)||((i=s[3]||s[4])?n='<pre class="code '+(s[4]?"poetry":s[2].toLowerCase())+'"><code'+(s[2]?' class="language-'+s[2].toLowerCase()+'"':"")+">"+Ee(xe(i).replace(/^\n+|\n+$/g,""))+"</code></pre>":(i=s[6])?(i.match(/\./)&&(s[5]=s[5].replace(/^\d+/gm,"")),o=Se(Ee(s[5].replace(/^\s*[>*+.-]/gm,""))),">"==i?i="blockquote":(i=i.match(/\./)?"ol":"ul",o=o.replace(/^(.*)(\n|$)/gm,"<li>$1</li>")),n="<"+i+">"+o+"</"+i+">"):s[8]?n='<img src="'+xe(s[8])+'" alt="'+xe(s[7])+'">':s[10]?(l=l.replace("<a>",'<a href="'+xe(s[11]||u[r.toLowerCase()])+'">'),n=h()+"</a>"):s[9]?n="<a>":s[12]||s[14]?n="<"+(i="h"+(s[14]?s[14].length:s[13]>"="?1:2))+">"+Se(s[12]||s[15],u)+"</"+i+">":s[16]?n="<code>"+xe(s[16])+"</code>":(s[17]||s[1])&&(n=d(s[17]||"--"))),l+=r,l+=n;return(l+e.substring(f)+h()).replace(/^\n+|\n+$/g,"")}function Pe(e,t,n){const r=e.slice();return r[3]=t[n],r}function Te(e,t,n){const r=e.slice();return r[6]=t[n],r}function Ae(t){let n,r;return{c(){n=m("script"),this.h()},l(e){n=S(e,"SCRIPT",{src:!0,async:!0,defer:!0}),x(n).forEach(h),this.h()},h(){n.src!==(r=t[6].src)&&_(n,"src",r),n.async=!!t[6].async,n.defer=!!t[6].async},m(e,t){d(e,n,t)},p:e,d(e){e&&h(n)}}}function Ie(t){let n;return{c(){n=m("link"),this.h()},l(e){n=S(e,"LINK",{rel:!0,href:!0,media:!0}),this.h()},h(){_(n,"rel",t[3].rel),_(n,"href",t[3].href),_(n,"media",t[3].media)},m(e,t){d(e,n,t)},p:e,d(e){e&&h(n)}}}function Re(e){let t,n,r,s,o,i,l,u,g,y,w,E,A,I,R=Se(ge.i18n.footer.replace(/\$REPO/,`https://github.com/${ge.owner}/${ge.repo}`))+"",L=ge["status-website"].scripts&&function(e){let t,n=ge["status-website"].scripts,r=[];for(let t=0;t<n.length;t+=1)r[t]=Ae(Te(e,n,t));return{c(){for(let e=0;e<r.length;e+=1)r[e].c();t=$()},l(e){for(let t=0;t<r.length;t+=1)r[t].l(e);t=$()},m(e,n){for(let t=0;t<r.length;t+=1)r[t].m(e,n);d(e,t,n)},p(e,s){if(0&s){let o;for(n=ge["status-website"].scripts,o=0;o<n.length;o+=1){const i=Te(e,n,o);r[o]?r[o].p(i,s):(r[o]=Ae(i),r[o].c(),r[o].m(t.parentNode,t))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(e){p(r,e),e&&h(t)}}}(e),N=ge["status-website"].links&&function(e){let t,n=ge["status-website"].links,r=[];for(let t=0;t<n.length;t+=1)r[t]=Ie(Pe(e,n,t));return{c(){for(let e=0;e<r.length;e+=1)r[e].c();t=$()},l(e){for(let t=0;t<r.length;t+=1)r[t].l(e);t=$()},m(e,n){for(let t=0;t<r.length;t+=1)r[t].m(e,n);d(e,t,n)},p(e,s){if(0&s){let o;for(n=ge["status-website"].links,o=0;o<n.length;o+=1){const i=Pe(e,n,o);r[o]?r[o].p(i,s):(r[o]=Ie(i),r[o].c(),r[o].m(t.parentNode,t))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(e){p(r,e),e&&h(t)}}}(e),O=ge["status-website"].css&&function(e){let t,n;return{c(){t=m("style"),n=b("{config['status-website'].css}\n    ")},l(e){t=S(e,"STYLE",{});var r=x(t);n=P(r,"{config['status-website'].css}\n    "),r.forEach(h)},m(e,r){d(e,t,r),f(t,n)},d(e){e&&h(t)}}}(),C=ge["status-website"].js&&function(e){let t,n;return{c(){t=m("script"),n=b('{\n        config["status-website"].js;\n      }')},l(e){t=S(e,"SCRIPT",{});var r=x(t);n=P(r,'{\n        config["status-website"].js;\n      }'),r.forEach(h)},m(e,r){d(e,t,r),f(t,n)},d(e){e&&h(t)}}}();u=new we({props:{segment:e[0]}});const U=e[2].default,j=function(e,t,n,r){if(e){const s=a(e,t,n,r);return e[0](s)}}(U,e,e[1],null);return{c(){t=m("link"),n=m("link"),L&&L.c(),r=$(),N&&N.c(),s=$(),O&&O.c(),o=$(),C&&C.c(),i=$(),l=v(),ie(u.$$.fragment),g=v(),y=m("main"),j&&j.c(),w=v(),E=m("footer"),A=m("p"),this.h()},l(e){const a=k('[data-svelte="svelte-1pvickc"]',document.head);t=S(a,"LINK",{rel:!0,type:!0,href:!0}),n=S(a,"LINK",{rel:!0,type:!0,href:!0}),L&&L.l(a),r=$(),N&&N.l(a),s=$(),O&&O.l(a),o=$(),C&&C.l(a),i=$(),a.forEach(h),l=T(e),ae(u.$$.fragment,e),g=T(e),y=S(e,"MAIN",{class:!0});var c=x(y);j&&j.l(c),c.forEach(h),w=T(e),E=S(e,"FOOTER",{class:!0});var f=x(E);A=S(f,"P",{}),x(A).forEach(h),f.forEach(h),this.h()},h(){_(t,"rel","icon"),_(t,"type","image/svg"),_(t,"href",(ge["status-website"]||{}).faviconSvg||(ge["status-website"]||{}).favicon||"https://raw.githubusercontent.com/koj-co/upptime/master/assets/icon.svg"),_(n,"rel","icon"),_(n,"type","image/png"),_(n,"href",(ge["status-website"]||{}).favicon||"/logo-192.png"),_(y,"class","container"),_(E,"class","svelte-jbr799")},m(e,a){f(document.head,t),f(document.head,n),L&&L.m(document.head,null),f(document.head,r),N&&N.m(document.head,null),f(document.head,s),O&&O.m(document.head,null),f(document.head,o),C&&C.m(document.head,null),f(document.head,i),d(e,l,a),ce(u,e,a),d(e,g,a),d(e,y,a),j&&j.m(y,null),d(e,w,a),d(e,E,a),f(E,A),A.innerHTML=R,I=!0},p(e,[t]){ge["status-website"].scripts&&L.p(e,t),ge["status-website"].links&&N.p(e,t);const n={};1&t&&(n.segment=e[0]),u.$set(n),j&&j.p&&2&t&&c(j,U,e,e[1],t,null,null)},i(e){I||(ne(u.$$.fragment,e),ne(j,e),I=!0)},o(e){re(u.$$.fragment,e),re(j,e),I=!1},d(e){h(t),h(n),L&&L.d(e),h(r),N&&N.d(e),h(s),O&&O.d(e),h(o),C&&C.d(e),h(i),e&&h(l),le(u,e),e&&h(g),e&&h(y),j&&j.d(e),e&&h(w),e&&h(E)}}}function Le(e,t,n){let{$$slots:r={},$$scope:s}=t,{segment:o}=t;return e.$$set=e=>{"segment"in e&&n(0,o=e.segment),"$$scope"in e&&n(1,s=e.$$scope)},[o,s,r]}class Ne extends de{constructor(e){super(),fe(this,e,Le,Re,i,{segment:0})}}function Oe(e){let t,n,r=e[1].stack+"";return{c(){t=m("pre"),n=b(r)},l(e){t=S(e,"PRE",{});var s=x(t);n=P(s,r),s.forEach(h)},m(e,r){d(e,t,r),f(t,n)},p(e,t){2&t&&r!==(r=e[1].stack+"")&&A(n,r)},d(e){e&&h(t)}}}function ke(t){let n,r,s,o,i,a,c,l,u,p=t[1].message+"";document.title=n=t[0];let g=t[2]&&t[1].stack&&Oe(t);return{c(){r=v(),s=m("h1"),o=b(t[0]),i=v(),a=m("p"),c=b(p),l=v(),g&&g.c(),u=$(),this.h()},l(e){k('[data-svelte="svelte-1moakz"]',document.head).forEach(h),r=T(e),s=S(e,"H1",{class:!0});var n=x(s);o=P(n,t[0]),n.forEach(h),i=T(e),a=S(e,"P",{class:!0});var f=x(a);c=P(f,p),f.forEach(h),l=T(e),g&&g.l(e),u=$(),this.h()},h(){_(s,"class","svelte-17w3omn"),_(a,"class","svelte-17w3omn")},m(e,t){d(e,r,t),d(e,s,t),f(s,o),d(e,i,t),d(e,a,t),f(a,c),d(e,l,t),g&&g.m(e,t),d(e,u,t)},p(e,[t]){1&t&&n!==(n=e[0])&&(document.title=n),1&t&&A(o,e[0]),2&t&&p!==(p=e[1].message+"")&&A(c,p),e[2]&&e[1].stack?g?g.p(e,t):(g=Oe(e),g.c(),g.m(u.parentNode,u)):g&&(g.d(1),g=null)},i:e,o:e,d(e){e&&h(r),e&&h(s),e&&h(i),e&&h(a),e&&h(l),g&&g.d(e),e&&h(u)}}}function Ce(e,t,n){let{status:r}=t,{error:s}=t;return e.$$set=e=>{"status"in e&&n(0,r=e.status),"error"in e&&n(1,s=e.error)},[r,s,false]}class Ue extends de{constructor(e){super(),fe(this,e,Ce,ke,i,{status:0,error:1})}}function je(e){let n,r,s;const o=[e[4].props];var i=e[4].component;function a(e){let n={};for(let e=0;e<o.length;e+=1)n=t(n,o[e]);return{props:n}}return i&&(n=new i(a())),{c(){n&&ie(n.$$.fragment),r=$()},l(e){n&&ae(n.$$.fragment,e),r=$()},m(e,t){n&&ce(n,e,t),d(e,r,t),s=!0},p(e,t){const s=16&t?se(o,[oe(e[4].props)]):{};if(i!==(i=e[4].component)){if(n){ee();const e=n;re(e.$$.fragment,1,0,(()=>{le(e,1)})),te()}i?(n=new i(a()),ie(n.$$.fragment),ne(n.$$.fragment,1),ce(n,r.parentNode,r)):n=null}else i&&n.$set(s)},i(e){s||(n&&ne(n.$$.fragment,e),s=!0)},o(e){n&&re(n.$$.fragment,e),s=!1},d(e){e&&h(r),n&&le(n,e)}}}function He(e){let t,n;return t=new Ue({props:{error:e[0],status:e[1]}}),{c(){ie(t.$$.fragment)},l(e){ae(t.$$.fragment,e)},m(e,r){ce(t,e,r),n=!0},p(e,n){const r={};1&n&&(r.error=e[0]),2&n&&(r.status=e[1]),t.$set(r)},i(e){n||(ne(t.$$.fragment,e),n=!0)},o(e){re(t.$$.fragment,e),n=!1},d(e){le(t,e)}}}function Ge(e){let t,n,r,s;const o=[He,je],i=[];function a(e,t){return e[0]?0:1}return t=a(e),n=i[t]=o[t](e),{c(){n.c(),r=$()},l(e){n.l(e),r=$()},m(e,n){i[t].m(e,n),d(e,r,n),s=!0},p(e,s){let c=t;t=a(e),t===c?i[t].p(e,s):(ee(),re(i[c],1,1,(()=>{i[c]=null})),te(),n=i[t],n?n.p(e,s):(n=i[t]=o[t](e),n.c()),ne(n,1),n.m(r.parentNode,r))},i(e){s||(ne(n),s=!0)},o(e){re(n),s=!1},d(e){i[t].d(e),e&&h(r)}}}function qe(e){let n,r;const s=[{segment:e[2][0]},e[3].props];let o={$$slots:{default:[Ge]},$$scope:{ctx:e}};for(let e=0;e<s.length;e+=1)o=t(o,s[e]);return n=new Ne({props:o}),{c(){ie(n.$$.fragment)},l(e){ae(n.$$.fragment,e)},m(e,t){ce(n,e,t),r=!0},p(e,[t]){const r=12&t?se(s,[4&t&&{segment:e[2][0]},8&t&&oe(e[3].props)]):{};147&t&&(r.$$scope={dirty:t,ctx:e}),n.$set(r)},i(e){r||(ne(n.$$.fragment,e),r=!0)},o(e){re(n.$$.fragment,e),r=!1},d(e){le(n,e)}}}function Me(e,t,n){let{stores:r}=t,{error:s}=t,{status:o}=t,{segments:i}=t,{level0:a}=t,{level1:c=null}=t,{notify:l}=t;var u,f;return G(l),u=me,f=r,j().$$.context.set(u,f),e.$$set=e=>{"stores"in e&&n(5,r=e.stores),"error"in e&&n(0,s=e.error),"status"in e&&n(1,o=e.status),"segments"in e&&n(2,i=e.segments),"level0"in e&&n(3,a=e.level0),"level1"in e&&n(4,c=e.level1),"notify"in e&&n(6,l=e.notify)},[s,o,i,a,c,r,l]}class De extends de{constructor(e){super(),fe(this,e,Me,qe,i,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const Be=[],Je=[{js:()=>Promise.all([import("./index.91a088ff.js"),__inject_styles(["client-f7e6ed36.css","createOctokit-777bf8f6.css","index-d57edde8.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./rate-limit-exceeded.8c652c69.js"),__inject_styles(["client-f7e6ed36.css","rate-limit-exceeded-e1b7a1b3.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./[number].0fcbc4bd.js"),__inject_styles(["client-f7e6ed36.css","createOctokit-777bf8f6.css","[number]-7cdb9800.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./[number].b95cea1e.js"),__inject_styles(["client-f7e6ed36.css","createOctokit-777bf8f6.css","[number]-e7104239.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./error.c6e5e162.js"),__inject_styles(["client-f7e6ed36.css","error-a44b661b.css"])]).then((function(e){return e[0]}))}],Ve=(Ke=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/rate-limit-exceeded\/?$/,parts:[{i:1}]},{pattern:/^\/incident\/([^/]+?)\/?$/,parts:[null,{i:2,params:e=>({number:Ke(e[1])})}]},{pattern:/^\/history\/([^/]+?)\/?$/,parts:[null,{i:3,params:e=>({number:Ke(e[1])})}]},{pattern:/^\/error\/?$/,parts:[{i:4}]}]);var Ke;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function We(e,t,n,r){return new(n||(n=Promise))((function(s,o){function i(e){try{c(r.next(e))}catch(e){o(e)}}function a(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}c((r=r.apply(e,t||[])).next())}))}function Fe(e){for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;return e}let Ye,ze=1;const Qe="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},Xe={};let Ze,et;function tt(e){const t=Object.create(null);return e.length>0&&e.slice(1).split("&").forEach((e=>{const[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(e.replace(/\+/g," ")));"string"==typeof t[n]&&(t[n]=[t[n]]),"object"==typeof t[n]?t[n].push(r):t[n]=r})),t}function nt(e){if(e.origin!==location.origin)return null;if(!e.pathname.startsWith(Ze))return null;let t=e.pathname.slice(Ze.length);if(""===t&&(t="/"),!Be.some((e=>e.test(t))))for(let n=0;n<Ve.length;n+=1){const r=Ve[n],s=r.pattern.exec(t);if(s){const n=tt(e.search),o=r.parts[r.parts.length-1],i=o.params?o.params(s):{},a={host:location.host,path:t,query:n,params:i};return{href:e.href,route:r,match:s,page:a}}}}function rt(e){if(1!==function(e){return null===e.which?e.button:e.which}(e))return;if(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;if(e.defaultPrevented)return;const t=Fe(e.target);if(!t)return;if(!t.href)return;const n="object"==typeof t.href&&"SVGAnimatedString"===t.href.constructor.name,r=String(n?t.href.baseVal:t.href);if(r===location.href)return void(location.hash||e.preventDefault());if(t.hasAttribute("download")||"external"===t.getAttribute("rel"))return;if(n?t.target.baseVal:t.target)return;const s=new URL(r);if(s.pathname===location.pathname&&s.search===location.search)return;const o=nt(s);if(o){it(o,null,t.hasAttribute("sapper:noscroll"),s.hash),e.preventDefault(),Qe.pushState({id:Ye},"",s.href)}}function st(){return{x:pageXOffset,y:pageYOffset}}function ot(e){if(Xe[Ye]=st(),e.state){const t=nt(new URL(location.href));t?it(t,e.state.id):location.href=location.href}else!function(e){ze=e}(ze+1),function(e){Ye=e}(ze),Qe.replaceState({id:Ye},"",location.href)}function it(e,t,n,r){return We(this,void 0,void 0,(function*(){const s=!!t;if(s)Ye=t;else{const e=st();Xe[Ye]=e,Ye=t=++ze,Xe[Ye]=n?e:{x:0,y:0}}if(yield et(e),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let e,n=Xe[t];r&&(e=document.getElementById(r.slice(1)),e&&(n={x:0,y:e.getBoundingClientRect().top+scrollY})),Xe[Ye]=n,s||e?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function at(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}let ct,lt=null;function ut(e){const t=Fe(e.target);t&&"prefetch"===t.rel&&function(e){const t=nt(new URL(e,at(document)));if(t)lt&&e===lt.href||(lt={href:e,promise:Tt(t)}),lt.promise}(t.href)}function ft(e){clearTimeout(ct),ct=setTimeout((()=>{ut(e)}),20)}function dt(e,t={noscroll:!1,replaceState:!1}){const n=nt(new URL(e,at(document)));return n?(Qe[t.replaceState?"replaceState":"pushState"]({id:Ye},"",e),it(n,null,t.noscroll)):(location.href=e,new Promise((()=>{})))}const ht="undefined"!=typeof __SAPPER__&&__SAPPER__;let pt,mt,gt,bt=!1,vt=[],$t="{}";const yt={page:function(e){const t=pe(e);let n=!0;return{notify:function(){n=!0,t.update((e=>e))},set:function(e){n=!1,t.set(e)},subscribe:function(e){let r;return t.subscribe((t=>{(void 0===r||n&&t!==r)&&e(r=t)}))}}}({}),preloading:pe(null),session:pe(ht&&ht.session)};let wt,_t,Et;function xt(e,t){const{error:n}=e;return Object.assign({error:n},t)}function St(e){return We(this,void 0,void 0,(function*(){pt&&yt.preloading.set(!0);const t=function(e){return lt&&lt.href===e.href?lt.promise:Tt(e)}(e),n=mt={},r=yield t,{redirect:s}=r;if(n===mt)if(s)yield dt(s.location,{replaceState:!0});else{const{props:t,branch:n}=r;yield Pt(n,t,xt(t,e.page))}}))}function Pt(e,t,n){return We(this,void 0,void 0,(function*(){yt.page.set(n),yt.preloading.set(!1),pt?pt.$set(t):(t.stores={page:{subscribe:yt.page.subscribe},preloading:{subscribe:yt.preloading.subscribe},session:yt.session},t.level0={props:yield gt},t.notify=yt.page.notify,pt=new De({target:Et,props:t,hydrate:!0})),vt=e,$t=JSON.stringify(n.query),bt=!0,_t=!1}))}function Tt(e){return We(this,void 0,void 0,(function*(){const{route:t,page:n}=e,r=n.path.split("/").filter(Boolean);let s=null;const o={error:null,status:200,segments:[r[0]]},i={fetch:(e,t)=>fetch(e,t),redirect:(e,t)=>{if(s&&(s.statusCode!==e||s.location!==t))throw new Error("Conflicting redirects");s={statusCode:e,location:t}},error:(e,t)=>{o.error="string"==typeof t?new Error(t):t,o.status=e}};if(!gt){const e=()=>({});gt=ht.preloaded[0]||e.call(i,{host:n.host,path:n.path,query:n.query,params:{}},wt)}let a,c=1;try{const s=JSON.stringify(n.query),l=t.pattern.exec(n.path);let u=!1;a=yield Promise.all(t.parts.map(((t,a)=>We(this,void 0,void 0,(function*(){const f=r[a];if(function(e,t,n,r){if(r!==$t)return!0;const s=vt[e];return!!s&&(t!==s.segment||!(!s.match||JSON.stringify(s.match.slice(1,e+2))===JSON.stringify(n.slice(1,e+2)))||void 0)}(a,f,l,s)&&(u=!0),o.segments[c]=r[a+1],!t)return{segment:f};const d=c++;if(!_t&&!u&&vt[a]&&vt[a].part===t.i)return vt[a];u=!1;const{default:h,preload:p}=yield Je[t.i].js();let m;return m=bt||!ht.preloaded[a+1]?p?yield p.call(i,{host:n.host,path:n.path,query:n.query,params:t.params?t.params(e.match):{}},wt):{}:ht.preloaded[a+1],o[`level${d}`]={component:h,props:m,segment:f,match:l,part:t.i}})))))}catch(e){o.error=e,o.status=500,a=[]}return{redirect:s,props:o,branch:a}}))}var At,It,Rt;yt.session.subscribe((e=>We(void 0,void 0,void 0,(function*(){if(wt=e,!bt)return;_t=!0;const t=nt(new URL(location.href)),n=mt={},{redirect:r,props:s,branch:o}=yield Tt(t);n===mt&&(r?yield dt(r.location,{replaceState:!0}):yield Pt(o,s,xt(s,t.page)))})))),At={target:document.querySelector("#sapper")},It=At.target,Et=It,Rt=ht.baseUrl,Ze=Rt,et=St,"scrollRestoration"in Qe&&(Qe.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{Qe.scrollRestoration="auto"})),addEventListener("load",(()=>{Qe.scrollRestoration="manual"})),addEventListener("click",rt),addEventListener("popstate",ot),addEventListener("touchstart",ut),addEventListener("mousemove",ft),ht.error?Promise.resolve().then((()=>function(){const{host:e,pathname:t,search:n}=location,{session:r,preloaded:s,status:o,error:i}=ht;gt||(gt=s&&s[0]);const a={error:i,status:o,session:r,level0:{props:gt},level1:{props:{status:o,error:i},component:Ue},segments:s},c=tt(n);Pt([],a,{host:e,path:t,query:c,params:{},error:i})}())):Promise.resolve().then((()=>{const{hash:e,href:t}=location;Qe.replaceState({id:ze},"",t);const n=nt(new URL(location.href));if(n)return it(n,ze,!0,e)}));export{le as A,y as B,s as C,D,u as E,k as F,Se as G,C as H,g as I,dt as J,I as K,w as L,t as M,E as N,se as O,G as P,q as Q,l as R,de as S,oe as T,W as U,O as V,x as a,P as b,S as c,h as d,m as e,_ as f,d as g,f as h,fe as i,v as j,T as k,ee as l,re as m,e as n,te as o,ne as p,H as q,ge as r,i as s,b as t,A as u,$ as v,p as w,ie as x,ae as y,ce as z};

import __inject_styles from './inject_styles.5607aec6.js';