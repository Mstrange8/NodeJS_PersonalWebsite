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

    static fetchAll() {
        const db = getDb();
        return db
        .collection('fashion')
        .find()
        .toArray()
        .then(images => {
            return images;
        })
        .catch(err=> {
            console.log(err);
        });
    }
}
