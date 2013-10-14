function Controller() {
    function __alloyId6() {
        __alloyId6.opts || {};
        var models = __alloyId5.models;
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
        $.__views.tableview.setData(rows);
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
    $.__views.tableview = Ti.UI.createTableView({
        id: "tableview",
        height: Ti.UI.SIZE
    });
    $.__views.homeWindow.add($.__views.tableview);
    var __alloyId5 = Alloy.Collections["contato"] || contato;
    __alloyId5.on("fetch destroy change add remove reset", __alloyId6);
    $.__views.__alloyId7 = Ti.UI.createView({
        layout: "horizontal",
        id: "__alloyId7"
    });
    $.__views.homeWindow.add($.__views.__alloyId7);
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
    $.__views.__alloyId7.add($.__views.Lprocurar);
    $.__views.TFprocurar = Ti.UI.createTextField({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        hintText: L("procurarDica"),
        id: "TFprocurar"
    });
    $.__views.__alloyId7.add($.__views.TFprocurar);
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
        __alloyId5.off("fetch destroy change add remove reset", __alloyId6);
    };
    _.extend($, $.__views);
    Alloy.Collections.contato.fetch();
    var contatos = Alloy.Collections.contato;
    contatos.fetch();
    __defers["$.__views.Btadd!click!openAdd1"] && $.__views.Btadd.addEventListener("click", openAdd1);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;