module.exports = [ {
    isApi: true,
    priority: 1000.0001,
    key: "TabGroup",
    style: {
        backgroundColor: "#191970"
    }
}, {
    isApi: true,
    priority: 1000.0002,
    key: "Window",
    style: {
        backgroundColor: "black"
    }
}, {
    isApi: true,
    priority: 1000.0003,
    key: "Tab",
    style: {
        backgroundColor: "#00688B",
        backgroundSelectedColor: "#00BFFF",
        backgroundFocusedColor: "#009ACD"
    }
}, {
    isApi: true,
    priority: 1000.0006,
    key: "Label",
    style: {
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        right: "10dp",
        color: "white",
        font: {
            fontSize: "16dp"
        }
    }
}, {
    isApi: true,
    priority: 1000.0007,
    key: "Button",
    style: {
        top: "10dp",
        width: "200dp",
        color: "white"
    }
}, {
    isApi: true,
    priority: 1000.0008,
    key: "TextField",
    style: {
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE
    }
}, {
    isApi: true,
    priority: 1000.0019,
    key: "Tab",
    style: {
        icon: "/images/ic_home.png"
    }
}, {
    isClass: true,
    priority: 10000.0004,
    key: "layoutVertical",
    style: {
        layout: "vertical",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL
    }
}, {
    isClass: true,
    priority: 10000.0005,
    key: "layoutHorizontal",
    style: {
        top: "5dp",
        layout: "horizontal",
        width: Ti.UI.FILL,
        height: "42dp",
        left: "4dp",
        right: "4dp"
    }
}, {
    isId: true,
    priority: 100000.002,
    key: "TFprocurar",
    style: {
        hintText: L("procurarDica")
    }
}, {
    isId: true,
    priority: 100000.0021,
    key: "Lprocurar",
    style: {
        textid: "procurarText"
    }
}, {
    isId: true,
    priority: 100000.0022,
    key: "Btadd",
    style: {
        title: L("adicionar")
    }
} ];