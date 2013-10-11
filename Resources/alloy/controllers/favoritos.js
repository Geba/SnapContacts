function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "favoritos";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.win3 = Ti.UI.createWindow({
        backgroundColor: "black",
        id: "win3",
        titleid: "favoritos"
    });
    $.__views.label2 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        right: "10dp",
        color: "#999",
        font: {
            fontSize: "16dp"
        },
        text: "I am Window 3",
        id: "label2"
    });
    $.__views.win3.add($.__views.label2);
    $.__views.favoriteTab = Ti.UI.createTab({
        backgroundColor: "#00688B",
        backgroundSelectedColor: "#00BFFF",
        backgroundFocusedColor: "#009ACD",
        icon: "/images/ic_favorite.png",
        window: $.__views.win3,
        id: "favoriteTab",
        titleid: "favoritos"
    });
    $.__views.favoriteTab && $.addTopLevelView($.__views.favoriteTab);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;