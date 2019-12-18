// Animate smooth scroll
$('#view-work').on('click',function(){
    const images = $('#images').position().top;

    $('html, body').animate({
        scrollTop:images
    },1500);
});

$('#view-contact').on('click',function(){
    const images = $('#contact').position().top;

    $('html, body').animate({
        scrollTop:images
    },20*1000);
});
