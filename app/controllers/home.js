Alloy.Collections.contato.fetch();

var contatos = Alloy.Collections.contato;
contatos.fetch();

function openAdd1() {
	var add1 = Alloy.createController('add1');
	add1.getView().open({
		modal : true
	});
}

function showDetails() {
	alert('Funcionou!!');
}

function contatosFilter(collection) {
	return collection.where({
		favorito : 0
	});
}


