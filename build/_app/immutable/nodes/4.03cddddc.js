import{s as he,h as z,b as H,k as R,t as A}from"../chunks/scheduler.073150aa.js";import{S as we,i as ye,e as ce,a as ie,A as be,d as N,t as B,b as ve,f as O,G as J,r as Y,s as le,g as K,u as Q,c as re,h as W,j as X,k as Z,v as x,x as V,w as $,p as Se}from"../chunks/index.fc5233d8.js";import{g as Ie,N as Ce,M as Me,a as Te,b as ke}from"../chunks/Navbar.591d29ba.js";import{t as j}from"../chunks/Toaster.svelte_svelte_type_style_lang.44440a81.js";import{b as Oe,v as ue,O as pe,a as Ne,e as de,d as Pe,s as me,f as Ee,j as He}from"../chunks/_commonjsHelpers.0f22a02e.js";import{p as Re}from"../chunks/stores.6147508c.js";const{window:Ae}=Ie;function fe(a){let f,s,d,g,t,i,b,T,_,p,I,C,r,l,v,U,k,P;f=new Ce({props:{title:a[4],shareEnabled:a[6].length>0}});function ee(o){a[13](o)}let q={disabled:a[6].length>0};a[3]!==void 0&&(q.selectedModels=a[3]),i=new Me({props:q}),H.push(()=>J(i,"selectedModels",ee));function te(o){a[14](o)}function se(o){a[15](o)}function G(o){a[16](o)}let E={selectedModels:a[3],sendPrompt:a[7],regenerateResponse:a[10]};a[0]!==void 0&&(E.history=a[0]),a[6]!==void 0&&(E.messages=a[6]),a[2]!==void 0&&(E.autoScroll=a[2]),p=new Te({props:E}),H.push(()=>J(p,"history",te)),H.push(()=>J(p,"messages",se)),H.push(()=>J(p,"autoScroll",G));function oe(o){a[17](o)}function ne(o){a[18](o)}let D={messages:a[6],submitPrompt:a[8],stopResponse:a[9]};return a[5]!==void 0&&(D.prompt=a[5]),a[2]!==void 0&&(D.autoScroll=a[2]),v=new ke({props:D}),H.push(()=>J(v,"prompt",oe)),H.push(()=>J(v,"autoScroll",ne)),{c(){Y(f.$$.fragment),s=le(),d=K("div"),g=K("div"),t=K("div"),Y(i.$$.fragment),T=le(),_=K("div"),Y(p.$$.fragment),l=le(),Y(v.$$.fragment),this.h()},l(o){Q(f.$$.fragment,o),s=re(o),d=W(o,"DIV",{class:!0});var u=X(d);g=W(u,"DIV",{class:!0});var S=X(g);t=W(S,"DIV",{class:!0});var e=X(t);Q(i.$$.fragment,e),e.forEach(O),T=re(S),_=W(S,"DIV",{class:!0});var n=X(_);Q(p.$$.fragment,n),n.forEach(O),S.forEach(O),l=re(u),Q(v.$$.fragment,u),u.forEach(O),this.h()},h(){Z(t,"class","max-w-2xl mx-auto w-full px-3 md:px-0 mt-10"),Z(_,"class","h-full mt-10 mb-32 w-full flex flex-col"),Z(g,"class","py-2.5 flex flex-col justify-between w-full"),Z(d,"class","min-h-screen w-full flex justify-center")},m(o,u){x(f,o,u),ie(o,s,u),ie(o,d,u),V(d,g),V(g,t),x(i,t,null),V(g,T),V(g,_),x(p,_,null),V(d,l),x(v,d,null),P=!0},p(o,u){const S={};u&16&&(S.title=o[4]),u&64&&(S.shareEnabled=o[6].length>0),f.$set(S);const e={};u&64&&(e.disabled=o[6].length>0),!b&&u&8&&(b=!0,e.selectedModels=o[3],R(()=>b=!1)),i.$set(e);const n={};u&8&&(n.selectedModels=o[3]),!I&&u&1&&(I=!0,n.history=o[0],R(()=>I=!1)),!C&&u&64&&(C=!0,n.messages=o[6],R(()=>C=!1)),!r&&u&4&&(r=!0,n.autoScroll=o[2],R(()=>r=!1)),p.$set(n);const c={};u&64&&(c.messages=o[6]),!U&&u&32&&(U=!0,c.prompt=o[5],R(()=>U=!1)),!k&&u&4&&(k=!0,c.autoScroll=o[2],R(()=>k=!1)),v.$set(c)},i(o){P||(N(f.$$.fragment,o),N(i.$$.fragment,o),N(p.$$.fragment,o),N(v.$$.fragment,o),P=!0)},o(o){B(f.$$.fragment,o),B(i.$$.fragment,o),B(p.$$.fragment,o),B(v.$$.fragment,o),P=!1},d(o){o&&(O(s),O(d)),$(f,o),$(i),$(p),$(v)}}}function Je(a){let f,s,d,g,t=a[1]&&fe(a);return{c(){t&&t.c(),f=ce()},l(i){t&&t.l(i),f=ce()},m(i,b){t&&t.m(i,b),ie(i,f,b),s=!0,d||(g=be(Ae,"scroll",a[12]),d=!0)},p(i,[b]){i[1]?t?(t.p(i,b),b&2&&N(t,1)):(t=fe(i),t.c(),N(t,1),t.m(f.parentNode,f)):t&&(Se(),B(t,1,1,()=>{t=null}),ve())},i(i){s||(N(t),s=!0)},o(i){B(t),s=!1},d(i){i&&O(f),t&&t.d(i),d=!1,g()}}}function je(a,f,s){let d,g,t,i;z(a,de,e=>s(20,d=e)),z(a,Pe,e=>s(21,g=e)),z(a,me,e=>s(22,t=e)),z(a,Re,e=>s(11,i=e));let b=!1,T=!1,_=!0,p=[""],I="",C="",r=[],l={messages:{},currentId:null};const v=async()=>{await de.set(i.params.id);const e=await g.getChatById(d);if(e){console.log(e),s(3,p=((e==null?void 0:e.models)??void 0)!==void 0?e.models:[e.model??""]),s(0,l=((e==null?void 0:e.history)??void 0)!==void 0?e.history:He(e.messages)),s(4,I=e.title);let n=JSON.parse(localStorage.getItem("settings")??"{}");return await me.set({...n,system:e.system??n.system,options:e.options??n.options}),s(2,_=!0),await A(),r.length>0&&s(0,l.messages[r.at(-1).id].done=!0,l),await A(),e}else return null},U=e=>{if(!navigator.clipboard){var n=document.createElement("textarea");n.value=e,n.style.top="0",n.style.left="0",n.style.position="fixed",document.body.appendChild(n),n.focus(),n.select();try{var c=document.execCommand("copy"),m=c?"successful":"unsuccessful";console.log("Fallback: Copying text command was "+m)}catch(M){console.error("Fallback: Oops, unable to copy",M)}document.body.removeChild(n);return}navigator.clipboard.writeText(e).then(function(){console.log("Async: Copying to clipboard was successful!")},function(M){console.error("Async: Could not copy text: ",M)})},k=async(e,n,c)=>{await Promise.all(p.map(async m=>{console.log(m),await P(m,e,n,c)})),await Oe.set(await g.getChats())},P=async(e,n,c,m)=>{console.log("sendPromptOllama");let M=ue(),h={parentId:c,id:M,childrenIds:[],role:"assistant",content:"",model:e};s(0,l.messages[M]=h,l),s(0,l.currentId=M,l),c!==null&&s(0,l.messages[c].childrenIds=[...l.messages[c].childrenIds,M],l),await A(),window.scrollTo({top:document.body.scrollHeight});const F=await fetch(`${(t==null?void 0:t.API_BASE_URL)??pe}/chat`,{method:"POST",headers:{"Content-Type":"text/event-stream",...t.authHeader&&{Authorization:t.authHeader}},body:JSON.stringify({model:e,messages:[t.system?{role:"system",content:t.system}:void 0,...r].filter(w=>w).map(w=>({role:w.role,content:w.content})),options:{seed:t.seed??void 0,temperature:t.temperature??void 0,repeat_penalty:t.repeat_penalty??void 0,top_k:t.top_k??void 0,top_p:t.top_p??void 0,num_ctx:t.num_ctx??void 0,...t.options??{}},format:t.requestFormat??void 0})}).catch(w=>(console.log(w),null));if(F&&F.ok){const w=F.body.pipeThrough(new TextDecoderStream).pipeThrough(Ne(`
`)).getReader();for(;;){const{value:ge,done:_e}=await w.read();if(_e||T||m!==d){h.done=!0,s(6,r),s(0,l);break}try{let L=ge.split(`
`);for(const ae of L)if(ae!==""){console.log(ae);let y=JSON.parse(ae);if("detail"in y)throw y;if(y.done==!1){if(h.content==""&&y.message.content==`
`)continue;h.content+=y.message.content,s(6,r),s(0,l)}else{if(h.done=!0,h.context=y.context??null,h.info={total_duration:y.total_duration,load_duration:y.load_duration,sample_count:y.sample_count,sample_duration:y.sample_duration,prompt_eval_count:y.prompt_eval_count,prompt_eval_duration:y.prompt_eval_duration,eval_count:y.eval_count,eval_duration:y.eval_duration},s(6,r),s(0,l),t.notificationEnabled&&!document.hasFocus()){const Be=new Notification(`Ollama - ${e}`,{body:h.content,icon:"/favicon.png"})}t.responseAutoCopy&&U(h.content)}}}catch(L){console.log(L),"detail"in L&&j.error(L.detail);break}_&&window.scrollTo({top:document.body.scrollHeight}),await g.updateChatById(m,{title:I===""?"New Chat":I,models:p,system:t.system??void 0,options:{seed:t.seed??void 0,temperature:t.temperature??void 0,repeat_penalty:t.repeat_penalty??void 0,top_k:t.top_k??void 0,top_p:t.top_p??void 0,num_ctx:t.num_ctx??void 0,...t.options??{}},messages:r,history:l})}}else{if(F!==null){const w=await F.json();console.log(w),"detail"in w?(j.error(w.detail),h.content=w.detail):(j.error(w.error),h.content=w.error)}else j.error("Uh-oh! There was an issue connecting to Ollama."),h.content="Uh-oh! There was an issue connecting to Ollama.";h.error=!0,h.content="Uh-oh! There was an issue connecting to Ollama.",h.done=!0,s(6,r),s(0,l)}T=!1,await A(),_&&window.scrollTo({top:document.body.scrollHeight}),r.length==2&&r.at(1).content!==""&&(window.history.replaceState(l.state,"",`/c/${m}`),await se(m,n))},ee=async e=>{const n=JSON.parse(JSON.stringify(d));if(console.log("submitPrompt",n),p.includes(""))j.error("Model not selected");else if(r.length!=0&&r.at(-1).done!=!0)console.log("wait");else{document.getElementById("chat-textarea").style.height="";let c=ue(),m={id:c,parentId:r.length!==0?r.at(-1).id:null,childrenIds:[],role:"user",content:e};r.length!==0&&l.messages[r.at(-1).id].childrenIds.push(c),s(0,l.messages[c]=m,l),s(0,l.currentId=c,l),await A(),r.length==1&&await g.createNewChat({id:n,title:"New Chat",models:p,system:t.system??void 0,options:{seed:t.seed??void 0,temperature:t.temperature??void 0,repeat_penalty:t.repeat_penalty??void 0,top_k:t.top_k??void 0,top_p:t.top_p??void 0,num_ctx:t.num_ctx??void 0,...t.options??{}},messages:r,history:l}),s(5,C=""),setTimeout(()=>{window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"})},50),await k(e,c,n)}},q=()=>{T=!0,console.log("stopResponse")},te=async()=>{const e=JSON.parse(JSON.stringify(d));if(console.log("regenerateResponse",e),r.length!=0&&r.at(-1).done==!0){r.splice(r.length-1,1),s(6,r),s(0,l);let n=r.at(-1),c=n.content;await k(c,n.id,e)}},se=async(e,n)=>{if(t.titleAutoGenerate??!0){console.log("generateChatTitle");const c=await fetch(`${(t==null?void 0:t.API_BASE_URL)??pe}/generate`,{method:"POST",headers:{"Content-Type":"text/event-stream",...t.authHeader&&{Authorization:t.authHeader}},body:JSON.stringify({model:p[0],prompt:`Generate a brief 3-5 word title for this question, excluding the term 'title.' Then, please reply with only the title: ${n}`,stream:!1})}).then(async m=>{if(!m.ok)throw await m.json();return m.json()}).catch(m=>("detail"in m&&j.error(m.detail),console.log(m),null));c&&await G(e,c.response===""?"New Chat":c.response)}else await G(e,`${n}`)},G=async(e,n)=>{await g.updateChatById(e,{title:n}),e===d&&s(4,I=n)},E=e=>{s(2,_=window.innerHeight+window.scrollY>=document.body.offsetHeight-40)};function oe(e){p=e,s(3,p)}function ne(e){l=e,s(0,l)}function D(e){r=e,s(6,r),s(0,l)}function o(e){_=e,s(2,_)}function u(e){C=e,s(5,C)}function S(e){_=e,s(2,_)}return a.$$.update=()=>{if(a.$$.dirty&1)if(l.currentId!==null){let e=[],n=l.messages[l.currentId];for(;n!==null;)e.unshift({...n}),n=n.parentId!==null?l.messages[n.parentId]:null;s(6,r=e)}else s(6,r=[]);a.$$.dirty&2048&&i.params.id&&(async()=>{let e=await v();await A(),e?s(1,b=!0):await Ee("/")})()},[l,b,_,p,I,C,r,k,ee,q,te,i,E,oe,ne,D,o,u,S]}class Ge extends we{constructor(f){super(),ye(this,f,je,Je,he,{})}}export{Ge as component};
