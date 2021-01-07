const Contents = require('../models/about-social');
const Books = require('../models/books');
const Hobbies = require('../models/hobbies');
const Fashion = require('../models/fashion');
const Contact = require('../models/contact-social');

exports.getSocialPage = (req, res, next) => {
    Contents.fetchContents(contents => {
        Books.fetchAll(books => {
            Hobbies.fetchAll(hobbies => {
                Fashion.fetchAll(fashion => {
                    Contact.fetchAll(contacts => {
                        res.render('social/social', {
                            pageTitle: 'Social',
                            path: '/social',
                            imgs: contents,
                            books: books,
                            hobbieNames: hobbies.hobbieNames.split(" "),
                            hobbiePercents: hobbies.hobbiePercents.split(" "),
                            images: fashion.images.replace(/[\n\r]/g, " ").split("  "),
                            contacts: contacts
                        });
                    });
                });
            });
        });
    });

};

