function getquotation() {
    let quotation1 = document.getElementById("3months");
    let quotation2 = document.getElementById("6months");
    let quotation3 = document.getElementById("9months");
    let quotation4 = document.getElementById("12months");

    let cityof = document.getElementById("city-of-registration").value;
    let monthoffirst = document.getElementById("month-of-first-registration").value;
    let yearoffirst = document.getElementById("year-of-first-registration").value;
    let currentvalue = document.getElementById("estimate-current-value").value;

    if(cityof.length == 0 || monthoffirst.length == 0 || (isNaN(monthoffirst)) || monthoffirst < 1 || monthoffirst > 12 || yearoffirst.length == 0 || (isNaN(yearoffirst)) || yearoffirst < 2000 || yearoffirst > 2022 || (yearoffirst = 2022 && monthoffirst > 4) || currentvalue.length == 0 || (isNaN(currentvalue))) {
        document.getElementById("all-fields_exactly").style.display = "block";
        quotation1.innerHTML = 0;
        quotation2.innerHTML = 0;
        quotation3.innerHTML = 0;
        quotation4.innerHTML = 0;
    }
    else {
        document.getElementById("all-fields_exactly").style.display = "block";
        quotation1.innerHTML = currentvalue * 0.5 / 100;
        quotation2.innerHTML = currentvalue * 0.8 / 100;
        quotation3.innerHTML = currentvalue * 1 / 100;
        quotation4.innerHTML = currentvalue * 1.3 / 100;
    }
}