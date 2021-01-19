const getDb = require('../util/database').getDb;
const mongo = require('mongodb');

class Books {
    constructor(order, title, author, description) {
        this.order = order;
        this.title = title;
        this.author = author;
        this.description = description;
    }

    save() {
        const db = getDb();
        return db.collection('books')
        .insertOne(this)
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
        .then(contents => {
            return contents;
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
}

module.exports = Books;