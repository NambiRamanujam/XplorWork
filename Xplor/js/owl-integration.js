$(document).ready(function() {
  $("#owl-demo").owlCarousel({
 
      autoPlay: 1000, //Set AutoPlay to 3 seconds
      loop : true,
      items : 4,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3],
      itemsTablet: [600,2], //2 items between 600 and 0
      itemsMobile : false, // itemsMobile disabled - inherit from itemsTablet option      
      transitionStyle:"fade",
      goToFirstSpeed:5000,
  });
 
});
1234