const getDb = require('../util/database').getDb;
const mongo = require('mongodb');

class Books {
    constructor(order, title, author, description, id) {
        this.order = order;
        this.title = title;
        this.author = author;
        this.description = description;
        this._id = id ? new mongo.ObjectID(id) : null;
    }

    save() {
        const db = getDb();
        let dbOp;
        if (this._id) {
            dbOp = db.collection('books').updateOne({ _id: this._id }, {$set: this});
        } else {
            dbOp = db.collection('books').insertOne(this);
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
        .collection('books')
        .find()
        .toArray()
        .then(books => {
            return books;
        })
        .catch(err=> {
            console.log(err);
        });
    }

    static findById(bookId) {
        const db = getDb();
        return db
        .collection('books')
        .find({ _id: new mongo.ObjectID(bookId) })
        .next()
        .then(book => {
            console.log(book);
            return book;
        })
        .catch(err => {
            console.log(err);
        });
    }

    static deleteById(bookId) {
        const db = getDb();
        return db
        .collection('books')
        .deleteOne({_id: new mongo.ObjectId(bookId)})
        .then(result => {
            console.log('deleted')
        })
        .catch(err => {
            console.log(err);
        });
    }
}

module.exports = Books;