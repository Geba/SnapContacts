function Controller() {
    function __alloyId6() {
        __alloyId6.opts || {};
        var models = favoritosFilter(__alloyId5);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId1 = models[i];
            __alloyId1.__transform = {};
            var __alloyId2 = Ti.UI.createTableViewRow({
                dataId: "",
                model: "undefined" != typeof __alloyId1.__transform["alloy_id"] ? __alloyId1.__transform["alloy_id"] : __alloyId1.get("alloy_id")
            });
            rows.push(__alloyId2);
            var __alloyId4 = Ti.UI.createLabel({
                width: Ti.UI.SIZE,
                height: Ti.UI.SIZE,
                right: "10dp",
                color: "white",
                font: {
                    fontSize: "16dp"
                },
                text: "undefined" != typeof __alloyId1.__transform["nome"] ? __alloyId1.__transform["nome"] : __alloyId1.get("nome")
            });
            __alloyId2.add(__alloyId4);
        }
        $.__views.tableviewContatos.setData(rows);
    }
    function favoritosFilter(collection) {
        return collection.where({
            favorito: 0
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "favoritos";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.win3 = Ti.UI.createWindow({
        backgroundColor: "#221E1D",
        id: "win3",
        titleid: "favoritos"
    });
    $.__views.tableviewContatos = Ti.UI.createTableView({
        id: "tableviewContatos",
        height: Ti.UI.SIZE
    });
    $.__views.win3.add($.__views.tableviewContatos);
    var __alloyId5 = Alloy.Collections["contato"] || contato;
    __alloyId5.on("fetch destroy change add remove reset", __alloyId6);
    $.__views.favoriteTab = Ti.UI.createTab({
        backgroundColor: "#221E1D",
        backgroundSelectedColor: "#63AA9C",
        backgroundFocusedColor: "#ECEAE0",
        icon: "/images/ic_favorite.png",
        window: $.__views.win3,
        id: "favoriteTab",
        titleid: "favoritos"
    });
    $.__views.favoriteTab && $.addTopLevelView($.__views.favoriteTab);
    exports.destroy = function() {
        __alloyId5.off("fetch destroy change add remove reset", __alloyId6);
    };
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;