const getDb = require('../util/database').getDb;

class Contacts {
    constructor(quote, location, email, phone) {
        this.quote = quote;
        this.location = location;
        this.email = email;
        this.phone = phone;
    }

    save() {
        const db = getDb();
        return db.collection('contact')
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
        .collection('contact')
        .find()
        .toArray()
        .then(contacts => {
            return contacts;
        })
        .catch(err=> {
            console.log(err);
        });
    }
}

module.exports = Contacts;

