function Controller() {
    function close() {
        Alloy.Collections.contato.fetch();
        $.detalhesWindow.close();
    }
    function deletarContato() {
        cartao.destroy();
        Alloy.Collections.contato.fetch();
        close();
    }
    function favoritarContato() {
        cartao.set({
            favoritos: 1
        });
    }
    function ligarParaContato() {}
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "detalhesContato";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.detalhesWindow = Ti.UI.createWindow({
        backgroundColor: "#221E1D",
        id: "detalhesWindow",
        layout: "vertical"
    });
    $.__views.detalhesWindow && $.addTopLevelView($.__views.detalhesWindow);
    $.__views.contatoLabel = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        right: "10dp",
        color: "white",
        font: {
            fontSize: "16dp"
        },
        id: "contatoLabel"
    });
    $.__views.detalhesWindow.add($.__views.contatoLabel);
    $.__views.favButton = Ti.UI.createButton({
        top: "10dp",
        width: "200dp",
        height: "38dp",
        color: "white",
        backgroundColor: "#E9633B",
        backgroundSelectedColor: "#FFB5A2",
        id: "favButton"
    });
    $.__views.detalhesWindow.add($.__views.favButton);
    favoritarContato ? $.__views.favButton.addEventListener("click", favoritarContato) : __defers["$.__views.favButton!click!favoritarContato"] = true;
    $.__views.callButton = Ti.UI.createButton({
        top: "10dp",
        width: "200dp",
        height: "38dp",
        color: "white",
        backgroundColor: "#E9633B",
        backgroundSelectedColor: "#FFB5A2",
        id: "callButton"
    });
    $.__views.detalhesWindow.add($.__views.callButton);
    ligarParaContato ? $.__views.callButton.addEventListener("click", ligarParaContato) : __defers["$.__views.callButton!click!ligarParaContato"] = true;
    $.__views.deleteButton = Ti.UI.createButton({
        top: "10dp",
        width: "200dp",
        height: "38dp",
        color: "white",
        backgroundColor: "#E9633B",
        backgroundSelectedColor: "#FFB5A2",
        id: "deleteButton"
    });
    $.__views.detalhesWindow.add($.__views.deleteButton);
    deletarContato ? $.__views.deleteButton.addEventListener("click", deletarContato) : __defers["$.__views.deleteButton!click!deletarContato"] = true;
    $.__views.foto1 = Ti.UI.createImageView({
        id: "foto1"
    });
    $.__views.detalhesWindow.add($.__views.foto1);
    $.__views.foto2 = Ti.UI.createImageView({
        id: "foto2"
    });
    $.__views.detalhesWindow.add($.__views.foto2);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var cartao = arguments[0];
    $.detalhesWindow.title = cartao.get("nome");
    $.foto1.image = cartao.get("foto1");
    $.foto2.image = cartao.get("foto2");
    __defers["$.__views.favButton!click!favoritarContato"] && $.__views.favButton.addEventListener("click", favoritarContato);
    __defers["$.__views.callButton!click!ligarParaContato"] && $.__views.callButton.addEventListener("click", ligarParaContato);
    __defers["$.__views.deleteButton!click!deletarContato"] && $.__views.deleteButton.addEventListener("click", deletarContato);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;