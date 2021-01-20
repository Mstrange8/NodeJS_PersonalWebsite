const Contents = require('../../models/about-social');
const Books = require('../../models/books');
const Hobbies = require('../../models/hobbies');
const Fashion = require('../../models/fashion');
const Contact = require('../../models/contact-social');


// About Controllers
exports.getEditAbout = (req, res, next) => {
    Contents.fetchAll().then(content => {
        res.render('admin/social/about', {
            pageTitle: 'Edit About Social',
            path: '/admin/about-social',
            imgs: content[0]
        });
    })
    .catch(err => {
        console.log(err);
    });
};

exports.postEditAbout = (req, res, next) => {
    const content1 = req.body.content1;
    const content2 = req.body.content2;
    const updatedContents = new Contents(
        content1,
        content2
    );
    updatedContents.save()
    .then(() => {
        res.redirect('/social');
    })
    .catch(err => {
        console.log(err);
    });
};



// Books Controllers
exports.getBooks = (req, res, next) => {
    Books.fetchAll().then(books => {
        res.render('admin/social/books', {
            pageTitle: 'Admin Books',
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
    const books = new Books(order, title, author, description, null);
    books.save();
    res.redirect('/admin/books');
};


exports.getEditBook = (req, res, next) => {
    const editMode = req.query.edit;
    if (!editMode) {
        res.redirect('/');
    }
    const bkId = req.params.bookId;
    Books.findById(bkId)
        .then(book => {
            res.render('admin/social/add-book', {
                pageTitle: 'Edit Book',
                path: '/admin/edit-book',
                editing: editMode,
                books: book
            });
        })
        .catch(err => console.log(err));
};

exports.postEditBook = (req, res, next) => {
    const bookId = req.body.bookId;
    const order = req.body.order;
    const title = req.body.title;
    const author = req.body.author;
    const description = req.body.description;
    const updatedBooks = new Books(
        order,
        title,
        author,
        description,
        bookId
    );
    updatedBooks.save();
    res.redirect('/admin/books');
};

exports.postDeleteBook = (req, res, next) => {
    const bkId = req.body.bookId;
    Books.deleteById(bkId)
        .then(() => {
            console.log('DESTROYED PRODUCTS');
            res.redirect('/admin/books');
        })
        .catch(err => console.log(err));
};



// Hobbies Controllers 
exports.getEditHobbies = (req, res, next) => {
    Hobbies.fetchAll().then(hobbies => {
        res.render('admin/social/hobbies', {
            pageTitle: 'Edit Hobbies',
            path: '/admin/hobbies',
            hobbieNames: hobbies[0].hobbieNames,
            hobbiePercents: hobbies[0].hobbiePercents
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
    updatedHobbies.save()
    .then(() => {
        res.redirect('/');
    })
    .catch(err => {
        console.log(err);
    });
};



// Fashion Controllers
exports.getEditFashion = (req, res, next) => {
    Fashion.fetchAll().then(fashion => {
        res.render('admin/social/fashion', {
            pageTitle: 'Edit Fashion',
            path: '/admin/fashion',
            fashion: fashion[0]
        });
    });
};

exports.postEditFashion = (req, res, next) => {
    const images = req.body.images;
    const updatedFashion = new Fashion (
        images
    );
    updatedFashion.save()
    .then(() => {
        res.redirect('/social');
    })
    .catch(err => {
        console.log(err);
    });
};



// Contact Controllers
exports.getEditContact = (req, res, next) => {
    Contact.fetchAll(contact => {
        res.render('admin/social/contact', {
            pageTitle: 'Edit Contacts',
            path: '/admin/contact-social',
            contacts: contact[0]
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
    updatedContact.save()
    .then(() => {
        res.redirect('/');
    })
    .catch(err => {
        console.log(err);
    });
};