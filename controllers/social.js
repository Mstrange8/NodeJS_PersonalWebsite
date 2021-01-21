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
                        console.log(books);
                        res.render('social/social', {
                            pageTitle: 'Social',
                            path: '/social',
                            imgs: contents[0],
                            books: books.sort(function(first, second) {
                                return first.order - second.order
                            }),
                            hobbieNames: hobbies[0].hobbieNames.split(" "),
                            hobbiePercents: hobbies[0].hobbiePercents.split(" "),
                            images: fashion[0].images.replace(/[\n\r]/g, " ").split("  "),
                            contacts: contacts[0]
                        });
                    });
                });
            });
        });
    });

};

