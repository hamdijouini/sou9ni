    var myCenter = new google.maps.LatLng(36.85595, 10.1524803);
	    var medianet = [
        {
            nom:"Medianet",
            adresse:"Av. Hédi Nouira, Résidence MAYA D1 ENNASR 2",
            zip:"2037",
            ville:"Tunis",
            position:{lat: 36.85595,lng: 10.1524803},
            tel:"71 827 484"
        },
 
];

    function initialize() {
           var mapProp = {
            center:medianet,
            zoom:15,
            mapTypeId:google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("googleMap"), mapProp); 

        var marker = new google.maps.Marker({
            position: myCenter,
            icon: {
                url: '/images/marker.png',
                size: new google.maps.Size(70, 86), //marker image size
                origin: new google.maps.Point(0, 0), // marker origin
                anchor: new google.maps.Point(35, 86) // X-axis value (35, half of marker width) and 86 is Y-axis value (height of the marker).
            }
        });

        marker.setMap(map);
    setMarkers(map,medianet);
 
    function setMarkers(map,medianet){
 
        var marker, i
 
        for (i = 0; i < medianet.length; i++){  
 
         var nom = medianet[i].nom;
         var adresse =  medianet[i].adresse;
         var zip =  medianet[i].zip;
         var ville =  medianet[i].ville;
         var position =  medianet[i].position;
         var tel =  medianet[i].tel;
 
          var marker = new google.maps.Marker({  
                map: map,
                title: nom ,
                position: position  
          });
          map.setCenter(marker.getPosition());
 
          var content = "<strong>Nom : </strong>"+nom+"<br><strong>Adresse : </strong>"+adresse+"<br><strong>Code Postal : </strong>"+zip+"<br><strong>Ville : </strong>"+ville+"<br><strong>Téléphone : </strong>"+tel;
 
          var infowindow = new google.maps.InfoWindow();
 
             google.maps.event.addListener(marker,'click', (function(marker,content,infowindow){
                return function() {
                   infowindow.setContent(content);
                   infowindow.open(map,marker);
                };
            })(marker,content,infowindow));
 
          }
    }
	
	
        }
        google.maps.event.addDomListener(window, 'load', initialize);
		