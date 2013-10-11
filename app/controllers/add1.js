var imagemFrente = '';
var imagemVerso = '';
var contato = Alloy.createModel("contato", {
		nome : $.txfNome.value,
		foto1 : imagemFrente,
		foto2 : imagemVerso,
		qtdFotos : 0,
		favoritos : 0,
		categorias : ''
	});

function clickFrente() {
	var camera = Alloy.createController('camera');
	camera.getView().open({
		modal : true
	});
}

function clickVerso() {
	var camera = Alloy.createController('camera');
	camera.getView().open({
		modal : true
	}, imagemVerso);

}

function clickSalvar() {
	
	alert(contato.foto1);
	close();
}

function close(){
	$.winImagens.close();
}
//colocar o objeto aqui (fb)

//Se existir uma imagem para o fugitivo, entao carreg ela, senao('?') pegue uma padrão na pasta:
//$.fugitiveImageView.image = fugitive.get('photo')?fugitive.get('photo'):'/images/burglar.png';
