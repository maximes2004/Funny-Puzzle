(function(){"use strict";var e={6788:function(e,t,r){var a=r(5130),l=r(6768);const i={id:"app"};function u(e,t,r,a,u,n){const s=(0,l.g2)("router-view");return(0,l.uX)(),(0,l.CE)("div",i,[(0,l.bF)(s)])}var n={name:"App"},s=r(1241);const z=(0,s.A)(n,[["render",u]]);var o=z,p=r(1387),d=r(4232);const c={class:"game-container"},m={key:0,class:"user-info"},g={key:1},h={key:0,class:"error-message"},v={key:2},f={key:3},b={class:"puzzle-grid"},k=["onDrop"],L=["src","alt","id"],j={class:"timer-block"},C={key:0,class:"success-message"};function y(e,t,r,i,u,n){return(0,l.uX)(),(0,l.CE)("div",c,[t[12]||(t[12]=(0,l.Lk)("h1",null,"Собери паззл на время",-1)),u.isNameSaved?((0,l.uX)(),(0,l.CE)("p",m,[t[11]||(t[11]=(0,l.eW)("Авторизован пользователь: ")),(0,l.Lk)("strong",null,(0,d.v_)(u.username),1)])):(0,l.Q3)("",!0),u.isFormVisible?((0,l.uX)(),(0,l.CE)("div",g,[(0,l.bo)((0,l.Lk)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>u.username=e),type:"text",placeholder:"Введите ваше имя"},null,512),[[a.Jo,u.username]]),(0,l.Lk)("button",{onClick:t[1]||(t[1]=(...e)=>n.saveUser&&n.saveUser(...e))},"Сохранить"),u.errorMessage?((0,l.uX)(),(0,l.CE)("p",h,(0,d.v_)(u.errorMessage),1)):(0,l.Q3)("",!0)])):(0,l.Q3)("",!0),u.isNameSaved&&!u.gameStarted?((0,l.uX)(),(0,l.CE)("div",v,[(0,l.Lk)("button",{onClick:t[2]||(t[2]=(...e)=>n.startGame&&n.startGame(...e))},"Начать игру"),(0,l.Lk)("button",{onClick:t[3]||(t[3]=(...e)=>n.viewLeaderboard&&n.viewLeaderboard(...e))},"Таблица лидеров"),(0,l.Lk)("button",{onClick:t[4]||(t[4]=(...e)=>n.changeUser&&n.changeUser(...e))},"Сменить пользователя")])):(0,l.Q3)("",!0),u.gameStarted?((0,l.uX)(),(0,l.CE)("div",f,[(0,l.Lk)("div",b,[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(u.puzzlePieces,((e,r)=>((0,l.uX)(),(0,l.CE)("div",{key:r,class:"puzzle-piece",onDragstart:t[5]||(t[5]=(...e)=>n.dragStart&&n.dragStart(...e)),onDragover:t[6]||(t[6]=(...e)=>n.dragOver&&n.dragOver(...e)),onDrop:e=>n.dropPiece(r)},[(0,l.Lk)("img",{src:e.img,alt:e.alt,id:e.id,class:"puzzle-img",draggable:"true"},null,8,L)],40,k)))),128))]),(0,l.Lk)("p",j,"Время: "+(0,d.v_)(u.timer),1),(0,l.Lk)("button",{onClick:t[7]||(t[7]=(...e)=>n.checkSolution&&n.checkSolution(...e))},"Завершить игру"),(0,l.Lk)("button",{onClick:t[8]||(t[8]=(...e)=>n.restartGame&&n.restartGame(...e))},"Попробовать еще раз"),(0,l.Lk)("button",{onClick:t[9]||(t[9]=(...e)=>n.viewLeaderboard&&n.viewLeaderboard(...e))},"Таблица лидеров"),(0,l.Lk)("button",{onClick:t[10]||(t[10]=(...e)=>n.changeUser&&n.changeUser(...e))},"Сменить пользователя"),u.gameCompleted?((0,l.uX)(),(0,l.CE)("p",C,"Решено!")):(0,l.Q3)("",!0)])):(0,l.Q3)("",!0)])}r(4114),r(8992),r(3215);var I=r(6400),S=r(4161);const w={apiKey:"AIzaSyALj6_xAX6_0cEuQYYcx7NvAnnVIxwR5_Q",authDomain:"funny-puzzle-7abfe.firebaseapp.com",databaseURL:"https://funny-puzzle-7abfe-default-rtdb.europe-west1.firebasedatabase.app",projectId:"funny-puzzle-7abfe",storageBucket:"funny-puzzle-7abfe.firebasestorage.app",messagingSenderId:"80505961078",appId:"1:80505961078:web:fcad7da701befbdcb83d57",measurementId:"G-NGH74220EN"},E=(0,I.Wp)(w),P=(0,S.C3)(E);var _={name:"GamePuzzle",data(){return{puzzlePieces:[{id:"puzzle-1",img:"puzzle1.jpg",alt:"puzzle 1"},{id:"puzzle-2",img:"puzzle2.jpg",alt:"puzzle 2"},{id:"puzzle-3",img:"puzzle3.jpg",alt:"puzzle 3"},{id:"puzzle-4",img:"puzzle4.jpg",alt:"puzzle 4"},{id:"puzzle-5",img:"puzzle5.jpg",alt:"puzzle 5"},{id:"puzzle-6",img:"puzzle6.jpg",alt:"puzzle 6"},{id:"puzzle-7",img:"puzzle7.jpg",alt:"puzzle 7"},{id:"puzzle-8",img:"puzzle8.jpg",alt:"puzzle 8"},{id:"puzzle-9",img:"puzzle9.jpg",alt:"puzzle 9"},{id:"puzzle-10",img:"puzzle10.jpg",alt:"puzzle 10"},{id:"puzzle-11",img:"puzzle11.jpg",alt:"puzzle 11"},{id:"puzzle-12",img:"puzzle12.jpg",alt:"puzzle 12"},{id:"puzzle-13",img:"puzzle13.jpg",alt:"puzzle 13"},{id:"puzzle-14",img:"puzzle14.jpg",alt:"puzzle 14"},{id:"puzzle-15",img:"puzzle15.jpg",alt:"puzzle 15"},{id:"puzzle-16",img:"puzzle16.jpg",alt:"puzzle 16"},{id:"puzzle-17",img:"puzzle17.jpg",alt:"puzzle 17"},{id:"puzzle-18",img:"puzzle18.jpg",alt:"puzzle 18"},{id:"puzzle-19",img:"puzzle19.jpg",alt:"puzzle 19"},{id:"puzzle-20",img:"puzzle20.jpg",alt:"puzzle 20"},{id:"puzzle-21",img:"puzzle21.jpg",alt:"puzzle 21"},{id:"puzzle-22",img:"puzzle22.jpg",alt:"puzzle 22"},{id:"puzzle-23",img:"puzzle23.jpg",alt:"puzzle 23"},{id:"puzzle-24",img:"puzzle24.jpg",alt:"puzzle 24"}],username:"",isFormVisible:!0,isNameSaved:!1,gameStarted:!1,timer:0,timerInterval:null,errorMessage:"",gameCompleted:!1}},methods:{saveUser(){!this.username||this.username.trim().length<4?this.errorMessage="Введите свое имя (не менее 4 символов)":(this.errorMessage="",localStorage.setItem("username",this.username),this.isFormVisible=!1,this.isNameSaved=!0)},startGame(){this.username?(this.gameStarted=!0,this.shufflePuzzle(),this.startTimer()):this.errorMessage="Введите свое имя (не менее 4 символов)"},checkSolution(){const e=this.puzzlePieces.every(((e,t)=>e.id===`puzzle-${t+1}`));if(e){clearInterval(this.timerInterval),this.gameCompleted=!0;const e={username:this.username,time:this.timer};(0,S.VC)((0,S.KR)(P,"leaderboard"),e)}else alert("Паззл собран неверно!")},startTimer(){this.timer=0,this.timerInterval=setInterval((()=>{this.timer++}),1e3)},shufflePuzzle(){this.puzzlePieces=this.puzzlePieces.sort((()=>Math.random()-.5))},dragStart(e){e.dataTransfer.setData("text/plain",e.target.id)},dragOver(e){e.preventDefault()},dropPiece(e){const t=event.dataTransfer.getData("text/plain"),r=this.puzzlePieces.findIndex((e=>e.id===t));if(-1!==r){const t=this.puzzlePieces[r];this.puzzlePieces[r]=this.puzzlePieces[e],this.puzzlePieces[e]=t}},viewLeaderboard(){this.$router.push("/leaderboard")},changeUser(){this.username="",localStorage.removeItem("username"),this.isFormVisible=!0,this.isNameSaved=!1,clearInterval(this.timerInterval),this.timer=0,this.gameStarted=!1,this.$router.push("/")},restartGame(){this.shufflePuzzle(),this.timer=0,this.gameCompleted=!1,clearInterval(this.timerInterval),this.startTimer()}},mounted(){this.username=localStorage.getItem("username")||""}};const O=(0,s.A)(_,[["render",y],["__scopeId","data-v-6ea41029"]]);var X=O;const x={class:"leaderboard-container"},G={class:"leaderboard-table"};function U(e,t,r,a,i,u){return(0,l.uX)(),(0,l.CE)("div",x,[t[2]||(t[2]=(0,l.Lk)("h1",null,"Таблица лидеров",-1)),(0,l.Lk)("table",G,[t[1]||(t[1]=(0,l.Lk)("thead",null,[(0,l.Lk)("tr",null,[(0,l.Lk)("th",null,"#"),(0,l.Lk)("th",null,"Имя пользователя"),(0,l.Lk)("th",null,"Время (секунды)")])],-1)),(0,l.Lk)("tbody",null,[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(u.sortedLeaderboard,((e,t)=>((0,l.uX)(),(0,l.CE)("tr",{key:t},[(0,l.Lk)("td",null,(0,d.v_)(t+1),1),(0,l.Lk)("td",null,(0,d.v_)(e.username),1),(0,l.Lk)("td",null,(0,d.v_)(e.time),1)])))),128))])]),(0,l.Lk)("button",{onClick:t[0]||(t[0]=(...e)=>u.goBack&&u.goBack(...e))},"Назад")])}var A={name:"GameLeaderboard",data(){return{leaderboard:[]}},computed:{sortedLeaderboard(){return[...this.leaderboard].sort(((e,t)=>e.time-t.time))}},methods:{goBack(){this.$router.push("/")}},async mounted(){try{const e=(0,S.KR)(P),t=await(0,S.Jt)((0,S.jf)(e,"leaderboard"));t.exists()?this.leaderboard=Object.values(t.val()):console.log("Нет данных в таблице лидеров.")}catch(e){console.error("Ошибка при получении данных:",e)}}};const F=(0,s.A)(A,[["render",U],["__scopeId","data-v-480469d4"]]);var D=F;const M=[{path:"/",component:X},{path:"/leaderboard",component:D}],N=(0,p.aE)({history:(0,p.LA)("/Funny-puzzle/"),routes:M});var Q=N;(0,a.Ef)(o).use(Q).mount("#app")}},t={};function r(a){var l=t[a];if(void 0!==l)return l.exports;var i=t[a]={exports:{}};return e[a].call(i.exports,i,i.exports,r),i.exports}r.m=e,function(){var e=[];r.O=function(t,a,l,i){if(!a){var u=1/0;for(o=0;o<e.length;o++){a=e[o][0],l=e[o][1],i=e[o][2];for(var n=!0,s=0;s<a.length;s++)(!1&i||u>=i)&&Object.keys(r.O).every((function(e){return r.O[e](a[s])}))?a.splice(s--,1):(n=!1,i<u&&(u=i));if(n){e.splice(o--,1);var z=l();void 0!==z&&(t=z)}}return t}i=i||0;for(var o=e.length;o>0&&e[o-1][2]>i;o--)e[o]=e[o-1];e[o]=[a,l,i]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={524:0};r.O.j=function(t){return 0===e[t]};var t=function(t,a){var l,i,u=a[0],n=a[1],s=a[2],z=0;if(u.some((function(t){return 0!==e[t]}))){for(l in n)r.o(n,l)&&(r.m[l]=n[l]);if(s)var o=s(r)}for(t&&t(a);z<u.length;z++)i=u[z],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(o)},a=self["webpackChunkpuzzle_game"]=self["webpackChunkpuzzle_game"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=r.O(void 0,[504],(function(){return r(6788)}));a=r.O(a)})();
//# sourceMappingURL=app.9b1f7596.js.map