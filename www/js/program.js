
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
		$('.cameraButton').click( function() {
			alert("T");
			//open camera
			navigator.camera.getPicture(onSuccess, onFail, {quality: 50,
				destinationType: Camera.DestinationType.DATA_URL
			});
			
			function onSuccess(imageData) {
				var image = document.getElementById('myImage');
				image.src = "data:image/jpeg;base64," + imageData;
				$('#myImage').fadeIn();
			}
			
			function onFail(message) {
				$('#myImage').before('<div class="alert alert-danger">' + message + '</div>');
				
			}
		});
		$('.pDetailsButton').click( function() {
			alert("J");
		});
		$('.loginButton').click( function() {
			alert("JnT");
		});
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};
