$(document).ready(function() {
    $("#hide1,#show1").click(function() {
        $("#show1").toggle();
        $("#hide1").toggle();
    });
    $("#hide2,#show2").click(function() {
        $("#show2").toggle();
        $("#hide2").toggle();
    });
    $("#hide3,#show3").click(function() {
        $("#show3").toggle();
        $("#hide3").toggle();
    });
});

function feedback(form2) {
    var name = document.form["form2"]["name"].value;
    var email = document.form["form2"]["email"].value;
    var message = document.form["form2"]["message"].value;
        alert("Hello! " + name + "," + " We have received your message. Thank you for reaching out to us. ");
          };


