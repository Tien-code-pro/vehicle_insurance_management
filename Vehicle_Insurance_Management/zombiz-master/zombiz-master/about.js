function formvalidate() {
    let fullname = document.getElementById("hovaten").value;
    let phone = document.getElementById("sodienthoai").value;
    let email = document.getElementById("email").value;
    let address = document.getElementById("diachi").value;

    if(fullname.length == 0) {
        document.getElementById("name_empty").style.display = "block";
    } else {
        document.getElementById("name_empty").style.display = "none";
    }

    if(phone.length == 0) {
        document.getElementById("sodienthoai_empty").style.display = "block";
    } else {
        document.getElementById("sodienthoai_empty").style.display = "none";
    }
    
    if(email.length == 0) {
        document.getElementById("email_empty").style.display = "block";
    } else {
        document.getElementById("email_empty").style.display = "none";
    }

    if(address.length == 0) {
        document.getElementById("diachi_empty").style.display = "block";
    } else {
        document.getElementById("diachi_empty").style.display = "none";
    }
}
