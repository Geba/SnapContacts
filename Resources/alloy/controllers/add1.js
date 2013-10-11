function Controller() {
    function click() {
        var camera = Alloy.createController("camera");
        camera.getView().open({
            modal: true
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "add1";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.winImagens = Ti.UI.createWindow({
        backgroundColor: "black",
        id: "winImagens",
        titleid: "adicionarImagens",
        layout: "vertical"
    });
    $.__views.winImagens && $.addTopLevelView($.__views.winImagens);
    $.__views.frenteButton = Ti.UI.createButton({
        top: "10dp",
        width: "200dp",
        color: "white",
        titleid: "frente",
        id: "frenteButton"
    });
    $.__views.winImagens.add($.__views.frenteButton);
    click ? $.__views.frenteButton.addEventListener("click", click) : __defers["$.__views.frenteButton!click!click"] = true;
    $.__views.ImgFrente = Ti.UI.createImageView({
        id: "ImgFrente"
    });
    $.__views.winImagens.add($.__views.ImgFrente);
    $.__views.versoButton = Ti.UI.createButton({
        top: "10dp",
        width: "200dp",
        color: "white",
        titleid: "verso",
        id: "versoButton"
    });
    $.__views.winImagens.add($.__views.versoButton);
    $.__views.ImgVerso = Ti.UI.createImageView({
        id: "ImgVerso"
    });
    $.__views.winImagens.add($.__views.ImgVerso);
    $.__views.salvarButton = Ti.UI.createButton({
        top: "10dp",
        width: "200dp",
        color: "white",
        title: "Salvar",
        id: "salvarButton"
    });
    $.__views.winImagens.add($.__views.salvarButton);
    $.__views.txfNome = Ti.UI.createTextField({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        id: "txfNome",
        hintText: "Palavra Chave"
    });
    $.__views.winImagens.add($.__views.txfNome);
    exports.destroy = function() {};
    _.extend($, $.__views);
    Alloy.createModel("contato", {
        nome: $.txfNome.value,
        foto1: "",
        foto2: "",
        qtdFotos: 0,
        favoritos: 0,
        categorias: ""
    });
    __defers["$.__views.frenteButton!click!click"] && $.__views.frenteButton.addEventListener("click", click);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;