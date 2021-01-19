const getDb = require('../util/database').getDb;
const mongo = require('mongodb');

class Fashion {
    constructor(images) {
        this.images = images;
    }

    save() {
        const db = getDb();
        return db.collection('fashion')
        .updateOne({}, {$set: this})
        .then(result => {
            console.log(result);
        })
        .catch(err => {
            console.log(err);
        });
    }
}


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