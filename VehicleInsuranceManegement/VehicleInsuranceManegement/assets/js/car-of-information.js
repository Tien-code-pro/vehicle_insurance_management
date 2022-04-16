function formvalidate2() {
    let yearof = document.getElementById("year-of-manufacture").value;
    let automaker = document.getElementById("automaker").value;
    let carbrand = document.getElementById("car-brand").value;
    let typeofcar = document.getElementById("type-of-car").value;

    if(yearof.length == 0) {
        document.getElementById("year-of-manufacture_exactly").style.display = "block";
    } else {
        document.getElementById("year-of-manufacture_exactly").style.display = "none";
    }

    if(automaker.length == 0) {
        document.getElementById("automaker_exactly").style.display = "block";
    } else {
        document.getElementById("automaker_exactly").style.display = "none";
    }
    
    if(carbrand.length == 0) {
        document.getElementById("car-brand_exactly").style.display = "block";
    } else {
        document.getElementById("car-brand_exactly").style.display = "none";
    }

    if(typeofcar.length == 0) {
        document.getElementById("type-of-car_exactly").style.display = "block";
    } else {
        document.getElementById("type-of-car_exactly").style.display = "none";
    }

    if(yearof.length != 0 && automaker.length != 0 && carbrand.length != 0 && typeofcar.length != 0) {
        location.assign("register-and-value.html")
    }
}
