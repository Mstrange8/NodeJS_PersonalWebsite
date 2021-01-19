const getDb = require('../util/database').getDb;

class Hobbies {
    constructor(hobbieNames, hobbiePercents) {
        this.hobbieNames = hobbieNames;
        this.hobbiePercents = hobbiePercents;
    }

    save() {
        const db = getDb();
        return db.collection('hobbies')
        .updateOne({}, {$set: this})
        .then(result => {
            console.log(result);
        })
        .catch(err => {
            console.log(err);
        });
    }

    static fetchAll() {
        const db = getDb();
        return db
        .collection('hobbies')
        .find()
        .toArray()
        .then(contents => {
            return contents;
        })
        .catch(err=> {
            console.log(err);
        });
    }
}

module.exports = Hobbies;

