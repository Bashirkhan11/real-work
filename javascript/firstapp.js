let toggle = document.querySelector("#icon");
toggle.addEventListener("click", function(){

   let nav = document.querySelector("nav ul");
   if(nav){

    nav.classList.toggle("show")
   }
   

});

let togglee = document.querySelector("#icon2");
togglee.addEventListener("click", function(){

   let nav = document.querySelector(".sidbar");
   if(nav){

    nav.classList.toggle("sidshow")
   //  document.getElementsByClassName(".icon").style.left="300px";
   
   }
   

});


document.addEventListener("click", function(e) {
   let toggle = document.querySelector("#icon");
   let togglee = document.querySelector("#icon2");

   // Check if the click is outside both toggle elements


   if (e.target.id === "icon") {

      //  toggle.classList.remove("show");
      // togglee.classList.remove("sidshow");
       console.log(e.target.id);
   }
   else{
      console.log("khan");
   }
});





// document.addEventListener("click", function(e) {
//    let toggle = document.querySelector("#icon");
//    let togglee = document.querySelector("#icon2");

//    // Check if the click is outside both toggle elements
//    if (!toggle.contains(e.target) && !togglee.contains(e.target)) {
//        toggle.classList.remove("show");
//        togglee.classList.remove("sidshow");
//        console.log("Removed classes");
//    }
// });


