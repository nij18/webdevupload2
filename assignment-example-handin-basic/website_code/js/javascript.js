document.getElementById("applicationForm").onsubmit = function(event) {
    event.preventDefault();
    let email = document.getElementById("myEmail").value;
    let name = document.getElementById("myName").value;
    let number = document.getElementById("myNumber").value;
    console.log("Email:", email);
    console.log("Name:", name);
    console.log("Phone Num", number);
};

