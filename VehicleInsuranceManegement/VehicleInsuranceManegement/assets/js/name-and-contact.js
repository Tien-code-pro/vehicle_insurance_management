function formvalidate1() {
    let fullname = document.getElementById("hovaten").value;
    let phone = document.getElementById("sodienthoai").value;
    let email = document.getElementById("email").value;
    let address = document.getElementById("diachi").value;

    if(fullname.length == 0) {
        document.getElementById("name_exactly").style.display = "block";
    } else {
        document.getElementById("name_exactly").style.display = "none";
    }

    var regexPhone = /^\d{3}[-\s]?\d{3}[-\s]?\d{4}$/;
    if(phone.length == 0 || regexPhone.test(phone) == false) {
        document.getElementById("sodienthoai_exactly").style.display = "block";
    } else {
        document.getElementById("sodienthoai_exactly").style.display = "none";
    }
    
    var regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.length == 0 || regexEmail.test(email) == false) {
        document.getElementById("email_exactly").style.display = "block";
    } else {
        document.getElementById("email_exactly").style.display = "none";
    }

    if(address.length == 0) {
        document.getElementById("diachi_exactly").style.display = "block";
    } else {
        document.getElementById("diachi_exactly").style.display = "none";
    }

    if(fullname.length != 0 && phone.length != 0 && regexPhone.test(phone) == true && email.length != 0 && regexEmail.test(email) == true && address.length != 0) {
        location.assign("car-of-information.html")
    }
}
