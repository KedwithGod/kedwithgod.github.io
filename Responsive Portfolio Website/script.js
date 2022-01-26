$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["FrontEnd Developer","Freelancer","Designer", "Blogger",],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["FrontEnd Developer","Freelancer","Designer", "Blogger",],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

function getInputValue(){
  
    // Selecting the input element and get its value 
    var name = document.getElementById("name").value;
    var subject=  document.getElementById('subject').value;
    var email=document.getElementById('email').value;
    var body=document.getElementById('message').value;
    
    // Displaying the value
    //alert(inputVal);
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(String(name).length==0){
        alert("name field is empty");
        return true; 
    }

    else if(String(subject).length==0){
        alert("subject field is empty");
        return true; 
    }
    else if(String(email).length==0){
        alert("email field is empty");
        return true; 
    }
    else if(String(body).length==0){
        alert("body field is empty");
        return true; 
    }
    else if(!String(email).match(mailformat))
    {
        alert("invalid email address!");
        return true;    
   
    }
     else{
        Email.send({
            Host: "smtp.gmail.com",
            Username: "kedwithGod@gmail.com",
            Password: "kedwithGod1990",
            To: 'komolafeezekiel123@gmail.com',
            From: email,
            Subject: subject,
            Body: body,
          })
            .then(function (message) {
              alert('mail has been sent successfully')
            });
        
     }


}