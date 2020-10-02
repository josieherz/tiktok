 $(document).ready(function(){
  
  
    $("#openLB").click(function(){
  
      $("#lightbox").css("display", "flex");
    });
  
    $("#closeLB").click(function(){
  
      $("#lightbox").css("display", "none");
    });

    $("#closeBanner").click(function(){
      $(".box0").css("display", "none");
      $(".empty").css("margin-top", "100px");
    });  
  
  });

