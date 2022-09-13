(function(){"use strict";var e={2787:function(e,t,n){var o=n(9242),s=n(3396),r=n.p+"img/add-note.10842793.svg";const i=(0,s._)("img",{src:r,alt:""},null,-1),a=[i];function l(e,t,n,r,i,l){const c=(0,s.up)("Header"),d=(0,s.up)("Notes"),u=(0,s.up)("Modal");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(c,{onFind:t[0]||(t[0]=e=>i.search=e)}),(0,s.Wm)(d,{notes:l.filterNotes,onRemove:l.removeNote,onEdit:l.editNote},null,8,["notes","onRemove","onEdit"]),((0,s.wg)(),(0,s.j4)(s.lR,{to:"body"},[(0,s.wy)((0,s.Wm)(u,{onShowOrClose:l.cleanModal,onAddNote:l.addOrChangeNote,curNote:i.curNote},null,8,["onShowOrClose","onAddNote","curNote"]),[[o.F8,i.showModal]])])),(0,s._)("a",{href:"#",class:"add__note",onClick:t[1]||(t[1]=(0,o.iM)((e=>i.showModal=!0),["prevent"]))},a)],64)}n(6699);var c=n.p+"img/search.7bf44ec5.svg",d=n.p+"img/back.a1821e6b.svg",u=n.p+"img/close.e9281049.svg";const h={class:"header"},_={key:0,class:"header__notes"},f=(0,s._)("h2",{class:"header__title"},"Заметки",-1),m=(0,s._)("img",{src:c,alt:""},null,-1),p=[m],v={key:1,class:"header__form"},g=(0,s._)("img",{src:d,alt:""},null,-1),w=[g],N=(0,s._)("img",{src:u,alt:""},null,-1),b=[N];function k(e,t,n,r,i,a){return(0,s.wg)(),(0,s.iD)("header",h,[(0,s.Wm)(o.uT,{name:"header__notes",mode:"out-in"},{default:(0,s.w5)((()=>[i.header?((0,s.wg)(),(0,s.iD)("div",_,[f,(0,s._)("button",{class:"header__search",onClick:t[0]||(t[0]=e=>i.header=!1)},p)])):((0,s.wg)(),(0,s.iD)("form",v,[(0,s._)("a",{href:"#",class:"back",onClick:t[1]||(t[1]=(0,o.iM)((e=>{i.header=!0,i.search=""}),["prevent"]))},w),(0,s.wy)((0,s._)("input",{type:"text",placeholder:"Поиск...",name:"search",class:"header__input",required:"","onUpdate:modelValue":t[2]||(t[2]=e=>i.search=e)},null,512),[[o.nr,i.search]]),(0,s._)("a",{href:"#",class:"close",onClick:t[3]||(t[3]=(0,o.iM)((e=>{i.header=!0,i.search=""}),["prevent"]))},b)]))])),_:1})])}var y={data(){return{search:"",header:!0}},watch:{search(e){this.$emit("find",e)}}},O=n(89);const C=(0,O.Z)(y,[["render",k]]);var M=C,x=n(7139),j=n.p+"img/list.4bf38f66.svg",D=n.p+"img/grid.e2c63407.svg";const S={class:"notes"},z={class:"container"},$={class:"notes__nav"},W={class:"notes__title"},Z={key:0,src:j,alt:""},E={key:1,src:D,alt:""};function R(e,t,n,r,i,a){const l=(0,s.up)("OneNote");return(0,s.wg)(),(0,s.iD)("div",S,[(0,s._)("div",z,[(0,s._)("div",$,[(0,s._)("h3",W,(0,x.zw)(n.notes.length?"Все заметки":"Нет заметок"),1),(0,s._)("button",{class:"notes__checker",onClick:t[0]||(t[0]=e=>i.grid=!i.grid)},[i.grid?((0,s.wg)(),(0,s.iD)("img",Z)):((0,s.wg)(),(0,s.iD)("img",E)),(0,s._)("span",null,(0,x.zw)(i.grid?"Список":"Сетка"),1)])]),(0,s.Wm)(o.W3,{tag:"div",class:(0,x.C_)(["notes__grid",{column:!i.grid}]),name:"notes",appear:""},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(n.notes,(t=>((0,s.wg)(),(0,s.j4)(l,{key:t.id,note:t,onRemove:n=>e.$emit("remove",t.id),onEdit:n=>e.$emit("edit",t)},null,8,["note","onRemove","onEdit"])))),128))])),_:1},8,["class"])])])}var U=n.p+"img/edit.10842793.svg",H=n.p+"img/delete.f2533121.svg";const T={class:"notes__item"},q={class:"notes__name"},A={class:"notes__date"},F={class:"notes__descr"},I={class:"notes__control"},L=(0,s._)("img",{src:U,alt:""},null,-1),V=(0,s.Uk)(" редактировать "),J=[L,V],P=(0,s._)("img",{src:H,alt:""},null,-1),Y=(0,s.Uk)(" удалить "),K=[P,Y];function B(e,t,n,r,i,a){return(0,s.wg)(),(0,s.iD)("div",T,[(0,s._)("h3",q,(0,x.zw)(n.note.title),1),(0,s._)("span",A,(0,x.zw)(n.note.date),1),(0,s._)("p",F,(0,x.zw)(n.note.text),1),(0,s._)("div",I,[(0,s._)("a",{href:"#",class:"notes__edit",onClick:t[0]||(t[0]=(0,o.iM)((t=>e.$emit("edit",n.note)),["prevent"]))},J),(0,s._)("a",{href:"#",class:"notes__delete",onClick:t[1]||(t[1]=(0,o.iM)((t=>e.$emit("remove",n.note.id)),["prevent"]))},K)])])}var G={props:{note:{type:Object,default:{}}}};const Q=(0,O.Z)(G,[["render",B]]);var X=Q,ee={components:{OneNote:X},data(){return{grid:!0}},props:{notes:{type:Array,default:[]}}};const te=(0,O.Z)(ee,[["render",R]]);var ne=te;const oe={class:"modal__title"},se={class:"modal__btns"},re={class:"modal__btn"};function ie(e,t,n,r,i,a){return(0,s.wg)(),(0,s.j4)(o.uT,{name:"modal"},{default:(0,s.w5)((()=>[(0,s._)("div",{class:"modal",onClick:t[5]||(t[5]=(...e)=>a.clean&&a.clean(...e))},[(0,s._)("div",{class:"modal__content",onClick:t[4]||(t[4]=(0,o.iM)((()=>{}),["stop"]))},[(0,s._)("h3",oe,(0,x.zw)(n.curNote.id?"Изменить":"Добавить")+" заметку",1),(0,s._)("form",{action:"",class:"modal__form",onSubmit:t[3]||(t[3]=(0,o.iM)(((...e)=>a.send&&a.send(...e)),["prevent"]))},[(0,s.wy)((0,s._)("input",{type:"text",placeholder:"Заголовок",required:"",class:"modal__input","onUpdate:modelValue":t[0]||(t[0]=e=>i.user.title=e)},null,512),[[o.nr,i.user.title]]),(0,s.wy)((0,s._)("textarea",{class:"modal__input modal__area",placeholder:"Заметка",required:"","onUpdate:modelValue":t[1]||(t[1]=e=>i.user.text=e)},null,512),[[o.nr,i.user.text]]),(0,s._)("div",se,[(0,s._)("a",{href:"#",class:"modal__cancel",onClick:t[2]||(t[2]=(0,o.iM)(((...e)=>a.clean&&a.clean(...e)),["prevent"]))},"Отмена"),(0,s._)("button",re,(0,x.zw)(n.curNote.id?"Изменить":"Добавить"),1)])],32)])])])),_:1})}var ae={data(){return{user:{title:"",text:""}}},methods:{send(){const e={...this.user};e.id=this.curNote.id||null,this.$emit("addNote",e),this.clean()},clean(){this.$emit("showOrClose");for(const e in this.user)this.user[e]=""}},props:{curNote:{type:Object,default:{}}},watch:{curNote(){this.curNote.id&&(this.user.title=this.curNote.title,this.user.text=this.curNote.text)}}};const le=(0,O.Z)(ae,[["render",ie]]);var ce=le,de=n(536),ue={components:{Header:M,Notes:ne,Modal:ce},data(){return{showModal:!1,search:"",notes:localStorage.notes?JSON.parse(localStorage.notes):[],curNote:{}}},computed:{filterNotes(){if(this.search){let e=this.search.toLowerCase();const t=this.notes.filter((t=>{const n=t.title.toLowerCase();if(n.includes(e))return t}));return t}return this.notes}},methods:{cleanModal(){this.showModal=!1,this.curNote={}},addOrChangeNote(e){const t={...e};if(t.date=(new Date).toLocaleString(),t.id=e.id||(0,de.Z)(),e.id){const n=this.notes.findIndex((t=>t.id==e.id));-1!=n&&(this.notes[n]=t)}else this.notes.push(t)},removeNote(e){const t=this.notes.findIndex((t=>t.id==e));this.notes.splice(t,1)},editNote(e){this.curNote=e,this.showModal=!0}},watch:{notes:{handler(){localStorage.setItem("notes",JSON.stringify(this.notes))},deep:!0}}};const he=(0,O.Z)(ue,[["render",l]]);var _e=he;(0,o.ri)(_e).mount("#app")}},t={};function n(o){var s=t[o];if(void 0!==s)return s.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,o,s,r){if(!o){var i=1/0;for(d=0;d<e.length;d++){o=e[d][0],s=e[d][1],r=e[d][2];for(var a=!0,l=0;l<o.length;l++)(!1&r||i>=r)&&Object.keys(n.O).every((function(e){return n.O[e](o[l])}))?o.splice(l--,1):(a=!1,r<i&&(i=r));if(a){e.splice(d--,1);var c=s();void 0!==c&&(t=c)}}return t}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[o,s,r]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.p="/notes-composition-api/"}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var s,r,i=o[0],a=o[1],l=o[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(s in a)n.o(a,s)&&(n.m[s]=a[s]);if(l)var d=l(n)}for(t&&t(o);c<i.length;c++)r=i[c],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(d)},o=self["webpackChunktodolist"]=self["webpackChunktodolist"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(2787)}));o=n.O(o)})();
//# sourceMappingURL=app.881207e7.js.map