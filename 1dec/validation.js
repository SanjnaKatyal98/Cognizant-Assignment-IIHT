function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
    }
function validateForm() {
    var name = document.contactForm.name.value;
    var email = document.contactForm.email.value;
    var mobile = document.contactForm.mobile.value;
    var gender = document.contactForm.gender.value;
    var hobbies = [];
    var checkboxes = document.getElementsByName("hobbies[]");
    for(var i=0; i < checkboxes.length; i++) {
       if(checkboxes[i].checked) {
         hobbies.push(checkboxes[i].value);
       }
    }
    var nameErr = emailErr = mobileErr = countryErr = genderErr = true;
    if(name == "") {
      printError("nameErr", "Please enter name");
    } 
    else {
      var regex = /^[a-zA-Z\s]+$/;
      if(regex.test(name) === false) {
        printError("nameErr", "Enter valid name");
      } 
      else {
        printError("nameErr", "");
        nameErr = false;
      }
    }
    if(email == "") {
      printError("emailErr", "enter your email");
    } 
    else {
      var regex = /^\S+@\S+\.\S+$/;
      if(regex.test(email) === false) {
        printError("emailErr", "Please enter a valid email");
      }
      else{
        printError("emailErr", "");
        emailErr = false;
      }
    }
    if(mobile == "") {
      printError("mobileErr", "Please enter mobile number");
    } 
    else {
      var regex = /^[7-9]{1}[0-9]\d{9,9}$/;
      if(regex.test(mobile) === false) {
        printError("mobileErr", "Please enter a valid mobile number");
      } 
      else{
        printError("mobileErr", "");
        mobileErr = false;
      }
    }
    if(gender == "") {
      printError("genderErr", "Please select gender");
    } 
    else {
        printError("genderErr", "");
        genderErr = false;
    }
    if((nameErr || emailErr || mobileErr || genderErr) == true) {
      return false;
    } 
    else {
        var dataPreview = "You've entered the following details: \n" +
        "Full Name: " + name + "\n" +
        "Email: " + email + "\n" +
        "Mobile Number: " + mobile + "\n" +
        "Gender: " + gender + "\n";
        if(hobbies.length) {
          dataPreview += "Hobbies: " + hobbies.join(", ");
        }
        alert(dataPreview);
    }
};