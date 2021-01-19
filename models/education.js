const getDb = require('../util/database').getDb;
const mongo = require('mongodb');

class Education {
    constructor(order, school, date, degree, description, id) {
        this.order = order;
        this.school = school;
        this.date = date;
        this.degree = degree;
        this.description = description;
        this._id = id ? new mongo.ObjectId(id) : null;
    }

    save() {
        const db = getDb();
        let dbOp;
        if (this._id) {
            dbOp = db.collection('education').updateOne({ _id: this._id }, {$set: this});
        } else {
            dbOp = db.collection('education').insertOne(this);
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
        .collection('education')
        .find()
        .toArray()
        .then(edu => {
            return edu;
        })
        .catch(err=> {
            console.log(err);
        });
    }

    static findById(eduId) {
        const db = getDb();
        return db
        .collection('education')
        .find({ _id: new mongo.ObjectID(eduId) })
        .next()
        .then(edu => {
            console.log(edu);
            return edu;
        })
        .catch(err => {
            console.log(err);
        });
    }

    static deleteById(eduId) {
        const db = getDb();
        return db
        .collection('education')
        .deleteOne({_id: new mongo.ObjectId(eduId)})
        .then(result => {
            console.log('deleted')
        })
        .catch(err => {
            console.log(err);
        });
    }
}

module.exports = Education;
