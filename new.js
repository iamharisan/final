'use strict';

const drop_btn = document.querySelector(".drop_btn")
const drop_msg = document.querySelector(".drop_msg")
const p_15 = document.querySelector(".p15")
const wrapper__top = document.querySelector(".wrapper__top")
const container = document.querySelector(".container")
const navigation__top =document.querySelector(".navigation__top")


drop_btn.addEventListener("click",function(e)
{
    drop_msg.classList.toggle("mesage_active")

});



const intialCords = wrapper__top.getBoundingClientRect();
console.log(intialCords.top)

window.addEventListener('scroll',function(e)
{
    console.log(this.window.scrollY)
    if(window.scrollY > intialCords.top)
    navigation__top.classList.add("sticky");
    else navigation__top.classList.remove("sticky");
})



