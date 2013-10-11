exports.definition = {
	config: {
		columns: {
		    "nome": "text",//nome do contato
		    "photo1": "text",//photo frontal
		    "photo2": "text",//photo traseira
		    "faces": "integer",//quantidade de photos
		    "favorite": "integer",
		    "categories": "text"
		},
		adapter: {
			type: "sql",
			collection_name: "contatos"
		}
	},
	extendModel: function(Model) {
		_.extend(Model.prototype, {
			// extended functions and properties go here
		});

		return Model;
	},
	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {
			// extended functions and properties go here
		});

		return Collection;
	}
};