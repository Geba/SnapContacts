function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createTabGroup({
        id: "index"
    });
    $.__views.__alloyId26 = Alloy.createController("home", {
        id: "__alloyId26"
    });
    $.__views.index.addTab($.__views.__alloyId26.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId27 = Alloy.createController("favoritos", {
        id: "__alloyId27"
    });
    $.__views.index.addTab($.__views.__alloyId27.getViewEx({
        recurse: true
    }));
    $.__views.index && $.addTopLevelView($.__views.index);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var contatos = Alloy.Collections.contato;
    contatos.fetch();
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;