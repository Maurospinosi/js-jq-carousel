$(document).ready(function(){

  var succ = $(".next");
  var primo = $("img.first");

  succ.click(
    function (){
      var img = $("img.active");
      img.removeClass("active");


      if(img.hasClass("last")){
        var imgSucc = primo;
      } else {
        var imgSucc = img.next();
      }

      imgSucc.addClass("active");

    }
  );

)};
