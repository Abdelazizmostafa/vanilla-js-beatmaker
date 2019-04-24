window.addEventListener("load" , ()=>{

  const  sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".pads div");   
  const visual = document.querySelector(".visual");
  const colors = [
    "#60d394",
    "#d36060",
    "#c060d3",
    "#d3d160",
    "#606bd3",
    "#60c2d3"
  ];
    
console.log(sounds);
    
    
//Lets Going with  the Sounds Here 
    
    
pads.forEach((pad , index) =>{
 pad.addEventListener("click" ,  function(){
    sounds[index].currentTime = 0 ;   
    sounds[index].play();
     CreateBubles(index);
     });
  });
    
    
//Create Function that Create Bubles    
    
const CreateBubles  = (index) => {
 const buble  =  document.createElement("div"); 
 visual.appendChild(buble);
 buble.style.backgroundColor= colors[index];
 buble.style.animation= "jump  1s ease ";
 
}
    
    
    
    
});