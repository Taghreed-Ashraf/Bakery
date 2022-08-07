let changePlace = $('#home').offset().top;
$(window).scroll(function () {
  if($(window).scrollTop()>changePlace + 100)
  {
    $('.navbar').css({'backgroundColor' : 'white' , 'transition' : '1s'});
    $('.nav-item a').addClass('colorBlack ')
    $('nav button span i').addClass('colorBlack ')
    $('.navbar-brand img').attr('src' , 'image/bakery-color.png')
  }
  else
  {
    $('.navbar').css({'backgroundColor' : 'transparent' , 'transition' : '1s'});
    $('.nav-item a').removeClass('colorBlack ')
    $('nav button span i').removeClass('colorBlack ')
    $('.navbar-brand img').attr('src' , 'image/bakery-light-1.png')
  }
})

let sectionOffset = $('#offer').offset().top;
$(window).scroll(function () {
  if($(window).scrollTop()>sectionOffset - 100)
  {
    $('#topBtn').fadeIn(1000)
  }
  else
  {
    $('#topBtn').fadeOut(1000)
  }
})
$('#topBtn').click(function () {
  $('body,html').animate({scrollTop:0},1000)
})