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
            "hex": /^#([a-fA-F0-9]{3,4}{1,2})$/,
            "rgb": /^rgb\((\d{1,3})(,| )\s*(\d{1,3})(,| )\s*(\d{1,3})\)$/,
            "rgba": /^rgba\((\d{1,3})(,| )\s*(\d{1,3})(,| )\s*(\d{1,3})(,| )\s*(\d?\.?\d+)\)$/,
            "hsl": /^hsl\((\d{1,3}),\s*(\d{1,3})%,\s*(\d{1,3})%,\s*(\d?\.?\d+)\)$/,
            "hsla": /^hsla\((\d{1,3}),\s*(\d{1,3})%,\s*(\d{1,3})%,\s*(\d?\.?\d+)\)$/,
            "name": /^(?:ALICEBLUE|ANTIQUEWHITE|AQUA|AQUAMARINE|AZURE|BEIGE|BISQUE|BLACK|BLANCHEDALMOND|BLUE|BLUEVIOLET|BROWN|BURLYWOOD|CADETBLUE|CHARTREUSE|CHOCOLATE|CORAL|CORNFLOWERBLUE|CORNSILK|CRIMSON|CYAN|DARKBLUE|DARKCYAN|DARKGOLDENROD|DARKGRAY|DARKGREEN|DARKKHAKI|DARKMAGENTA|DARKOLIVEGREEN|DARKORANGE|DARKORCHID|DARKRED|DARKSALMON|DARKSEAGREEN|DARKSLATEBLUE|DARKSLATEGRAY|DARKTURQUOISE|DARKVIOLET|DEEPPINK|DEEPSKYBLUE|DIMGRAY|DODGERBLUE|FLORALWHITE|FORESTGREEN|FUCHSIA|GAINSBORO|GHOSTWHITE|GOLD|GOLDENROD|GRAY|GREEN|GREENYELLOW|HONEYDEW|HOTPINK|INDIANRED|INDIGO|IVORY|KHAKI|LAVENDER|LAVENDERBLUSH|LAWNGREEN|LEMONCHIFFON|LIGHTBLUE|LIGHTCORAL|LIGHTCYAN|LIGHTGOLDENRODYELLOW|LIGHTGRAY|LIGHTGREEN|LIGHTPINK|LIGHTSALMON|LIGHTSEAGREEN|LIGHTSKYBLUE|LIGHTSLATEGRAY|LIGHTSTEELBLUE|LIGHTYELLOW|LIME|LIMEGREEN|LINEN|MAGENTA|MAROON|MEDIUMAQUAMARINE|MEDIUMBLUE|MEDIUMORCHID|MEDIUMPURPLE|MEDIUMSEAGREEN|MEDIUMSLATEBLUE|MEDIUMSPRINGGREEN|MEDIUMTURQUOISE|MEDIUMVIOLETRED|MIDNIGHTBLUE|MINTCREAM|MISTYROSE|MOCCASIN|NAVAJOWHITE|NAVY|OLDLACE|OLIVE|OLIVEDRAB|ORANGE|ORANGERED|ORCHID|PALEGOLDENROD|PALEGREEN|PALETURQUOISE|PALEVIOLETRED|PAPAYAWHIP|PEACHPUFF|PERU|PINK|PLUM|POWDERBLUE|PURPLE|REBECCAPURPLE|RED|ROSYBROWN|ROYALBLUE|SADDLEBROWN|SALMON|SANDYBROWN|SEAGREEN|SEASHELL|SIENNA|SILVER|SKYBLUE|SLATEBLUE|SLATEGRAY|SNOW|SPRINGGREEN|STEELBLUE|TAN|TEAL|THISTLE|TOMATO|TURQUOISE|VIOLET|WHEAT|WHITE|WHITESMOKE|YELLOW|YELLOWGREEN)$/gi
        },
        url: {
            "https": /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})(\/[\w.-]*)*\/?$/,
            "ip": /^(http:\/\/)?\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
            "ftp": /^ftp:\/\/[^\s\/$.?#].[^\s]*$/,
            "sftp": /^sftp:\/\/[^\s\/$.?#].[^\s]*$/,
            "smtp": /^smtp:\/\/[^\s\/$.?#].[^\s]*$/,
            "pop3": /^pop3:\/\/[^\s\/$.?#].[^\s]*$/,
            "imap": /^imap:\/\/[^\s\/$.?#].[^\s]*$/,
            "ldap": /^ldap:\/\/[^\s\/$.?#].[^\s]*$/,
            "dns": /^dns:\/\/[^\s\/$.?#].[^\s]*$/,
            "ftps": /^ftps:\/\/[^\s\/$.?#].[^\s]*$/,
            "sftps": /^sftps:\/\/[^\s\/$.?#].[^\s]*$/,
            "smtps": /^smtps:\/\/[^\s\/$.?#].[^\s]*$/,
            "imaps": /^imaps:\/\/[^\s\/$.?#].[^\s]*$/,
            "ldaps": /^ldaps:\/\/[^\s\/$.?#].[^\s]*$/,
            "dnsoverhttps": /^https:\/\/dns\.google\/dns-query$/
        }
    }
    constructor(name) {

    }
}