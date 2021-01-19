const getDb = require('../util/database').getDb;
const mongo = require('mongodb');

class Work {
    constructor(order, company, date, title, description, id) {
        this.order = order;
        this.company = company;
        this.date = date;
        this.title = title;
        this.description = description;
        this._id = id ? new mongo.ObjectId(id) : null;
    }
    save() {
        const db = getDb();
        let dbOp;
        if (this._id) {
            dbOp = db.collection('work').updateOne({ _id: this._id }, {$set: this});
        } else {
            dbOp = db.collection('work').insertOne(this);
        }
        return dbOp
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
        .collection('work')
        .find()
        .toArray()
        .then(wrk => {
            return wrk;
        })
        .catch(err=> {
            console.log(err);
        });
    }

    static findById(wrkId) {
        const db = getDb();
        return db
        .collection('work')
        .find({ _id: new mongo.ObjectID(wrkId) })
        .next()
        .then(wrk => {
            console.log(wrk);
            return wrk;
        })
        .catch(err => {
            console.log(err);
        });
    }

    static deleteById(wrkId) {
        const db = getDb();
        return db
        .collection('work')
        .deleteOne({_id: new mongo.ObjectId(wrkId)})
        .then(result => {
            console.log('deleted')
        })
        .catch(err => {
            console.log(err);
        });
    }
}

module.exports = Work;

