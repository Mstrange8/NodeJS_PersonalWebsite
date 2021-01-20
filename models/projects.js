const getDb = require('../util/database').getDb;
const mongo = require('mongodb');

class Projects {
    constructor(order, title, image, description, id) {
        this.order = order;
        this.title = title;
        this.image = image;
        this.description = description;
        this._id = id ? new mongo.ObjectId(id) : null;
    }

    save() {
        const db = getDb();
        let dbOp;
        if (this._id) {
            dbOp = db.collection('projects').updateOne({ _id: this._id }, {$set: this});
        } else {
            dbOp = db.collection('projects').insertOne(this);
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
        .collection('projects')
        .find()
        .toArray()
        .then(proj => {
            return proj;
        })
        .catch(err=> {
            console.log(err);
        });
    }

    static findById(projId) {
        const db = getDb();
        return db
        .collection('projects')
        .find({ _id: new mongo.ObjectID(projId) })
        .next()
        .then(proj => {
            console.log(proj);
            return proj;
        })
        .catch(err => {
            console.log(err);
        });
    }

    static deleteById(projId) {
        const db = getDb();
        return db
        .collection('projects')
        .deleteOne({_id: new mongo.ObjectId(projId)})
        .then(result => {
            console.log('deleted')
        })
        .catch(err => {
            console.log(err);
        });
    }
}

module.exports = Projects;
