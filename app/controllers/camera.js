//add event listener
$.cameraButton.addEventListener('click', function(e) {
	Titanium.Media.showCamera({
		//we got something
		success : function(event) {
			//getting media
			var image = event.media;

			//checking if it is photo
			if (event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
				//we may create image view with contents from image variable
				//or simply save path to image
				Ti.App.Properties.setString("image", image.nativePath);
			}
			
			
			close();
		},
		cancel : function() {
			//do somehting if user cancels operation
			close();
		},
		error : function(error) {
			//error happend, create alert
			var a = Titanium.UI.createAlertDialog({
				title : 'Camera'
			});
			//set message
			if (error.code == Titanium.Media.NO_CAMERA) {
				a.setMessage('Device does not have camera');
			} else {
				a.setMessage('Unexpected error: ' + error.code);
			}

			// show alert
			a.show();
		},
		allowImageEditing : true,
		saveToPhotoGallery : true
	});
});

$.galeriaButton.addEventListener('click', function(e) {
	//obtain an image from the gallery
	Titanium.Media.openPhotoGallery({
		success : function(event) {
			//getting media
			var image = event.media;
			// set image view

			//checking if it is photo
			if (event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
				//we may create image view with contents from image variable
				//or simply save path to image
				Ti.App.Properties.setString("image", image.nativePath);
			}
		},
		cancel : function() {
			//user cancelled the action fron within
			//the photo gallery
		}
	});

});

function close(){
$.winCamera.close();
}
