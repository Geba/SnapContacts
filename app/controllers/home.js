Alloy.Collections.contato.fetch();

var contatos = Alloy.Collections.contato;
contatos.fetch();

$.tableviewContatos.search = $.contatosSearch;

function openAdd1() {
	var add1 = Alloy.createController('add1');
	add1.getView().open({
		modal : true
	});
}

function contatosFilter(collection) {
	return collection.where({
		favorito : 0
	});
}

function maisDetalhes(e){
	var contato = Alloy.Collections.contato.get(e.rowData.model);
	var ctrl = Alloy.createController('detalhesContato', contato);
	$.homeTab.open(ctrl.getView());
}

