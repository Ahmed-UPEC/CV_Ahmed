/*function reload() {
    location.reload()
}*/
/*
$(function(){

    var screen_width = window.screen.width

/* test écran pour responsive  VALIDEEEEE 


if ( screen_width <= 576 ) {
    for (var i=0; i<1; i++) {
    var test = $("#inverse").hasClass("timeline-panel-container-inverted")
        if (test) {
            $("#inverse").removeClass("timeline-panel-container-inverted").addClass("timeline-panel-container")
        }
        reload()
    }
}
*/

/* scroll-spy  VALIDEEEEE 

$('body').scrollspy({ target:'#spy'})*/


/* code testeur VALIDEEEE 

if ( screen_width <= 991 ) {
    $("#mynav li a").click(function(){
        $("#dem").click()
    })
}*/




/* le hover de l'icone pdf 
$(".button_1").on({
    mouseenter: function(){
        $(".button_1 i").removeClass("far fa-file-pdf w_i")
        $(".button_1 i").addClass("far fa-file-pdf hover-pdf")
    },
    mouseleave: function(){
        $(".button_1 i").removeClass("far fa-file-pdf hover-pdf")
        $(".button_1 i").addClass("far fa-file-pdf w_i")
    }
})*/



 /* L'icone LinkedIn mode responsive 
if ( screen_width <= 768 ) {
    $("#linkedin").remove()

   $("#alpha").append("<div></div>").attr("class", "col-lg-12 contact_header_div_linkedin")
   $("#alpha div").append("<h6></h6>")
   $("#alpha div h6").append("<a></a>").addClass("linkedin_border")
   $("#alpha a").append("<i></i>").attr({
       "href": "#",
       //"target": "_blank",
       "id": "linkedin_resp"
    })

   $("#alpha a i").addClass("fab fa-linkedin-in w_i").css({
    "font-size": "70px",
    "color": /*"rgb(32,121,199)" "white",
    "text-align": "center",
    "margin": "0",
    "padding": "0",
    })
}
*/

/* Lien vers profil LinkedIn 

$("#linkedin-le-lien").click(function(event){
    event.preventDefault()
    alert("Le lien vers le profil LinkedIn n'est pas encore mis en place")
})*/

/*
$('#contact-form').submit(function(e) {
    e.preventDefault();
    $('.comments').empty();
    var postdata = $('#contact-form').serialize();
    
    $.ajax({
        type: 'POST',
        url: 'php/contact.php',
        data: postdata,
        dataType: 'json',
        success: function(json) {
             
            if(json.isSuccess) 
            {
                $('#contact-form').append("<p class='ty'>Votre message a bien été envoyé. Merci de m'avoir contacté :)</p>");
                $('#contact-form')[0].reset();
            }
            else
            {
                $('#firstname + .comments').html(json.firstnameError);
                $('#name + .comments').html(json.nameError);
                $('#email + .comments').html(json.emailError);
                $('#phone + .comments').html(json.phoneError);
                $('#msg + .comments').html(json.msgError);
            }                
        }
    });
});



})*/

$(function(){

    var screen_width = window.screen.width

    $('body').scrollspy({ target:'#spy'})


    /* code testeur VALIDEEEE */

    if ( screen_width <= 991 ) {
        $("#mynav li a").click(function(){
            $("#dem").click()
        })
    }

    /*$("#testing-link").hover(function() {
        console.log("salut")
    }, function() {
        console.log("slt")
    })*/

    $(".button_1").on({
        mouseenter: function(){
            $(".button_1 i").removeClass("far fa-file-pdf w_i")
            $(".button_1 i").addClass("far fa-file-pdf hover-pdf")
        },
        mouseleave: function(){
            $(".button_1 i").removeClass("far fa-file-pdf hover-pdf")
            $(".button_1 i").addClass("far fa-file-pdf w_i")
        }
    })


    /*$("#linkedin-le-lien").click(function(event){
        event.preventDefault()
        alert("Le lien vers le profil LinkedIn n'est pas encore mis en place")
    })*/
})
