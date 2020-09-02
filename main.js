$(document).ready(function(){

  // AVANTI

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

  // INDIETRO
  
  var prec = $(".prev");
  var ultimo = $("img.last");

  prec.click(
    function (){
      var img = $("img.active");
      img.removeClass("active");

      if(img.hasClass("first")){
        var imgSucc = ultimo;
      } else {
        var imgSucc = img.prev();
      }
      imgSucc.addClass("active");
    }
  );

  succ.keydown(function() {
  alert("ciao");
});


});
