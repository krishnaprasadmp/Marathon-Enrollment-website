/* Name: Krishna Prasad M P Username:jadrn027  */
$(document).ready(function() {

	$(".fname_error").hide();
	$(".lname_error").hide();
	$(".address_error").hide();
	$(".state_error").hide();
	$(".city_error").hide();
	$(".zip_error").hide();
	$(".area_error").hide();
	$(".email_error").hide();
	$(".gender_error").hide();
	$(".birth_error").hide();
	$(".correct").hide();

	var error_firstname = false;
	var error_lastname  = false;
	var error_address = false;
	var error_statename = false;
	var error_cityname = false;
	var error_zip = false;
	var error_area = false;
	var error_prefix = false;
	var error_phone = false;
	var error_email = false;
	var error_birth = false;

	$("#form_firstname").focusout(function() {
		check_firstname();
	}); 
	$("#form_lastname").focusout(function() {
		check_lastname();
	}); 
	$("#form_address").focusout(function() {
		check_address();
	});

	$("#form_statename").focusout(function() {
		check_statename();
	});
	$("#form_city").focusout(function() {
		check_cityname();
	}); 
	$("#form_zip").focusout(function() {
		check_zip();
	});
	$("#phone").focusout(function() {
		check_phone();
	});
	$("#prefix-phone").focusout(function() {
		check_prefix();
	});
	$("#last-phone").focusout(function() {
		check_lastphone();
	});
	$("#form_email").focusout(function() {
		check_email();
	});
	$("#form_gender").focusout(function() {
		check_gender();
	});
	$("#form_birthdate").focusout(function() {
		check_birth();
	});

	$("#form_statename").on('keyup',function() {
			/* Act on the event */
			$(this).val($(this).val().toUpperCase());
	});
    
    $("#phone").on('keyup',function() {
      if($(this).val().length == 3)
      	$(".pn1").focus();
    })
    ;$(".pn1").on('keyup',function() {
      if($(this).val().length == 3)
      	$(".pn2").focus();
    });


	function check_firstname(){
		var first_name = $("#form_firstname").val().trim();
		if(first_name){
		$(".fname_error").hide();
		$("#form_firstname").removeClass('error');
		} 
		else {
		$(".fname_error").html("Please enter your first name");	
		$(".fname_error").show();
		$("#form_firstname").addClass('error');	
		error_firstname=true;     }
   }   
    function check_lastname(){
		var last_name = $("#form_lastname").val().trim();
		if(last_name){
		$(".lname_error").hide();
		$("#form_lastname").removeClass('error');
		
	    } else {
	    $(".lname_error").html("Please enter your last name");	
		$(".lname_error").show();
	    $("#form_lastname").addClass('error'); 
	    error_lastname=true;     }
	} 
	function check_address(){
		var add_name = $("#form_address").val().trim();
		if(add_name){
		$(".address_error").hide();
		$("#form_address").removeClass('error')
		} 
		else {
		$(".address_error").html("Please enter your Address");	
		$(".address_error").show();
		$("#form_address").addClass('error');
		error_address=true;
	     }
   }   
	function check_statename(){
		var stat_name = $("#form_statename").val().trim();
		if(stat_name){	
           var value =  isValidState(stat_name);
           if(value){$(".state_error").hide();
           $("#form_statename").removeClass('error');
		   
	       } else {
	       $(".state_error").html("state appears to be invalid,use two letter state abbreviation");	
		   $(".state_error").show();
		   $("#form_statename").addClass('error');
		   error_statename = true;}} 
		else {
			$(".state_error").html("Please enter your State");	
		    $(".state_error").show();
		    $("#form_statename").addClass('error');
		    error_statename = true;
		}

	} 
	function isValidState(state) {                                
        var stateList = new Array("AK","AL","AR","AZ","CA","CO","CT","DC",
        "DE","FL","GA","GU","HI","IA","ID","IL","IN","KS","KY","LA","MA",
        "MD","ME","MH","MI","MN","MO","MS","MT","NC","ND","NE","NH","NJ",
        "NM","NV","NY","OH","OK","OR","PA","PR","RI","SC","SD","TN","TX",
        "UT","VA","VT","WA","WI","WV","WY");
        for(var i=0; i < stateList.length; i++) 
            if(stateList[i] === state)
                return true;
        return false;
    }  
    function check_cityname(){
		var city_name = $("#form_city").val().trim();
		if(city_name){
		$(".city_error").hide();
		$("#form_city").removeClass('error');  
	    } else {
	    $(".city_error").html("Please enter your city");	
		$(".city_error").show();
	    $("#form_city").addClass('error');  
	    error_cityname=true;  }
	} 
	function check_zip(){
		var zip_code = $("#form_zip").val().trim();
		var zip_verify = isValidZip(zip_code);
		if(zip_verify){
		$(".zip_error").hide();
		$("#form_zip").removeClass('error');  
	    } else {
	    $(".zip_error").html("Please enter valid 5 digit US ZIP Code");	
		$(".zip_error").show();
	    $("#form_zip").addClass('error');
	    error_zip=true;}
	} 
	function isValidZip(zip) {
		var validZip = new RegExp(/(^\d{5}$)|(^\d{5}-\d{4}$)/);
		return validZip.test(zip);
	}
	function check_phone(){
		var area_no = $("#phone").val().trim();
		if(area_no){	
           var value =  $.isNumeric(area_no);
           if((value) && (area_no.length == 3)){$(".area_error").hide();
           $("#phone").removeClass('error');  
		   
	       } else {
	       $(".area_error").html("The area code must have exactly three digits");	
		   $(".area_error").show();
		   $("#phone").addClass('error');
		    error_area = true;}} 
		else {
			$(".area_error").html("Please enter your area code");	
		    $(".area_error").show();
		    $("#phone").addClass('error'); 
		    error_area = true; 
		}
	} 
    function check_prefix(){
    	var prefix_no = $("#prefix-phone").val().trim();
    	if(prefix_no){	
            var value =  $.isNumeric(prefix_no);
            if((value) && (prefix_no.length == 3)){$(".prefix_error").hide();
    		   $("#prefix-phone").removeClass('error');  
    	    } else {
    	     $(".prefix_error").html("The phone number prefix appears to be invalid, numbers only please.");	
    		 $(".prefix_error").show();
    		 $("#prefix-phone").addClass('error'); 
    		 error_prefix = true; }} 
    	else {
    			$(".prefix_error").html("Please enter your prefix phone number");	
    		    $(".prefix_error").show();
    		    $("#prefix-phone").addClass('error'); 
    		    error_prefix = true; 
    		}
    } 
    function check_lastphone(){
    	var last_no = $("#last-phone").val().trim();
    	if(last_no){	
            var value =  $.isNumeric(last_no);
            if((value) && (last_no.length == 4)){$(".phone_error").hide();
    		   
    		   $("#last-phone").removeClass('error');
    	    } else {
    	     $(".phone_error").html("The phone number appears to be invalid, numbers only please.");	
    		 $(".phone_error").show();
    		 $("#last-phone").addClass('error');
    		 error_phone = true;
    		   }} 
    	else {
    			$(".phone_error").html("Please enter your phone number");	
    		    $(".phone_error").show();
    		    $("#last-phone").addClass('error');
    		    error_phone = true;
    		}
    }

    function check_email(){
    	var email_id = $("#form_email").val().trim();
    	if(email_id){	
            var value =  isValidEmail(email_id);
            if(value){$(".email_error").hide();
    		   
    		   $("#form_email").removeClass('error');
    	    } else {
    	     $(".email_error").html("The email id appears to be invalid.");	
    		 $(".email_error").show();
    		$("#form_email").addClass('error');
    	    error_email = true;}} 
    	else {
    			$(".email_error").html("Please enter your email");	
    		    $(".email_error").show();
    		    $("#form_email").addClass('error');
    		    error_email = true;
    		}
    } 

    function isValidEmail(emailAddress) {
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        return pattern.test(emailAddress);
        }

    function check_birth(){
    	var dob = $("#form_birthdate").val().trim();
    	if(dob){
       		if(validDate(dob)){
    			var s = dob.split("/");
       			var mm1 = parseInt(s[0]);
    			var dd1 = parseInt(s[1]);
    			var yy1 = parseInt(s[2]);
    			var d = new Date(dob);
    			var mm = d.getMonth();
    			var dd = d.getDate();
    			var yy = d.getFullYear();
    			if (((mm1-1) == mm) && (dd1 == dd) && (yy1 == yy)){
    				var d1 = new Date(2000,11,4);
    				if (d > d1){
    					$(".birth_error").html("Sorry You can't attend because you didn't met entry requirement");
      	      	 	 	$(".birth_error").show();
      	      	 	 	$("#form_birthdate").addClass('error');
      	      	 	 	error_birth=true;
    				}
    				else{
    					$(".birth_error").hide();
      	      	  	  	$("#form_birthdate").removeClass('error');
    				}
    			}
    			else{
    				$(".birth_error").html("Please enter a valid date");
      	      	    $(".birth_error").show();
      	      	    $("#form_birthdate").addClass('error');
      	      	    error_birth=true;
    			}
    			
    		}
    		else{
    			$(".birth_error").html("Sorry Either it is invalid date or too old to particpate ");
            	$(".birth_error").show();
      	      	$("#form_birthdate").addClass('error');
      	      	error_birth=true;
    		}
    	}
    	else {
    		$(".birth_error").html("Please enter your birth date");	
    		$(".birth_error").show();
    		$("#form_birthdate").addClass('error');
    		error_birth=true;
    	}
    }

    function validDate(dt) {
    	 var dateformat = new RegExp("^((0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])[- /.](19|20)?[0-9]{2})*$");
    	return dateformat.test(dt);
    }

    $("#registration_form").submit(function() {
    	    error_firstname = false;
	        error_lastname  = false;
	        error_address = false;
	        error_statename = false;
	        error_cityname = false;
	        error_zip = false;
	        error_area = false;
	        error_prefix = false;
	        error_phone = false;
	        error_email = false;
	        error_birth = false;
           
           check_firstname();
           check_lastname();
           check_address();
           check_statename();
           check_cityname();
           check_zip();
           check_phone();
           check_prefix();
           check_lastphone();
           check_email();
           check_birth();

          
          if((error_firstname == false) && (error_lastname  == false) && (error_address == false)  && (error_statename == false) && (error_cityname == false) && (error_zip == false) &&  (error_area == false) &&  (error_prefix == false) && (error_phone == false) && (error_email == false) && (error_birth == false))	{          	
          	return true;
          } else {
          	$(".correct").html("Please enter all the required fields correctly");
          	$(".correct").show();
          	if ($(this).hasClass('error'))
          		{ focus($(this));}
           	return false;
          }
         

    	    });
});    
/* Referrence: w3schoolresource, regular expressions from stack overflow */
