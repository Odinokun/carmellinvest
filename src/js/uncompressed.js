// begin SVG for IE
$(function() {
  svg4everybody();
});
// end SVG for IE


// begin scroll 2 ancore desktop menu
$(function() {
  $('.header-menu__item a[href*=\\#]').on("click", function(e){
    // e.preventDefault();
    var anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $(anchor.attr('href')).offset().top - 0 + 'px'
    }, 1000);
  });
  return false;
});
// end scroll 2 ancore desktop menu


// initMap() - функция инициализации карты
function initMap() {
  // Координаты центра на карте. Широта: 56.2928515, Долгота: 43.7866641
  var centerLatLng = new google.maps.LatLng(52.482105, -1.898686);
  // Обязательные опции с которыми будет проинициализированна карта
  var mapOptions = {
    center: centerLatLng, // Координаты центра мы берем из переменной centerLatLng
    zoom: 17,               // Зум по умолчанию. Возможные значения от 0 до 21
    styles: [{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#d3d3d3"}]},{"featureType":"transit","stylers":[{"color":"#808080"},{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#b3b3b3"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"weight":1.8}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"color":"#d7d7d7"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#ebebeb"}]},{"featureType":"administrative","elementType":"geometry","stylers":[{"color":"#a7a7a7"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#efefef"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#696969"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"color":"#737373"}]},{"featureType":"poi","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#d6d6d6"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"color":"#dadada"}]}]
  };
  // Создаем карту внутри элемента #map
  var map = new google.maps.Map(document.getElementById("map"), mapOptions);
  var image = "assets/img/marker.png";
  var marker = new google.maps.Marker({
    position: centerLatLng,
    map: map,
    icon: image
  });
}
// Ждем полной загрузки страницы, после этого запускаем initMap()
google.maps.event.addDomListener(window, "load", initMap);

// begin menu
$('#burger label').on('click', function () {
  $('.header-menu').slideToggle();
});
$('#burger label .header-menu__link').on('click', function () {
  $('.header-menu').slideUp();
});
// end menu
