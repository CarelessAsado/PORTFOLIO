let navBtn = document.querySelector(".nav-button");
let absolute = document.querySelector(".links");
navBtn.addEventListener("click", (e)=>{
    absolute.classList.toggle("active");
})

/*-----------------BACKGROUND TRANSPARENTE O CON COLOR EN EL NAV-----------*/
const nav=document.querySelector("nav");
const introSection = document.getElementById("intro");

const navBackgroundChange = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if (!entry.isIntersecting){
            nav.classList.add("afterScroll")
        } else {
            nav.classList.remove("afterScroll")
        }
    })
},{
    rootMargin: "-200px"
} ) 

navBackgroundChange.observe(introSection) 

/*------------------------------------------*/
/*----------------------------------------------------*/
let whatsappLogo = document.getElementById("whatsappLogo")
window.addEventListener("DOMContentLoaded", ()=>{
    let sections = document.querySelectorAll("section")
    const underlineNavObserve = new IntersectionObserver((entries,observer)=>{
            entries.forEach(entry=>{
                let ID =entry.target.id
                    if(entry.target.id =="intro"){
                        whatsappLogo.classList.remove("show")
                        return   
                    }
                     if(entry.target.id =="proyectos"&&entry.isIntersecting){
                        whatsappLogo.classList.add("show")
                    } 
                    let tag = document.getElementById(ID+"Hover")
                if (!entry.isIntersecting){
                    entry.target.classList.remove("show")  
                    return tag.classList.remove("lineHover")
                } else {  
                    entry.target.classList.add("show")        
                    let aTags = document.querySelectorAll("nav a")
                    aTags.forEach(e=>e.classList.remove("lineHover")) 
                    tag.classList.add("lineHover")
                    
                }
            })
        }, {
            rootMargin: "-100px"
        })

    sections.forEach(section=>{
        underlineNavObserve.observe(section)
    })
})
        
    

