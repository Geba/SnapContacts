var cartao = arguments[0];
var contatos = Alloy.Collections.contato;

$.detalhesWindow.title = cartao.get("nome");
$.foto1.image = cartao.get("foto1");
$.foto2.image = cartao.get("foto2");

function close() {
	Alloy.Collections.contato.fetch();
	$.detalhesWindow.close();
}

function deletarContato() {
	cartao.destroy();
	contatos.fetch();
	close();
}

function editarContato() {
	var ctrl = Alloy.createController('editar', cartao);
	ctrl.getView().open();
	//mudei aqui
		
}

function favoritarContato() {
	switch(cartao.get('favorito')) {
		case 0:
			cartao.set({
				'favorito' : 1
			});
			break;
		case 1:
			cartao.set({
				'favorito' : 0
			});
			break;
	}
	cartao.save();
	contatos.fetch();
}

function ligarParaContato() {
	Ti.Platform.openURL('tel:' + $.txfLigar.value);
}

