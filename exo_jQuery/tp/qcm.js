$(function() {
    $(".reponse").hide();
});

$('a').hover(
    function() {
        $('.reponse').show();
        if ($(':radio[id="r1"]:checked').val()) {
            $('#img1').attr('src', 'bon.png'); 
            $('#reponse1').css('color', 'green');
          }  
          else {
            $('#img1').attr('src', 'mauvais.png');
            $('#reponse1').css('color', 'red');
          } 

        if($(':radio[id="r4"]:checked').val()) {
            $('#img2').attr('src', 'bon.png');
            $('#reponse2').css('color', 'green');
        } else {
            $('#img2').attr('src', 'mauvais.png');
            $('#reponse2').css('color', 'red');
        }

        if($(':radio[id="r8"]:checked').val()) {
            $('#img3').attr('src', 'bon.png');
            $('#reponse3').css('color', 'green');
        } else {
            $('#img3').attr('src', 'mauvais.png');
            $('#reponse3').css('color', 'red');
        }
    },
    function() { 
        $('.reponse').hide(); 
        $('#img1').attr('src', 'question.png');
        $('#img2').attr('src', 'question.png');
        $('#img3').attr('src', 'question.png');
      }
);
