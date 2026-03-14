function showToast(msg){

const box = document.getElementById("toastBox");

const t = document.createElement("div");

t.className = "toast";

t.textContent = msg;

box.appendChild(t);

setTimeout(() => {
t.remove();
},3000);

}

// Navbar active link

document.querySelectorAll(".nav-links a").forEach(link=>{

link.addEventListener("click",function(){

document.querySelectorAll(".nav-links a")
.forEach(a=>a.classList.remove("active"));

this.classList.add("active");

});

});
function showToast(msg) {
    const box = document.getElementById("toastBox");
    if (!box) {
        console.error("Could not find the toastBox element!");
        return;
    }

    const t = document.createElement("div");
    t.className = "toast";
    t.textContent = msg;
    box.appendChild(t);

    setTimeout(() => {
        t.style.opacity = "0";
        setTimeout(() => t.remove(), 500);
    }, 3000);
}

// THIS PART TRIGGERS IT:
document.addEventListener("DOMContentLoaded", () => {
    const mainBtn = document.querySelector(".btn-primary");
    if(mainBtn) {
        mainBtn.addEventListener("click", () => {
            showToast("Success! Connection established. 🚀");
        });
    }
});