const navSlide = () =>{
    const burger = document.querySelector('.burger')
    const nav = document.querySelector('.nav-links')
    const navLinks = document.querySelectorAll(".nav-links li")

    burger.addEventListener("click", ()=>{
        //Toggle
        nav.classList.toggle('nav-active')
         //Animation links
        navLinks.forEach((link, index)=>{
            console.log(index)
            if(link.style.animation){
                link.style.animation ="";
            } else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s`;
            }
            })
            //burger animation
            burger.classList.toggle("toggle")
    })
}
navSlide();

const menuItems = [
{
    id:1,
    item:"Food item1",
    oneliner:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, accusantium illum  sint incidunt, voluptate esse quaerat saepe dolor." ,
    img:"images/food.jpg",
    hotel:"Hotel1 name1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate aspernatu.",
},
{
    id:2,
    item:"Food item2",
    oneliner:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, accusantium illum  sint incidunt, voluptate esse quaerat saepe dolor." ,
    img:"images/food1.jpg",
    hotel:"Hotel2 name2",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate aspernatu.",
},
{
    id:3,
    item:"Food item3",
    oneliner:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, accusantium illum  sint incidunt, voluptate esse quaerat saepe dolor." ,
    img:"images/food2.jpg",
    hotel:"Hotel3 name3",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate aspernatu.",
},
{
    id:4,
    item:"Food item4",
    oneliner:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, accusantium illum  sint incidunt, voluptate esse quaerat saepe dolor." ,
    img:"images/food3.jpg",
    hotel:"Hotel4 name4",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate aspernatu.",
},
{
    id:5,
    item:"Food item5",
    oneliner:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, accusantium illum  sint incidunt, voluptate esse quaerat saepe dolor." ,
    img:"images/food.jpg",
    hotel:"Hotel5 name5",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate aspernatu.",
}
]

   
const item= document.getElementById("item")
const oneliner= document.getElementById("oneliner")
const img= document.getElementById("img")
const hotel= document.getElementById("hotel")
const desc= document.getElementById("desc")
const prev= document.getElementById("prev")
const random= document.getElementById("random")
const next= document.getElementById("next")


let currentMenu=0;

window.addEventListener("DOMContentLoaded", function(){
    // let menu=menuItems[currentMenu]
    // item.textContent=menu.item;
    // oneliner.textContent=menu.oneliner;
    // img.src=menu.img;
    // hotel.textContent=menu.hotel;
    // desc.textContent=menu.desc;
    allMenu(currentMenu)
});
const allMenu=()=>{
    let menu=menuItems[currentMenu]
    item.textContent=menu.item;
    oneliner.textContent=menu.oneliner;
    img.src=menu.img;
    hotel.textContent=menu.hotel;
    desc.textContent=menu.desc;
}

//random menu
random.addEventListener("click",()=>{
    currentMenu=Math.floor(Math.random()*menuItems.length)
    // console.log(currentMenu)
    allMenu(currentMenu)
})
//previous button
prev.addEventListener("click",()=>{
    currentMenu--;
    if(currentMenu<0){
        currentMenu=menuItems.length-1
    }
    allMenu(currentMenu)
})
//next button
next.addEventListener("click",()=>{
    currentMenu++;
    if(currentMenu>menuItems.length-1){
        currentMenu=0
    }
    allMenu(currentMenu)
})
