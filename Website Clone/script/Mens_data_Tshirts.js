import navbar from "./NAVBAR.js"
document.getElementById("navbar").innerHTML=navbar()

import {sidebar} from "./sidebar.js"
let sidebar_div = document.getElementById("sidebar");
sidebar_div.innerHTML = sidebar();

import {top_bar} from "./top_bar.js"
let top_barDiv=document.getElementById("dpdown")
top_barDiv.innerHTML=top_bar()

import { footer } from "./footer_product_page.js";
document.getElementById("footer").innerHTML=footer();

let container=document.getElementById("box")
const mens_data= async()=>{
    try{
        let res=await fetch("https://script.google.com/macros/s/AKfycbySP626wdSfbLwjKUutuG-w_da_jeGoMtbm6bDxoQ5DxA6ln5bCeCDXGK7lhtjNHuWN3A/exec")
        let data= await res.json()
    
        console.log(data.data)
        appendData(data.data)

}
catch(error){
console.log(error)
}
}
mens_data()


const appendData=(data)=>{

    data.forEach(function(el){

        let div=document.createElement("div")
        let result=document.getElementById("result_base")
        let img=document.createElement("img")
        img.src=el.image
        console.log(img)
        let title1=document.createElement("h3")
        title1.innerHTML=el.brand
         let title=document.createElement("p")
         title.innerHTML=el.name

         let cost=document.createElement("p")
         cost.innerHTML="Rs. "+el.price

         div.append(img,title1,title,cost)
         result.append(div)
         container.append(result)
    })
}


