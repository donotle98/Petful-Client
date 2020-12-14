(this["webpackJsonppetful-client"]=this["webpackJsonppetful-client"]||[]).push([[0],{23:function(t,e,n){t.exports=n(39)},28:function(t,e,n){},35:function(t,e,n){},36:function(t,e,n){},37:function(t,e,n){},38:function(t,e,n){},39:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(21),s=n.n(o),c=n(5),i=n(6),l=n(8),u=n(7),p=n(9),m=n(12),d=n(1),f=(n(28),function(t){function e(){var t,n;Object(c.a)(this,e);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(r)))).state={},n}return Object(p.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{className:"landingpage-div"},r.a.createElement("div",{className:"landingpics"},r.a.createElement("div",{className:"dogpic"}),r.a.createElement("div",{className:"catpic"})),r.a.createElement("h1",null,"Adoption Process"),r.a.createElement("p",null,"You can only adopt dogs or cats."),r.a.createElement("p",null,"And the only dogs and cats you can adopt are the ones that have been in this shelter the longest"),r.a.createElement("p",null,"There is a wait to adopt, once you submit your name you will be put at the back of the line"),r.a.createElement("div",{className:"getStarted-btn"},r.a.createElement(m.b,{to:"/adopt"},r.a.createElement("input",{type:"button",name:"adopt",value:"Start Process",className:"btn"}))))}}]),e}(a.Component)),h="http://localhost:8080",g={getAdopters:function(){return fetch("".concat(h,"/people")).then((function(t){return t.ok?t.json():t.json().then((function(t){return Promise.reject(t)}))}))},addAdopter:function(t){return fetch("http://localhost:8080/people",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(t)}).then((function(t){return t.json()}))},getDogs:function(){return fetch("".concat(h,"/pets/dogs")).then((function(t){return t.ok?t.json():t.json().then((function(t){return Promise.reject(t)}))}))},getCats:function(){return fetch("".concat(h,"/pets/cats")).then((function(t){return t.ok?t.json():t.json().then((function(t){return Promise.reject(t)}))}))},adoptPet:function(t,e){var n=e.toLowerCase();return fetch("".concat(h,"/").concat(n,"/").concat(t),{method:"DELETE"})}},E=r.a.createContext({Dogs:{},Cats:{},Adopters:{},isLoading:null,setDogs:function(){},setCats:function(){},setAdopters:function(){},adoptedCat:function(){},adoptedDog:function(){}}),b=E,v=function(t){function e(){var t,n;Object(c.a)(this,e);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(r)))).state={isLoading:null,Dogs:{first:[],list:[]},Cats:{first:[],list:[]},Adopters:[]},n.setAdopters=function(t){n.setState({Adopters:[t]})},n.setCats=function(t,e){n.setState({Cats:{first:t,list:e}})},n.setDogs=function(t,e){n.setState({Dogs:{first:t,list:e}})},n.adoptedCat=function(t){var e=n.state.Cats.list.filter((function(e){return e.id!==t})),a=e[0];n.setState({Cats:{first:a,list:e}})},n.adoptedDog=function(t){var e=n.state.Dogs.list.filter((function(e){return e.id!==t})),a=e[0];n.setState({Dogs:{first:a,list:e}})},n}return Object(p.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){var t={Dogs:this.state.Dogs,Cats:this.state.Cats,Adopters:this.state.Adopters,isLoading:this.state.isLoading,setCats:this.setCats,setDogs:this.setDogs,setAdopters:this.setAdopters,adoptedCat:this.adoptedCat,adoptedDog:this.adoptedDog};return r.a.createElement(E.Provider,{value:t},this.props.children)}}]),e}(a.Component),y=(n(33),n(35),function(t){function e(){var t,n;Object(c.a)(this,e);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(n=Object(l.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(o)))).state={currentPet:{}},n.handleAdopt=function(){n.setState({currentPet:n.props.pet.first})},n.handleAdoptButton=function(){n.context.Adopters.map((function(t){if(t[0]===n.props.userName)return r.a.createElement("button",{onClick:n.handleAdopt},"Adopt")}))},n.renderFirstPetInfo=function(){return r.a.createElement("div",{className:"petInfo"},r.a.createElement("div",{className:"pet-image"},r.a.createElement("img",{src:n.props.pet.first.imageURL,alt:n.props.pet.first.imageDescription})),r.a.createElement("p",null,"Name: ",n.props.pet.first.name),r.a.createElement("p",null,"Age: ",n.props.pet.first.age),r.a.createElement("p",null,"Description: ",n.props.pet.first.description),r.a.createElement("p",null,"Gender: ",n.props.pet.first.gender),r.a.createElement("p",null,"Breed: ",n.props.pet.first.breed),r.a.createElement("p",null,"Story: ",n.props.pet.first.story),n.handleAdoptButton())},n}return Object(p.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{className:"each-petInfo"},r.a.createElement("h2",null,"Next ",this.props.type," in line to be adopted: "),this.renderFirstPetInfo())}}]),e}(a.Component));y.contextType=b;var j=y,N=(n(36),function(t){function e(){var t,n;Object(c.a)(this,e);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(n=Object(l.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(o)))).state={name:"",submitName:!1},n.handleChangeName=function(t){n.setState({name:t.currentTarget.value})},n.handleAddUserToQueue=function(){var t={name:n.state.name};g.addAdopter(t).then((function(t){n.context.setAdopters(t)})),n.setState({submitName:!1})},n.handleSubmitNewName=function(){if(n.state.submitName)return r.a.createElement("div",{className:"newname-form"},r.a.createElement("form",null,r.a.createElement("label",null,"Enter full name:"),r.a.createElement("input",{type:"text",name:"name",onChange:function(t){n.handleChangeName(t)}}),r.a.createElement("button",{onClick:function(t){t.preventDefault(),n.handleAddUserToQueue()}},"Submit")))},n}return Object(p.a)(e,t),Object(i.a)(e,[{key:"componentDidMount",value:function(){var t=this;g.getAdopters().then((function(e){t.context.setAdopters(e)})),g.getDogs().then((function(e){var n=e.value,a=e.next;t.context.setDogs(n,a)})),g.getCats().then((function(e){var n=e.value,a=e.next;t.context.setCats(n,a)}))}},{key:"render",value:function(){var t=this;return r.a.createElement("div",{className:"adoption-page"},r.a.createElement("h2",null,"Next in line:"),r.a.createElement("div",{className:"adopter-sect"},this.context.Adopters.map((function(t){return t.map((function(t,e){return r.a.createElement("h2",{className:"adopter-name",key:e},t)}))}))),r.a.createElement("div",{className:"control-center"},r.a.createElement("button",{onClick:function(){return t.props.history.push("/")},className:"pulse"},"Go back"),r.a.createElement("button",{onClick:function(){t.setState({submitName:!t.state.submitName})},className:"pulse"},"Add your name"),this.handleSubmitNewName()),r.a.createElement("hr",null),r.a.createElement("div",{className:"pet-display"},r.a.createElement(j,{pet:this.context.Dogs,type:"Dog",userName:this.state.name})),r.a.createElement("div",{className:"pet-display"},r.a.createElement(j,{pet:this.context.Cats,type:"Cat",userName:this.state.name})))}}]),e}(a.Component));N.contextType=b;var C=Object(d.f)(N),A=(n(37),function(t){function e(){var t,n;Object(c.a)(this,e);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(r)))).state={},n}return Object(p.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){return r.a.createElement(v,null,r.a.createElement(m.a,null,r.a.createElement("div",{className:"header"},r.a.createElement("h1",null,"FIFO Petful")),r.a.createElement(d.c,null,r.a.createElement(d.a,{exact:!0,path:"/",component:f}),r.a.createElement(d.a,{path:"/adopt",component:C}))))}}]),e}(a.Component));n(38);s.a.render(r.a.createElement(A,null),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.68aafa38.chunk.js.map