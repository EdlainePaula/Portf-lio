document.getElementById('menu-toggle').addEventListener('click', function() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
});

let count =1;
document.getElementById("radio1").checked = true;

setInterval(function(){
    nextImage();
}, 5000)


function nextImage(){
    count ++;
    if(count >4){
        count = 1;
    }

    document.getElementById("radio"+ count).checked = true;
}


document.addEventListener('DOMContentLoaded', () => {

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); 
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth' 
            });
        });
    });
});