/**
 * All rights reserved.
 * Copyright (c) 2023 
 * Author WetRain
 */

"use strict";

class Regex {
    list = {
        color: {
            "hex3": /^#([a-fA-F0-9]{3})$/,
            "hex4": /^#([a-fA-F0-9]{4})$/,
            "hex6": /^#([a-fA-F0-9]{6})$/,
            "hex8": /^#([a-fA-F0-9]{8})$/,
            "hex": /^#([a-fA-F0-9]{3,4}){1,2}$/,
            "rgb": /^rgb\((\d{1,3})(,| )\s*(\d{1,3})(,| )\s*(\d{1,3})\)$/,
            "rgba": /^rgba\((\d{1,3})(,| )\s*(\d{1,3})(,| )\s*(\d{1,3})(,| )\s*(\d?\.?\d+)\)$/,
            "hsl": /^hsl\((\d{1,3}),\s*(\d{1,3})%,\s*(\d{1,3})%,\s*(\d?\.?\d+)\)$/,
            "hsla": /^hsla\((\d{1,3}),\s*(\d{1,3})%,\s*(\d{1,3})%,\s*(\d?\.?\d+)\)$/,
            "name": /^(?:ALICEBLUE|ANTIQUEWHITE|AQUA|AQUAMARINE|AZURE|BEIGE|BISQUE|BLACK|BLANCHEDALMOND|BLUE|BLUEVIOLET|BROWN|BURLYWOOD|CADETBLUE|CHARTREUSE|CHOCOLATE|CORAL|CORNFLOWERBLUE|CORNSILK|CRIMSON|CYAN|DARKBLUE|DARKCYAN|DARKGOLDENROD|DARKGRAY|DARKGREEN|DARKKHAKI|DARKMAGENTA|DARKOLIVEGREEN|DARKORANGE|DARKORCHID|DARKRED|DARKSALMON|DARKSEAGREEN|DARKSLATEBLUE|DARKSLATEGRAY|DARKTURQUOISE|DARKVIOLET|DEEPPINK|DEEPSKYBLUE|DIMGRAY|DODGERBLUE|FLORALWHITE|FORESTGREEN|FUCHSIA|GAINSBORO|GHOSTWHITE|GOLD|GOLDENROD|GRAY|GREEN|GREENYELLOW|HONEYDEW|HOTPINK|INDIANRED|INDIGO|IVORY|KHAKI|LAVENDER|LAVENDERBLUSH|LAWNGREEN|LEMONCHIFFON|LIGHTBLUE|LIGHTCORAL|LIGHTCYAN|LIGHTGOLDENRODYELLOW|LIGHTGRAY|LIGHTGREEN|LIGHTPINK|LIGHTSALMON|LIGHTSEAGREEN|LIGHTSKYBLUE|LIGHTSLATEGRAY|LIGHTSTEELBLUE|LIGHTYELLOW|LIME|LIMEGREEN|LINEN|MAGENTA|MAROON|MEDIUMAQUAMARINE|MEDIUMBLUE|MEDIUMORCHID|MEDIUMPURPLE|MEDIUMSEAGREEN|MEDIUMSLATEBLUE|MEDIUMSPRINGGREEN|MEDIUMTURQUOISE|MEDIUMVIOLETRED|MIDNIGHTBLUE|MINTCREAM|MISTYROSE|MOCCASIN|NAVAJOWHITE|NAVY|OLDLACE|OLIVE|OLIVEDRAB|ORANGE|ORANGERED|ORCHID|PALEGOLDENROD|PALEGREEN|PALETURQUOISE|PALEVIOLETRED|PAPAYAWHIP|PEACHPUFF|PERU|PINK|PLUM|POWDERBLUE|PURPLE|REBECCAPURPLE|RED|ROSYBROWN|ROYALBLUE|SADDLEBROWN|SALMON|SANDYBROWN|SEAGREEN|SEASHELL|SIENNA|SILVER|SKYBLUE|SLATEBLUE|SLATEGRAY|SNOW|SPRINGGREEN|STEELBLUE|TAN|TEAL|THISTLE|TOMATO|TURQUOISE|VIOLET|WHEAT|WHITE|WHITESMOKE|YELLOW|YELLOWGREEN)$/gi
        },
        url: {
            "https": /^(https?:\/\/)?((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|((\d{1,3}\.){3}\d{1,3}))(\:\d+)?(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(\#[-a-z\d_]*)?$/i,
            "ip": /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/,
            "email": /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            "data": /^\s*data:([a-z]+\/[a-z0-9-+.]+(;[a-z-]+=[a-z0-9-]+)?)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s]*?)\s*$/i,
            "url": /^([a-zA-Z]+:\/\/)?((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|((\d{1,3}\.){3}\d{1,3}))(\:\d+)?(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(\#[-a-z\d_]*)?$/i,
        }
    }
    constructor(name) {
        var path = name.split(" ");
        var folder = this.list;
        var detail = {
            message: "",
            status: "success",
            regexp: ""
        }
        path.forEach(p => {
            if (folder.hasOwnProperty(p) == true) {
                folder = folder[p];
            } else {
                return detail.status = "error", detail.message = `Name ${p} is not a valid value in list.`;
            }
        });
        detail.status == "success" && (detail.regexp = folder, this.regexp = folder);
        this.detail = detail;
        return this;
    }
    test(str) {
        if (typeof str != "string") return;
        return this.regexp.test(str);
    }
}