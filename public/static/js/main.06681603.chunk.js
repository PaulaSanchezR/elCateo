(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{122:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(43),c=a.n(l),s=(a(53),a(3)),o=a(7),i=a(5),m=a(4),u=a(6),d=a(14),p=a(15),h=a(44),g=a.n(h),E=(a(54),a(1)),v=a.n(E),f=a(13),N=(a(74),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={name:"",lastName:"",email:"",username:"",password:"",message:null},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"genircSync",value:function(e){var t=e.target,a=t.name,r=t.value;this.setState(Object(f.a)({},a,r)),console.log("value",e.target.value)}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),v.a.post("".concat("https://elcateo.herokuapp.com","/signup"),this.state,{withCredentials:!0}).then(function(e){console.log("response ",e);var a=e.data;t.props.onUserChange(a)}).catch(function(e){if(e.response&&e.response.data)return t.setState({message:e.response.data.message})})}},{key:"render",value:function(){var e=this;return this.props.currentUser?n.a.createElement("section",null," ",n.a.createElement("h2",null," Your are signed up!"),n.a.createElement("p",null," Welcome , ",this.props.currentUser.name),n.a.createElement("p",null," Email, ",this.props.currentUser.email)):n.a.createElement("section",null,n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row",style:{marginTop:150}},n.a.createElement("div",{className:"col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3"},n.a.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)}},n.a.createElement("h2",null,"Please Register"),n.a.createElement("hr",{className:"colorgraph"}),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{value:this.state.name,onChange:function(t){return e.genircSync(t)},type:"text",name:"name",id:"name",className:"form-control input-lg",placeholder:"Name",required:!0,"data-error":"Please, Add Name."}),n.a.createElement("div",{className:"help-block with-errors"})),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{value:this.state.lastName,onChange:function(t){return e.genircSync(t)},type:"text",name:"lastName",id:"lastName",className:"form-control input-lg",placeholder:"lastName",required:!0,"data-error":"Please, Add LastName."}),n.a.createElement("div",{className:"help-block with-errors"})),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{value:this.state.email,onChange:function(t){return e.genircSync(t)},type:"text",name:"email",id:"email",className:"form-control input-lg",placeholder:"email",required:!0,"data-error":"Please, Add Email."}),n.a.createElement("div",{className:"help-block with-errors"})),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",value:this.state.username,onChange:function(t){return e.genircSync(t)},name:"username",id:"username",className:"form-control input-lg",placeholder:"username",required:!0,"data-error":"Please, Add username."}),n.a.createElement("div",{className:"help-block with-errors"})),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{value:this.state.password,onChange:function(t){return e.genircSync(t)},type:"password",name:"password",id:"password",className:"form-control input-lg",placeholder:"Name",required:!0,"data-error":"Please, Add password."}),n.a.createElement("div",{className:"help-block with-errors"})),n.a.createElement("hr",{class:"colorgraph"}),n.a.createElement("div",{class:"row"},n.a.createElement("div",{class:"col-xs-6 col-sm-6 col-md-6"},n.a.createElement("input",{type:"submit",class:"btn btn-lg btn-success btn-block",value:"Sign In"})),n.a.createElement("div",{class:"col-xs-6 col-sm-6 col-md-6"},n.a.createElement("a",{href:"/",class:"btn btn-lg btn-primary btn-block"},"Login"))))))),this.state.message&&n.a.createElement("div",null," ",this.state.message," "))}}]),t}(r.Component)),b=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={username:"",password:"",message:null,currentUser:null},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"genericSync",value:function(e){var t=e.target,a=t.name,r=t.value;this.setState(Object(f.a)({},a,r))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),v.a.post("".concat("https://elcateo.herokuapp.com","/login"),this.state,{withCredentials:!0}).then(function(e){var a=e.data;t.props.onUserChange(a),t.setState({currentUser:a}),t.state.currentUser&&t.props.history.push("/addTree")}).catch(function(e){if(e.response&&e.response.data)return t.setState({message:e.response.data.message})})}},{key:"render",value:function(){var e=this;return n.a.createElement("section",null,n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row",style:{marginTop:150}},n.a.createElement("div",{class:"col-xs-12 col-sm-8 col-md-6 col-sm-offset-3 col-md-offset-3"},n.a.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)}},n.a.createElement("fieldset",null,n.a.createElement("h2",null,"Please Sign In"),n.a.createElement("hr",{class:"colorgraph"}),n.a.createElement("div",{class:"form-group"},n.a.createElement("input",{value:this.state.username,onChange:function(t){return e.genericSync(t)},type:"text",name:"username",id:"username",class:"form-control input-lg",placeholder:"Username",required:!0,"data-error":"Please, Add Username."})),n.a.createElement("div",{class:"form-group"},n.a.createElement("input",{onChange:function(t){return e.genericSync(t)},type:"password",name:"password",id:"password",class:"form-control input-lg",placeholder:"Password",required:!0,"data-error":"Please, Add Password."})),n.a.createElement("span",{class:"button-checkbox"},n.a.createElement("button",{type:"button",class:"btn","data-color":"info"},"Remember Me")),n.a.createElement("hr",{class:"colorgraph"}),n.a.createElement("div",{class:"row"},n.a.createElement("div",{class:"col-xs-6 col-sm-6 col-md-6"},n.a.createElement("input",{type:"submit",class:"btn btn-lg btn-success btn-block",value:"Sign In"})),n.a.createElement("div",{class:"col-xs-6 col-sm-6 col-md-6"},n.a.createElement("a",{href:"/signup",class:"btn btn-lg btn-primary btn-block"},"Register")))))))))}}]),t}(r.Component),y=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault();var t=a.state,r=t.name,n=t.position,l=t.latitud,c=t.altitud,s=t.desciption,o=t.groupId;v.a.post("".concat("https://elcateo.herokuapp.com","/tree"),{name:r,position:n,altitud:c,latitud:l,desciption:s,groupId:o},{withCredentials:!0}).then(function(e){var t=e.data;a.setState({treeInfo:t}),a.props.history.push("/addRecord/".concat(t.treeInf._id))}).catch(function(e){return console.log(e)})},console.log("=-=-=-=-=-=-=-= ",e),a.state={_id:"",name:"",position:"",latitud:"",altitud:"",desciption:"",groupId:"",message:"",groupArray:[]},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"genircSync",value:function(e){var t=e.target,a=t.name,r=t.value;this.setState(Object(f.a)({},a,r)),console.log("name ==",e.target.name,"value ==",e.target.value)}},{key:"componentDidMount",value:function(){var e=this;v.a.get("".concat("https://elcateo.herokuapp.com","/allgroup"),{withCredentials:!0}).then(function(t){console.log("groups== ",t.data),e.setState({groupArray:t.data})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this,t=this.state.groupArray;return n.a.createElement("section",null,n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-12"},n.a.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)}},n.a.createElement("h2",null,"Add Tree"),n.a.createElement("hr",{className:"colorgraph"}),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{value:this.state.name,onChange:function(t){return e.genircSync(t)},type:"text",name:"name",id:"name",className:"form-control input-lg",placeholder:"Name",required:!0,"data-error":"Please, Add Name."}),n.a.createElement("div",{className:"help-block with-errors"})),n.a.createElement("hr",{className:"colorgraph"}),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{value:this.state.position,onChange:function(t){return e.genircSync(t)},type:"text",name:"position",id:"position",className:"form-control input-lg",placeholder:"position",required:!0,"data-error":"Please, Add position."}),n.a.createElement("div",{className:"help-block with-errors"})),n.a.createElement("hr",{className:"colorgraph"}),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{value:this.state.latitud,onChange:function(t){return e.genircSync(t)},type:"text",name:"latitud",id:"latitud",className:"form-control input-lg",placeholder:"latitud",required:!0,"data-error":"Please, Add latitud."}),n.a.createElement("div",{className:"help-block with-errors"})),n.a.createElement("hr",{className:"colorgraph"}),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",value:this.state.altitud,onChange:function(t){return e.genircSync(t)},name:"altitud",id:"altitud",className:"form-control input-lg",placeholder:"altitud",required:!0,"data-error":"Please, Add altitud."}),n.a.createElement("div",{className:"help-block with-errors"})),n.a.createElement("hr",{className:"colorgraph"}),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{value:this.state.desciption,onChange:function(t){return e.genircSync(t)},type:"text",name:"desciption",id:"desciption",className:"form-control input-lg",placeholder:"Name",required:!0,"data-error":"Please, Add desciption."}),n.a.createElement("div",{className:"help-block with-errors"})),n.a.createElement("hr",{className:"colorgraph"}),n.a.createElement("div",{className:"form-group"},n.a.createElement("select",{className:"form-control form-control-lg",value:this.state.groupId,onChange:function(t){return e.genircSync(t)},name:"groupId",required:!0,"data-error":"Please, Add desciption."},n.a.createElement("option",{value:"none"},"==NONE"),t.map(function(e){return n.a.createElement("option",{value:e._id},e.name)})),n.a.createElement("div",{className:"help-block with-errors"})),n.a.createElement("button",null," Submit")))),this.state.message&&n.a.createElement("div",null," ",this.state.message," "))}}]),t}(r.Component),S=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),t}(r.Component),w=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).handleSubmit=function(e){var t=a.props.match.params;console.log("//// parames  /////",t.id),e.preventDefault();var r=a.state,n=r.irrigation,l=r.irrigationdescription,c=r.soilhelth,s=r.soildescription,o=r.salt,i=r.saltdescription,m=r.illness,u=r.illnessdescription;v.a.post("".concat("https://elcateo.herokuapp.com","/treerecord/").concat(t.id),{irrigation:n,irrigationdescription:l,soilhelth:c,soildescription:s,salt:o,saltdescription:i,illness:m,illnessdescription:u},{withCredentials:!0}).then(function(e){console.log("data",e.data);var r=e.data;a.setState({record:r,isSubmitSuccess:!0}),a.props.history.push("/listRecord/".concat(t.id))}).catch(function(e){console.log(e)})},a.state={irrigation:"",irrigationdescription:"",soilhelth:"",soildescription:"",salt:"",saltdescription:"",illness:"",illnessdescription:"",illnessArray:[]},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;v.a.get("".concat("https://elcateo.herokuapp.com","/illness"),{withCredentials:!0}).then(function(t){e.setState({illnessArray:t.data})}).catch(function(e){console.log(e)})}},{key:"genircSync",value:function(e){var t=e.target,a=t.name,r=t.value;this.setState(Object(f.a)({},a,r))}},{key:"render",value:function(){var e=this,t=this.state.illnessArray;return console.log("illnessArrayinfo",t),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-12"},n.a.createElement("form",{id:"contact-form",onSubmit:function(t){return e.handleSubmit(t)}},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-6"},n.a.createElement("div",{className:"form-group col-md-12"},n.a.createElement("label",{for:"",className:"col-md-12"},"Irrigation*"),n.a.createElement("input",{value:this.state.irrigation,onChange:function(t){return e.genircSync(t)},type:"text",name:"irrigation",id:"irrigation",className:"form-control input-lg",placeholder:"Irrigation",required:!0,"data-error":"Please, Add irrigation."}))),n.a.createElement("div",{className:"col-md-6"},n.a.createElement("div",{className:"form-group col-md-12"},n.a.createElement("label",{for:"",className:"col-md-12"},"Irrigation Description*"),n.a.createElement("input",{value:this.state.irrigationdescription,onChange:function(t){return e.genircSync(t)},type:"text",name:"irrigationdescription",id:"irrigationdescription",className:"form-control input-lg",placeholder:"irrigationdescription",required:!0,"data-error":"Please, Add irrigationdescription."})))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-6"},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{for:"form_interface"},"Salt"),n.a.createElement("input",{value:this.state.salt,onChange:function(t){return e.genircSync(t)},type:"text",name:"salt",id:"salt",className:"form-control input-lg",placeholder:"Salt",required:!0,"data-error":"Please, Add irrigation."}))),n.a.createElement("div",{className:"col-md-6"},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{for:"form_interface"},"Salt Description"),n.a.createElement("input",{value:"",type:"text",name:"saltdescription",id:"saltdescription",placeholder:"Salt Description",className:"form-control input-lg",require:!0,"data-error":"Please, Add Salt Desciption"})))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-6"},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{for:"form_device"},"Soil *"),n.a.createElement("input",{value:this.state.salt,onChange:function(t){return e.genircSync(t)},type:"text",name:"soil",id:"soil",className:"form-control input-lg",placeholder:"Soil",required:!0,"data-error":"Please, Add Soil."}))),n.a.createElement("div",{className:"col-md-6"},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{for:"form_pos"},"Illness"),n.a.createElement("select",{className:"form-control form-control-lg",value:this.state.illness,onChange:function(t){return e.genircSync(t)},name:"illness",required:!0,"data-error":"Please, Add illness."},n.a.createElement("option",{value:"none"},"==NONE"),t.map(function(e){return n.a.createElement("option",{value:e._id},e.name)})),n.a.createElement("div",{className:"help-block with-errors"})))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{for:"form_message"},"Observation*"),n.a.createElement("div",{className:"help-block with-errors"}))),n.a.createElement("div",{className:"col-md-12"},n.a.createElement("input",{type:"submit",className:"btn btn-success btn-send",value:"Submit"}))))))}}]),t}(r.Component),C=a(45),k=a.n(C),O=function(e){function t(e){var a;return Object(s.a)(this,t),a=Object(i.a)(this,Object(m.a)(t).call(this,e)),console.log("props===",a.props),a.state={showEdit:!0,currentUser:null,treeRecordArray:[]},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params;console.log("listRecord params.id",t.id),v.a.get("http://localhost:5000/api/treerecord/".concat(t.id),{withCredentials:!0}).then(function(t){console.log("datos fron DB=====================",t.data);var a=t.data;e.setState({treeRecordArray:a})}).catch(function(e){console.log(e)})}},{key:"showEditForm",value:function(){console.log("entro"),this.setState({showEdit:!1})}},{key:"render",value:function(){var e=this,t=this.state.treeRecordArray,a=this.state.treeRecordArray[0],r=this.props.match.params;return n.a.createElement("div",{className:"Container-fluid"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-8"},n.a.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)}},n.a.createElement("h2",null,"Tree"),n.a.createElement("hr",{className:"colorgraph"}),n.a.createElement("div",{className:"form-group"},n.a.createElement(k.a,{value:r.id})),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{value:a,onChange:function(t){return e.genircSync(t)},type:"text",name:"name",id:"name",className:"form-control input-lg",placeholder:"Name",readonly:"readonly",required:!0,"data-error":"Please, Add Name."}),n.a.createElement("div",{className:"help-block with-errors"})),n.a.createElement("hr",{className:"colorgraph"}),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{value:"{}",onChange:function(t){return e.genircSync(t)},type:"text",name:"position",id:"position",className:"form-control input-lg",placeholder:"position",readonly:"readonly",required:!0,"data-error":"Please, Add position."}),n.a.createElement("div",{className:"help-block with-errors"}))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{value:"{}",onChange:function(t){return e.genircSync(t)},type:"text",name:"latitud",id:"latitud",className:"form-control input-lg",placeholder:"latitud",readonly:"readonly",required:!0,"data-error":"Please, Add latitud."}),n.a.createElement("div",{className:"help-block with-errors"})),n.a.createElement("hr",{className:"colorgraph"}),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",value:"{}",onChange:function(t){return e.genircSync(t)},name:"altitud",id:"altitud",className:"form-control input-lg",placeholder:"altitud",readonly:"readonly",required:!0,"data-error":"Please, Add altitud."}),n.a.createElement("div",{className:"help-block with-errors"}))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{value:"{}",onChange:function(t){return e.genircSync(t)},type:"text",name:"desciption",id:"desciption",className:"form-control input-lg",placeholder:"Name",readonly:"readonly",required:!0,"data-error":"Please, Add desciption."}),n.a.createElement("div",{className:"help-block with-errors"})),n.a.createElement("hr",{className:"colorgraph"}),n.a.createElement("div",{className:"form-group"},n.a.createElement("select",{className:"form-control form-control-lg",onChange:function(t){return e.genircSync(t)},name:"groupId",required:!0,"data-error":"Please, Add desciption."}),n.a.createElement("div",{className:"help-block with-errors"}))),n.a.createElement("button",null," Submit"))),n.a.createElement("table",{id:"table",className:"col-lg-12 table table-striped"},n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("th",{collapse:"8"},n.a.createElement("button",{onClick:function(){return e.showEditForm()}},"Add Record"))),n.a.createElement("tr",null,n.a.createElement("th",null,"DATE"),n.a.createElement("th",null,"IRRIGATION"),n.a.createElement("th",null,"SALT"),n.a.createElement("th",null,"SOIL"),n.a.createElement("th",null,"ILLNESS"),n.a.createElement("th",null,"I_DESCRIPTION"),n.a.createElement("th",null,"ALL OBSERVATION"),n.a.createElement("th",null,"DELETE"))),t.map(function(e){return n.a.createElement("tr",null,n.a.createElement("th",null,e.createdAt),n.a.createElement("th",null,e.irrigation),n.a.createElement("th",null,e.salt),n.a.createElement("th",null,e.soilhelth),n.a.createElement("th",null),n.a.createElement("th",null,e.illnessdescription),n.a.createElement("th",null,e.soildescription),n.a.createElement("th",null,n.a.createElement("button",{type:"submit"},"Delete!")))}))))}}]),t}(r.Component),j=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).handleSubmit=function(t){var a=e.state.search;console.log("searhc",a),t.preventDefault(),v.a.get("".concat("https://elcateo.herokuapp.com","/treerecord/").concat(a),{searchTree:a},{withCredentials:!0}).then(function(t){console.log("db",t.data),e.setState({tree:t.data}),e.props.history.push("/listRecord/".concat(a))}).catch(function(e){console.log("gfgdf",e)})},e.state={search:""},console.log("= = == = = = = = == = = == = ",e.state),e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"genericSync",value:function(e){console.log(e.target.name),console.log(e.target.value);var t=e.target;t.name,t.value;this.setState(Object(f.a)({},e.target.name,e.target.value)),console.log(this.state)}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-12"},n.a.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)}},n.a.createElement("input",{onChange:function(t){return e.genericSync(t)},type:"text",name:"search",id:"search",className:"form-control input-lg",placeholder:" search"}),n.a.createElement("input",{type:"submit",className:"btn btn-success btn-send",value:"Submit"}))))}}]),t}(r.Component),A=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={currentUser:null},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log("entro a componentdidmount"),v.a.get("".concat("https://elcateo.herokuapp.com","/checkuser"),{withCredential:!0}).then(function(t){console.log("check",t.data);var a=t.data.theUser;e.syncCurrentUser(a)})}},{key:"syncCurrentUser",value:function(e){console.log("user ==",e),this.setState({currentUser:e})}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{id:"root"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-2"},n.a.createElement("div",{className:"sidebar","data-color":"black"},n.a.createElement("div",{className:"sidebar-background"},n.a.createElement("div",{className:"logo"},n.a.createElement("div",{className:"logo-img"},n.a.createElement("img",{src:g.a,alt:"My logo",style:{height:100}}),"El Cateo")),this.state.currentUser?n.a.createElement("nav",{class:"navbar "},n.a.createElement("ul",{class:"navbar-nav"},n.a.createElement("li",{class:"nav-item"},n.a.createElement(d.b,{to:"/addtree"}," ADD TREE ")),n.a.createElement("li",{class:"nav-item"},n.a.createElement(d.b,{to:"/search"}," SEARCH ")),n.a.createElement("li",{class:"nav-item"}))):n.a.createElement("div",null)))),n.a.createElement("div",{className:"col-lg-10"},n.a.createElement("div",{className:"main-panel"},n.a.createElement("div",{className:"App"},this.state.currentUser?n.a.createElement("section",null,n.a.createElement("header",null,n.a.createElement("nav",{className:"navbar navbar-default"},n.a.createElement("i",{className:"pe-7s-close-circle"},n.a.createElement("div",null," Log out")),n.a.createElement("p",null," Welcome ",this.state.currentUser.username)),n.a.createElement("hr",{className:"colorgraph"})),n.a.createElement("div",{className:"col-lg-12 card card-stats"}),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-3 "},n.a.createElement("div",{className:"card card-stats"},n.a.createElement("p",null,"ensayo"))),n.a.createElement("div",{className:"col-lg-3 "},n.a.createElement("div",{className:"card card-stats"},n.a.createElement("p",null,"ensayo"))),n.a.createElement("div",{className:"col-lg-3 "},n.a.createElement("div",{className:"card card-stats"},n.a.createElement("p",null,"ensayo")))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-log-3"}))):n.a.createElement("div",null,"User not logged in"),n.a.createElement(p.c,null,n.a.createElement(p.a,{exact:!0,path:"/search",render:function(t){return n.a.createElement(j,Object.assign({currentUser:e.state.currentUser,onUserChange:function(t){return e.syncCurrentUser(t)}},t))}}),n.a.createElement(p.a,{exact:!0,path:"/",render:function(t){return n.a.createElement(b,Object.assign({currentUser:e.state.currentUser,onUserChange:function(t){return e.syncCurrentUser(t)}},t))}}),n.a.createElement(p.a,{exact:!0,path:"/signup",render:function(){return n.a.createElement(N,{currentUser:e.state.currentUser,onUserChange:function(t){return e.syncCurrentUser(t)}})}}),n.a.createElement(p.a,{exact:!0,path:"/logout",render:function(){return n.a.createElement(S,{currentUser:e.state.currentUser,onUserChange:function(t){return e.syncCurrentUser(t)}})}}),n.a.createElement(p.a,{path:"/addTree",render:function(t){return n.a.createElement(y,Object.assign({},t,{currentUser:e.state.currentUser,onUserChange:function(t){return e.syncCurrentUser(t)}}))}}),n.a.createElement(p.a,{exact:!0,path:"/addRecord/:id",render:function(t){return n.a.createElement(w,Object.assign({},t,{currentUser:e.state.currentUser,onUserChange:function(t){return e.syncCurrentUser(t)}}))}}),n.a.createElement(p.a,{exact:!0,path:"/listRecord/:id",component:O})))))))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(d.a,null,n.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},44:function(e,t,a){e.exports=a.p+"static/media/elcateo.aeea9950.JPG"},48:function(e,t,a){e.exports=a(122)},53:function(e,t,a){},54:function(e,t,a){}},[[48,1,2]]]);
//# sourceMappingURL=main.06681603.chunk.js.map