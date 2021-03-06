function Controller() {
    function clickFrente() {
        var escolha = [ "Camera", "Galery" ];
        var dialog = Ti.UI.createOptionDialog({
            options: escolha,
            title: "Escolha a Fonte"
        });
        dialog.addEventListener("click", function() {
            switch (dialog.selectedIndex) {
              case 0:
                Titanium.Media.showCamera({
                    success: function(event) {
                        var image = event.media;
                        $.ImgFrente.image = image;
                        if (event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
                            var file = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, contato.get("alloy_id") + "_1.jpg");
                            file.write(image);
                            contato.set({
                                foto1: file.nativePath
                            });
                        }
                    },
                    cancel: function() {},
                    error: function(error) {
                        var a = Titanium.UI.createAlertDialog({
                            title: "Camera"
                        });
                        error.code == Titanium.Media.NO_CAMERA ? a.setMessage("Device does not have camera") : a.setMessage("Unexpected error: " + error.code);
                        a.show();
                    },
                    allowImageEditing: true,
                    saveToPhotoGallery: true
                });
                break;

              case 1:
                Titanium.Media.openPhotoGallery({
                    success: function(event) {
                        var image = event.media;
                        $.ImgFrente.image = image;
                        if (event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
                            var file = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, contato.get("alloy_id") + "_1.jpg");
                            file.write(image);
                            contato.set({
                                foto1: file.nativePath
                            });
                        }
                    },
                    cancel: function() {}
                });
            }
        });
        dialog.show();
    }
    function clickVerso() {
        var escolha = [ "Camera", "Galery" ];
        var dialog = Ti.UI.createOptionDialog({
            options: escolha,
            title: "Escolha a Fonte"
        });
        dialog.addEventListener("click", function() {
            switch (dialog.selectedIndex) {
              case 0:
                Titanium.Media.showCamera({
                    success: function(event) {
                        var image = event.media;
                        $.ImgVerso.image = image;
                        if (event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
                            var file = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, contato.get("alloy_id") + "_2.jpg");
                            file.write(image);
                            contato.set({
                                foto2: file.nativePath
                            });
                        }
                    },
                    cancel: function() {},
                    error: function(error) {
                        var a = Titanium.UI.createAlertDialog({
                            title: "Camera"
                        });
                        error.code == Titanium.Media.NO_CAMERA ? a.setMessage("Device does not have camera") : a.setMessage("Unexpected error: " + error.code);
                        a.show();
                    },
                    allowImageEditing: true,
                    saveToPhotoGallery: true
                });
                break;

              case 1:
                Titanium.Media.openPhotoGallery({
                    success: function(event) {
                        var image = event.media;
                        $.ImgVerso.image = image;
                        if (event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
                            var file = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, contato.get("alloy_id") + "_2.jpg");
                            file.write(image);
                            contato.set({
                                foto2: file.nativePath
                            });
                        }
                    },
                    cancel: function() {}
                });
            }
        });
        dialog.show();
    }
    function clickSalvar() {
        contato.set({
            nome: $.txfNome.value
        });
        alert($.txfNome.value + "\n" + contato.get("foto1") + "\n" + contato.get("foto2") + "\n" + contato.get("favorito") + "\n");
        contatos.add(contato);
        contato.save();
        contatos.fetch();
        close();
    }
    function close() {
        $.winImagens.close();
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
        backgroundColor: "#221E1D",
        id: "winImagens",
        titleid: "adicionarImagens",
        layout: "vertical"
    });
    $.__views.winImagens && $.addTopLevelView($.__views.winImagens);
    $.__views.__alloyId0 = Ti.UI.createScrollView({
        showVerticalScrollIndicator: "true",
        layout: "vertical",
        id: "__alloyId0"
    });
    $.__views.winImagens.add($.__views.__alloyId0);
    $.__views.frenteButton = Ti.UI.createButton({
        top: "10dp",
        width: "200dp",
        height: "38dp",
        color: "white",
        backgroundColor: "#E9633B",
        backgroundSelectedColor: "#FFB5A2",
        titleid: "frente",
        id: "frenteButton"
    });
    $.__views.__alloyId0.add($.__views.frenteButton);
    clickFrente ? $.__views.frenteButton.addEventListener("click", clickFrente) : __defers["$.__views.frenteButton!click!clickFrente"] = true;
    $.__views.ImgFrente = Ti.UI.createImageView({
        id: "ImgFrente"
    });
    $.__views.__alloyId0.add($.__views.ImgFrente);
    $.__views.versoButton = Ti.UI.createButton({
        top: "10dp",
        width: "200dp",
        height: "38dp",
        color: "white",
        backgroundColor: "#E9633B",
        backgroundSelectedColor: "#FFB5A2",
        titleid: "verso",
        id: "versoButton"
    });
    $.__views.__alloyId0.add($.__views.versoButton);
    clickVerso ? $.__views.versoButton.addEventListener("click", clickVerso) : __defers["$.__views.versoButton!click!clickVerso"] = true;
    $.__views.ImgVerso = Ti.UI.createImageView({
        id: "ImgVerso"
    });
    $.__views.__alloyId0.add($.__views.ImgVerso);
    $.__views.salvarButton = Ti.UI.createButton({
        top: "10dp",
        width: "200dp",
        height: "38dp",
        color: "white",
        backgroundColor: "#E9633B",
        backgroundSelectedColor: "#FFB5A2",
        titleid: "salvar",
        id: "salvarButton"
    });
    $.__views.__alloyId0.add($.__views.salvarButton);
    clickSalvar ? $.__views.salvarButton.addEventListener("click", clickSalvar) : __defers["$.__views.salvarButton!click!clickSalvar"] = true;
    $.__views.txfNome = Ti.UI.createTextField({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        id: "txfNome",
        hintText: "Palavra Chave"
    });
    $.__views.__alloyId0.add($.__views.txfNome);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var contatos = Alloy.Collections.contato;
    var contato = Alloy.createModel("contato", {
        nome: $.txfNome.value,
        foto1: "",
        foto2: "",
        qtdFotos: 0,
        favorito: 0,
        categorias: ""
    });
    __defers["$.__views.frenteButton!click!clickFrente"] && $.__views.frenteButton.addEventListener("click", clickFrente);
    __defers["$.__views.versoButton!click!clickVerso"] && $.__views.versoButton.addEventListener("click", clickVerso);
    __defers["$.__views.salvarButton!click!clickSalvar"] && $.__views.salvarButton.addEventListener("click", clickSalvar);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;