var contatos = Alloy.Collections.contato;

var contato = Alloy.createModel("contato", {
	nome : $.txfNome.value,
	foto1 : '',
	foto2 : '',
	qtdFotos : 0,
	favorito : 0,
	categorias : ''
});

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

						$.ImgFrente.image = image;

						//checking if it is photo
						if (event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
							//we may create image view with contents from image variable
							//or simply save path to image

							var file = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, contato.get('alloy_id') + '_1.jpg');
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
					saveToPhotoGallery : true
				});

				break;
			case 1:
				//escolheu a galeria
				Titanium.Media.openPhotoGallery({
					success : function(event) {
						//getting media
						var image = event.media;
						// set image view

						$.ImgFrente.image = image;

						//checking if it is photo
						if (event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
							//we may create image view with contents from image variable
							//or simply save path to image
							var file = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, contato.get('alloy_id') + '_1.jpg');
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

		//alert('You picked ' + genre[evt.index]);
	});
	dialog.show();
	// var camera = Alloy.createController('camera');
	// camera.getView().open({
	// modal : true
	// }, 2);
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

						$.ImgVerso.image = image;

						//checking if it is photo
						if (event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
							//we may create image view with contents from image variable
							//or simply save path to image

							var file = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, contato.get('alloy_id') + '_2.jpg');
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
					saveToPhotoGallery : true
				});

				break;
			case 1:
				//escolheu a galeria
				Titanium.Media.openPhotoGallery({
					success : function(event) {
						//getting media
						var image = event.media;
						// set image view

						$.ImgVerso.image = image;

						//checking if it is photo
						if (event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
							//we may create image view with contents from image variable
							//or simply save path to image
							var file = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, contato.get('alloy_id') + '_2.jpg');
							file.write(image);
							contato.set({
								'foto2' : file.nativePath
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

		//alert('You picked ' + genre[evt.index]);
	});
	dialog.show();
	// var camera = Alloy.createController('camera');
	// camera.getView().open({
	// modal : true
	// }, 2);
}

function clickSalvar() {
	contato.set({
		'nome' : $.txfNome.value
	});

	alert($.txfNome.value+"\n"+
	contato.get('foto1')+"\n"+
	contato.get('foto2')+"\n"+
	contato.get('favorito')+"\n");
	
	contatos.add(contato);
	contato.save();
	contatos.fetch();
	
	close();

}

function close() {
	$.winImagens.close();
}

