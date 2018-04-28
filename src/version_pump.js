"use strict";
module.exports = function (version_str) {
    let splitString = version_str.split (".", 3);
    let patchVersion = splitString[2].split ("\"", 1);
    let patchNumber = Number (patchVersion[0]);
    patchNumber++;
    splitString[2] = String (patchNumber);
    return splitString.join (".");
}