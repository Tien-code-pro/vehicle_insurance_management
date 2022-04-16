function formvalidate3() {
    let cityof = document.getElementById("city-of-registration").value;
    let monthoffirst = document.getElementById("month-of-first-registration").value;
    let yearoffirst = document.getElementById("year-of-first-registration").value;
    let currentvalue = document.getElementById("estimate-current-value").value;

    if(cityof.length == 0) {
        document.getElementById("city-of-registration_exactly").style.display = "block";
    } else {
        document.getElementById("city-of-registration_exactly").style.display = "none";
    }

    if(monthoffirst.length == 0 || isNaN(monthoffirst) || monthoffirst < 1 || monthoffirst > 12 || (yearoffirst == 2022 && monthoffirst > 4)) {
        document.getElementById("month-of-first-registration_exactly").style.display = "block";
    } else {
        document.getElementById("month-of-first-registration_exactly").style.display = "none";
    }
    
    if(yearoffirst.length == 0 || isNaN(yearoffirst) || yearoffirst < 2000 || yearoffirst > 2022) {
        document.getElementById("year-of-first-registration_exactly").style.display = "block";
    } else {
        document.getElementById("year-of-first-registration_exactly").style.display = "none";
    }

    if(currentvalue.length == 0 || isNaN(currentvalue)) {
        document.getElementById("estimate-current-value_exactly").style.display = "block";
    } else {
        document.getElementById("estimate-current-value_exactly").style.display = "none";
    }
}
