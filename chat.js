    
    const inputPremier = document.querySelector("#inputPremier")  
    const inputDeuxieme = document.querySelector("#inputDeuxieme")
    const buttonPremier = document.querySelector("#buttonPremier")
    const buttonDeuxieme = document.querySelector("#buttonDeuxieme")
    const chat = document.querySelector("#chat")
    const date =  new Date()
    //on crée un evenement quand on clique sur l element buttonPremier 
    //ce que contient la fonction s'éxecute
   function time(){
     return date.getHours()  + ":" + date.getMinutes()  ;
}
   function premierePersonneFonction(){
    currentTime = time();
    console.log(currentTime);
    chat.innerHTML =  chat.innerHTML + "<div class='red messageHolder'><span class='date'>"+currentTime+"</span>" + inputPremier.value + "</div>";
        inputPremier.value = "";
   }
    function deuxiemePersonneFonction (){
        currentTime = time();
        chat.innerHTML =  chat.innerHTML + "<div class='blue messageHolder'><span class='date'>"+currentTime+"</span>"+  inputDeuxieme.value + "</div>";
        inputDeuxieme.value = "";
    }
    buttonPremier.addEventListener("click",premierePersonneFonction)
    buttonDeuxieme.addEventListener("click",deuxiemePersonneFonction) 