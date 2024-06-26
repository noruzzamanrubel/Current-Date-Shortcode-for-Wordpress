const attributes = {
    blockID: {
        type: "string",
        default: ""
    },
    dateFormat: {
        type: "string",
        default: "jS F Y"
    },
    display: {
        type: "string",
        default: "inline-block"
    },
    textColor: {
        type: "string",
        default: ""
    },
    fontSize: {
        type: "number",
        default: 17
    },
    letterSpacing: {
        type: "number",
        default: 0
    },
    textTransform: {
        type: "string",
        default: "none"
    },
    fontFamily: {
        type: "string",
        default: "default",
    },
    fontWeight: {
        type: "string",
        default: "normal"
    },
    lineHeight: {
        type: "number",
        default: 24
    },
    desktop_padding: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    tab_padding: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    mobile_padding: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    desktop_margin: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    tab_margin: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    mobile_margin: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    activePaddingDevice: {
        type: "string",
        default: "desktop"
    },
    activeMarginDevice: {
        type: "string",
        default: "desktop"
    },
    paddingLink : {
        type : "boolean",
        default: true
    },
    marginLink : {
        type : "boolean",
        default: true
    }
};

export default attributes;
