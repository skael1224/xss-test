window.onload = function() {
  layer();
}


function layer() {
  var maskHeight = window.outerHeight;
  var mask = "<div id='mask' style='position:absolute; z-index:9000; background-color:#000000; display:none; left:0; top:0;'></div>";
  var loadingImg = "<div id='loadingImg'><img src='https://cdn.discordapp.com/attachments/939749786758815747/956065983397781524/e3d7f6ead06e7bc1.gif' style='position: relative; display: block; margin: " + maskHeight / 4 + "px auto;'></div>";
  $("body").append(mask);
  $("#mask").append(loadingImg);
  $("#mask").css({ width: "100%", height: "100%", opacity: "0.7" });
  $("#mask").show();
  $("#loadingImg").show();
}

