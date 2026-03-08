function checkStatus(){

let id=document.getElementById("appId").value;
let result=document.getElementById("result");

if(id=="UJP101"){
result.innerHTML="📩 Application Received";
}

else if(id=="UJP102"){
result.innerHTML="🕒 Application Under Review";
}

else if(id=="UJP103"){
result.innerHTML="📅 Interview Scheduled";
}

else if(id=="UJP104"){
result.innerHTML="🎉 Congratulations! You are Selected";
}

else{
result.innerHTML="❌ Application ID not found";
}

}function checkStatus(){

let id=document.getElementById("appId").value;
let result=document.getElementById("result");

if(id=="UJP101"){
result.innerHTML="📩 Application Received";
}

else if(id=="UJP102"){
result.innerHTML="🕒 Application Under Review";
}

else if(id=="UJP103"){
result.innerHTML="📅 Interview Scheduled";
}

else if(id=="UJP104"){
result.innerHTML="🎉 Congratulations! You are Selected";
}

else{
result.innerHTML="❌ Application ID not found";
}

}



const defaultApps=[
{id:1,title:'Software Engineer',co:'Google',icon:'🔍',status:'Interview',ctc:'₹28 LPA'},
{id:2,title:'Frontend Developer',co:'Flipkart',icon:'🛒',status:'Applied',ctc:'₹18 LPA'},
{id:3,title:'Data Analyst',co:'Deloitte',icon:'📊',status:'Offered',ctc:'₹12 LPA'}
];

let statusTab="all";

function getApps(){
return JSON.parse(localStorage.getItem("apps")||"[]").length?
JSON.parse(localStorage.getItem("apps")):
defaultApps;
}

function saveApps(apps){
localStorage.setItem("apps",JSON.stringify(apps));
}

function renderStatusApps(){

const apps=getApps();
const list=document.getElementById("statusAppsList");

list.innerHTML=apps.map(a=>`

<div class="app-row">

<div>
<b>${a.icon} ${a.title}</b>
<br>
${a.co} • ${a.ctc}
<br>
Status: ${a.status}
</div>

<div>
<button onclick="removeApp(${a.id})">Remove</button>
</div>

</div>

`).join("");

}

function removeApp(id){

let apps=getApps();
apps=apps.filter(a=>a.id!==id);
saveApps(apps);
renderStatusApps();

}

function openAddModal(){
document.getElementById("modalOverlay").classList.remove("hidden");
}

function closeAddModal(){
document.getElementById("modalOverlay").classList.add("hidden");
}

function addApplication(){

const title=document.getElementById("addTitle").value;
const co=document.getElementById("addCo").value;
const ctc=document.getElementById("addCtc").value;
const status=document.getElementById("addStatus").value;
const icon=document.getElementById("addIcon").value||"💼";

let apps=getApps();

apps.push({
id:Date.now(),
title,
co,
ctc,
status,
icon
});

saveApps(apps);

closeAddModal();

renderStatusApps();

}

document.addEventListener("DOMContentLoaded",renderStatusApps);






function toggleMenu(){
  const menu=document.getElementById('mobileMenu');
  const btn=document.getElementById('hamburger');
  menu.classList.toggle('open');
  btn.classList.toggle('open');
}
document.addEventListener('click',function(e){
  const nav=document.getElementById('navbar');
  const menu=document.getElementById('mobileMenu');
  if(!nav.contains(e.target)&&!menu.contains(e.target)){
    menu.classList.remove('open');
    document.getElementById('hamburger').classList.remove('open');
  }
});
window.addEventListener('scroll',function(){
  document.getElementById('navbar').style.boxShadow=
    window.scrollY>10?'0 4px 20px rgba(26,18,8,0.1)':'none';
});
// Active link on click
document.querySelectorAll('.nav-links a,.mobile-menu a').forEach(function(a){
  a.addEventListener('click',function(){
    document.querySelectorAll('.nav-links a,.mobile-menu a').forEach(function(x){x.classList.remove('active')});
    document.querySelectorAll('.nav-links a[href="'+this.getAttribute('href')+'"],.mobile-menu a[href="'+this.getAttribute('href')+'"]').forEach(function(x){x.classList.add('active')});
    document.getElementById('mobileMenu').classList.remove('open');
    document.getElementById('hamburger').classList.remove('open');
  });
});