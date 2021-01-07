const Contents = require('../../models/about-social');
const Books = require('../../models/books');
const Hobbies = require('../../models/hobbies');
const Fashion = require('../../models/fashion');
const Contact = require('../../models/contact-social');



// About Controllers
exports.getEditAbout = (req, res, next) => {
    Contents.fetchContents(contents => {
        res.render('admin/social/about', {
            pageTitle: 'Edit About Social',
            path: '/admin/about-social',
            imgs: contents
        });
    });
};

exports.postEditAbout = (req, res, next) => {
    const content1 = req.body.content1;
    const content2 = req.body.content2;
    const updatedContents = new Contents(
        content1,
        content2
    );
    updatedContents.save();
    res.redirect('/social');
};



// Books Controllers
exports.getBooks = (req, res, next) => {
    Books.fetchAll(books => {
        res.render('admin/social/books', {
            pageTitle: '/Admin Books',
            path: '/admin/books',
            books: books
        });
    });
};

exports.getAddBook = (req, res, next) => {
    res.render('admin/social/add-book', {
        pageTitle: 'Add Books',
        path: '/admin/add-book',
        editing: false
    });
};

exports.postAddBook = (req, res, next) => {
    const order = req.body.order;
    const title = req.body.title;
    const author = req.body.author;
    const description = req.body.description;
    const books = new Books(null, order, title, author, description);
    books.save();
    res.redirect('/admin/books');
};


exports.getEditBook = (req, res, next) => {
    const editMode = req.query.edit;
    if (!editMode) {
        res.redirect('/');
    }
    const bkId = req.params.bookId;
    Books.findById(bkId, books => {
        if (!books) {
            return res.redirect('/');
        }
        res.render('admin/social/add-book', {
            pageTitle: 'Edit Book',
            path: '/admin/edit-book',
            editing: editMode,
            books: books
        });
    });
};

exports.postEditBook = (req, res, next) => {
    const id = req.body.bookId;
    const order = req.body.order;
    const title = req.body.title;
    const author = req.body.author;
    const description = req.body.description;
    const updatedBooks = new Books(
        id,
        order,
        title,
        author,
        description
    );
    updatedBooks.save();
    res.redirect('/admin/books');
};

exports.postDeleteBook = (req, res, next) => {
    const bkId = req.body.bookId;
    Books.deleteById(bkId);
    res.redirect('/admin/books');
};



// Hobbies Controllers 
exports.getEditHobbies = (req, res, next) => {
    Hobbies.fetchAll(hobbies => {
        res.render('admin/social/hobbies', {
            pageTitle: 'Edit Hobbies',
            path: '/admin/hobbies',
            hobbieNames: hobbies.hobbieNames,
            hobbiePercents: hobbies.hobbiePercents
        });
    });
    
};

exports.postEditHobbies = (req, res, next) => {
    const hobbieNames = req.body.hobbieNames;
    const hobbiePercents = req.body.hobbiePercents;
    const updatedHobbies = new Hobbies(
        hobbieNames,
        hobbiePercents
    );
    updatedHobbies.save();
    res.redirect('/');
};



// Fashion Controllers
exports.getEditFashion = (req, res, next) => {
    Fashion.fetchAll(fashion => {
        res.render('admin/social/fashion', {
            pageTitle: 'Edit Fashion',
            path: '/admin/fashion',
            fashion: fashion
        });
    });
};

exports.postEditFashion = (req, res, next) => {
    const images = req.body.images;
    const updatedFashion = new Fashion (
        images
    );
    updatedFashion.save();
    res.redirect('/social');
};



// Contact Controllers
exports.getEditContact = (req, res, next) => {
    Contact.fetchAll(contact => {
        res.render('admin/social/contact', {
            pageTitle: 'Edit Contacts',
            path: '/admin/contact-social',
            contacts: contact
        });
    });
    
};

exports.postEditContact = (req, res, next) => {
    const quote = req.body.quote;
    const location = req.body.location;
    const email = req.body.email;
    const phone = req.body.phone;
    const updatedContact = new Contact(
        quote,
        location,
        email,
        phone
    );
    updatedContact.save();
    res.redirect('/social');
};