import{S as Y,i as Z,s as ee,k as _,l as v,m as p,h as i,n as h,b as S,C as o,D as oe,B as J,E as se,F as ye,a as A,w as F,c as B,x as K,y as j,f as M,g as Ee,d as be,t as G,z as P,G as ie,q as W,r as X,u as Ie,H as Te,I as ue,J as Oe,K as Ae,L as Be}from"../../chunks/index-41b68c82.js";import{w as Ne}from"../../chunks/singletons-50cd9997.js";import{p as ke}from"../../chunks/stores-5040ef7e.js";import{L as Ue}from"../../chunks/company-12717068.js";import{B as le,F as Q,a as ae}from"../../chunks/Background-4233550e.js";import{T as De}from"../../chunks/Text-2d4ca58d.js";const He="dark",Me=window.localStorage.getItem("theme")??He,re=Ne(Me==="dark");re.subscribe(l=>{l?localStorage.setItem("theme","dark"):localStorage.setItem("theme","light")});const he=[{label:"Contact",path:"/contact"},{label:"About",path:"/about"}],Ce=[{label:"Home",path:"/"},{label:"Contact",path:"/contact"},{label:"About",path:"/about"}];function Le(l){let e,a,t,r,n,c;return{c(){e=_("button"),a=_("div"),t=_("div"),r=_("i"),this.h()},l(s){e=v(s,"BUTTON",{class:!0});var f=p(e);a=v(f,"DIV",{class:!0});var I=p(a);t=v(I,"DIV",{});var u=p(t);r=v(u,"I",{class:!0}),p(r).forEach(i),u.forEach(i),I.forEach(i),f.forEach(i),this.h()},h(){h(r,"class",l[0]),h(a,"class","flex flex-row justify-center"),h(e,"class","hover:text-dark-link-hover2 duration-300")},m(s,f){S(s,e,f),o(e,a),o(a,t),o(t,r),n||(c=oe(e,"click",l[1]),n=!0)},p(s,[f]){f&1&&h(r,"class",s[0])},i:J,o:J,d(s){s&&i(e),n=!1,c()}}}function Ge(l,e,a){let t,r,n;se(l,re,s=>a(3,n=s));const c=()=>{ye(re,n=!n,n)};return l.$$.update=()=>{l.$$.dirty&8&&a(2,t=n?"fa-moon":"fa-sun"),l.$$.dirty&4&&a(0,r=`
		fa-solid fa-sm ${t}
	`)},[r,c,t,n]}class we extends Y{constructor(e){super(),Z(this,e,Ge,Le,ee,{})}}function de(l,e,a){const t=l.slice();return t[15]=e[a],t}function Se(l){let e,a,t,r,n,c,s,f;return{c(){e=_("button"),a=_("div"),t=A(),r=_("div"),n=A(),c=_("div"),this.h()},l(I){e=v(I,"BUTTON",{});var u=p(e);a=v(u,"DIV",{class:!0}),p(a).forEach(i),t=B(u),r=v(u,"DIV",{class:!0}),p(r).forEach(i),n=B(u),c=v(u,"DIV",{class:!0}),p(c).forEach(i),u.forEach(i),this.h()},h(){h(a,"class",l[4]),h(r,"class",l[5]),h(c,"class",l[6])},m(I,u){S(I,e,u),o(e,a),o(e,t),o(e,r),o(e,n),o(e,c),s||(f=oe(e,"click",l[11]),s=!0)},p:J,d(I){I&&i(e),s=!1,f()}}}function xe(l){let e=l[15].label+"",a;return{c(){a=W(e)},l(t){a=X(t,e)},m(t,r){S(t,a,r)},p(t,r){r&4&&e!==(e=t[15].label+"")&&Ie(a,e)},d(t){t&&i(a)}}}function me(l){let e,a,t,r,n,c,s,f,I,u;return r=new De({props:{weight:"bold",size:"lg",color:"none",$$slots:{default:[xe]},$$scope:{ctx:l}}}),{c(){e=_("a"),a=_("div"),t=_("div"),F(r.$$.fragment),n=A(),c=_("div"),s=_("i"),this.h()},l(d){e=v(d,"A",{href:!0,target:!0,class:!0});var E=p(e);a=v(E,"DIV",{class:!0});var $=p(a);t=v($,"DIV",{class:!0});var V=p(t);K(r.$$.fragment,V),V.forEach(i),n=B($),c=v($,"DIV",{});var T=p(c);s=v(T,"I",{class:!0}),p(s).forEach(i),T.forEach(i),$.forEach(i),E.forEach(i),this.h()},h(){h(t,"class","py-4 w-full duration-300"),h(s,"class","fa fa-md fa-solid fa-angle-right"),h(a,"class","flex flex-row items-center px-6"),h(e,"href",f=l[15].path),h(e,"target","_self"),h(e,"class",I=l[15].path===l[1]?l[10]:l[9])},m(d,E){S(d,e,E),o(e,a),o(a,t),j(r,t,null),o(a,n),o(a,c),o(c,s),u=!0},p(d,E){const $={};E&262148&&($.$$scope={dirty:E,ctx:d}),r.$set($),(!u||E&4&&f!==(f=d[15].path))&&h(e,"href",f),(!u||E&6&&I!==(I=d[15].path===d[1]?d[10]:d[9]))&&h(e,"class",I)},i(d){u||(M(r.$$.fragment,d),u=!0)},o(d){G(r.$$.fragment,d),u=!1},d(d){d&&i(e),P(r)}}}function Fe(l){let e,a,t,r,n,c,s,f,I,u,d,E,$,V,T,H,b,k,m,D,g,R,U,C,z;T=new De({props:{color:"primary",hoverColor:"accent1",$$slots:{default:[Se]},$$scope:{ctx:l}}});let L=l[2],y=[];for(let w=0;w<L.length;w+=1)y[w]=me(de(l,L,w));const Ve=w=>G(y[w],1,1,()=>{y[w]=null});return g=new we({}),{c(){e=_("div"),a=_("button"),t=_("div"),r=_("div"),n=A(),c=_("div"),s=A(),f=_("div"),I=A(),u=_("div"),d=A(),E=_("div"),$=_("div"),V=_("div"),F(T.$$.fragment),H=A();for(let w=0;w<y.length;w+=1)y[w].c();b=A(),k=_("div"),m=A(),D=_("div"),F(g.$$.fragment),this.h()},l(w){e=v(w,"DIV",{class:!0});var N=p(e);a=v(N,"BUTTON",{});var x=p(a);t=v(x,"DIV",{class:!0});var O=p(t);r=v(O,"DIV",{class:!0}),p(r).forEach(i),n=B(O),c=v(O,"DIV",{class:!0}),p(c).forEach(i),s=B(O),f=v(O,"DIV",{class:!0}),p(f).forEach(i),I=B(O),u=v(O,"DIV",{class:!0}),p(u).forEach(i),O.forEach(i),x.forEach(i),d=B(N),E=v(N,"DIV",{class:!0});var te=p(E);$=v(te,"DIV",{class:!0});var q=p($);V=v(q,"DIV",{class:!0});var ce=p(V);K(T.$$.fragment,ce),ce.forEach(i),H=B(q);for(let ne=0;ne<y.length;ne+=1)y[ne].l(q);b=B(q),k=v(q,"DIV",{class:!0}),p(k).forEach(i),m=B(q),D=v(q,"DIV",{class:!0});var fe=p(D);K(g.$$.fragment,fe),fe.forEach(i),q.forEach(i),te.forEach(i),N.forEach(i),this.h()},h(){h(r,"class",l[3]),h(c,"class",l[3]),h(f,"class",l[3]),h(u,"class",l[3]),h(t,"class","duration-300 bg-light-text-primary dark:bg-dark-text-primary hover:dark:bg-dark-text-accent1"),h(V,"class","flex justify-end w-full pt-2 px-6"),h(k,"class","h-4"),h(D,"class","w-full flex flex-row items-center justify-center"),h($,"class","flex flex-col items-start"),h(E,"class",R=l[0]?l[8]:l[7]),h(e,"class","pt-1")},m(w,N){S(w,e,N),o(e,a),o(a,t),o(t,r),o(t,n),o(t,c),o(t,s),o(t,f),o(t,I),o(t,u),o(e,d),o(e,E),o(E,$),o($,V),j(T,V,null),o($,H);for(let x=0;x<y.length;x+=1)y[x].m($,null);o($,b),o($,k),o($,m),o($,D),j(g,D,null),U=!0,C||(z=oe(a,"click",l[11]),C=!0)},p(w,[N]){const x={};if(N&262144&&(x.$$scope={dirty:N,ctx:w}),T.$set(x),N&1542){L=w[2];let O;for(O=0;O<L.length;O+=1){const te=de(w,L,O);y[O]?(y[O].p(te,N),M(y[O],1)):(y[O]=me(te),y[O].c(),M(y[O],1),y[O].m($,b))}for(Ee(),O=L.length;O<y.length;O+=1)Ve(O);be()}(!U||N&1&&R!==(R=w[0]?w[8]:w[7]))&&h(E,"class",R)},i(w){if(!U){M(T.$$.fragment,w);for(let N=0;N<L.length;N+=1)M(y[N]);M(g.$$.fragment,w),U=!0}},o(w){G(T.$$.fragment,w),y=y.filter(Boolean);for(let N=0;N<y.length;N+=1)G(y[N]);G(g.$$.fragment,w),U=!1},d(w){w&&i(e),P(T),ie(y,w),P(g),C=!1,z()}}}function Ke(l,e,a){let{path:t}=e,{open:r}=e,{items:n}=e;const c=`
		h-2 bg-current my-0.5 duration-300 ease-out
		`,s=`w-8 ${le.primary} ${c}`,f=`
		h-0.5 bg-current my-2 duration-300 ease-out
		bg-light-text-primary
		dark:bg-dark-text-primary
	`,I=`
		${f}
		w-6 rotate-45 translate-y-2.5
		`,u=`
		${f}
		w-6 opacity-0`,d=`
		${f}
		w-6 -rotate-45 -translate-y-2.5`,E=`
		${le.secondary}
		fixed w-full z-10
		overflow-auto
		left-0 top-0 right-0 bottom-0
		duration-500
		transition-all
	`,$=`
		opacity-0 translate-x-full
		${E}`,V=`${E}`,T=`
		w-full duration-300
		${Q.primary}
		${ae.accent1}
		hover:bg-light-bg-primary/25 hover:dark:bg-dark-bg-primary/25
  	`,H=`
		w-full duration-300
		${Q.accent1}
		${ae.accent1}
		hover:bg-light-bg-primary/25 hover:dark:bg-dark-bg-primary/25
	`,b=()=>{a(0,r=!r)};return l.$$set=k=>{"path"in k&&a(1,t=k.path),"open"in k&&a(0,r=k.open),"items"in k&&a(2,n=k.items)},[r,t,n,s,I,u,d,$,V,T,H,b]}class je extends Y{constructor(e){super(),Z(this,e,Ke,Fe,ee,{path:1,open:0,items:2})}}function Pe(l){let e,a;return{c(){e=_("a"),a=W(l[1]),this.h()},l(t){e=v(t,"A",{class:!0,href:!0});var r=p(e);a=X(r,l[1]),r.forEach(i),this.h()},h(){h(e,"class",l[2]),h(e,"href",l[0])},m(t,r){S(t,e,r),o(e,a)},p(t,[r]){r&2&&Ie(a,t[1]),r&1&&h(e,"href",t[0])},i:J,o:J,d(t){t&&i(e)}}}function ze(l,e,a){let{url:t}=e,{label:r}=e;const n=`
		color-inherit
		duration-300
		no-underline
		${ae.accent1}
        font-semibold
		`;return l.$$set=c=>{"url"in c&&a(0,t=c.url),"label"in c&&a(1,r=c.label)},[t,r,n]}class Re extends Y{constructor(e){super(),Z(this,e,ze,Pe,ee,{url:0,label:1})}}function _e(l,e,a){const t=l.slice();return t[2]=e[a],t}function ve(l){let e,a,t,r;return t=new Re({props:{url:l[2].path,label:l[2].label}}),{c(){e=_("div"),a=A(),F(t.$$.fragment),this.h()},l(n){e=v(n,"DIV",{class:!0}),p(e).forEach(i),a=B(n),K(t.$$.fragment,n),this.h()},h(){h(e,"class","w-4")},m(n,c){S(n,e,c),S(n,a,c),j(t,n,c),r=!0},p:J,i(n){r||(M(t.$$.fragment,n),r=!0)},o(n){G(t.$$.fragment,n),r=!1},d(n){n&&i(e),n&&i(a),P(t,n)}}}function qe(l){let e,a,t,r,n,c,s,f,I,u,d,E,$,V,T;r=new Re({props:{url:"/",label:Ue}}),f=new we({});let H=he,b=[];for(let m=0;m<H.length;m+=1)b[m]=ve(_e(l,H,m));const k=m=>G(b[m],1,1,()=>{b[m]=null});return V=new je({props:{open:!1,path:l[0].url.pathname,items:Ce}}),{c(){e=_("header"),a=_("nav"),t=_("div"),F(r.$$.fragment),n=A(),c=_("div"),s=_("div"),F(f.$$.fragment),I=A(),u=_("div"),d=A();for(let m=0;m<b.length;m+=1)b[m].c();E=A(),$=_("div"),F(V.$$.fragment),this.h()},l(m){e=v(m,"HEADER",{class:!0});var D=p(e);a=v(D,"NAV",{class:!0});var g=p(a);t=v(g,"DIV",{});var R=p(t);K(r.$$.fragment,R),R.forEach(i),n=B(g),c=v(g,"DIV",{class:!0});var U=p(c);s=v(U,"DIV",{class:!0});var C=p(s);K(f.$$.fragment,C),I=B(C),u=v(C,"DIV",{class:!0}),p(u).forEach(i),d=B(C);for(let L=0;L<b.length;L+=1)b[L].l(C);C.forEach(i),U.forEach(i),E=B(g),$=v(g,"DIV",{class:!0});var z=p($);K(V.$$.fragment,z),z.forEach(i),g.forEach(i),D.forEach(i),this.h()},h(){h(u,"class","w-2"),h(s,"class","flex flex-row"),h(c,"class","sm:block hidden"),h($,"class","sm:hidden block flex flex-row"),h(a,"class","w-full flex flex-row justify-between items-center"),h(e,"class",l[1])},m(m,D){S(m,e,D),o(e,a),o(a,t),j(r,t,null),o(a,n),o(a,c),o(c,s),j(f,s,null),o(s,I),o(s,u),o(s,d);for(let g=0;g<b.length;g+=1)b[g].m(s,null);o(a,E),o(a,$),j(V,$,null),T=!0},p(m,[D]){if(D&0){H=he;let R;for(R=0;R<H.length;R+=1){const U=_e(m,H,R);b[R]?(b[R].p(U,D),M(b[R],1)):(b[R]=ve(U),b[R].c(),M(b[R],1),b[R].m(s,null))}for(Ee(),R=H.length;R<b.length;R+=1)k(R);be()}const g={};D&1&&(g.path=m[0].url.pathname),V.$set(g)},i(m){if(!T){M(r.$$.fragment,m),M(f.$$.fragment,m);for(let D=0;D<H.length;D+=1)M(b[D]);M(V.$$.fragment,m),T=!0}},o(m){G(r.$$.fragment,m),G(f.$$.fragment,m),b=b.filter(Boolean);for(let D=0;D<b.length;D+=1)G(b[D]);G(V.$$.fragment,m),T=!1},d(m){m&&i(e),P(r),P(f),ie(b,m),P(V)}}}function Je(l,e,a){let t;se(l,ke,n=>a(0,t=n));const r=`
		${Q.primary}
		w-full
		pt-2
		sm:px-6 px-3
		sm:text-2xl text-xl
	`;return[t,r]}class Qe extends Y{constructor(e){super(),Z(this,e,Je,qe,ee,{})}}const pe=[{label:"Home",path:"/"},{label:"Careers",path:"/career"},{label:"Contact",path:"/contact"},{label:"About",path:"/about"}];function ge(l,e,a){const t=l.slice();return t[5]=e[a],t}function $e(l){let e,a=l[5].label+"",t,r,n,c;return{c(){e=_("a"),t=W(a),n=A(),c=_("div"),this.h()},l(s){e=v(s,"A",{class:!0,href:!0});var f=p(e);t=X(f,a),f.forEach(i),n=B(s),c=v(s,"DIV",{class:!0}),p(c).forEach(i),this.h()},h(){h(e,"class",r=l[5].path==l[0].url.pathname?l[3]:l[2]),h(e,"href",l[5].path),h(c,"class","h-2")},m(s,f){S(s,e,f),o(e,t),S(s,n,f),S(s,c,f)},p(s,f){f&1&&r!==(r=s[5].path==s[0].url.pathname?s[3]:s[2])&&h(e,"class",r)},d(s){s&&i(e),s&&i(n),s&&i(c)}}}function We(l){let e,a,t,r,n,c,s,f,I,u,d,E,$,V,T,H,b=pe,k=[];for(let m=0;m<b.length;m+=1)k[m]=$e(ge(l,b,m));return{c(){e=_("footer"),a=_("div"),t=_("div");for(let m=0;m<k.length;m+=1)k[m].c();r=A(),n=_("div"),c=A(),s=_("div"),f=_("p"),I=W("Built using "),u=_("a"),d=W("Svelte Kit"),E=A(),$=_("div"),V=A(),T=_("p"),H=W("Kamiyaa Technologies Inc. 2023"),this.h()},l(m){e=v(m,"FOOTER",{class:!0});var D=p(e);a=v(D,"DIV",{class:!0});var g=p(a);t=v(g,"DIV",{});var R=p(t);for(let y=0;y<k.length;y+=1)k[y].l(R);R.forEach(i),r=B(g),n=v(g,"DIV",{class:!0}),p(n).forEach(i),c=B(g),s=v(g,"DIV",{class:!0});var U=p(s);f=v(U,"P",{});var C=p(f);I=X(C,"Built using "),u=v(C,"A",{class:!0,rel:!0,target:!0,href:!0});var z=p(u);d=X(z,"Svelte Kit"),z.forEach(i),C.forEach(i),E=B(U),$=v(U,"DIV",{class:!0}),p($).forEach(i),V=B(U),T=v(U,"P",{});var L=p(T);H=X(L,"Kamiyaa Technologies Inc. 2023"),L.forEach(i),U.forEach(i),g.forEach(i),D.forEach(i),this.h()},h(){h(n,"class","h-8 w-8"),h(u,"class",l[4]),h(u,"rel","noreferrer"),h(u,"target","_blank"),h(u,"href","https://kit.svelte.dev/"),h($,"class","h-2"),h(s,"class",`flex flex-col justify-end ${Q.tertiary}`),h(a,"class",`my-3.5 flex sm:flex-row flex-col justify-between ${Q.tertiary}`),h(e,"class",l[1])},m(m,D){S(m,e,D),o(e,a),o(a,t);for(let g=0;g<k.length;g+=1)k[g].m(t,null);o(a,r),o(a,n),o(a,c),o(a,s),o(s,f),o(f,I),o(f,u),o(u,d),o(s,E),o(s,$),o(s,V),o(s,T),o(T,H)},p(m,[D]){if(D&13){b=pe;let g;for(g=0;g<b.length;g+=1){const R=ge(m,b,g);k[g]?k[g].p(R,D):(k[g]=$e(R),k[g].c(),k[g].m(t,null))}for(;g<k.length;g+=1)k[g].d(1);k.length=b.length}},i:J,o:J,d(m){m&&i(e),ie(k,m)}}}function Xe(l,e,a){let t;se(l,ke,f=>a(0,t=f));const r=`
    ${le.secondary}
    border-0
    justify-between
    flex-col
    mt-8
    sm:px-12 px-4 py-2
  `,n=`
    ${ae.primary}
    ease-in
    duration-300
  `,c=`
    ${Q.primary}
    ease-in
    duration-300
  `,s=`
	${Q.accent1}
	${ae.accent2}
    ease-in
    duration-300
  `;return[t,r,n,c,s]}class Ye extends Y{constructor(e){super(),Z(this,e,Xe,We,ee,{})}}function Ze(l){let e,a,t,r,n,c,s,f;t=new Qe({});const I=l[5].default,u=Te(I,l,l[4],null);return s=new Ye({}),{c(){e=_("main"),a=_("div"),F(t.$$.fragment),r=A(),n=_("div"),u&&u.c(),c=A(),F(s.$$.fragment),this.h()},l(d){e=v(d,"MAIN",{});var E=p(e);a=v(E,"DIV",{class:!0});var $=p(a);K(t.$$.fragment,$),r=B($),n=v($,"DIV",{class:!0});var V=p(n);u&&u.l(V),V.forEach(i),c=B($),K(s.$$.fragment,$),$.forEach(i),E.forEach(i),this.h()},h(){h(n,"class",l[2]),h(a,"class",l[1]),ue(e,"dark",l[0])},m(d,E){S(d,e,E),o(e,a),j(t,a,null),o(a,r),o(a,n),u&&u.m(n,null),o(a,c),j(s,a,null),f=!0},p(d,[E]){u&&u.p&&(!f||E&16)&&Oe(u,I,d,d[4],f?Be(I,d[4],E,null):Ae(d[4]),null),(!f||E&1)&&ue(e,"dark",d[0])},i(d){f||(M(t.$$.fragment,d),M(u,d),M(s.$$.fragment,d),f=!0)},o(d){G(t.$$.fragment,d),G(u,d),G(s.$$.fragment,d),f=!1},d(d){d&&i(e),P(t),u&&u.d(d),P(s)}}}function et(l,e,a){let t,r;se(l,re,I=>a(3,r=I));let{$$slots:n={},$$scope:c}=e;const s=`
		m-0 p-0
		overflow-none
		scroll-smooth
		duration-300
		z-0

		font-sans

		${le.primary}
		${Q.primary}
		`,f=`
		animate-slide-fade-in
		min-h-screen sm:px-6 px-4
	`;return l.$$set=I=>{"$$scope"in I&&a(4,c=I.$$scope)},l.$$.update=()=>{l.$$.dirty&8&&a(0,t=r)},[t,s,f,r,c,n]}class ot extends Y{constructor(e){super(),Z(this,e,et,Ze,ee,{})}}export{ot as default};
