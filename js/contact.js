function sendMessage() {
  const fn      = document.getElementById('cFN').value.trim();
  const ln      = document.getElementById('cLN').value.trim();
  const email   = document.getElementById('cEmail').value.trim();
  const msg     = document.getElementById('cMessage').value.trim();
  const err     = document.getElementById('cErr');
  err.style.display = 'none';

  if (!fn || !ln || !email || !msg) {
    err.textContent = '⚠️ Please fill all required fields.';
    err.style.display = 'block';
    return;
  }
  if (!email.includes('@')) {
    err.textContent = '⚠️ Please enter a valid email address.';
    err.style.display = 'block';
    return;
  }

  // Simulate send
  document.getElementById('formView').style.display = 'none';
  document.getElementById('successView').style.display = 'block';
  showToast('✅ Message sent successfully!');
}

function resetForm() {
  document.getElementById('formView').style.display = 'block';
  document.getElementById('successView').style.display = 'none';
  ['cFN','cLN','cEmail','cPhone','cMessage'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
  document.getElementById('cErr').style.display = 'none';
}

// ── Toast ──
function showToast(msg) {
  const box = document.getElementById('toastBox');
  const t = document.createElement('div');
  t.className = 'toast';
  t.textContent = msg;
  box.appendChild(t);
  setTimeout(() => t.remove(), 3200);
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