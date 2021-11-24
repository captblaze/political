$(document).ready(function() {
    $("#insurance").submit(function(event){

    const religion =$("select#religion").val();
    const aims =$("select#aims").val();
    const passion =$("select#passion").val();
  
    if ( religion=== "xtian" || "muslim" && aims === "education"||"infrastructure"||"roads"||"health"||"employment" && passion === "reading" ) {
      console.log('it works');
      $('#maturedFem').show();
    } else if ( religion=== "xtian" || "muslim" && aims === "education"||"infrastructure"||"roads"||"health"||"employment" && passion === "travelling" ) {

      console.log('it works');

      
      $('#youngFem').show();
    } else if ( religion=== "xtian" || "muslim" && aims === "education"||"infrastructure"||"roads"||"health"||"employment" && passion === "womanizing" ||"drinking" ) {

      console.log('it works');

      
        $('#maturedMale').show(); 
    } else if ( religion=== "xtian"|| "muslim" && aims === "education"||"infrastructure"||"roads"||"health"||"employment" && passion === "building" ){
      console.log('it works');
     $('#youngMale').show();  
    }else {

      console.log('it works');

     $('Please fill the form correctly or leave my dating app').show();
    }
    event.preventDefault();

    });
  });