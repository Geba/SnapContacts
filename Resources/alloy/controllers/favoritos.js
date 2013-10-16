function Controller() {
    function __alloyId8() {
        __alloyId8.opts || {};
        var models = favoritosFilter(__alloyId7);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId5 = models[i];
            __alloyId5.__transform = {};
            var __alloyId6 = Ti.UI.createTableViewRow({
                layout: "vertical",
                font: {
                    fontSize: "18dp"
                },
                height: "auto",
                title: "undefined" != typeof __alloyId5.__transform["nome"] ? __alloyId5.__transform["nome"] : __alloyId5.get("nome"),
                model: "undefined" != typeof __alloyId5.__transform["alloy_id"] ? __alloyId5.__transform["alloy_id"] : __alloyId5.get("alloy_id"),
                editable: "true"
            });
            rows.push(__alloyId6);
        }
        $.__views.tableviewContatos.setData(rows);
    }
    function favoritosFilter(collection) {
        return collection.where({
            favorito: 1
        });
    }
    function maisDetalhes(e) {
        var contato = Alloy.Collections.contato.get(e.rowData.model);
        var ctrl = Alloy.createController("detalhesContato", contato);
        $.favoriteTab.open(ctrl.getView());
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "favoritos";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.win3 = Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "vertical",
        id: "win3",
        titleid: "favoritos"
    });
    $.__views.tableviewContatos = Ti.UI.createTableView({
        id: "tableviewContatos"
    });
    $.__views.win3.add($.__views.tableviewContatos);
    var __alloyId7 = Alloy.Collections["contato"] || contato;
    __alloyId7.on("fetch destroy change add remove reset", __alloyId8);
    maisDetalhes ? $.__views.tableviewContatos.addEventListener("click", maisDetalhes) : __defers["$.__views.tableviewContatos!click!maisDetalhes"] = true;
    $.__views.favoriteTab = Ti.UI.createTab({
        backgroundSelectedColor: "#C8C8C8 ",
        backgroundFocusedColor: "#999",
        icon: "/images/ic_favorite.png",
        window: $.__views.win3,
        id: "favoriteTab",
        titleid: "favoritos"
    });
    $.__views.favoriteTab && $.addTopLevelView($.__views.favoriteTab);
    exports.destroy = function() {
        __alloyId7.off("fetch destroy change add remove reset", __alloyId8);
    };
    _.extend($, $.__views);
    __defers["$.__views.tableviewContatos!click!maisDetalhes"] && $.__views.tableviewContatos.addEventListener("click", maisDetalhes);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;