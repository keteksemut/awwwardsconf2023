(window.webpackJsonp=window.webpackJsonp||[]).push([[2,29],{562:function(t,e,r){"use strict";r.r(e);var n=r(5),o=(r(26),r(326),r(75),r(12),r(23),r(37),r(6)),l=r(137),c=r(45);o.a.registerPlugin(l.a);var d={data:function(){return{el:null,mqs:null,current:0,scrollDirection:1,direction:null,text:""}},fetch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$prismic.api.query(t.$prismic.predicates.at("document.type","marquee"));case 2:r=e.sent,t.text=t.$prismic.asText(r.results[0].data.text);case 4:case"end":return e.stop()}}),e)})))()},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$nextTick();case 2:setTimeout((function(){t.el=Object(c.b)(".js-marquee",t.$el),t.items=Object(c.c)(".marquee__part-m",t.$el),t.create(),l.a.create({trigger:t.$el,start:"top-=15% bottom",end:"bottom top",onEnter:function(e){t.mqs.forEach((function(t){return t.play()}))},onEnterBack:function(e){t.mqs.forEach((function(t){return t.play()}))},onLeave:function(e){t.mqs.forEach((function(t){return t.pause()}))},onLeaveBack:function(e){t.mqs.forEach((function(t){return t.pause()}))},onUpdate:function(e){var r=1===e.direction?.3:-.3;t.mqs.forEach((function(t){return o.a.to(t,{timeScale:2.2*r,overwrite:!0})}))}})}),1e3);case 3:case"end":return e.stop()}}),e)})))()},methods:{create:function(){var t=this;this.mqs=o.a.utils.toArray(".marquee__inner").map((function(e){var r=t.items;return Object(c.a)(r,{repeat:-1,speed:1.4,reversed:!1,paused:!0,paddingRight:parseFloat(o.a.getProperty(r[0],"marginRight","px"))})}))}}},f=r(9),component=Object(f.a)(d,(function(){var t=this,e=t._self._c;return e("a",{staticClass:"relative text-white js-t-marquee",attrs:{href:"https://www.universe.com/events/digital-thinkers-conference-amsterdam-2023-tickets-3HBF8J",target:"_blank"}},[e("CurveSvg",{attrs:{top:"0% - 1.1rem",left:"0%",rotate:"-90"}}),t._v(" "),e("CurveSvg",{attrs:{top:"100%",left:"0%",rotate:"0"}}),t._v(" "),e("CurveSvg",{attrs:{top:"0% - 1.1rem",left:"100% - 1.1rem",rotate:"-180"}}),t._v(" "),e("CurveSvg",{attrs:{top:"100%",left:"100% - 1.1rem",rotate:"90"}}),t._v(" "),e("div",{staticClass:"w-full relative overflow-hidden bg-black"},[e("div",{staticClass:"relative flex w-full overflow-hidden py-10"},[e("div",{staticClass:"flex items-center justify-center js-marquee"},[e("div",{staticClass:"marquee__inner marquee-text flex whitespace-nowrap font-hunter m:my-25 text-25 m:text-50 leading-[100%]"},[e("div",{staticClass:"relative flex flex-nowrap"},t._l(10,(function(r,i){return e("div",{key:i,staticClass:"marquee__part-m flex flex-nowrap items-center"},[t._m(0,!0),t._v(" "),e("span",{staticClass:"flex font-bold text-14 leading-none uppercase"},[t._v("BUY NOW")]),t._v(" "),t._m(1,!0),t._v(" "),e("span",{staticClass:"flex font-1 font-normal text-12 leading-none uppercase",domProps:{innerHTML:t._s(t.text)}})])})),0)])])])])],1)}),[function(){var t=this._self._c;return t("div",{staticClass:"flex items-center mx-15"},[t("div",{staticClass:"w-[1.1rem] h-[1.5rem]"},[t("img",{staticClass:"w-full h-full object-contain",attrs:{src:"/marquee-icon.png",alt:"Awww Conf"}})])])},function(){var t=this._self._c;return t("div",{staticClass:"flex items-center mx-15"},[t("div",{staticClass:"w-[1.1rem] h-[1.5rem]"},[t("img",{staticClass:"w-full h-full object-contain",attrs:{src:"/marquee-icon.png",alt:"Awww Conf"}})])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{CurveSvg:r(74).default})},610:function(t,e,r){var content=r(628);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(29).default)("7b1d45a2",content,!0,{sourceMap:!1})},627:function(t,e,r){"use strict";r(610)},628:function(t,e,r){var n=r(28)((function(i){return i[1]}));n.push([t.i,".js-item .item-img[data-v-96eb41de]{background-size:330px;-webkit-clip-path:inset(0 100% 0 0);clip-path:inset(0 100% 0 0)}.js-item:hover .item-img[data-v-96eb41de]{background-size:300px;-webkit-clip-path:inset(0 0 0 0);clip-path:inset(0 0 0 0)}",""]),n.locals={},t.exports=n},642:function(t,e,r){var content=r(661);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(29).default)("78770a08",content,!0,{sourceMap:!1})},647:function(t,e,r){"use strict";r.r(e);var n=r(5),o=(r(26),r(6)),l=r(561);r(560),r(45);o.a.registerPlugin(l.a);var c={data:function(){return{date:null,category:null}},props:{img:{type:String,default:""},title:{type:String,default:""},start:{type:String,default:""},end:{type:String,default:""},tag:{type:String,default:""},topic:{type:String,default:""},filter1:{type:String,default:""},filter2:{type:String,default:""},mainStage:{type:Boolean,default:!1},slug:{type:String,default:""}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$nextTick();case 2:e.t0=t.filter2,e.next="11th WED"===e.t0?5:"12th THU"===e.t0?7:"13th FRI"===e.t0?9:11;break;case 5:return t.date="date11",e.abrupt("break",13);case 7:return t.date="date12",e.abrupt("break",13);case 9:return t.date="date13",e.abrupt("break",13);case 11:return t.date="date11",e.abrupt("break",13);case 13:t.category="[",e.t1=t.filter1,e.next="dev"===e.t1?17:"des"===e.t1?19:"des & dev"===e.t1?21:23;break;case 17:return t.category+='"dev"',e.abrupt("break",23);case 19:return t.category+='"des"',e.abrupt("break",23);case 21:return t.category+='"dev", "des"',e.abrupt("break",23);case 23:t.category+="]";case 24:case"end":return e.stop()}}),e)})))()}},d=(r(627),r(9)),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;return e("nuxt-link",{staticClass:"relative grid grid-cols-12 gap-x-8 s:gap-x-20 mx-auto w-full font-16 font-medium pt-20 border-solid border-[#a41c02] border-b group cursor-pointer | js-item",class:{"lg:h-120 z-2 hover:z-3":t.filter1.length>0,"lg:h-85 z-1 !pointer-events-none":0==t.filter1.length},style:"background-color: ".concat(t.filter1.length>0?"":"#980c04","; transition: z-index 0.4s;"),attrs:{to:"/talks/"+t.slug,"data-filter1":this.category,"data-filter2":this.date,"data-height":"".concat(t.filter1.length>0?"12":"8.5")}},[e("span",{staticClass:"absolute hidden lg:block top-1/2 -translate-y-1/2 left-0 w-0 group-hover:w-full h-[calc(100%+4px)] duration-40 bg-black z-0"}),t._v(" "),e("CurveSvg",{staticClass:"!-top-12 duration-40 group-hover:duration-[150ms] !-left-11 group-hover:!left-0 hidden lg:block",attrs:{left:"0",rotate:"-90"}}),t._v(" "),e("CurveSvg",{staticClass:"duration-40 group-hover:duration-[150ms] !-left-11 group-hover:!left-0 -bottom-11 hidden lg:block"}),t._v(" "),e("div",{staticClass:"col-start-2 lg:col-start-2 col-span-12 lg:col-span-1 whitespace-nowrap z-2 col-info"},[e("span",{staticClass:"flex items-center mb-10 lg:mb-21 mt-7"},[e("span",{domProps:{innerHTML:t._s(t.start)}}),t._v(" "),t.end.length>0?e("span",{staticClass:"flex items-end ml-5"},[e("span",{staticClass:"w-27 h-1 mr-5 bg-white opacity-40 mb-4"}),t._v(" "),e("span",{domProps:{innerHTML:t._s(t.end)}})]):t._e()]),t._v(" "),t.tag.length>0?e("div",[e("span",{staticClass:"text-[#ce6d69] group-hover:opacity-100 group-hover:text-red duration-40"},[t._v("/")]),t._v(" "),e("span",{staticClass:"opacity-40 uppercase",domProps:{innerHTML:t._s(t.tag)}})]):t._e()]),t._v(" "),e("div",{staticClass:"col-start-2 lg:col-start-3 col-span-12 lg:col-span-5 lg:pl-72 lg:group-hover:pl-125 duration-40 z-2"},[e("h3",{staticClass:"text-26 lg:text-36 uppercase leading-[1.3]",domProps:{innerHTML:t._s(t.title)}})]),t._v(" "),t.topic.length>0?e("div",{staticClass:"col-start-2 lg:col-start-9 col-span-12 lg:col-span-1 z-2 col-info"},[e("span",{staticClass:"block mb-8 mt-7",domProps:{innerHTML:t._s(t.topic)}}),t._v(" "),e("div",{staticClass:"flex mb-20 lg:mb-0"},["des"!=t.filter1?e("div",{staticClass:"text-9 px-10 py-4 border-[0.5px] border-solide border-[#EAEAEA4D] rounded-[4px] mr-7 uppercase whitespace-nowrap"},[t._v("\n                    DEV\n                ")]):t._e(),t._v(" "),"dev"!=t.filter1?e("div",{staticClass:"text-9 px-10 py-4 border-[0.5px] border-solide border-[#EAEAEA4D] rounded-[4px] mr-7 uppercase whitespace-nowrap"},[t._v("\n                    design\n                ")]):t._e(),t._v(" "),t.mainStage?e("div",{staticClass:"text-9 px-10 py-4 border-[0.5px] border-solide border-[#EAEAEA4D] rounded-[4px] mr-7 uppercase whitespace-nowrap"},[t._v("\n                    main-stage\n                ")]):t._e()])]):t._e(),t._v(" "),t.img.length>0?e("div",{staticClass:"absolute top-1/2 -translate-y-1/2 right-[284px] h-full z-5 opacity-0 group-hover:opacity-100 group-hover:delay-300 duration-[200ms] hidden lg:block"},[e("CurveSvg",{staticClass:"!-top-12 duration-40 group-hover:duration-[150ms]",attrs:{rotate:"180"}}),t._v(" "),e("CurveSvg",{staticClass:"!-bottom-10 duration-40 group-hover:duration-[150ms]",attrs:{rotate:"90"}})],1):t._e(),t._v(" "),t.img.length>0?e("div",{staticClass:"absolute top-1/2 -translate-y-1/2 right-0 w-[273px] h-[calc(300%+4px)] duration-40 z-2 max-md:hidden"},[e("div",{staticClass:"group-hover:w-[273px] w-0 h-full duration-40 rounded-l-[10px] overflow-hidden block bg-black z-2 group-hover:delay-0 delay-100"},[e("span",{staticClass:"absolute top-[10px] left-[10px] duration-40 w-[calc(100%-10px)] group-hover:delay-300 h-[calc(100%-20px)] bg-cover bg-center bg-no-repeat item-img",style:"background-image: url('".concat(t.img,"');")}),t._v(" "),e("span",{staticClass:"absolute right-0 bottom-[10px] w-full h-[calc(100%-10px)] block duration-40 group-hover:opacity-100 opacity-0 group-hover:delay-500",staticStyle:{background:"linear-gradient(130deg, rgba(217, 56, 49, 0) 57.28%, #D93831 89.98%)"}})]),t._v(" "),e("CurveSvg",{staticClass:"!-top-11 duration-40 group-hover:duration-[150ms] group-hover:right-0 -right-11 group-hover:delay-300",attrs:{rotate:"180"}}),t._v(" "),e("CurveSvg",{staticClass:"!-bottom-10 duration-40 group-hover:duration-[150ms] group-hover:right-0 -right-11 group-hover:delay-300",attrs:{rotate:"90"}})],1):t._e()],1)}),[],!1,null,"96eb41de",null);e.default=component.exports;installComponents(component,{CurveSvg:r(74).default})},660:function(t,e,r){"use strict";r(642)},661:function(t,e,r){var n=r(28)((function(i){return i[1]}));n.push([t.i,".filter-btn .filter-btn__one[data-v-28d100b0],.filter-btn .filter-btn__two[data-v-28d100b0]{white-space:nowrap}@media (min-width:1024px){.filter-btn .filter-btn__one[data-v-28d100b0],.filter-btn .filter-btn__two[data-v-28d100b0]{font-size:2.6rem}}.filter-btn.active[data-type=filter-1][data-v-28d100b0]{--tw-bg-opacity:1;background-color:#000;background-color:rgba(0,0,0,var(--tw-bg-opacity))}@media (min-width:1024px){.filter-btn.active[data-type=filter-1][data-v-28d100b0]{padding-bottom:1.1rem;padding-top:1.1rem}}.filter-btn.active[data-type=filter-1] .filter-btn__one[data-v-28d100b0],.filter-btn.active[data-type=filter-1] .filter-btn__two[data-v-28d100b0]{--tw-text-opacity:1;color:#fff;color:rgba(255,255,255,var(--tw-text-opacity));font-family:fk;font-weight:400}@media (min-width:1024px){.filter-btn.active[data-type=filter-1] .filter-btn__one[data-v-28d100b0],.filter-btn.active[data-type=filter-1] .filter-btn__two[data-v-28d100b0]{font-size:2.2rem}}.filter-btn.active[data-type=filter-2][data-v-28d100b0]{--tw-bg-opacity:1;background-color:#fff;background-color:rgba(255,255,255,var(--tw-bg-opacity));padding-bottom:1.1rem;padding-top:1.1rem}.filter-btn.active[data-type=filter-2] .filter-btn__one[data-v-28d100b0],.filter-btn.active[data-type=filter-2] .filter-btn__two[data-v-28d100b0]{font-family:fk;font-weight:400}@media (min-width:1024px){.filter-btn.active[data-type=filter-2] .filter-btn__one[data-v-28d100b0],.filter-btn.active[data-type=filter-2] .filter-btn__two[data-v-28d100b0]{font-size:2.2rem}}.filter-btn.active[data-v-28d100b0]{pointer-events:none}",""]),n.locals={},t.exports=n},668:function(t,e,r){"use strict";r.r(e);var n=r(5),o=(r(12),r(23),r(75),r(38),r(35),r(36),r(26),r(6)),l=r(561),c=r(560),d=r.n(c),f=r(45);o.a.registerPlugin(l.a);var v={data:function(){return{filter1:"all",filter2:"date11",desCount:0,devCount:0}},props:{events:{type:Array,default:function(){return[]}}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$nextTick();case 2:t.cache(),(r=t.$route.query.type)&&t.changeFilter({target:Object(f.b)('.filter-btn[data-value="'.concat(r.substring(0,3),'"]'))});case 5:case"end":return e.stop()}}),e)})))()},destroyed:function(){},methods:{enter:function(){new d.a(Object(f.c)(".js-item.border-b h3",this.$refs.list),{type:"chars",charsClass:"js-t-char-elem"}),Object(f.c)(".js-item.border-b",this.$refs.list).forEach((function(t){o.a.killTweensOf(t)})),o.a.timeline({scrollTrigger:{trigger:this.$refs.label}}).from(this.$refs.label,{y:-50,alpha:0,ease:"expo.out"}).from(Object(f.c)("button",this.$refs.buttons),{y:10,alpha:0,duration:.6,stagger:.08,ease:"expo.out"}).from([this.$refs.line,this.$refs.date],{alpha:0,duration:.65,ease:"expo.out"},1.2).from(Object(f.c)(".js-item.border-b",this.$refs.list),{y:20,alpha:0,duration:.7,stagger:.2,ease:"expo.out"},1.3).to(Object(f.c)(".js-t-char-elem",this.$list),{scrambleText:{chars:"AWWWARDS",text:"{original}",speed:.8,delimiter:""},duration:1.2,stagger:{amount:.8}},1.3).from(Object(f.c)(".js-item.border-b .col-info",this.$refs.list),{x:10,alpha:0,duration:.6,stagger:.1,ease:"expo.out"},1.65)},cache:function(){var t=this;Object(f.c)(".js-item").forEach((function(t){t.setAttribute("data-height",t.getBoundingClientRect().height)})),setTimeout((function(){t.applyFilter(),t.enter()}),500)},changeFilter:function(t){Object(f.c)('.filter-btn[data-type="'.concat(t.target.dataset.type,'"]')).forEach((function(t){t.classList.remove("active")})),t.target.classList.add("active"),"filter-1"===t.target.dataset.type?this.filter1=t.target.dataset.value:this.filter2=t.target.dataset.value,this.applyFilter()},applyFilter:function(){var t=this;this.desCount=0,this.devCount=0,Object(f.c)(".js-item").forEach((function(e){var r=JSON.parse(e.dataset.filter1);e.dataset.filter2==t.filter2&&(r.includes("dev")&&t.devCount++,r.includes("des")&&t.desCount++),!r.includes(t.filter1)&&"all"!=t.filter1||e.dataset.filter2!=t.filter2?(o.a.killTweensOf(e),o.a.to(e,{alpha:0,height:0,paddingTop:0,duration:.4,ease:"expo",pointerEvents:"none"}),e.classList.remove("border-b")):(o.a.killTweensOf(e),window.innerWidth>1024?o.a.to(e,{alpha:1,height:"".concat(e.dataset.height,"px"),paddingTop:"2rem",duration:.4,ease:"expo",pointerEvents:"all"}):o.a.to(e,{alpha:1,height:"".concat(e.dataset.height,"px"),paddingTop:"0.5rem",duration:.4,ease:"expo",pointerEvents:"all"}),e.classList.add("border-b"))})),this.$nuxt.$emit("refresh")}}},m=(r(660),r(9)),component=Object(m.a)(v,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"relative w-full lg:mb-160 text-white"},[e("div",{staticClass:"relative js-s-simple-fade"},[e("Marquee")],1),t._v(" "),e("div",{staticClass:"grid grid-cols-12 gap-x-8 s:gap-x-20 mx-auto w-full mt-44"},[e("span",{ref:"label",staticClass:"col-start-2 col-span-12 text-12 mb-10"},[t._v("FILTER BY:")]),t._v(" "),e("div",{ref:"buttons",staticClass:"flex items-center max-lg:gap-y-10 gap-x-10 lg:gap-x-20 col-start-2 col-span-10 max-md:justify-between max-lg:flex-wrap"},[e("button",{staticClass:"filter-btn relative px-8 lg:px-32 py-[0.8rem] rounded-[1rem] border-[1px] border-solid border-black border-opacity-20 active",attrs:{"data-type":"filter-1","data-value":"all"},on:{click:t.changeFilter}},[t._m(0)]),t._v(" "),e("button",{staticClass:"filter-btn relative px-8 lg:px-24 py-[0.8rem] rounded-[1rem] border-[1px] border-solid border-black border-opacity-20",attrs:{"data-type":"filter-1","data-value":"des"},on:{click:t.changeFilter}},[t._m(1),t._v(" "),e("div",{staticClass:"absolute top-[-1rem] -right-10 flex items-center justify-center w-20 h-20 rounded-full bg-[#D9D9D9] font-1 font-normal text-10 leading-none text-black text-center"},[e("div",{staticClass:"relative"},[t._v(t._s(t.desCount))])])]),t._v(" "),e("button",{staticClass:"filter-btn relative px-8 lg:px-24 py-[0.8rem] rounded-[1rem] border-[1px] border-solid border-black border-opacity-20",attrs:{"data-type":"filter-1","data-value":"dev"},on:{click:t.changeFilter}},[t._m(2),t._v(" "),e("div",{staticClass:"absolute top-[-1rem] -right-10 flex items-center justify-center w-20 h-20 rounded-full bg-[#D9D9D9] font-1 font-normal text-10 leading-none text-black text-center"},[e("div",{staticClass:"relative"},[t._v(t._s(t.devCount))])])]),t._v(" "),e("span",{ref:"line",staticClass:"w-1 h-full bg-white opacity-40 max-lg:hidden"}),t._v(" "),e("button",{staticClass:"filter-btn relative px-8 lg:px-20 py-[0.8rem] rounded-[1rem] border-[1px] border-solid border-black border-opacity-20 active",attrs:{"data-type":"filter-2","data-value":"date11"},on:{click:t.changeFilter}},[t._m(3)]),t._v(" "),e("button",{staticClass:"filter-btn relative px-8 lg:px-20 py-[0.8rem] rounded-[1rem] border-[1px] border-solid border-black border-opacity-20",attrs:{"data-type":"filter-2","data-value":"date12"},on:{click:t.changeFilter}},[t._m(4)]),t._v(" "),e("button",{staticClass:"filter-btn relative px-8 lg:px-20 py-[0.8rem] rounded-[1rem] border-[1px] border-solid border-black border-opacity-20",attrs:{"data-type":"filter-2","data-value":"date13"},on:{click:t.changeFilter}},[t._m(5)]),t._v(" "),e("span",{ref:"date",staticClass:"text-black text-16 font-medium whitespace-nowrap"},[t._v("OCTOBER 2023")])])]),t._v(" "),e("div",{ref:"list",staticClass:"relative mt-44 border-solid border-[#a41c02] border-t"},t._l(this.events,(function(r,n){return e("ScheduleItem",{key:n,attrs:{img:r.data.image.url,title:t.$prismic.asText(r.data.title),start:r.data.start?t.$prismic.asText(r.data.start):"",end:r.data.end?t.$prismic.asText(r.data.end):"",tag:r.data.type?r.data.type:"",topic:t.$prismic.asText(r.data.company),slug:r.data.speaker.uid,filter1:r.data.category?r.data.category:"",filter2:r.data.date?r.data.date:"",mainStage:r.data.main_stage}})})),1),t._v(" "),e("div",{attrs:{id:"schedule-list"}})])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"relative overflow-hidden pointer-events-none"},[e("div",{staticClass:"filter-btn__one text-black text-16 font-medium"},[t._v("\n\t\t\t\t\t\t\tALL\n\t\t\t\t\t\t")]),t._v(" "),e("div",{staticClass:"filter-btn__two absolute top-0 left-0 text-black text-16 font-medium"},[t._v("\n\t\t\t\t\t\t\tALL\n\t\t\t\t\t\t")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"relative overflow-hidden pointer-events-none"},[e("div",{staticClass:"filter-btn__one text-black text-16 font-medium"},[t._v("\n\t\t\t\t\t\t\tDESIGN\n\t\t\t\t\t\t")]),t._v(" "),e("div",{staticClass:"filter-btn__two absolute top-0 left-0 text-black text-16 font-medium"},[t._v("\n\t\t\t\t\t\t\tDESIGN\n\t\t\t\t\t\t")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"relative overflow-hidden pointer-events-none"},[e("div",{staticClass:"filter-btn__one text-black text-16 font-medium"},[t._v("\n\t\t\t\t\t\t\tDEVELOPMENT\n\t\t\t\t\t\t")]),t._v(" "),e("div",{staticClass:"filter-btn__two absolute top-0 left-0 text-black text-16 font-medium"},[t._v("\n\t\t\t\t\t\t\tDEVELOPMENT\n\t\t\t\t\t\t")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"relative overflow-hidden pointer-events-none"},[e("div",{staticClass:"filter-btn__one text-black text-16 font-medium"},[t._v("\n\t\t\t\t\t\t\t11th WED.\n\t\t\t\t\t\t")]),t._v(" "),e("div",{staticClass:"filter-btn__two absolute top-0 left-0 text-black text-16 font-medium"},[t._v("\n\t\t\t\t\t\t\t11th WED.\n\t\t\t\t\t\t")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"relative overflow-hidden pointer-events-none"},[e("div",{staticClass:"filter-btn__one text-black text-16 font-medium"},[t._v("\n\t\t\t\t\t\t\t12th THU.\n\t\t\t\t\t\t")]),t._v(" "),e("div",{staticClass:"filter-btn__two absolute top-0 left-0 text-black text-16 font-medium"},[t._v("\n\t\t\t\t\t\t\t12th THU.\n\t\t\t\t\t\t")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"relative overflow-hidden pointer-events-none"},[e("div",{staticClass:"filter-btn__one text-black text-16 font-medium"},[t._v("\n\t\t\t\t\t\t\t13th FRI.\n\t\t\t\t\t\t")]),t._v(" "),e("div",{staticClass:"filter-btn__two absolute top-0 left-0 text-black text-16 font-medium"},[t._v("\n\t\t\t\t\t\t\t13th FRI.\n\t\t\t\t\t\t")])])}],!1,null,"28d100b0",null);e.default=component.exports;installComponents(component,{Marquee:r(562).default,ScheduleItem:r(647).default})}}]);