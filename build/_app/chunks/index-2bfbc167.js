import{S as e,i as a,s as t,e as s,t as n,c as r,a as i,g as l,d as o,f as c,E as h,h as u,k as d,n as f,b as p,H as v,I as g}from"./vendor-11a491ba.js";function m(e,a,t){const s=e.slice();return s[2]=a[t],s[4]=t,s}function b(e){let a,t,d=e[2]+"";return{c(){a=s("p"),t=n(d)},l(e){a=r(e,"P",{});var s=i(a);t=l(s,d),s.forEach(o)},m(e,s){c(e,a,s),h(a,t)},p(e,a){1&a&&d!==(d=e[2]+"")&&u(t,d)},d(e){e&&o(a)}}}function w(e){let a,t,w,x,y,q,E,I,k,B=e[0].title+"",D=e[0].cta.text+"",W=e[0].text,A=[];for(let s=0;s<W.length;s+=1)A[s]=b(m(e,W,s));return{c(){a=s("div"),t=s("div"),w=s("h2"),x=n(B),y=d();for(let e=0;e<A.length;e+=1)A[e].c();q=d(),E=s("a"),I=n(D),this.h()},l(e){a=r(e,"DIV",{class:!0});var s=i(a);t=r(s,"DIV",{class:!0});var n=i(t);w=r(n,"H2",{});var c=i(w);x=l(c,B),c.forEach(o),y=f(n);for(let a=0;a<A.length;a+=1)A[a].l(n);q=f(n),E=r(n,"A",{href:!0,class:!0});var h=i(E);I=l(h,D),h.forEach(o),n.forEach(o),s.forEach(o),this.h()},h(){p(E,"href",k=e[0].cta.url),p(E,"class","btn-primary light"),p(t,"class","container"),p(a,"class","reservation")},m(e,s){c(e,a,s),h(a,t),h(t,w),h(w,x),h(t,y);for(let a=0;a<A.length;a+=1)A[a].m(t,null);h(t,q),h(t,E),h(E,I)},p(e,[a]){if(1&a&&B!==(B=e[0].title+"")&&u(x,B),1&a){let s;for(W=e[0].text,s=0;s<W.length;s+=1){const n=m(e,W,s);A[s]?A[s].p(n,a):(A[s]=b(n),A[s].c(),A[s].m(t,q))}for(;s<A.length;s+=1)A[s].d(1);A.length=W.length}1&a&&D!==(D=e[0].cta.text+"")&&u(I,D),1&a&&k!==(k=e[0].cta.url)&&p(E,"href",k)},i:v,o:v,d(e){e&&o(a),g(A,e)}}}function x(e,a,t){let{data:s}=a,n={title:"Reservation",text:["Wax Me Boutique is La Jolla’s 5 star waxing and skincare boutique. We are conveniently located in the heart of La Jolla Village, inside Crosby Center. Our hair removal and skincare services are only available through licensed estheticians that have been trained and certified. At Wax Me Boutique, the health and beauty of your skin is of the utmost importance, we carefully select the highest quality all-natural wax and skincare products in the spa industry.","Our unique hair removal technique for men and women is what sets us apart from the rest, including brow design, Facials, corrective peels and spray tanning. Everyone who visits the boutique will feel welcome and comfortable, in a clean and relaxing environment."],cta:{text:"Book an appointment",url:"https://www.vagaro.com/Users/BusinessWidget.aspx?BusinessID=48649&IsPopup=0&TabsIncluded=1|99|100&b_themeID=&w_type=2&widgetversion=3&isShowMobileApp=False&tabatlaunch=3"}};return void 0!==s&&(n=s),e.$$set=e=>{"data"in e&&t(1,s=e.data)},[n,s]}class y extends e{constructor(e){super(),a(this,e,x,w,t,{data:1})}}export{y as R};
