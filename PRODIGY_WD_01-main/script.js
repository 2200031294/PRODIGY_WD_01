Let sections= document.querySelectorAll('section');
Let navLinks = document.querySelectorAll('header nav a');
window.onscroll=()=>{
    sections.forEach(sec=>{
        Let top=window.scrollY;
        Let offset=sec.offsetTop;
        Let height=sec.offsetHeight;
        Let id=sec.getAttribute('id');
        if(top>=offset && top <offset+height){
            navLinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+id+']').classList.add('active');
            });
        };
    });

};