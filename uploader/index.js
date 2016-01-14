'use strict';

class Uploader {
    inMemory(file) {
        console.log("File content: %s", JSON.stringify(file));
    }
}

module.exports = new Uploader();