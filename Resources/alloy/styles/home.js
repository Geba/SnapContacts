module.exports = [ {
    isApi: true,
    priority: 1000.0001,
    key: "Window",
    style: {
        backgroundColor: "white",
        layout: "vertical"
    }
}, {
    isApi: true,
    priority: 1000.0002,
    key: "title",
    style: {
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER
    }
}, {
    isApi: true,
    priority: 1000.0004,
    key: "TabGroup",
    style: {}
}, {
    isApi: true,
    priority: 1000.0005,
    key: "Tab",
    style: {
        backgroundSelectedColor: "#C8C8C8 ",
        backgroundFocusedColor: "#999"
    }
}, {
    isApi: true,
    priority: 1000.0008,
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
    priority: 1000.0009,
    key: "Button",
    style: {
        top: "10dp",
        width: "200dp",
        height: "auto",
        borderRadius: "10dp",
        font: {
            fontSize: "17dp"
        }
    }
}, {
    isApi: true,
    priority: 1000.001,
    key: "TextField",
    style: {
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        borderRadius: "10dp",
        top: "10dp"
    }
}, {
    isApi: true,
    priority: 1000.0013,
    key: "TableView",
    style: {}
}, {
    isApi: true,
    priority: 1000.0014,
    key: "TableViewRow",
    style: {
        layout: "vertical",
        font: {
            fontSize: "18dp"
        },
        height: "auto"
    }
}, {
    isApi: true,
    priority: 1000.0015,
    key: "ImageView",
    style: {
        top: "15dp"
    }
}, {
    isApi: true,
    priority: 1000.0029,
    key: "Tab",
    style: {
        icon: "/images/ic_home.png"
    }
}, {
    isClass: true,
    priority: 10000.0003,
    key: "searchBars",
    style: {
        hinttextid: "procurarText",
        height: "50dp"
    }
}, {
    isClass: true,
    priority: 10000.0006,
    key: "layoutVertical",
    style: {
        layout: "vertical",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL
    }
}, {
    isClass: true,
    priority: 10000.0007,
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
    isClass: true,
    priority: 10000.0011,
    key: "scrollVertical",
    style: {
        width: Ti.UI.FILL,
        height: Ti.UI.FILL
    }
}, {
    isClass: true,
    priority: 10000.0012,
    key: "scrollHorizontal",
    style: {
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL
    }
}, {
    isId: true,
    priority: 100000.003,
    key: "TFprocurar",
    style: {
        hintText: L("procurarDica")
    }
}, {
    isId: true,
    priority: 100000.0031,
    key: "Lprocurar",
    style: {
        textid: "procurarText"
    }
}, {
    isId: true,
    priority: 100000.0032,
    key: "Btadd",
    style: {
        title: L("adicionar")
    }
}, {
    isId: true,
    priority: 100000.0033,
    key: "row",
    style: {
        font: {
            fontSize: "16dp"
        }
    }
} ];