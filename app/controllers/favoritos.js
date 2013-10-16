function favoritosFilter(collection){
	return collection.where({
		favorito:1
	});

}

function maisDetalhes(e){
	var contato = Alloy.Collections.contato.get(e.rowData.model);
	var ctrl = Alloy.createController('detalhesContato', contato);
	$.favoriteTab.open(ctrl.getView());
}