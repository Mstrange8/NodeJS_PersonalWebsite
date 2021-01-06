const fs = require('fs');
const path = require('path');
const { exit } = require('process');

const p = path.join(
    path.dirname(require.main.filename),
    'data',
    'hobbies.json'
);

const getHobbiesFromFile = (callback) => {
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            callback([]);
        } else {
            callback(JSON.parse(fileContent));
        }
    });
}

module.exports = class Hobbies {
    constructor(hobbieNames, hobbiePercents) {
        this.hobbieNames = hobbieNames;
        this.hobbiePercents = hobbiePercents;
    }

    save() {
        getHobbiesFromFile(Hobbies => {
            Hobbies = this;
            fs.writeFile(p, JSON.stringify(Hobbies), err => {
                console.log(err);
            });
        });
    }

    static fetchAll(callback) {
        getHobbiesFromFile(callback);
    }
}