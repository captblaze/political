$(document).ready(function() {
    $("#insurance").submit(function(event){

    const religion =$("select#religion").val();
    const passion =$("select#passion").val();
  
    if ( passion === "reading" ) {
      $('#maturedFem').show();

    } else if (passion === "travelling" ) {

      $('.youngFem').show();
    
    } else if (passion === "womanizing") {
     
        $('.maturedMale').show(); 
    
      } else if ( passion === "drinking") {
     
        $('.maturedMale').show(); 

    } else if ( passion === "building"){

      $('.youngMale').show();  
    }else {

     $('Please fill the form correctly or leave my app').show();
    }
    event.preventDefault();

    });
  });