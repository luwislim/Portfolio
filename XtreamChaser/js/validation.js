function formValidation()
{
    var uname = document.preregister.username;
    var pw = document.preregister.pass;
    var repw = document.preregister.repass;
    var scountry = document.preregister.country;
    var mail = document.preregister.email;
    var sgender = document.preregister.sex;
    
    if(letterOrNot(uname)){
        if(pw_vali(pw, repw ,8,12)){
            if(email_vali(mail)){
                if(genderSel(sgender)){
                    if(countrySelect(scountry)){
   
                    }
                }
            }
        }
    }
    return false;
}


function pw_vali(pw, repw,jx,jy){
    var pw_len = pw.value.length;
    var letter = /^[0-9a-zA-Z]+$/;
    if(pw_len == 0 || pw_len < 8 || pw_len > 12){
        alert('Password should not be empty / length between ' +jx+' to '+jy);
        pw.focus();
        return false;
    }
    if(pw.value.match(repw)){
        return true;
    }
    else{
        alert('Password must be the same as the Re password');
        pw.focus();
        return false;
        
    }
}

function letterOrNot(uname){
    var letter = /^[A-Za-z]+$/;
    if(uname.value.match(letter)){
        return true;
    }
    else{
        alter('Username must have alphabet characters only');
        uname.focus();
        return false;
    }
}

function countrySelect(scountry){
    if(scountry.value == "Default"){
        alert('Please select your country');
        scountry.focus();
        return false;
    }
    else{
        alert('Form Succesfully Submitted');
        window.location.reload()
        return true;
    }
}

function email_vali(mail){
    var formatMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(mail.value.match(formatMail)){
        return true;
    }
    else{
        alert('You have entered an invalid email address');
        mail.focus();
        return false;
    }
}


function genderSel(sgender){
    x=0;
    if(sgender.value == "Default"){
        alert('Please select your gender');
        scountry.focus();
        return false;
    }
    else{
        return true;
    }
}


