(window.webpackJsonp=window.webpackJsonp||[]).push([[8,29,34,37],{562:function(e,t,r){"use strict";r.r(t);var n=r(5),o=(r(26),r(326),r(75),r(12),r(23),r(37),r(6)),c=r(137),l=r(45);o.a.registerPlugin(c.a);var d={data:function(){return{el:null,mqs:null,current:0,scrollDirection:1,direction:null,text:""}},fetch:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$prismic.api.query(e.$prismic.predicates.at("document.type","marquee"));case 2:r=t.sent,e.text=e.$prismic.asText(r.results[0].data.text);case 4:case"end":return t.stop()}}),t)})))()},mounted:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$nextTick();case 2:setTimeout((function(){e.el=Object(l.b)(".js-marquee",e.$el),e.items=Object(l.c)(".marquee__part-m",e.$el),e.create(),c.a.create({trigger:e.$el,start:"top-=15% bottom",end:"bottom top",onEnter:function(t){e.mqs.forEach((function(e){return e.play()}))},onEnterBack:function(t){e.mqs.forEach((function(e){return e.play()}))},onLeave:function(t){e.mqs.forEach((function(e){return e.pause()}))},onLeaveBack:function(t){e.mqs.forEach((function(e){return e.pause()}))},onUpdate:function(t){var r=1===t.direction?.3:-.3;e.mqs.forEach((function(e){return o.a.to(e,{timeScale:2.2*r,overwrite:!0})}))}})}),1e3);case 3:case"end":return t.stop()}}),t)})))()},methods:{create:function(){var e=this;this.mqs=o.a.utils.toArray(".marquee__inner").map((function(t){var r=e.items;return Object(l.a)(r,{repeat:-1,speed:1.4,reversed:!1,paused:!0,paddingRight:parseFloat(o.a.getProperty(r[0],"marginRight","px"))})}))}}},m=r(9),component=Object(m.a)(d,(function(){var e=this,t=e._self._c;return t("a",{staticClass:"relative text-white js-t-marquee",attrs:{href:"https://www.universe.com/events/digital-thinkers-conference-amsterdam-2023-tickets-3HBF8J",target:"_blank"}},[t("CurveSvg",{attrs:{top:"0% - 1.1rem",left:"0%",rotate:"-90"}}),e._v(" "),t("CurveSvg",{attrs:{top:"100%",left:"0%",rotate:"0"}}),e._v(" "),t("CurveSvg",{attrs:{top:"0% - 1.1rem",left:"100% - 1.1rem",rotate:"-180"}}),e._v(" "),t("CurveSvg",{attrs:{top:"100%",left:"100% - 1.1rem",rotate:"90"}}),e._v(" "),t("div",{staticClass:"w-full relative overflow-hidden bg-black"},[t("div",{staticClass:"relative flex w-full overflow-hidden py-10"},[t("div",{staticClass:"flex items-center justify-center js-marquee"},[t("div",{staticClass:"marquee__inner marquee-text flex whitespace-nowrap font-hunter m:my-25 text-25 m:text-50 leading-[100%]"},[t("div",{staticClass:"relative flex flex-nowrap"},e._l(10,(function(r,i){return t("div",{key:i,staticClass:"marquee__part-m flex flex-nowrap items-center"},[e._m(0,!0),e._v(" "),t("span",{staticClass:"flex font-bold text-14 leading-none uppercase"},[e._v("BUY NOW")]),e._v(" "),e._m(1,!0),e._v(" "),t("span",{staticClass:"flex font-1 font-normal text-12 leading-none uppercase",domProps:{innerHTML:e._s(e.text)}})])})),0)])])])])],1)}),[function(){var e=this._self._c;return e("div",{staticClass:"flex items-center mx-15"},[e("div",{staticClass:"w-[1.1rem] h-[1.5rem]"},[e("img",{staticClass:"w-full h-full object-contain",attrs:{src:"/marquee-icon.png",alt:"Awww Conf"}})])])},function(){var e=this._self._c;return e("div",{staticClass:"flex items-center mx-15"},[e("div",{staticClass:"w-[1.1rem] h-[1.5rem]"},[e("img",{staticClass:"w-full h-full object-contain",attrs:{src:"/marquee-icon.png",alt:"Awww Conf"}})])])}],!1,null,null,null);t.default=component.exports;installComponents(component,{CurveSvg:r(74).default})},584:function(e,t,r){"use strict";r.r(t);var n=r(22),o={props:{placeDate:String,placeDateContent:String,placeDateSecondContent:String,secondContent:String,bigNumberStyles:String}},c=r(9),component=Object(c.a)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"flex flex-col items-start"},[t("div",{staticClass:"mb-4"},[t("p",{staticClass:"font-2 text-10 leading-[120%] font-light uppercase"},[e._v(e._s(e.placeDate))])]),e._v(" "),t("div",[t("p",{staticClass:"font-2 text-16 leading-[100%] font-bold uppercase",class:Object(n.a)({},e.bigNumberStyles,e.bigNumberStyles)},[e._v("\n            "+e._s(e.placeDateContent)+"\n        ")])]),e._v(" "),t("div",[t("p",{staticClass:"font-2 text-14 leading-[100%] font-normal uppercase invisible",class:Object(n.a)({},e.secondContent,e.secondContent)},[e._v("\n            "+e._s(e.placeDateSecondContent)+"\n        ")])])])}),[],!1,null,null,null);t.default=component.exports},611:function(e,t,r){var content=r(630);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(29).default)("70c97aaa",content,!0,{sourceMap:!1})},629:function(e,t,r){"use strict";r(611)},630:function(e,t,r){var n=r(28)((function(i){return i[1]}));n.push([e.i,'.speaker-card[data-v-8c7592b8]{position:relative}.speaker-card[data-v-8c7592b8]:after{background-color:#000;-webkit-clip-path:inset(50% 0 50% 0);clip-path:inset(50% 0 50% 0);content:"";height:100%;left:0;position:absolute;top:0;transition:all .4s cubic-bezier(.19,1,.22,1);width:100%}.speaker-card:hover.speaker-card[data-v-8c7592b8]:after{-webkit-clip-path:inset(0 0 0 0);clip-path:inset(0 0 0 0);transform-origin:center;transition:all .45s cubic-bezier(.47,1.64,.41,.8)}.curve-top[data-v-8c7592b8]{transform:translateY(1rem)}.curve-bottom[data-v-8c7592b8],.curve-top[data-v-8c7592b8]{height:100%;left:0;opacity:0;position:absolute;top:0;transition-delay:0;transition:all 0s;width:100%}.curve-bottom[data-v-8c7592b8]{transform:translateY(-1rem)}@media(max-width:649.999){.curve-bottom[data-v-8c7592b8]{opacity:1;transform:translateY(0)}}.speaker-card:hover .curve-bottom[data-v-8c7592b8],.speaker-card:hover .curve-top[data-v-8c7592b8]{opacity:1;transform:translateY(0);transition-delay:.15s}.arrow[data-v-8c7592b8]{opacity:0;transform:translateX(-2rem);transition:transform .3s cubic-bezier(.19,1,.22,1)}.arrow-margin[data-v-8c7592b8]{transition:margin-right .3s cubic-bezier(.19,1,.22,1)}.speaker-card:hover .arrow[data-v-8c7592b8]{opacity:1;transform:translateX(0);transition:transform .3s cubic-bezier(.19,1,.22,1)}.speaker-card:hover .arrow-margin[data-v-8c7592b8]{margin-right:1.5rem;transition:margin-right .3s cubic-bezier(.19,1,.22,1)}',""]),n.locals={},e.exports=n},643:function(e,t,r){var content=r(663);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(29).default)("af7d5876",content,!0,{sourceMap:!1})},648:function(e,t,r){"use strict";r.r(t);r(21);var n={props:{name:String,company:String,slug:String}},o=(r(629),r(9)),component=Object(o.a)(n,(function(){var e=this,t=e._self._c;return t("nuxt-link",{staticClass:"speaker-card flex items-end h-fit pl-[5%] sm:pl-50 py-15 text-white",attrs:{to:"/talks/"+e.slug,"data-name":e.name}},[t("div",{staticClass:"relative z-1 flex items-center mr-8"},[t("svg",{staticClass:"arrow arrow-margin hidden sm:inline-block",attrs:{width:"10",height:"17",viewBox:"0 0 10 17",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("rect",{attrs:{x:"8.14844",y:"7.67578",width:"1.26013",height:"11.3412",transform:"rotate(45 8.14844 7.67578)",fill:"#D93831"}}),e._v(" "),t("rect",{attrs:{x:"9.03894",y:"8.56641",width:"1.26013",height:"11.3412",transform:"rotate(135 9.03894 8.56641)",fill:"#D93831"}})]),e._v(" "),t("div",[t("p",{staticClass:"font-1 text-20 sm:text-[3.9rem] leading-[100%] uppercase"},[e._v(e._s(e.name))])])]),e._v(" "),t("div",{staticClass:"relative z-1"},[t("p",{staticClass:"font-2 text-10 sm:text-16 leading-[123%]"},[e._v(e._s(e.company))])]),e._v(" "),t("div",{staticClass:"curve-top"},[t("CurveSvg",{attrs:{top:"0% - 1rem",left:"0",rotate:"270"}})],1),e._v(" "),t("div",{staticClass:"curve-top"},[t("CurveSvg",{attrs:{top:"0% - 1rem",left:"100% - 1rem",rotate:"180"}})],1),e._v(" "),t("div",{staticClass:"curve-bottom"},[t("CurveSvg",{attrs:{top:"100% - .1rem",left:"0",rotate:"0"}})],1),e._v(" "),t("div",{staticClass:"curve-bottom"},[t("CurveSvg",{attrs:{top:"100% - .1rem",left:"100% - 1rem",rotate:"90"}})],1)])}),[],!1,null,"8c7592b8",null);t.default=component.exports;installComponents(component,{CurveSvg:r(74).default})},662:function(e,t,r){"use strict";r(643)},663:function(e,t,r){var n=r(28)((function(i){return i[1]}));n.push([e.i,".bg-gradient[data-v-71496fd2]{background:linear-gradient(180deg,rgba(174,12,5,0),#cf0600 32.29%,#cf0600)}.border-card[data-v-71496fd2]{border:12px solid #000}.bg-image[data-v-71496fd2]{background-image:url(/speakers/base.jpg);background-size:cover}.speaker-gradient[data-v-71496fd2]{background:linear-gradient(147.75deg,rgba(217,56,49,0) 57.88%,#d93831 93.01%);bottom:0;left:0;position:absolute;right:0;top:0;z-index:1}",""]),n.locals={},e.exports=n},670:function(e,t,r){"use strict";r.r(t);r(21);var n=r(5),o=(r(26),r(12),r(23),r(6)),c=r(137),l=r(560),d=r.n(l),m=r(45);o.a.registerPlugin(c.a);var f={props:{speakers:{type:Array,required:!0}},data:function(){return{cardContent:[{name:"Niccolo Miranda",img:"/speakers/niccolo.jpg",role:"Creative Director / Interactive Designer & Developer",company:"Independent",country:"NL"},{name:"Pelle Martin",img:"/speakers/pelle.jpg",role:"CEO & CD",country:"DEN",company:"Spring/Summer"},{name:"Edan Kwan",img:"/speakers/edan.jpg",role:"ECD & Founder",country:"UK",company:"Lusion"},{name:"Jon Way",img:"/speakers/jonway.jpg",role:"Independent Design Director",country:"USA",company:"Jon Way Studio"},{name:"Chris Wilcock",img:"/speakers/wilcock.jpg",role:"Co-founder and Design Director",country:"UK",company:"Outpost"},{name:"Yutong Xue - Yunan Xue",img:"/speakers/yunan.jpg",role:"Product Designer & Product Manager",country:"UK",company:"Meta"},{name:"Valerie Fuchs",img:"/speakers/valerie.jpg",role:"Senior Software Developer",country:"AMS",company:"WeTransfer"},{name:"Aneta Junkova",img:"/speakers/aneta.png",role:"Senior Strategist",country:"AMS",company:"Wonderland Studio"},{name:"Ilja Van Eck",img:"/speakers/ilja.jpg",role:"Designer & Creative Webflow Developer",country:"AMS",company:"Independent"},{name:"Erwin Luijendijk",img:"/speakers/erwin.jpg",role:"Founder & CTO",country:"AMS",company:"Cut the Code"},{name:"Mauricio Tonon",img:"/speakers/tonon.jpg",role:"Ubicuity",country:"ESP",company:"Head of Design"},{name:"Fredrik Öst - Erik Kockum",img:"/speakers/ost.jpg",role:"Founder & Brand Director - Partner & Creative Director",country:"SWE",company:"Snask"},{name:"Lu Yu",img:"/speakers/luyu.jpg",role:"Independent designer",country:"Deu",company:"Independent"},{name:"Alicia Shao",img:"/speakers/shao.jpg",role:"Senior Service Designer",country:"DAN",company:"LEGO"},{name:"Cassie Evans",img:"/speakers/cassie.jpg",role:"Developer Education",country:"ENG",company:"GSAP"},{name:"Vicente Lucendo",img:"/speakers/lucendo.jpg",role:"Creative Technologist",country:"AMS",company:"Independent"},{name:"Julian Benegas",img:"/speakers/benegas.png",role:"Head of Development",country:"ARG",company:"Basement Studio"},{name:"Quentin Hocdé",img:"/speakers/hocde.jpg",role:"Creative Developer",country:"BE",company:"Freelance, part of Index Studio"},{name:"Xavier Jack",img:"/speakers/jack.jpg",role:"Creative Developer",country:"AMS",company:"Independent"}],idxCurrent:0}},computed:{listLength:function(){return 95*(this.cardContent.length-6)}},mounted:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$nextTick();case 2:e.elemsLines=Object(m.c)(".js-s-lines",e.$el),e.elemsLines.length&&e.elemsLines.forEach((function(e){var t=e.dataset.delay,r=e.dataset.reverse,n=new d.a(e,{type:"lines"}),c=new d.a(n.lines,{type:"lines"});o.a.timeline({paused:!0,defaults:{force3D:!0,immediateRender:!0},scrollTrigger:{trigger:e},onComplete:function(){},delay:t||0}).set(n.lines,{overflow:"hidden"}).fromTo(c.lines,{yPercent:r?-100:100,scale:.8,transformOrigin:"center"},{yPercent:0,scale:1,duration:1.2,stagger:.1,ease:"expo"})})),o.a.set(e.$refs.speaker,{clipPath:"inset(0% 100% 0% 0%)"}),o.a.set(".speaker-gradient",{yPercent:100,xPercent:100,autoAlpha:0}),e.counter(),window.innerWidth>650&&(e.pinElems(),e.bindIntersectionObserver());case 8:case"end":return t.stop()}}),t)})))()},methods:{counter:function(){this.counter=o.a.timeline({scrollTrigger:{trigger:this.$el,start:"top center+=20%"}}).to(this.$refs.bigNumber,{innerText:this.speakers.length,snap:{innerText:1},duration:1.2})},pinElems:function(){o.a.to(this.$refs.card,{scrollTrigger:{trigger:this.$refs.card,start:"top-=10% top",end:"+=".concat(this.listLength),scrub:!0},ease:"none",y:this.listLength})},enter:function(e){this.idxLast=this.idxCurrent,this.idxCurrent=e;var t=this.$refs.speakers[this.idxLast],r=Object(m.b)(".js-speaker-image",t),n=Object(m.b)(".js-speaker-job",t),c=Object(m.b)(".speaker-gradient",t),l=this.$refs.speakers[this.idxCurrent],d=Object(m.b)(".js-speaker-image",l),f=Object(m.b)(".js-speaker-image-bg",l),v=Object(m.b)(".js-speaker-job",l),h=Object(m.b)(".speaker-gradient",l);o.a.killTweensOf([r,d,f,n,v,c,h]),o.a.to(r,{clipPath:"inset(0% 100% 0% 0%)",ease:"expo.out",duration:1}),o.a.fromTo(d,{clipPath:"inset(0% 100% 0% 0%)"},{clipPath:"inset(0 0% 0 0%)",ease:"expo.out",duration:1.5}),o.a.fromTo(f,{scale:1.3},{scale:1,duration:1.5,ease:"expo.out"}),o.a.to(n,{y:40,autoAlpha:0,duration:.5,ease:"power1"}),o.a.fromTo(v,{y:40,autoAlpha:0},{y:0,autoAlpha:1,duration:1,ease:"expo.out",delay:.1}),o.a.to(c,{yPercent:100,xPercent:100,autoAlpha:0,ease:"expo.out"}),o.a.to(h,{yPercent:0,xPercent:0,autoAlpha:1,ease:"expo.out"})},bindIntersectionObserver:function(){var e=this.$refs.speakerLines,t=new IntersectionObserver((function(e){e.forEach((function(e){e.isIntersecting?(o.a.killTweensOf(e.target),o.a.to(e.target,{alpha:1,duration:.5,pointerEvents:"auto"})):(o.a.killTweensOf(e.target),o.a.to(e.target,{alpha:0,duration:.5,pointerEvents:"none"}))}))}),{root:null,rootMargin:"-150px",threshold:.5});e.forEach((function(e){t.observe(e)}))}}},v=(r(662),r(9)),component=Object(v.a)(f,(function(){var e=this,t=e._self._c;return t("section",{staticClass:"relative w-full text-white sm:pb-200 bg-red sm:bg-transparent"},[t("div",{staticClass:"relative mb-100 js-s-simple-fade"},[t("Marquee")],1),e._v(" "),t("div",{staticClass:"grid grid-cols-12 gap-x-20 pb-85 js-section-gl",attrs:{"data-id":"speakers_hero"}},[t("div",{staticClass:"col-start-1 col-span-12 sm:col-span-6"},[t("div",{ref:"bigNumberWrapper",staticClass:"relative left-[-8%]"},[t("p",{ref:"bigNumber",staticClass:"font-1 text-[30rem] sm:text-[62.3rem] leading-[92%] text-black"},[e._v("\n\t\t\t\t\t0\n\t\t\t\t")])])]),e._v(" "),t("div",{staticClass:"col-start-1 col-span-12 sm:col-start-7 sm:col-span-5 flex flex-col-reverse sm:flex-col justify-between items-start"},[t("div",{ref:"calendarWrapper",staticClass:"w-full flex items-center justify-between px-20 sm:px-0"},[t("SpeakersCalendarItem",{attrs:{placeDate:"month",placeDateContent:"oct",placeDateSecondContent:"",secondContent:"",bigNumberStyles:""}}),e._v(" "),t("SpeakersCalendarItem",{attrs:{placeDate:"date",placeDateContent:"11-13",placeDateSecondContent:"",secondContent:"",bigNumberStyles:""}}),e._v(" "),t("SpeakersCalendarItem",{attrs:{placeDate:"city",placeDateContent:"amsterdam",placeDateSecondContent:"",secondContent:"",bigNumberStyles:""}})],1),e._v(" "),e._m(0)])]),e._v(" "),t("div",{staticClass:"relative z-1 w-full js-section-gl",attrs:{"data-id":"speakers_screen"}},[t("article",{staticClass:"relative w-full sm:pl-125 sm:pt-155 flex flex-col sm:flex-row items-center sm:items-start mx-auto pb-100 cursor-pointer"},[t("div",{ref:"card",staticClass:"relative w-[90%] sm:w-[55rem] sm:min-w-[55rem] h-[38.3rem] sm:h-[63.4rem] rounded-[1.2rem] mb-30 sm:mb-0 border-card bg-image overflow-hidden"},e._l(this.speakers,(function(r,i){return t("div",{key:i,ref:"speakers",refInFor:!0,staticClass:"absolute inset-0 flex items-end",class:{"is-active":i===e.idxCurrent}},[t("figure",{staticClass:"absolute inset-0 w-full h-full overflow-hidden js-speaker-image",staticStyle:{"clip-path":"inset(0% 100% 0% 0%)"}},[t("img",{staticClass:"speaker-img w-full h-full object-cover js-speaker-image-bg",attrs:{src:r.data.image.url,alt:""}})]),e._v(" "),t("span",{staticClass:"speaker-gradient"}),e._v(" "),t("div",{staticClass:"speaker-job relative z-2 w-full px-15 sm:px-22 pb-22 flex items-center justify-between font-2 font-medium text-16 leading-[120%] text-white invisible js-speaker-job"},[t("div",[t("p",{staticClass:"opacity-40",domProps:{innerHTML:e._s(e.$prismic.asText(r.data.country))}})]),e._v(" "),t("div",{staticClass:"text-right"},[t("p",{domProps:{innerHTML:e._s(e.$prismic.asText(r.data.role))}})])])])})),0),e._v(" "),t("div",{staticClass:"w-full sm:pt-60"},e._l(this.speakers,(function(r,i){return t("div",{key:i,ref:"speakerLines",refInFor:!0,on:{mouseenter:function(t){return e.enter(i)}}},[t("SpeakersSpeaker",{attrs:{name:e.$prismic.asText(r.data.name),company:e.$prismic.asText(r.data.company),slug:r.uid}})],1)})),0)])])])}),[function(){var e=this,t=e._self._c;return t("div",{staticClass:"mb-40 sm:mb-0 pl-20 sm:pl-0"},[t("div",{staticClass:"font-2 text-44 font-light leading-[105%] js-s-lines"},[e._v("\n\t\t\t\t\tSPEAKERS "),t("br"),e._v("\n\t\t\t\t\tFrom across "),t("br"),e._v("\n\t\t\t\t\tTHE WORLD\n\t\t\t\t")])])}],!1,null,"71496fd2",null);t.default=component.exports;installComponents(component,{Marquee:r(562).default,SpeakersCalendarItem:r(584).default,SpeakersSpeaker:r(648).default})}}]);