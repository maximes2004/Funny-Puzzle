(function(){"use strict";var e={593:function(e,t,r){var a=r(5130),l=r(6768);const u={id:"app"};function i(e,t,r,a,i,n){const s=(0,l.g2)("router-view");return(0,l.uX)(),(0,l.CE)("div",u,[(0,l.bF)(s)])}var n={name:"App"},s=r(1241);const o=(0,s.A)(n,[["render",i]]);var z=o,p=r(1387),d=r(4232);const c={class:"game-container"},m={key:0,class:"user-info"},h={key:1},g={key:0,class:"error-message"},v={key:2},f={key:3},b={class:"puzzle-grid"},k=["onDrop","onTouchstart","onTouchend"],L=["src","alt","id"],j={class:"timer-block"},C={key:0,class:"success-message"};function y(e,t,r,u,i,n){return(0,l.uX)(),(0,l.CE)("div",c,[t[13]||(t[13]=(0,l.Lk)("h1",null,"Собери паззл на время",-1)),i.isNameSaved?((0,l.uX)(),(0,l.CE)("p",m,[t[12]||(t[12]=(0,l.eW)("Авторизован пользователь: ")),(0,l.Lk)("strong",null,(0,d.v_)(i.username),1)])):(0,l.Q3)("",!0),i.isFormVisible?((0,l.uX)(),(0,l.CE)("div",h,[(0,l.bo)((0,l.Lk)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>i.username=e),type:"text",placeholder:"Введите ваше имя"},null,512),[[a.Jo,i.username]]),(0,l.Lk)("button",{onClick:t[1]||(t[1]=(...e)=>n.saveUser&&n.saveUser(...e))},"Сохранить"),i.errorMessage?((0,l.uX)(),(0,l.CE)("p",g,(0,d.v_)(i.errorMessage),1)):(0,l.Q3)("",!0)])):(0,l.Q3)("",!0),i.isNameSaved&&!i.gameStarted?((0,l.uX)(),(0,l.CE)("div",v,[(0,l.Lk)("button",{onClick:t[2]||(t[2]=(...e)=>n.startGame&&n.startGame(...e))},"Начать игру"),(0,l.Lk)("button",{onClick:t[3]||(t[3]=(...e)=>n.viewLeaderboard&&n.viewLeaderboard(...e))},"Таблица лидеров"),(0,l.Lk)("button",{onClick:t[4]||(t[4]=(...e)=>n.changeUser&&n.changeUser(...e))},"Сменить пользователя")])):(0,l.Q3)("",!0),i.gameStarted?((0,l.uX)(),(0,l.CE)("div",f,[(0,l.Lk)("div",b,[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(i.puzzlePieces,((e,r)=>((0,l.uX)(),(0,l.CE)("div",{key:r,class:"puzzle-piece",onDragstart:t[5]||(t[5]=(...e)=>n.dragStart&&n.dragStart(...e)),onDragover:t[6]||(t[6]=(...e)=>n.dragOver&&n.dragOver(...e)),onDrop:e=>n.dropPiece(r),onTouchstart:e=>n.touchStart(r,e),onTouchmove:t[7]||(t[7]=e=>n.touchMove(e)),onTouchend:e=>n.touchEnd(r)},[(0,l.Lk)("img",{src:e.img,alt:e.alt,id:e.id,class:"puzzle-img",draggable:"false"},null,8,L)],40,k)))),128))]),(0,l.Lk)("p",j,"Время: "+(0,d.v_)(i.timer),1),(0,l.Lk)("button",{onClick:t[8]||(t[8]=(...e)=>n.checkSolution&&n.checkSolution(...e))},"Завершить игру"),(0,l.Lk)("button",{onClick:t[9]||(t[9]=(...e)=>n.restartGame&&n.restartGame(...e))},"Попробовать еще раз"),(0,l.Lk)("button",{onClick:t[10]||(t[10]=(...e)=>n.viewLeaderboard&&n.viewLeaderboard(...e))},"Таблица лидеров"),(0,l.Lk)("button",{onClick:t[11]||(t[11]=(...e)=>n.changeUser&&n.changeUser(...e))},"Сменить пользователя"),i.gameCompleted?((0,l.uX)(),(0,l.CE)("p",C,"Решено!")):(0,l.Q3)("",!0)])):(0,l.Q3)("",!0)])}r(4114),r(8992),r(3215);var I=r(6400),S=r(4161);const P={apiKey:"AIzaSyALj6_xAX6_0cEuQYYcx7NvAnnVIxwR5_Q",authDomain:"funny-puzzle-7abfe.firebaseapp.com",databaseURL:"https://funny-puzzle-7abfe-default-rtdb.europe-west1.firebasedatabase.app",projectId:"funny-puzzle-7abfe",storageBucket:"funny-puzzle-7abfe.firebasestorage.app",messagingSenderId:"80505961078",appId:"1:80505961078:web:fcad7da701befbdcb83d57",measurementId:"G-NGH74220EN"},E=(0,I.Wp)(P),x=(0,S.C3)(E);var w={name:"GamePuzzle",data(){return{puzzlePieces:[{id:"puzzle-1",img:"puzzle1.jpg",alt:"puzzle 1"},{id:"puzzle-2",img:"puzzle2.jpg",alt:"puzzle 2"},{id:"puzzle-3",img:"puzzle3.jpg",alt:"puzzle 3"},{id:"puzzle-4",img:"puzzle4.jpg",alt:"puzzle 4"},{id:"puzzle-5",img:"puzzle5.jpg",alt:"puzzle 5"},{id:"puzzle-6",img:"puzzle6.jpg",alt:"puzzle 6"},{id:"puzzle-7",img:"puzzle7.jpg",alt:"puzzle 7"},{id:"puzzle-8",img:"puzzle8.jpg",alt:"puzzle 8"},{id:"puzzle-9",img:"puzzle9.jpg",alt:"puzzle 9"},{id:"puzzle-10",img:"puzzle10.jpg",alt:"puzzle 10"},{id:"puzzle-11",img:"puzzle11.jpg",alt:"puzzle 11"},{id:"puzzle-12",img:"puzzle12.jpg",alt:"puzzle 12"},{id:"puzzle-13",img:"puzzle13.jpg",alt:"puzzle 13"},{id:"puzzle-14",img:"puzzle14.jpg",alt:"puzzle 14"},{id:"puzzle-15",img:"puzzle15.jpg",alt:"puzzle 15"},{id:"puzzle-16",img:"puzzle16.jpg",alt:"puzzle 16"},{id:"puzzle-17",img:"puzzle17.jpg",alt:"puzzle 17"},{id:"puzzle-18",img:"puzzle18.jpg",alt:"puzzle 18"},{id:"puzzle-19",img:"puzzle19.jpg",alt:"puzzle 19"},{id:"puzzle-20",img:"puzzle20.jpg",alt:"puzzle 20"},{id:"puzzle-21",img:"puzzle21.jpg",alt:"puzzle 21"},{id:"puzzle-22",img:"puzzle22.jpg",alt:"puzzle 22"},{id:"puzzle-23",img:"puzzle23.jpg",alt:"puzzle 23"},{id:"puzzle-24",img:"puzzle24.jpg",alt:"puzzle 24"}],username:"",isFormVisible:!0,isNameSaved:!1,gameStarted:!1,timer:0,timerInterval:null,errorMessage:"",gameCompleted:!1,dragStartIndex:null}},methods:{saveUser(){!this.username||this.username.trim().length<4?this.errorMessage="Введите свое имя (не менее 4 символов)":(this.errorMessage="",localStorage.setItem("username",this.username),this.isFormVisible=!1,this.isNameSaved=!0)},startGame(){this.username?(this.gameStarted=!0,this.shufflePuzzle(),this.startTimer()):this.errorMessage="Введите свое имя (не менее 4 символов)"},checkSolution(){const e=this.puzzlePieces.every(((e,t)=>e.id===`puzzle-${t+1}`));if(e){clearInterval(this.timerInterval),this.gameCompleted=!0;const e={username:this.username,time:this.timer};(0,S.VC)((0,S.KR)(x,"leaderboard"),e)}else alert("Паззл собран неверно!")},startTimer(){this.timer=0,this.timerInterval=setInterval((()=>{this.timer++}),1e3)},shufflePuzzle(){this.puzzlePieces=this.puzzlePieces.sort((()=>Math.random()-.5))},dragStart(e){e.dataTransfer.setData("text/plain",e.target.id)},dragOver(e){e.preventDefault()},dropPiece(e){const t=event.dataTransfer.getData("text/plain"),r=this.puzzlePieces.findIndex((e=>e.id===t));if(-1!==r){const t=this.puzzlePieces[r];this.puzzlePieces[r]=this.puzzlePieces[e],this.puzzlePieces[e]=t}},touchStart(e,t){t.preventDefault(),this.dragStartIndex=e,this.startTouchX=t.touches[0].clientX,this.startTouchY=t.touches[0].clientY},touchMove(e){e.preventDefault()},touchEnd(e){if(null!==this.dragStartIndex&&null!==e){const t=this.puzzlePieces[this.dragStartIndex];this.puzzlePieces[this.dragStartIndex]=this.puzzlePieces[e],this.puzzlePieces[e]=t}this.dragStartIndex=null,this.startTouchX=null,this.startTouchY=null},viewLeaderboard(){this.$router.push("/leaderboard")},changeUser(){this.username="",localStorage.removeItem("username"),this.isFormVisible=!0,this.isNameSaved=!1,clearInterval(this.timerInterval),this.timer=0,this.gameStarted=!1,this.$router.push("/")},restartGame(){this.shufflePuzzle(),this.timer=0,this.gameCompleted=!1,clearInterval(this.timerInterval),this.startTimer()}},mounted(){this.username=localStorage.getItem("username")||""}};const X=(0,s.A)(w,[["render",y],["__scopeId","data-v-0923d6c4"]]);var _=X;const T={class:"leaderboard-container"},O={class:"leaderboard-table"};function D(e,t,r,a,u,i){return(0,l.uX)(),(0,l.CE)("div",T,[t[2]||(t[2]=(0,l.Lk)("h1",null,"Таблица лидеров",-1)),(0,l.Lk)("table",O,[t[1]||(t[1]=(0,l.Lk)("thead",null,[(0,l.Lk)("tr",null,[(0,l.Lk)("th",null,"#"),(0,l.Lk)("th",null,"Имя пользователя"),(0,l.Lk)("th",null,"Время (секунды)")])],-1)),(0,l.Lk)("tbody",null,[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(i.sortedLeaderboard,((e,t)=>((0,l.uX)(),(0,l.CE)("tr",{key:t},[(0,l.Lk)("td",null,(0,d.v_)(t+1),1),(0,l.Lk)("td",null,(0,d.v_)(e.username),1),(0,l.Lk)("td",null,(0,d.v_)(e.time),1)])))),128))])]),(0,l.Lk)("button",{onClick:t[0]||(t[0]=(...e)=>i.goBack&&i.goBack(...e))},"Назад")])}var G={name:"GameLeaderboard",data(){return{leaderboard:[]}},computed:{sortedLeaderboard(){return[...this.leaderboard].sort(((e,t)=>e.time-t.time))}},methods:{goBack(){this.$router.push("/")}},async mounted(){try{const e=(0,S.KR)(x),t=await(0,S.Jt)((0,S.jf)(e,"leaderboard"));t.exists()?this.leaderboard=Object.values(t.val()):console.log("Нет данных в таблице лидеров.")}catch(e){console.error("Ошибка при получении данных:",e)}}};const M=(0,s.A)(G,[["render",D],["__scopeId","data-v-480469d4"]]);var U=M;const A=[{path:"/",component:_},{path:"/leaderboard",component:U}],F=(0,p.aE)({history:(0,p.LA)("/Funny-puzzle/"),routes:A});var N=F;(0,a.Ef)(z).use(N).mount("#app")}},t={};function r(a){var l=t[a];if(void 0!==l)return l.exports;var u=t[a]={exports:{}};return e[a].call(u.exports,u,u.exports,r),u.exports}r.m=e,function(){var e=[];r.O=function(t,a,l,u){if(!a){var i=1/0;for(z=0;z<e.length;z++){a=e[z][0],l=e[z][1],u=e[z][2];for(var n=!0,s=0;s<a.length;s++)(!1&u||i>=u)&&Object.keys(r.O).every((function(e){return r.O[e](a[s])}))?a.splice(s--,1):(n=!1,u<i&&(i=u));if(n){e.splice(z--,1);var o=l();void 0!==o&&(t=o)}}return t}u=u||0;for(var z=e.length;z>0&&e[z-1][2]>u;z--)e[z]=e[z-1];e[z]=[a,l,u]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={524:0};r.O.j=function(t){return 0===e[t]};var t=function(t,a){var l,u,i=a[0],n=a[1],s=a[2],o=0;if(i.some((function(t){return 0!==e[t]}))){for(l in n)r.o(n,l)&&(r.m[l]=n[l]);if(s)var z=s(r)}for(t&&t(a);o<i.length;o++)u=i[o],r.o(e,u)&&e[u]&&e[u][0](),e[u]=0;return r.O(z)},a=self["webpackChunkpuzzle_game"]=self["webpackChunkpuzzle_game"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=r.O(void 0,[504],(function(){return r(593)}));a=r.O(a)})();
//# sourceMappingURL=app.c4f8c372.js.map