/* Slider slide4  */




   $('.carousel-indicators .slide-indicators').click(function(){ 
var count=1;
var length= $('.item').length;
if
    (count > length){
    count = 1 
  
} 
else {
    count <= 7
}

 count++;
$('.slider .item:nth-child('+count+')').fadeOut(1000);

count= $(this).index() + 1;
$('.slider .item:nth-child('+count+')').fadeIn(1000);

$('.carousel-indicators .slide-indicators').removeClass('active');
    $('.carousel-indicators .slide-indicators:nth-child('+count+')').addClass('active');


count++;
    $('.slider .item:nth-child('+count+')').fadeOut(1000);
    count= $(this).index()  +1;
    $('.slider .item:nth-child('+count+')').fadeIn(1000);
})


/* scrollbtn click */


$('#scroll-btn li a').click(function(e){
e.preventDefault();

var targetid= $(this).attr('href');
var offset= $(targetid).offset().top;

$('html, body').animate({scrollTop : offset});
$('#scroll-btn li a').removeClass('active1');
$(this).addClass('active1')


})

/* 
$(window).scroll(function(e){
    e.preventDefault();

   var pos = $(targetid).scrollTop();
   console.log('position' + pos);

  var targetid = $('#scroll-btn li a').attr('href');
  console.log(targetid);

  var offset = $(targetid).offset().top;
  console.log( offset);
  var height=window.scrollTop();
  var wo =window.offset().top;
 

if(pos= offset + wo){$('#scroll-btn li a').removeClass('active1');
       $(this).addClass('active1');}
   
}) */



$(window).scroll(function(){
    $('.bottom').hide();
    var pos = $(this).scrollTop();
    var targetid= $(this).attr('href');
  console.log(pos)

  if (pos > 7210){
    $('.bottom').show();
}
else{$('.bottom').hide();
}

if (pos > 0 && pos < 758)
{  
    $('#scroll-btn li a').removeClass('active1');
      $('.btn1').addClass('active1');

     }
 
     
    else if (pos > 758 && pos < 1556){
        $('#scroll-btn li a').removeClass('active1');
        $('.btn2').addClass('active1');
    }
   
    else if (pos > 1556 && pos < 2206){
    

        $('#scroll-btn li a').removeClass('active1');
        $('.btn3').addClass('active1');
    }

    else if (pos >2206 && pos < 3203){  
        $('#scroll-btn li a').removeClass('active1');
        $('.btn4').addClass('active1');
    }

     
    else if (pos >3203 && pos < 4997){  
        $('#scroll-btn li a').removeClass('active1');
        $('.btn5').addClass('active1');
        
    }

    else if (pos >4997 && pos < 6875){   
        $('#scroll-btn li a').removeClass('active1');
        $('.btn6').addClass('active1');
      
      }

      else if (pos >6875 && pos < 7620){   
        $('#scroll-btn li a').removeClass('active1');
        $('.btn7').addClass('active1');
    
      }

      else if (pos >7620 && pos < 7672){   
        $('#scroll-btn li a').removeClass('active1');
        $('.btn8').addClass('active1');
 
      }
})
  


/* bottom slideup */



/* share btn */

$('.bottomBtn').click(function(){
   
    $('.share-box').fadeToggle(500);  
    $('.social-list').css({margin:0});  
     $('.social-media').css({margin:0});   
})

/* download button */
$('.btn-download').click(function(){
    $('body ,html').animate({scrollTop:5100})
})

$('.btn-subcribe').click(function(){
    $('body ,html').animate({scrollTop: 6900})
})


