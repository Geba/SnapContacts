function Controller() {
    function resizeImage(imageI) {
        var imageView1 = Titanium.UI.createImageView({
            image: imageI,
            width: 320,
            height: 180
        });
        var heightOfImage = imageView1.toImage().height;
        var widthOfImage = imageView1.toImage().width;
        var aspectRatio = heightOfImage / widthOfImage;
        var smallImage;
        if (widthOfImage > 320) {
            var newWidth = 320;
            var newHieght = newWidth * aspectRatio;
            var ImageFactory = require("ti.imagefactory");
            smallImage = ImageFactory.imageAsResized(imageI, {
                width: newWidth,
                height: newHieght,
                quality: ImageFactory.QUALITY_MEDIUM
            });
        } else smallImage = imageI;
        return smallImage;
    }
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
                        var filename = new Date().getTime() + ".jpg";
                        image = resizeImage(image);
                        $.ImgFrente.image = image;
                        if (event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
                            var file = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory, filename);
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
                    saveToPhotoGallery: false
                });
                break;

              case 1:
                Titanium.Media.openPhotoGallery({
                    success: function(event) {
                        var image = event.media;
                        var filename = new Date().getTime() + ".jpg";
                        image = resizeImage(image);
                        $.ImgFrente.image = image;
                        if (event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
                            var file = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory, filename);
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
                        image = resizeImage(image);
                        var filename = new Date().getTime() + ".jpg";
                        $.ImgVerso.image = image;
                        if (event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
                            var file = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory, filename);
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
                    saveToPhotoGallery: false
                });
                break;

              case 1:
                Titanium.Media.openPhotoGallery({
                    success: function(event) {
                        var image = event.media;
                        image = resizeImage(image);
                        var filename = new Date().getTime() + ".jpg";
                        $.ImgVerso.image = image;
                        if (event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
                            var file = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory, filename);
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
        contatos.add(contato);
        contato.save(contato);
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
        backgroundColor: "white",
        layout: "vertical",
        id: "winImagens",
        titleid: "adicionarImagens"
    });
    $.__views.winImagens && $.addTopLevelView($.__views.winImagens);
    $.__views.__alloyId0 = Ti.UI.createScrollView({
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        showVerticalScrollIndicator: "true",
        layout: "vertical",
        id: "__alloyId0"
    });
    $.__views.winImagens.add($.__views.__alloyId0);
    $.__views.frenteButton = Ti.UI.createButton({
        top: "10dp",
        width: "200dp",
        height: "auto",
        borderRadius: "10dp",
        font: {
            fontSize: "17dp"
        },
        titleid: "frente",
        id: "frenteButton"
    });
    $.__views.__alloyId0.add($.__views.frenteButton);
    clickFrente ? $.__views.frenteButton.addEventListener("click", clickFrente) : __defers["$.__views.frenteButton!click!clickFrente"] = true;
    $.__views.ImgFrente = Ti.UI.createImageView({
        top: "15dp",
        id: "ImgFrente",
        height: "180dp",
        width: "320dp",
        backgroundColor: "red"
    });
    $.__views.__alloyId0.add($.__views.ImgFrente);
    $.__views.versoButton = Ti.UI.createButton({
        top: "10dp",
        width: "200dp",
        height: "auto",
        borderRadius: "10dp",
        font: {
            fontSize: "17dp"
        },
        titleid: "verso",
        id: "versoButton"
    });
    $.__views.__alloyId0.add($.__views.versoButton);
    clickVerso ? $.__views.versoButton.addEventListener("click", clickVerso) : __defers["$.__views.versoButton!click!clickVerso"] = true;
    $.__views.ImgVerso = Ti.UI.createImageView({
        top: "15dp",
        id: "ImgVerso"
    });
    $.__views.__alloyId0.add($.__views.ImgVerso);
    $.__views.salvarButton = Ti.UI.createButton({
        top: "10dp",
        width: "200dp",
        height: "auto",
        borderRadius: "10dp",
        font: {
            fontSize: "17dp"
        },
        titleid: "salvar",
        id: "salvarButton"
    });
    $.__views.__alloyId0.add($.__views.salvarButton);
    clickSalvar ? $.__views.salvarButton.addEventListener("click", clickSalvar) : __defers["$.__views.salvarButton!click!clickSalvar"] = true;
    $.__views.txfNome = Ti.UI.createTextField({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        borderRadius: "10dp",
        top: "10dp",
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