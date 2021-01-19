const getDb = require('../util/database').getDb;

class Contents {
    constructor(content1, content2) {
        this.content1 = content1;
        this.content2 = content2;
    }

    save() {
        const db = getDb();
        return db.collection('about')
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
        .collection('about')
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

module.exports = Contents;
