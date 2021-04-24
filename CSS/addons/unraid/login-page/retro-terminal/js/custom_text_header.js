
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// You must escape any backward slashes. "\\"

let custom_text_header = `
<div class="custom-text-header"> <pre>                               

          ____  __.                __________    
 ___  ___|    |/ _|_______ _____  \\____    /    
 \\ \\/  /|      < \\_  __ \\__ \\    /    /     
  >    < |    | \\  |  |\\/ / __\\_ /     /_     
/__/\\_\\|____|__\\ |__|   (____  //_______\\   
     \\/       \\/            \\/        \\/   ,&lt; 
                                                                                                                  
                                                                 </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
