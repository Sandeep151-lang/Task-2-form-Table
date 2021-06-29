function addRow() {
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var address = document.getElementById('address').value;
    var pincode = document.getElementById('pincode').value;
    var state = document.getElementById('state').value;
    var country = document.getElementById('country').value;
    var gender = document.getElementsByName("gender");
    var food = document.getElementsByName("food");




    var gend = "";
    for (var i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            gend = gend + gender[i].value;
        }

        var newtext = 0;
        var text = "";
        for (var j = 0; j < food.length; j++) {
            if (food[j].checked == true) {
                newtext += 1;
                text += food[j].value + ' ,';
            }

        }


    }

    document.getElementById("myForm").reset();


    if (fname === "" || fname == null) {
        alert('please fill the first name');
    } else if (lname === "" || lname == null) {
        alert('please fill the last name')
    } else if (address === "" || address == null) {
        alert('please fill the address')
    } else if (pincode === "" || pincode == null) {
        alert('please fill the pincode')
    } else if (gend === "" || gend == null) {
        alert('please clicked gender')
    } else if (state === "" || state == null) {
        alert('please fill the state')
    } else if (country === "" || country == null) {
        alert('please fill the country')
    } else if (text === "" || text == null) {
        alert('please fill the food')
    } else if (newtext > 2) {
        alert('please select any two food');
    } else if (isNaN(pincode)) {
        alert('please write number in pincode')
    }
    else {
        var table = document.getElementsByTagName('tbody')[0];

        var newRow = table.insertRow(0);

        var cel1 = newRow.insertCell(0);
        var cel2 = newRow.insertCell(1);
        var cel3 = newRow.insertCell(2);
        var cel4 = newRow.insertCell(3);
        var cel5 = newRow.insertCell(4);
        var cel6 = newRow.insertCell(5);
        var cel7 = newRow.insertCell(6);
        var cel8 = newRow.insertCell(7);
        cel1.innerHTML = fname;
        cel2.innerHTML = lname;
        cel3.innerHTML = address;
        cel4.innerHTML = pincode;
        cel5.innerHTML = gend;
        cel6.innerHTML = state;
        cel7.innerHTML = country;
        cel8.innerHTML = text;
    }



}


