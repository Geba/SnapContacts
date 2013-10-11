function Controller() {
    function close() {
        $.winCamera.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "camera";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.winCamera = Ti.UI.createWindow({
        backgroundColor: "black",
        id: "winCamera",
        titleid: "Camera",
        layout: "vertical"
    });
    $.__views.winCamera && $.addTopLevelView($.__views.winCamera);
    $.__views.cameraButton = Ti.UI.createButton({
        top: "10dp",
        width: "200dp",
        color: "white",
        title: "Camera",
        id: "cameraButton"
    });
    $.__views.winCamera.add($.__views.cameraButton);
    $.__views.galeriaButton = Ti.UI.createButton({
        top: "10dp",
        width: "200dp",
        color: "white",
        title: "Galeria",
        id: "galeriaButton"
    });
    $.__views.winCamera.add($.__views.galeriaButton);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var escolha = arguments[0];
    $.cameraButton.addEventListener("click", function() {
        Titanium.Media.showCamera({
            success: function(event) {
                var image = event.media;
                event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO && Ti.App.Properties.setString("image", image.nativePath);
                switch (escolha) {
                  case 1:
                    Ti.App.novo.foto1 = image;
                    break;

                  case 2:
                    Ti.App.novo.foto2 = image;
                }
                alert("foto1 " + Ti.App.novo.foto1);
                close();
            },
            cancel: function() {
                close();
            },
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
    });
    $.galeriaButton.addEventListener("click", function() {
        Titanium.Media.openPhotoGallery({
            success: function(event) {
                var image = event.media;
                event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO && Ti.App.Properties.setString("image", image.nativePath);
                switch (escolha) {
                  case 1:
                    Ti.App.novo.foto1 = image;
                    break;

                  case 2:
                    Ti.App.novo.foto2 = image;
                }
                close();
            },
            cancel: function() {}
        });
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;