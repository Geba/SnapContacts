function click(){
	var camera = Alloy.createController('camera');
	camera.getView().open({modal:true});		
}

var contato = Alloy.createModel("contato", {
	nome: $.txfNome.value,
	foto1:'',
	foto2:'',
	qtdFotos:0,
	favoritos: 0,
	categorias:''
});
//colocar o objeto aqui (fb)

//Se existir uma imagem para o fugitivo, entao carreg ela, senao('?') pegue uma padrão na pasta:
//$.fugitiveImageView.image = fugitive.get('photo')?fugitive.get('photo'):'/images/burglar.png';
