// JavaScript Document
function initMap() {
    let restPlace = {
        lat: 44.4083621,
        lng: -79.6709766
    };

    let pizzaPlace = {
        lat: 44.4115162,
        lng: -79.6889749
    }


    let div = document.querySelector('div');

    //create new map object
    let map = new google.maps.Map(div, {
        zoom: 14,
        center: restPlace,
        styles: [{
                "elementType": "geometry",
                "stylers": [{
                    "color": "#242f3e"
                }]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#746855"
                }]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [{
                    "color": "#242f3e"
                }]
            },
            {
                "featureType": "administrative.locality",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#d59563"
                }]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#d59563"
                }]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#263c3f"
                }]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#6b9a76"
                }]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#38414e"
                }]
            },
            {
                "featureType": "road",
                "elementType": "geometry.stroke",
                "stylers": [{
                    "color": "#212a37"
                }]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#9ca5b3"
                }]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#746855"
                }]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [{
                    "color": "#1f2835"
                }]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#f3d19c"
                }]
            },
            {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#2f3948"
                }]
            },
            {
                "featureType": "transit.station",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#d59563"
                }]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#17263c"
                }]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#515c6d"
                }]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.stroke",
                "stylers": [{
                    "color": "#17263c"
                }]
            }
        ]
    });

    //create new marker object
    let marker = new google.maps.Marker({
        position: restPlace,
        animation: google.maps.Animation.BOUNCE,
        map: map,
        label: {
            color: 'white',
            fontWeight: 'bold',
            text: 'ISOLATION PLACE',
        }
    });

    let marker2 = new google.maps.Marker({
        position: pizzaPlace,
        animation: google.maps.Animation.DROP,
        title: 'Dominos',
        map: map,
        label: {
            color: 'white',
            fontWeight: 'bold',
            text: 'PIZZAA',
        }
    });
    var iconBase =
        'https://developers.google.com/maps/documentation/javascript/examples/full/images/';

    var icons = {
        library: {
            icon: iconBase + 'library_maps.png'
        },
        parking: {
            icon: iconBase + 'parking_lot_maps.png'
        }
    };
    var features = [{
            position: new google.maps.LatLng(44.4164488, -79.6780846),
            type: 'parking'
        },
        {
            position: new google.maps.LatLng(44.4115137, -79.6724196),
            type: 'library'
        }
    ]
    // Create markers.
    for (var i = 0; i < features.length; i++) {
        var marker3 = new google.maps.Marker({
            position: features[i].position,
            icon: icons[features[i].type].icon,
            map: map
        });
    };
}

//THATS THE END----
