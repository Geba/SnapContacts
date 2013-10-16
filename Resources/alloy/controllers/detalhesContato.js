function Controller() {
    function close() {
        Alloy.Collections.contato.fetch();
        $.detalhesWindow.close();
    }
    function deletarContato() {
        cartao.destroy();
        contatos.fetch();
        close();
    }
    function editarContato() {
        var ctrl = Alloy.createController("editar", cartao);
        ctrl.getView().open();
    }
    function favoritarContato() {
        switch (cartao.get("favorito")) {
          case 0:
            cartao.set({
                favorito: 1
            });
            break;

          case 1:
            cartao.set({
                favorito: 0
            });
        }
        cartao.save();
        contatos.fetch();
    }
    function ligarParaContato() {
        Ti.Platform.openURL("tel:" + $.txfLigar.value);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "detalhesContato";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.detalhesWindow = Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "vertical",
        id: "detalhesWindow"
    });
    $.__views.detalhesWindow && $.addTopLevelView($.__views.detalhesWindow);
    $.__views.__alloyId2 = Ti.UI.createScrollView({
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        showVerticalScrollIndicator: "true",
        layout: "vertical",
        id: "__alloyId2"
    });
    $.__views.detalhesWindow.add($.__views.__alloyId2);
    $.__views.foto1 = Ti.UI.createImageView({
        top: "15dp",
        id: "foto1"
    });
    $.__views.__alloyId2.add($.__views.foto1);
    $.__views.foto2 = Ti.UI.createImageView({
        top: "15dp",
        id: "foto2"
    });
    $.__views.__alloyId2.add($.__views.foto2);
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
    $.__views.__alloyId2.add($.__views.contatoLabel);
    $.__views.favButton = Ti.UI.createButton({
        top: "10dp",
        width: "200dp",
        height: "auto",
        borderRadius: "10dp",
        font: {
            fontSize: "17dp"
        },
        title: L("Favoritar"),
        id: "favButton"
    });
    $.__views.__alloyId2.add($.__views.favButton);
    favoritarContato ? $.__views.favButton.addEventListener("click", favoritarContato) : __defers["$.__views.favButton!click!favoritarContato"] = true;
    $.__views.editButton = Ti.UI.createButton({
        top: "10dp",
        width: "200dp",
        height: "auto",
        borderRadius: "10dp",
        font: {
            fontSize: "17dp"
        },
        title: L("Editar"),
        id: "editButton"
    });
    $.__views.__alloyId2.add($.__views.editButton);
    editarContato ? $.__views.editButton.addEventListener("click", editarContato) : __defers["$.__views.editButton!click!editarContato"] = true;
    $.__views.deleteButton = Ti.UI.createButton({
        top: "10dp",
        width: "200dp",
        height: "auto",
        borderRadius: "10dp",
        font: {
            fontSize: "17dp"
        },
        title: L("Deletar"),
        id: "deleteButton"
    });
    $.__views.__alloyId2.add($.__views.deleteButton);
    deletarContato ? $.__views.deleteButton.addEventListener("click", deletarContato) : __defers["$.__views.deleteButton!click!deletarContato"] = true;
    $.__views.viewCall = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "horizontal",
        id: "viewCall"
    });
    $.__views.__alloyId2.add($.__views.viewCall);
    $.__views.callButton = Ti.UI.createButton({
        top: "10dp",
        width: "80dp",
        height: "auto",
        borderRadius: "10dp",
        font: {
            fontSize: "17dp"
        },
        title: L("Ligar"),
        id: "callButton"
    });
    $.__views.viewCall.add($.__views.callButton);
    ligarParaContato ? $.__views.callButton.addEventListener("click", ligarParaContato) : __defers["$.__views.callButton!click!ligarParaContato"] = true;
    $.__views.txfLigar = Ti.UI.createTextField({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        borderRadius: "10dp",
        top: "10dp",
        hintText: L("Digite o número"),
        keyboardType: Ti.UI.KEYBOARD_NUMBER_PAD,
        id: "txfLigar"
    });
    $.__views.viewCall.add($.__views.txfLigar);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var cartao = arguments[0];
    var contatos = Alloy.Collections.contato;
    $.detalhesWindow.title = cartao.get("nome");
    $.foto1.image = cartao.get("foto1");
    $.foto2.image = cartao.get("foto2");
    __defers["$.__views.closeButton!click!close"] && $.__views.closeButton.addEventListener("click", close);
    __defers["$.__views.favButton!click!favoritarContato"] && $.__views.favButton.addEventListener("click", favoritarContato);
    __defers["$.__views.editButton!click!editarContato"] && $.__views.editButton.addEventListener("click", editarContato);
    __defers["$.__views.deleteButton!click!deletarContato"] && $.__views.deleteButton.addEventListener("click", deletarContato);
    __defers["$.__views.callButton!click!ligarParaContato"] && $.__views.callButton.addEventListener("click", ligarParaContato);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;