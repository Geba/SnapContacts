var contatos = Alloy.Collections.contato;

var contato = Alloy.createModel("contato", {
	nome : $.txfNome.value,
	foto1 : '',
	foto2 : '',
	qtdFotos : 0,
	favorito : 0,
	categorias : ''
});

// function resizeImage(image) {
// var ImageFactory = require('ti.imagefactory');
// image = ImageFactory.imageAsResized(image, {
// width : 320,
// height : 180,
// quality : ImageFactory.QUALITY_MEDIUM
// });
// return image;
// }

function resizeImage(imageI) {

	var imageView1 = Titanium.UI.createImageView({
		image : imageI,
		width : 320,
		height : 180
	});
	var heightOfImage = imageView1.toImage().height;
	var widthOfImage = imageView1.toImage().width;
	var aspectRatio = heightOfImage / widthOfImage;
	var smallImage;

	if (widthOfImage > 320) {
		var newWidth = 320;
		var newHieght = newWidth * aspectRatio;
		var ImageFactory = require('ti.imagefactory');
		smallImage = ImageFactory.imageAsResized(imageI, {
			width : newWidth,
			height : newHieght,
			quality : ImageFactory.QUALITY_MEDIUM
		});
	} else {
		smallImage = imageI;
	}

	return smallImage;
}

function clickFrente() {
	var escolha = ['Camera', 'Galery'];
	var dialog = Ti.UI.createOptionDialog({
		options : escolha,
		title : 'Escolha a Fonte'
	});
	dialog.addEventListener('click', function(evt) {
		//switch(escolha[evt.index]) {
		switch(dialog.selectedIndex) {
			case 0:
				//escolheu a  camera
				Titanium.Media.showCamera({
					//we got something
					success : function(event) {
						//getting media
						var image = event.media;

						var filename = new Date().getTime() + ".jpg";

						image = resizeImage(image);
						//resize photo

						$.ImgFrente.image = image;

						//checking if it is photo
						if (event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
							//we may create image view with contents from image variable
							//or simply save path to image

							var file = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory, filename);
							file.write(image);
							contato.set({
								'foto1' : file.nativePath
							});
						}

					},
					cancel : function() {
						//do somehting if user cancels operation

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
					saveToPhotoGallery : false
				});

				break;
			case 1:
				//escolheu a galeria
				Titanium.Media.openPhotoGallery({
					success : function(event) {
						//getting media
						var image = event.media;
						// set image view

						var filename = new Date().getTime() + ".jpg";

						image = resizeImage(image);

						$.ImgFrente.image = image;

						//checking if it is photo
						if (event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
							//we may create image view with contents from image variable
							//or simply save path to image
							var file = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory, filename);
							file.write(image);
							contato.set({
								'foto1' : file.nativePath
							});

							//	Ti.App.Properties.setString("image", image.nativePath);
						}

					},
					cancel : function() {
						//user cancelled the action fron within
						//the photo gallery
					}
				});

				break;
		}

	});
	dialog.show();
}

function clickVerso() {
	var escolha = ['Camera', 'Galery'];
	var dialog = Ti.UI.createOptionDialog({
		options : escolha,
		title : 'Escolha a Fonte'
	});
	dialog.addEventListener('click', function(evt) {
		//switch(escolha[evt.index]) {
		switch(dialog.selectedIndex) {
			case 0:
				//escolheu a  camera
				Titanium.Media.showCamera({
					//we got something
					success : function(event) {
						//getting media
						var image = event.media;

						image = resizeImage(image);

						var filename = new Date().getTime() + ".jpg";

						$.ImgVerso.image = image;

						//checking if it is photo
						if (event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
							//we may create image view with contents from image variable
							//or simply save path to image

							var file = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory, filename);
							file.write(image);
							contato.set({
								'foto2' : file.nativePath
							});
						}

					},
					cancel : function() {
						//do somehting if user cancels operation

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
					saveToPhotoGallery : false
				});

				break;
			case 1:
				//escolheu a galeria
				Titanium.Media.openPhotoGallery({
					success : function(event) {
						//getting media
						var image = event.media;
						// set image view

						image = resizeImage(image);

						var filename = new Date().getTime() + ".jpg";

						$.ImgVerso.image = image;

						//checking if it is photo
						if (event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
							//we may create image view with contents from image variable
							//or simply save path to image
							var file = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory, filename);
							file.write(image);
							contato.set({
								'foto2' : file.nativePath
							});

						}

					},
					cancel : function() {
						//user cancelled the action fron within
						//the photo gallery
					}
				});

				break;
		}

	});
	dialog.show();
}

function clickSalvar() {
	contato.set({
		'nome' : $.txfNome.value
	});

	contatos.add(contato);
	contato.save(contato);
	contatos.fetch();

	close();

}

function close() {
	$.winImagens.close();
}

