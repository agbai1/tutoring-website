$(document).ready(function(){
	$('#logout-button').hide();
    
	$("#submit").click(function(){
        var jsfirstname = $("#firstname").val();
        var jslastname = $("#lastname").val();
		var jsusername = $("#username").val();
		var jspassword = $("#password").val();
		
		var pattern = new RegExp(/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/); //unacceptable chars 
        // Checking for blank fields.
        if(jsfirstname && jslastname && jsusername && jspassword){  
            // Checking for special characters.
            if (pattern.test(jsusername)) {
            alert("Please only use standard alphanumerics for username and password");
                } else {
                
                // EXECUTES ONLY IF BOTH IFS RETURN TRUE
            //PHP POST
                $.get(
                    "php/su_login.php", 
                    //URL or page on the server
                    { 
                    // Data that you're sending to the server
                        phpfirstname:jsfirstname,
                        phplastname:jslastname,
                        phpusername:jsusername,
                        phppassword:jspassword
                    },
            
                    function(response, status){
                        $("#test-login").html(response + " and Status: " + status);
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
