$(document).ready(function(){
    var url = window.location.pathname;
    var filename = url.substring(url.lastIndexOf('/')+1);
    if (filename == "") {
        filename = "index.php"
    }
    $("header .nav-item .nav-link").removeClass("active");
    $(`header .nav-item .nav-link[href="${filename}"]`).addClass("active")
})

  /************************** MEmber horizontal grid **************************/
  


  