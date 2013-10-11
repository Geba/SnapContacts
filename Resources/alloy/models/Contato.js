exports.definition = {
    config: {
        columns: {
            nome: "text",
            photo1: "text",
            photo2: "text",
            faces: "integer",
            favorite: "integer",
            categories: "text"
        },
        adapter: {
            type: "sql",
            collection_name: "contatos"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {});
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {});
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("contato", exports.definition, []);

collection = Alloy.C("contato", exports.definition, model);

exports.Model = model;

exports.Collection = collection;