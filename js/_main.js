(function ($) {
    // Init Skrollr
    var s = skrollr.init({
                             render: function (data) {
                                 //Debugging - Log the current scroll position.
                                 console.log(data.curTop);
                             }
                         });
})(jQuery);

var userInput = function () {

}

/**
 var loudness = null;
 var inputElements = document.getElementsByClassName('loudness');
 for(var i=0; inputElements[i]; ++i){
      if(inputElements[i].checked){
           checkedValue = inputElements[i].value;
           break;
      }
}
 */

/**
 $.ajax({
    type: "GET",
    url: "https://getJsonData",
    dataType: "json",
    success: processData,
    error: function(){ alert("failed"); }
});

 function processData(data)
 {
     //do something with data
 }
 */