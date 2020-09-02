$(document).ready(function()

  var succ = $(".next");


  succ.click(
    function (){
      var img = $("img.active");
      img.removeClass("active");
      var primo = $("img.first");
      
      if(img.hasClass("last")){
        var imgSucc = primo;
      } else {
        imgSucc = img.next()
      }
      imgSucc.addClass("active");
    }
  );

)};
