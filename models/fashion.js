const fs = require('fs');
const path = require('path');
const { exit } = require('process');

const p = path.join(
    path.dirname(require.main.filename),
    'data',
    'fashion.json'
);

const getFashionFromFile = (callback) => {
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            callback([]);
        } else {
            callback(JSON.parse(fileContent));
        }
    });
}

module.exports = class Fashion {
    constructor(images) {
        this.images = images;
    }

    save() {
        getFashionFromFile(fashion => {
            fashion = this;
            fs.writeFile(p, JSON.stringify(fashion), err => {
                console.log(err);
            });
        });
    }

    static fetchAll(callback) {
        getFashionFromFile(callback);
    }
}