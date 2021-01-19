const getDb = require('../util/database').getDb;

class Skills {
    constructor(skillNames, skillPercents) {
        this.skillNames = skillNames;
        this.skillPercents = skillPercents;
    }

    save() {
        const db = getDb();
        return db.collection('skills')
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
        .collection('skills')
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

module.exports = Skills;


