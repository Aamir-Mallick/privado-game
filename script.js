let childOne = document.getElementById("childOneId")
let childTwo = document.getElementById("childTwoId")


let valTop = 1
let valDown = 1
let valRight = 1
let valLeft = 1
let valLeftBlue = 500




childOne.addEventListener("keydown", (event)=>{

         if(event.key === "ArrowUp") {
         	
             valDown = valDown - 1;

             if (valDown <= 0) {
               valDown = valDown + 1;
                }

                if (valTop - valDown <= 100 & valDown -valTop <=100 && valRight - valLeftBlue <= 100 & valLeftBlue - valRight <=100) {
                	valDown = valDown + 1
                }

               childOne.style.top =  valDown + 'px';
           
               }

              


         else if (event.key === "ArrowDown") {
                                 
             valDown = valDown + 1;

            if (valDown >= 300) {
                valDown = valDown - 1;
            }

            if (valTop - valDown <= 100 & valDown -valTop <=100 && valRight - valLeftBlue <= 100 & valLeftBlue - valRight <=100) {

            	valDown = valDown -1

            }
       
               childOne.style.top = valDown + 'px';
            
            }


          else if (event.key === "ArrowRight" ) {

            valRight = valRight + 1
            if (valRight >= 500) {
                 valRight = valRight - 1
           
            
             }

             if (valTop - valDown <= 100 & valDown -valTop <=100 && valRight - valLeftBlue <= 100 & valLeftBlue - valRight <=100) {

             	valRight = valRight - 1

             }


          
            childOne.style.left = valRight + 'px';
          }
         

        else if (event.key === "ArrowLeft") {

            
             valRight = valRight - 1 
             if (valRight <=0 ) {
                 valRight = valRight + 1;  
             }

             if (valTop - valDown <= 100 & valDown -valTop <=100 && valRight - valLeftBlue <= 100 & valLeftBlue - valRight <=100) {
             	valRight = valRight + 1
             }

            childOne.style.left = valRight + 'px';
           }
          })
      


childTwo.addEventListener("keydown", (event)=>{
         if(event.key === "ArrowUp") {
         	
             valTop = valTop - 1;
             if (valTop <= 0) {
               valTop = valTop + 1;
                }


                if (valTop - valDown <= 100 & valDown -valTop <=100 && valRight - valLeftBlue <= 100 & valLeftBlue - valRight <=100) {
                	valTop = valTop + 1
                }

           childTwo.style.top =  valTop + 'px';
           
            }


            else if (event.key === "ArrowDown") {
                                 
           valTop = valTop + 1;

            if (valTop >= 300) {
                valTop= valTop - 1;
            }
         

             if (valTop - valDown <= 100 & valDown -valTop <=100 && valRight - valLeftBlue <= 100 & valLeftBlue - valRight <=100) {
             	valTop = valTop - 1
             }

           childTwo.style.top = valTop + 'px';
            
            }


          else if (event.key === "ArrowRight" ) {

            valLeftBlue = valLeftBlue + 1
            if (valLeftBlue >= 500) {
                 valLeftBlue = valLeftBlue - 1
            }

            if (valTop - valDown <= 100 & valDown -valTop <=100 && valRight - valLeftBlue <= 100 & valLeftBlue - valRight <=100) {
            	valLeftBlue = valLeftBlue - 1
            }

          
            childTwo.style.left = valLeftBlue + 'px';
          }
         

        else if (event.key === "ArrowLeft") {

            
             valLeftBlue = valLeftBlue - 1 
             if (valLeftBlue <= 0) {
                 valLeftBlue = valLeftBlue + 1;  
             }

           if (valTop - valDown <= 100 & valDown -valTop <=100 && valRight - valLeftBlue <= 100 & valLeftBlue - valRight <=100) {
           	  valLeftBlue = valLeftBlue + 1

           }

            childTwo.style.left = valLeftBlue + 'px';
           }
          })



 