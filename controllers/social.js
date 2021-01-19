const Contents = require('../models/about-social');
const Books = require('../models/books');
const Hobbies = require('../models/hobbies');
const Fashion = require('../models/fashion');
const Contact = require('../models/contact-social');

exports.getSocialPage = (req, res, next) => {
    Contents.fetchAll().then(contents => {
        Books.fetchAll().then(books => {
            Hobbies.fetchAll().then(hobbies => {
                Fashion.fetchAll().then(fashion => {
                    Contact.fetchAll().then(contacts => {
                        res.render('social/social', {
                            pageTitle: 'Social',
                            path: '/social',
                            imgs: contents[0],
                            books: books,
                            hobbieNames: hobbies.hobbieNames.split(" "),
                            hobbiePercents: hobbies.hobbiePercents.split(" "),
                            images: fashion.images.replace(/[\n\r]/g, " ").split("  "),
                            contacts: contacts[0]
                        });
                    });
                });
            });
        });
    });

};

