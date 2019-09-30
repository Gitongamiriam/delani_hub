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

    $('#firstProject').hover(function(){
        $('#first').show();
    });

    var coffee = $(".piti1 img, .piti2 img, .piti3 img, .piti4 img, .piti5 img, .piti6 img, .piti7 img, .piti8 img");
    for (var i = 0; i < coffee.length; i++){
        if (coffee[i].title && coffee[i].title.length > 0){
            var imgTitle = coffee[i].title;
            $(coffee[i]).wrap('<div class="wrapper wrapper'+i+'" />').
            after('<div class=\'caption\'>' + imgTitle + '</div>').
            removeAttr('title');
        }
    }
  $('.wrapper0, .wrapper1, .wrapper2, .wrapper3, .wrapper4, .wrapper5, .wrapper6, .wrapper7').hover(
    function(){
      $(this).find('img').animate({opacity: ".4"}, 300);
      $(this).find('.caption').animate({top:"-247px"}, 300);
    },
    function(){
      $(this).find('img').animate({opacity: "1.0"}, 300);
      $(this).find('.caption').animate({top:"-370px"}, 100);
    }
  );
Collapse




  
});

function feedback(form2) {
    var name = document.form["form2"]["name"].value;
    var email = document.form["form2"]["email"].value;
    var message = document.form["form2"]["message"].value;
        alert("Hello! " + name + "," + " We have received your message. Thank you for reaching out to us. ");
          };


