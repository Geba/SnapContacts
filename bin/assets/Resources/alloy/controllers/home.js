function Controller() {
    function __alloyId14() {
        __alloyId14.opts || {};
        var models = __alloyId13.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId7 = models[i];
            __alloyId7.__transform = {};
            var __alloyId8 = Ti.UI.createTableViewRow({
                dataId: "",
                title: "undefined" != typeof __alloyId7.__transform["nome"] ? __alloyId7.__transform["nome"] : __alloyId7.get("nome"),
                model: "undefined" != typeof __alloyId7.__transform["alloy_id"] ? __alloyId7.__transform["alloy_id"] : __alloyId7.get("alloy_id"),
                editable: "true",
                layout: "vertical"
            });
            rows.push(__alloyId8);
            var __alloyId9 = Ti.UI.createView({
                height: "230"
            });
            __alloyId8.add(__alloyId9);
            var __alloyId10 = Ti.UI.createLabel({
                width: Ti.UI.SIZE,
                height: Ti.UI.SIZE,
                right: "10dp",
                color: "white",
                font: {
                    fontSize: "16dp"
                },
                text: "undefined" != typeof __alloyId7.__transform["nome"] ? __alloyId7.__transform["nome"] : __alloyId7.get("nome")
            });
            __alloyId9.add(__alloyId10);
            var __alloyId12 = Ti.UI.createImageView({
                image: "undefined" != typeof __alloyId7.__transform["foto1"] ? __alloyId7.__transform["foto1"] : __alloyId7.get("foto1")
            });
            __alloyId8.add(__alloyId12);
        }
        $.__views.tableviewContatos.setData(rows);
    }
    function openAdd1() {
        var add1 = Alloy.createController("add1");
        add1.getView().open({
            modal: true
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "home";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.homeWindow = Ti.UI.createWindow({
        backgroundColor: "#221E1D",
        id: "homeWindow",
        titleid: "home",
        layout: "vertical"
    });
    $.__views.contatosSearch = Ti.UI.createSearchBar({
        hinttextid: "procurarText",
        height: "50dp",
        id: "contatosSearch",
        showCancel: "false"
    });
    $.__views.homeWindow.add($.__views.contatosSearch);
    $.__views.Btadd = Ti.UI.createButton({
        top: "10dp",
        width: "200dp",
        height: "38dp",
        color: "white",
        backgroundColor: "#E9633B",
        backgroundSelectedColor: "#FFB5A2",
        title: L("adicionar"),
        id: "Btadd"
    });
    $.__views.homeWindow.add($.__views.Btadd);
    openAdd1 ? $.__views.Btadd.addEventListener("click", openAdd1) : __defers["$.__views.Btadd!click!openAdd1"] = true;
    $.__views.tableviewContatos = Ti.UI.createTableView({
        id: "tableviewContatos",
        height: Ti.UI.SIZE
    });
    $.__views.homeWindow.add($.__views.tableviewContatos);
    var __alloyId13 = Alloy.Collections["contato"] || contato;
    __alloyId13.on("fetch destroy change add remove reset", __alloyId14);
    $.__views.__alloyId15 = Ti.UI.createView({
        layout: "horizontal",
        id: "__alloyId15"
    });
    $.__views.homeWindow.add($.__views.__alloyId15);
    $.__views.Lprocurar = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        right: "10dp",
        color: "white",
        font: {
            fontSize: "16dp"
        },
        textid: "procurarText",
        id: "Lprocurar"
    });
    $.__views.__alloyId15.add($.__views.Lprocurar);
    $.__views.TFprocurar = Ti.UI.createTextField({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        hintText: L("procurarDica"),
        id: "TFprocurar"
    });
    $.__views.__alloyId15.add($.__views.TFprocurar);
    $.__views.homeTab = Ti.UI.createTab({
        backgroundColor: "#221E1D",
        backgroundSelectedColor: "#63AA9C",
        backgroundFocusedColor: "#ECEAE0",
        icon: "/images/ic_home.png",
        window: $.__views.homeWindow,
        id: "homeTab",
        titleid: "home"
    });
    $.__views.homeTab && $.addTopLevelView($.__views.homeTab);
    exports.destroy = function() {
        __alloyId13.off("fetch destroy change add remove reset", __alloyId14);
    };
    _.extend($, $.__views);
    Alloy.Collections.contato.fetch();
    var contatos = Alloy.Collections.contato;
    contatos.fetch();
    $.tableviewContatos.search = $.contatosSearch;
    __defers["$.__views.Btadd!click!openAdd1"] && $.__views.Btadd.addEventListener("click", openAdd1);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;