function showToast(){

const toast = document.getElementById("toast")

toast.innerText = "Registration Page Coming Soon 🚀"

toast.style.display = "block"

setTimeout(function(){

toast.style.display = "none"

},3000)

}



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