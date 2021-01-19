const Contents = require('../models/about');
const Education = require('../models/education');
const Work = require('../models/work');
const Skills = require('../models/skills');
const Projects = require('../models/projects');
const Contact = require('../models/contact');

exports.getCareerPage = (req, res, next) => {
    Contents.fetchAll().then(contents => {
        Education.fetchAll().then(eds => {
            Work.fetchAll(wrks => {
                Skills.fetchAll(skills => {
                    Projects.fetchAll(projects => {
                        Contact.fetchAll().then(contacts => {
                            res.render('public/career', {
                                pageTitle: 'Career',
                                path: '/career',
                                imgs: contents[0],
                                eds: eds,
                                wrks: wrks,
                                skillNames: skills.skillNames.split(" "),
                                skillPercents: skills.skillPercents.split(" "),
                                projects: projects,
                                contacts: contacts[0]
                            });
                        });
                    });
                });
            });
        });
    });
};

