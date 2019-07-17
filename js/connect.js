$(document).ready(function(){
    //Hides the logout button on page load
    $('#logout-button').hide();
   
    //Verifies username and password is not null and has no special charaters
    $("#lp-login").click(function(){
        var jsusername = $("#lp-username").val();
        var jspassword = $("#lp-password").val();
        
       var pattern = new RegExp(/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/); //unacceptable chars 
        // Checking for blank fields.
        if(jsusername && jspassword){  
            // Checking for special characters.
            if (pattern.test(jsusername)) {
            alert("Please only use standard alphanumerics for username and password");
                } else {
                
                // EXECUTES ONLY IF BOTH IFS RETURN TRUE
            //PHP POST
                $.post(
                    "php/login.php", 
                    //URL or page on the server
                    { 
                    // Data that you're sending to the server
                        username1:jsusername,
                        password1:jspassword
                    },
            
                    function(response, status){
                        $("#test-login").append(response + " and Status: " + status);
                        if (response == "1")
                            {
                                //redirect to the home page
                                window.location.href = "index.html";
                            }    
                    });
            }
        }else {
            alert("Please fill all fields...");
        }
    });
}); 
    

