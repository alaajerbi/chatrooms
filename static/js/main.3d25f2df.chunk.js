(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{103:function(e,t){},107:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),s=a(45),i=a.n(s),c=a(4),r=a(5),l=a(7),m=a(6),u=a(8),d=a(109),h=a(110),p=a(108),g=a(46),f=a.n(g),v=(a(57),function(e){return o.a.createElement("div",{className:"main"},o.a.createElement("hero",null,o.a.createElement("img",{src:f.a,alt:"Logo",width:"200"})),o.a.createElement("div",{className:"container"},o.a.createElement("div",{class:"section"},o.a.createElement("h1",null,"Chat Rooms with Time Limit"),o.a.createElement("p",null,"Built with ReactJS, NodeJS, Express, and Socket.io by ",o.a.createElement("a",{href:"http://alaajerbi.com"},"@alaajerbi"))),o.a.createElement("div",{className:"cta"},o.a.createElement(p.a,{to:"createChatRoom",class:"btn",style:{marginLeft:"10px"}},"Create a room!"))))}),b=a(9),E="https://chatrooms-time-limit.herokuapp.com",y="https://alaajerbi.com/chatrooms",j=a(47),O=a.n(j);var k=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={roomId:null,loading:!0},a.handleCopy=a.handleCopy.bind(Object(b.a)(a)),a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;O.a.get(E+"/createChatRoom").then(function(e){return e.data}).then(function(t){t.success?e.setState({roomId:t.roomId,loading:!1,copied:!1}):console.log("Something is wrong")})}},{key:"handleCopy",value:function(){var e=this;if(!this.state.copied){var t=y+"/#/chat/"+this.state.roomId,a=document.createElement("textarea");a.value=t,a.setAttribute("readonly",""),a.style.position="absolute",a.style.left="-9999px",document.body.appendChild(a),a.select(),document.execCommand("copy"),document.body.removeChild(a),this.setState({copied:!0}),window.setTimeout(function(){e.setState({copied:!1})},2e3)}}},{key:"render",value:function(){return o.a.createElement("div",{className:"container-chat"},o.a.createElement("div",{className:"content"},this.state.loading&&o.a.createElement("p",null,"Creating a chatroom, please wait...")||this.state.roomId&&o.a.createElement("div",{className:"room-created-container"},o.a.createElement("h3",null,"Chatroom link:"),o.a.createElement(p.a,{to:"/chat/"+this.state.roomId},y+"/#/chat/"+this.state.roomId),o.a.createElement("button",{className:"copy-link-btn",onClick:this.handleCopy},this.state.copied?"Copied!":"Copy link"))))}}]),t}(n.Component),S=a(48),w=function(e){return o.a.createElement("div",{className:"alert-message"},e.children)},C=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={length:e.length},a.scrollToBottom=a.scrollToBottom.bind(Object(b.a)(a)),a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidUpdate",value:function(e){var t=this.state.length;e.length>t?(this.scrollToBottom(),this.setState({length:e.length})):(this.props.over||this.props.destroyed)&&this.scrollToBottom()}},{key:"scrollToBottom",value:function(){this.messagesEnd&&void 0!==this.messagesEnd&&this.messagesEnd.scrollIntoView()}},{key:"render",value:function(){var e=this,t=this.props.messages,a=this.props.clientId,n=this.props.chatting,s=this.props.destroyed,i=this.props.over,c=t.map(function(e,t){return o.a.createElement("div",{key:t,className:"chat-message "+(e.senderId===a?"mine":"not-mine")},e.body)}),r=o.a.createElement("div",{className:"stop-message"},s?"Your partner has left the room.":i&&"Time is up!"," ",o.a.createElement(p.a,{to:"../createChatRoom",style:{color:"#222"}},"Create a new room?"),o.a.createElement("br",null),o.a.createElement("br",null)),l=o.a.createElement("div",{style:{float:"left",clear:"both"},ref:function(t){e.messagesEnd=t}});return o.a.createElement("div",{className:"chat-history"},n&&0===t.length&&o.a.createElement(w,null,"Someone joined the room, Say Hi!")||n&&o.a.createElement(o.a.Fragment,null,c,l)||(i||s)&&o.a.createElement(o.a.Fragment,null,c,r,l)||o.a.createElement(w,null,"Waiting for a second party to join..."))}}]),t}(n.Component),I=a(49),N=a.n(I),M=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={message:""},a.updateMessage=a.updateMessage.bind(Object(b.a)(a)),a.submitMessage=a.submitMessage.bind(Object(b.a)(a)),a.onfocus=a.onfocus.bind(Object(b.a)(a)),a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("focus",this.onfocus)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("focus",this.onfocus)}},{key:"onfocus",value:function(){this.messageInput.focus()}},{key:"updateMessage",value:function(e){var t=e.target.value;this.setState({message:t})}},{key:"submitMessage",value:function(e){e.preventDefault();var t=this.state.message;""!==t&&(this.setState({message:""}),this.props.onSendMessage(t))}},{key:"render",value:function(){var e=this,t=this.props.chatting;return o.a.createElement("form",{action:"",className:"chat-input"},o.a.createElement("input",{autoFocus:!0,ref:function(t){e.messageInput=t},type:"text",id:"message-input",value:this.state.message,onChange:this.updateMessage,placeholder:"Type something...",disabled:!t}),o.a.createElement("button",{id:"submit",onClick:this.submitMessage,disabled:!t},o.a.createElement("img",{src:N.a})))}}]),t}(n.Component),T=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props.time;return o.a.createElement("div",{className:"chat-countdown"},o.a.createElement("p",{className:"timer"},e))}}]),t}(n.Component),x=a(50),L=a.n(x),R=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).notificationSound=new Audio(L.a),a.state={clientId:null,socket:null,roomId:null,messages:[],error:null,chatting:!1,over:!1,destroyed:!1,remainingTime:"05:00",currentLength:0},a.handleSendMessage=a.handleSendMessage.bind(Object(b.a)(a)),a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.location.pathname.slice(6);console.log("RoomID: "+t);var a=S(E);a.emit("create",t),a.on("joined",function(){e.setState({clientId:a.id,socket:a,roomId:t})}),a.on("ready",function(){e.notificationSound.play(),e.setState({chatting:!0})}),a.on("time left",function(t){var a=new Date(null);a.setSeconds(t),e.setState({remainingTime:a.toISOString().substr(14,5)})}),a.on("message sent",function(t){t.senderId!=e.state.clientId&&e.notificationSound.play(),console.log("Message sent successfully!");var a=e.state.messages;a.push(t),e.setState({messages:a,currentLength:a.length})}),a.on("over",function(){e.setState({chatting:!1,over:!0,remainingTime:"00:00"})}),a.on("room not found",function(){e.setState({error:"Room NOT FOUND"})}),a.on("room full",function(){e.setState({error:"Room FULL!"})}),a.on("room destroyed",function(){e.setState({destroyed:!0,chatting:!1})})}},{key:"handleSendMessage",value:function(e){this.state.socket.emit("chat message",e)}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.socket,n=e.messages,s=e.chatting,i=e.clientId,c=e.over,r=e.destroyed,l=e.remainingTime,m=e.currentLength;return t&&o.a.createElement(w,null,t)||null===a&&o.a.createElement(w,null,"Connecting...")||o.a.createElement("div",{className:"chatbox"},o.a.createElement(T,{time:l}),o.a.createElement(C,{messages:n,clientId:i,chatting:s,over:c,destroyed:r,length:m}),o.a.createElement(M,{onSendMessage:this.handleSendMessage,chatting:s}))}}]),t}(n.Component),B=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement(d.a,null,o.a.createElement("div",{className:"App"},o.a.createElement(h.a,{exact:!0,path:"/",component:v}),o.a.createElement(h.a,{path:"/createChatRoom",component:k}),o.a.createElement(h.a,{path:"/chat/:id",component:R})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},46:function(e,t,a){e.exports=a.p+"static/media/logo.1caff7fb.svg"},49:function(e,t,a){e.exports=a.p+"static/media/send.632c2b42.svg"},50:function(e,t,a){e.exports=a.p+"static/media/notification.a6b4932b.ogg"},52:function(e,t,a){e.exports=a(107)},57:function(e,t,a){}},[[52,1,2]]]);
//# sourceMappingURL=main.3d25f2df.chunk.js.map