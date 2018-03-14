$(document).ready(function(){
  $(document).keydown(function(e){
    switch (e.keyCode) {
      case 37:
        console.log('left');
      case 39:
        console.log('right');
    }
  });

});
