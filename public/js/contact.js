
function initMap() {
    var positionReveil = {lat: 50.086718, lng: 19.925778};
    var map = new google.maps.Map(document.getElementById('map'), {
        center: positionReveil,
        zoom: 15
    });

    var contentString = "<h6>Réveil Pracownia Urody</h6>";

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    var marker = new google.maps.Marker({
        position: positionReveil,
        map: map
    });
        
    infowindow.open(map, marker);

    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });
}
