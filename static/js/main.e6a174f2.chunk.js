(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{103:function(e,t){},107:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),s=n(45),i=n.n(s),c=n(4),r=n(5),l=n(7),m=n(6),u=n(8),d=n(109),h=n(110),p=n(108),g=n(46),f=n.n(g),v=(n(57),function(e){return o.a.createElement("div",{className:"landing-page"},o.a.createElement("div",{className:"container"},o.a.createElement("img",{className:"logo",src:f.a,alt:"Logo",width:"100%"}),o.a.createElement("h1",null,"Chat Rooms with Time Limit"),o.a.createElement("p",null,"Built with ReactJS, NodeJS, Express, and Socket.io by ",o.a.createElement("a",{href:"http://alaajerbi.com"},"@alaajerbi")),o.a.createElement("div",{className:"cta"},o.a.createElement(p.a,{to:"createChatRoom",className:"btn",style:{marginLeft:"10px"}},"Create a room!"))))}),b=n(9),y="https://chatrooms-time-limit.herokuapp.com",E="https://alaajerbi.com/chatrooms",j=n(47),O=n.n(j);var k=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={roomId:null,loading:!0},n.handleCopy=n.handleCopy.bind(Object(b.a)(n)),n}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;O.a.get(y+"/createChatRoom").then(function(e){return e.data}).then(function(t){t.success?e.setState({roomId:t.roomId,loading:!1,copied:!1}):console.log("Something is wrong")})}},{key:"handleCopy",value:function(){var e=this;if(!this.state.copied){var t=E+"/#/chat/"+this.state.roomId,n=document.createElement("textarea");n.value=t,n.setAttribute("readonly",""),n.style.position="absolute",n.style.left="-9999px",document.body.appendChild(n),n.select(),document.execCommand("copy"),document.body.removeChild(n),this.setState({copied:!0}),window.setTimeout(function(){e.setState({copied:!1})},2e3)}}},{key:"render",value:function(){return o.a.createElement("div",{className:"create-chat"},o.a.createElement("div",{className:"container"},this.state.loading&&o.a.createElement("p",null,"Creating a chatroom, please wait...")||this.state.roomId&&o.a.createElement(o.a.Fragment,null,o.a.createElement("h3",null,"Chatroom link:"),o.a.createElement(p.a,{to:"/chat/"+this.state.roomId},E+"/#/chat/"+this.state.roomId),o.a.createElement("button",{className:"copy-link-btn",onClick:this.handleCopy},this.state.copied?"Copied!":"Copy link"))))}}]),t}(a.Component),w=n(48),S=function(e){return o.a.createElement("div",{className:"alert-message"},e.children)},C=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={length:e.length},n.scrollToBottom=n.scrollToBottom.bind(Object(b.a)(n)),n}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidUpdate",value:function(e){var t=this.state.length;e.length>t?(this.scrollToBottom(),this.setState({length:e.length})):(this.props.over||this.props.destroyed)&&this.scrollToBottom()}},{key:"scrollToBottom",value:function(){this.messagesEnd&&void 0!==this.messagesEnd&&this.messagesEnd.scrollIntoView()}},{key:"render",value:function(){var e=this,t=this.props.messages,n=this.props.clientId,a=this.props.chatting,s=this.props.destroyed,i=this.props.over,c=t.map(function(e,t){return o.a.createElement("div",{key:t,className:"chat-message "+(e.senderId===n?"mine":"not-mine")},e.body)}),r=o.a.createElement("div",{className:"stop-message"},s?"Your partner has left the room.":i&&"Time is up!"," ",o.a.createElement(p.a,{to:"../createChatRoom",style:{color:"#222"}},"Create a new room?"),o.a.createElement("br",null),o.a.createElement("br",null)),l=o.a.createElement("div",{style:{float:"left",clear:"both"},ref:function(t){e.messagesEnd=t}});return o.a.createElement("div",{className:"chat-history"},a&&0===t.length&&o.a.createElement(S,null,"Someone joined the room, Say Hi!")||a&&o.a.createElement(o.a.Fragment,null,c,l)||(i||s)&&o.a.createElement(o.a.Fragment,null,c,r,l)||o.a.createElement(S,null,"Waiting for a second party to join..."))}}]),t}(a.Component),I=n(49),N=n.n(I),M=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={message:""},n.updateMessage=n.updateMessage.bind(Object(b.a)(n)),n.submitMessage=n.submitMessage.bind(Object(b.a)(n)),n.onfocus=n.onfocus.bind(Object(b.a)(n)),n}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("focus",this.onfocus)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("focus",this.onfocus)}},{key:"onfocus",value:function(){this.messageInput.focus()}},{key:"updateMessage",value:function(e){var t=e.target.value;this.setState({message:t})}},{key:"submitMessage",value:function(e){e.preventDefault();var t=this.state.message;""!==t&&(this.setState({message:""}),this.props.onSendMessage(t))}},{key:"render",value:function(){var e=this,t=this.props.chatting;return o.a.createElement("form",{action:"",className:"chat-input"},o.a.createElement("input",{autoFocus:!0,ref:function(t){e.messageInput=t},type:"text",id:"message-input",value:this.state.message,onChange:this.updateMessage,placeholder:"Type something...",disabled:!t}),o.a.createElement("button",{id:"submit",onClick:this.submitMessage,disabled:!t},o.a.createElement("img",{src:N.a})))}}]),t}(a.Component),T=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props.time;return o.a.createElement("div",{className:"chat-countdown"},o.a.createElement("p",{className:"timer"},e))}}]),t}(a.Component),x=n(50),L=n.n(x),R=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(m.a)(t).call(this,e))).notificationSound=new Audio(L.a),n.state={clientId:null,socket:null,roomId:null,messages:[],error:null,chatting:!1,over:!1,destroyed:!1,remainingTime:"05:00",currentLength:0},n.handleSendMessage=n.handleSendMessage.bind(Object(b.a)(n)),n}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.location.pathname.slice(6);console.log("RoomID: "+t);var n=w(y);n.emit("create",t),n.on("joined",function(){e.setState({clientId:n.id,socket:n,roomId:t})}),n.on("ready",function(){e.notificationSound.play(),e.setState({chatting:!0})}),n.on("time left",function(t){var n=new Date(null);n.setSeconds(t),e.setState({remainingTime:n.toISOString().substr(14,5)})}),n.on("message sent",function(t){t.senderId!=e.state.clientId&&e.notificationSound.play(),console.log("Message sent successfully!");var n=e.state.messages;n.push(t),e.setState({messages:n,currentLength:n.length})}),n.on("over",function(){e.setState({chatting:!1,over:!0,remainingTime:"00:00"})}),n.on("room not found",function(){e.setState({error:"Room NOT FOUND"})}),n.on("room full",function(){e.setState({error:"Room FULL!"})}),n.on("room destroyed",function(){e.setState({destroyed:!0,chatting:!1})})}},{key:"handleSendMessage",value:function(e){this.state.socket.emit("chat message",e)}},{key:"render",value:function(){var e=this.state,t=e.error,n=e.socket,a=e.messages,s=e.chatting,i=e.clientId,c=e.over,r=e.destroyed,l=e.remainingTime,m=e.currentLength;return t&&o.a.createElement(S,null,t)||null===n&&o.a.createElement(S,null,"Connecting...")||o.a.createElement("div",{className:"chatbox"},o.a.createElement(T,{time:l}),o.a.createElement(C,{messages:a,clientId:i,chatting:s,over:c,destroyed:r,length:m}),o.a.createElement(M,{onSendMessage:this.handleSendMessage,chatting:s}))}}]),t}(a.Component),B=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentWillMount",value:function(){window.addEventListener("resize",function(){var e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(e,"px"))})}},{key:"render",value:function(){return o.a.createElement(d.a,null,o.a.createElement("div",{className:"App"},o.a.createElement(h.a,{exact:!0,path:"/",component:v}),o.a.createElement(h.a,{path:"/createChatRoom",component:k}),o.a.createElement(h.a,{path:"/chat/:id",component:R})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},46:function(e,t,n){e.exports=n.p+"static/media/logo.1caff7fb.svg"},49:function(e,t,n){e.exports=n.p+"static/media/send.632c2b42.svg"},50:function(e,t,n){e.exports=n.p+"static/media/notification.a6b4932b.ogg"},52:function(e,t,n){e.exports=n(107)},57:function(e,t,n){}},[[52,1,2]]]);
//# sourceMappingURL=main.e6a174f2.chunk.js.map