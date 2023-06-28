function mychat(){
    let message = document.getElementById('message')
    if(message.style.display === "block"){
        message.style.display = "none";
    }else{
        message.style.display = "block";
    }
};



const scrollTop = document.getElementById('up')

window.onscroll = () => {
if (window.scrollY > 200) {
    scrollTop.style.visibility = "visible";
    scrollTop.style.opacity = 1;
}else {
    scrollTop.style.visibility = "hidden";
    scrollTop.style.opacity = 0;
}
};


function show() {
 const x = document.getElementById("myinput");
 const visible = document.getElementById("visible")
 const hide = document.getElementById("hide")
 
    if( x.type === "password" ){
        x.type = "text" ;
        visible.style.display="none" ;
        hide.style.display="block";

        
    }else{
        x.type = "password";
        visible.style.display= "block" ;
        hide.style.display= "none";


    };


}
function shows() {
    const y= document.getElementById("myinputs");
    const visible = document.getElementById("visibles")
    const hide = document.getElementById("hides")

    
       if( y.type === "password"){
           y.type = "text" ;
           visible.style.display="none" ;
           hide.style.display="block";

           
       }else{
           y.type = "password";
           visible.style.display= "block" ;
           hide.style.display= "none";
           
       };
   
   
   }



   const text = document.getElementById("text");

   const messages = [
     "développement web et application",
     "gestion de bases de données",
     "optimisation pour les moteurs de recherche (SEO)",
     "formatage de disques durs",
     "surveillance du reseau"
   ];
   
   let i = 0;
   let j = 0;
   
   function type() {
     if (i < messages[j].length) {
       text.style.visibility = "visible";
       text.innerHTML = messages[j].slice(0, i+1);
       i++;
       setTimeout(type, 70);
     } else {
       
       i = 0;
       j++;
       if (j >= messages.length) {
        
         j = 0;
       }
       setTimeout(type, 1000); 
     }
   }
   
   type();
   
