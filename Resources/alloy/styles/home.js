module.exports = [ {
    isApi: true,
    priority: 1000.0002,
    key: "TabGroup",
    style: {
        backgroundColor: "#221E1D"
    }
}, {
    isApi: true,
    priority: 1000.0003,
    key: "Window",
    style: {
        backgroundColor: "#221E1D"
    }
}, {
    isApi: true,
    priority: 1000.0004,
    key: "Tab",
    style: {
        backgroundColor: "#221E1D",
        backgroundSelectedColor: "#63AA9C",
        backgroundFocusedColor: "#ECEAE0"
    }
}, {
    isApi: true,
    priority: 1000.0007,
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
    priority: 1000.0008,
    key: "Button",
    style: {
        top: "10dp",
        width: "200dp",
        height: "38dp",
        color: "white",
        backgroundColor: "#E9633B",
        backgroundSelectedColor: "#FFB5A2"
    }
}, {
    isApi: true,
    priority: 1000.0009,
    key: "TextField",
    style: {
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE
    }
}, {
    isApi: true,
    priority: 1000.001,
    key: "ScrowView",
    style: {
        width: Ti.UI.SIZES,
        height: Ti.UI.SIZE
    }
}, {
    isApi: true,
    priority: 1000.0021,
    key: "Tab",
    style: {
        icon: "/images/ic_home.png"
    }
}, {
    isClass: true,
    priority: 10000.0001,
    key: "searchBars",
    style: {
        hinttextid: "procurarText",
        height: "50dp"
    }
}, {
    isClass: true,
    priority: 10000.0005,
    key: "layoutVertical",
    style: {
        layout: "vertical",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL
    }
}, {
    isClass: true,
    priority: 10000.0006,
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
    priority: 100000.0022,
    key: "TFprocurar",
    style: {
        hintText: L("procurarDica")
    }
}, {
    isId: true,
    priority: 100000.0023,
    key: "Lprocurar",
    style: {
        textid: "procurarText"
    }
}, {
    isId: true,
    priority: 100000.0024,
    key: "Btadd",
    style: {
        title: L("adicionar")
    }
} ];