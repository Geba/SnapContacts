function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "configuracoes";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.win4 = Ti.UI.createWindow({
        backgroundColor: "#221E1D",
        id: "win4",
        title: "configuracoes"
    });
    $.__views.label2 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        right: "10dp",
        color: "#999",
        font: {
            fontSize: "16dp"
        },
        text: "I am Window 4",
        id: "label2"
    });
    $.__views.win4.add($.__views.label2);
    $.__views.configTab = Ti.UI.createTab({
        backgroundColor: "#221E1D",
        backgroundSelectedColor: "#63AA9C",
        backgroundFocusedColor: "#ECEAE0",
        icon: "/images/ic_fix.png",
        window: $.__views.win4,
        id: "configTab",
        titleid: "configuracoes"
    });
    $.__views.configTab && $.addTopLevelView($.__views.configTab);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;