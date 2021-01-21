const Contents = require('../models/about');
const Education = require('../models/education');
const Work = require('../models/work');
const Skills = require('../models/skills');
const Projects = require('../models/projects');
const Contact = require('../models/contact');

exports.getCareerPage = (req, res, next) => {
    Contents.fetchAll().then(contents => {
        Education.fetchAll().then(eds => {
            Work.fetchAll().then(wrks => {
                Skills.fetchAll().then(skills => {
                    Projects.fetchAll().then(projects => {
                        Contact.fetchAll().then(contacts => {
                            res.render('public/career', {
                                pageTitle: 'Career',
                                path: '/career',
                                imgs: contents[0],
                                eds: eds.sort(function(first, second) {
                                    return first.order - second.order
                                }),
                                wrks: wrks.sort(function(first, second) {
                                    return first.order - second.order
                                }),
                                skillNames: skills[0].skillNames.split(" "),
                                skillPercents: skills[0].skillPercents.split(" "),
                                projects: projects.sort(function(first, second) {
                                    return first.order - second.order
                                }),
                                contacts: contacts[0]
                            });
                        });
                    });
                });
            });
        });
    });
};

