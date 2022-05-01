(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t){},104:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(45),c=n.n(r),s=n(4),i=n(5),l=n(6),u=n(7),m=n(2),f=n(107),h=n(108),d=n(106),p=n(46),v=n.n(p),g=(n(57),function(){return o.a.createElement("div",{className:"landing-page"},o.a.createElement("div",{className:"container"},o.a.createElement("img",{className:"logo",src:v.a,alt:"Logo",width:"100%"}),o.a.createElement("h1",null,"Chat Rooms with Time Limit"),o.a.createElement("p",null,"Built with ReactJS, NodeJS, Express, and Socket.io by ",o.a.createElement("a",{href:"http://alaajerbi.com"},"Alaa Jerbi.")),o.a.createElement("div",{className:"cta"},o.a.createElement(d.a,{to:"createChatRoom",className:"btn",style:{marginLeft:"10px"}},"Create a room!"))))}),y=n(8),b="https://chatrooms-time-limit.herokuapp.com",E=n(47),O=n.n(E);function j(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,a=Object(m.a)(e);if(t){var o=Object(m.a)(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return Object(u.a)(this,n)}}var R=function(e){Object(l.a)(n,e);var t=j(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={roomId:null,loading:!0},a.handleCopy=a.handleCopy.bind(Object(y.a)(a)),a}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;O.a.get(b+"/createChatRoom").then(function(e){return e.data}).then(function(t){t.success?e.setState({roomId:t.roomId,loading:!1,copied:!1}):console.log("Something is wrong")})}},{key:"getChatroomLink",value:function(){return"https://alaajerbi.dev/chatrooms#/chat/"+this.state.roomId}},{key:"handleCopy",value:function(){var e=this;if(!this.state.copied){var t=document.createElement("textarea");t.value=this.getChatroomLink(),t.setAttribute("readonly",""),t.style.position="absolute",t.style.left="-9999px",document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),this.setState({copied:!0}),window.setTimeout(function(){e.setState({copied:!1})},2e3)}}},{key:"render",value:function(){return o.a.createElement("div",{className:"create-chat"},o.a.createElement("div",{className:"container"},this.state.loading&&o.a.createElement("p",null,"Creating a chatroom, please wait...")||this.state.roomId&&o.a.createElement(o.a.Fragment,null,o.a.createElement("h3",null,"Chatroom link:"),o.a.createElement(d.a,{to:"/chat/"+this.state.roomId},this.getChatroomLink()),o.a.createElement("button",{className:"copy-link-btn",onClick:this.handleCopy},this.state.copied?"Copied!":"Copy link"))))}}]),n}(a.Component),k=n(48),S=function(e){return o.a.createElement("div",{className:"alert-message"},e.children)};function w(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,a=Object(m.a)(e);if(t){var o=Object(m.a)(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return Object(u.a)(this,n)}}var C=function(e){Object(l.a)(n,e);var t=w(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={length:e.length},a.scrollToBottom=a.scrollToBottom.bind(Object(y.a)(a)),a}return Object(i.a)(n,[{key:"componentDidUpdate",value:function(e){var t=this.state.length;e.length>t?(this.scrollToBottom(),this.setState({length:e.length})):(this.props.over||this.props.destroyed)&&this.scrollToBottom()}},{key:"scrollToBottom",value:function(){this.messagesEnd&&void 0!==this.messagesEnd&&this.messagesEnd.scrollIntoView()}},{key:"render",value:function(){var e=this,t=this.props.messages,n=this.props.clientId,a=this.props.chatting,r=this.props.destroyed,c=this.props.over,s=t.map(function(e,t){return o.a.createElement("div",{key:t,className:"chat-message "+(e.senderId===n?"mine":"not-mine")},e.body)}),i=o.a.createElement("div",{className:"stop-message"},r?"Your partner has left the room.":c&&"Time is up!"," ",o.a.createElement(d.a,{to:"/createChatRoom",style:{color:"#222"}},"Create a new room?"),o.a.createElement("br",null),o.a.createElement("br",null)),l=o.a.createElement("div",{style:{float:"left",clear:"both"},ref:function(t){e.messagesEnd=t}});return o.a.createElement("div",{className:"chat-history"},a&&0===t.length&&o.a.createElement(S,null,"Someone joined the room, Say Hi!")||a&&o.a.createElement(o.a.Fragment,null,s,l)||(c||r)&&o.a.createElement(o.a.Fragment,null,s,i,l)||o.a.createElement(S,null,"Waiting for a second party to join..."))}}]),n}(a.Component),I=n(49),B=n.n(I);function N(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,a=Object(m.a)(e);if(t){var o=Object(m.a)(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return Object(u.a)(this,n)}}var x=function(e){Object(l.a)(n,e);var t=N(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={message:""},a.updateMessage=a.updateMessage.bind(Object(y.a)(a)),a.submitMessage=a.submitMessage.bind(Object(y.a)(a)),a.onfocus=a.onfocus.bind(Object(y.a)(a)),a}return Object(i.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("focus",this.onfocus)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("focus",this.onfocus)}},{key:"onfocus",value:function(){this.messageInput.focus()}},{key:"updateMessage",value:function(e){var t=e.target.value;this.setState({message:t})}},{key:"submitMessage",value:function(e){e.preventDefault();var t=this.state.message;""!==t&&(this.setState({message:""}),this.props.onSendMessage(t))}},{key:"render",value:function(){var e=this,t=this.props.chatting;return o.a.createElement("form",{action:"",className:"chat-input"},o.a.createElement("input",{autoFocus:!0,ref:function(t){e.messageInput=t},type:"text",id:"message-input",value:this.state.message,onChange:this.updateMessage,placeholder:"Type something...",disabled:!t}),o.a.createElement("button",{id:"submit",onClick:this.submitMessage,disabled:!t},o.a.createElement("img",{src:B.a,alt:"Send"})))}}]),n}(a.Component);function M(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,a=Object(m.a)(e);if(t){var o=Object(m.a)(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return Object(u.a)(this,n)}}var L=function(e){Object(l.a)(n,e);var t=M(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props.time;return o.a.createElement("div",{className:"chat-countdown"},o.a.createElement("p",{className:"timer"},e))}}]),n}(a.Component),T=n(50),D=n.n(T);function P(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,a=Object(m.a)(e);if(t){var o=Object(m.a)(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return Object(u.a)(this,n)}}var F=function(e){Object(l.a)(n,e);var t=P(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).notificationSound=new Audio(D.a),a.state={clientId:null,socket:null,roomId:null,messages:[],error:null,chatting:!1,over:!1,destroyed:!1,remainingTime:"05:00",currentLength:0},a.handleSendMessage=a.handleSendMessage.bind(Object(y.a)(a)),a}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props.location.pathname.slice(6);console.log("RoomID: "+t);var n=k(b);n.emit("create",t),n.on("joined",function(){e.setState({clientId:n.id,socket:n,roomId:t})}),n.on("ready",function(){e.notificationSound.play(),e.setState({chatting:!0})}),n.on("time left",function(t){var n=new Date(null);n.setSeconds(t),e.setState({remainingTime:n.toISOString().substr(14,5)})}),n.on("message sent",function(t){t.senderId!==e.state.clientId&&e.notificationSound.play(),console.log("Message sent successfully!");var n=e.state.messages;n.push(t),e.setState({messages:n,currentLength:n.length})}),n.on("over",function(){e.setState({chatting:!1,over:!0,remainingTime:"00:00"})}),n.on("room not found",function(){e.setState({error:"Room NOT FOUND"})}),n.on("room full",function(){e.setState({error:"Room FULL!"})}),n.on("room destroyed",function(){e.setState({destroyed:!0,chatting:!1})})}},{key:"handleSendMessage",value:function(e){this.state.socket.emit("chat message",e)}},{key:"render",value:function(){var e=this.state,t=e.error,n=e.socket,a=e.messages,r=e.chatting,c=e.clientId,s=e.over,i=e.destroyed,l=e.remainingTime,u=e.currentLength;return t&&o.a.createElement(S,null,t)||null===n&&o.a.createElement(S,null,"Connecting...")||o.a.createElement("div",{className:"chatbox"},o.a.createElement(L,{time:l}),o.a.createElement(C,{messages:a,clientId:c,chatting:r,over:s,destroyed:i,length:u}),o.a.createElement(x,{onSendMessage:this.handleSendMessage,chatting:r}))}}]),n}(a.Component);function J(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,a=Object(m.a)(e);if(t){var o=Object(m.a)(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return Object(u.a)(this,n)}}var W=function(e){Object(l.a)(n,e);var t=J(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"componentWillMount",value:function(){window.addEventListener("resize",function(){var e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(e,"px"))})}},{key:"render",value:function(){return o.a.createElement(f.a,null,o.a.createElement("div",{className:"App"},o.a.createElement(h.a,{exact:!0,path:"/",component:g}),o.a.createElement(h.a,{path:"/createChatRoom",component:R}),o.a.createElement(h.a,{path:"/chat/:id",component:F})))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},46:function(e,t,n){e.exports=n.p+"static/media/logo.1caff7fb.svg"},49:function(e,t,n){e.exports=n.p+"static/media/send.632c2b42.svg"},50:function(e,t,n){e.exports=n.p+"static/media/notification.a6b4932b.ogg"},52:function(e,t,n){e.exports=n(104)},57:function(e,t,n){}},[[52,1,2]]]);
//# sourceMappingURL=main.90a229e7.chunk.js.map