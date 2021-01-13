const path = require('path');

const express = require('express');
const passport = require('passport');

const router = express.Router();

const publicAdminController = require('../controllers/public/admin');

const socialAdminController = require('../controllers/social/admin');

// Admin routes
router.get('/admin', checkAuthenticated, publicAdminController.getAdmin);

router.post('/login', checkNotAuthenticated, passport.authenticate('local', {
    successRedirect: '/admin',
    failureRedirect: '/login',
    failureFlash: true
}));

router.get('/login', checkNotAuthenticated, (req, res) => {
    res.render('admin/login', {
        pageTitle: "Login"
    });
});

router.delete('/logout', (req, res) => {
    req.logOut()
    res.redirect('/login')
});

// About routes
router.get('/admin/about', checkAuthenticated, publicAdminController.getEditAbout);

router.post('/admin/about', checkAuthenticated, publicAdminController.postEditAbout);

// Education routes
router.get('/admin/education', checkAuthenticated, publicAdminController.getEducation)

router.get('/admin/add-education', checkAuthenticated, publicAdminController.getAddEducation);

router.post('/admin/add-education', checkAuthenticated, publicAdminController.postAddEducation);

router.get('/admin/edit-education/:educationId', checkAuthenticated, publicAdminController.getEditEducation);

router.post('/admin/edit-education', checkAuthenticated, publicAdminController.postEditEducation);

router.post('/admin/delete-education', checkAuthenticated, publicAdminController.postDeleteEducation);

// Work routes
router.get('/admin/work', checkAuthenticated, publicAdminController.getWork);

router.get('/admin/add-work', checkAuthenticated, publicAdminController.getAddWork);

router.post('/admin/add-work', checkAuthenticated, publicAdminController.postAddWork);

router.get('/admin/edit-work/:workId', checkAuthenticated, publicAdminController.getEditWork)

router.post('/admin/edit-work', checkAuthenticated, publicAdminController.postEditWork);

router.post('/admin/delete-work', checkAuthenticated, publicAdminController.postDeleteWork);

// Skills routes
router.get('/admin/skills', checkAuthenticated, publicAdminController.getEditSkills);

router.post('/admin/skills', publicAdminController.postEditSkills);

// Projects routes
router.get('/admin/projects', checkAuthenticated, publicAdminController.getProjects)

router.get('/admin/add-project', checkAuthenticated, publicAdminController.getAddProject);

router.post('/admin/add-project', checkAuthenticated, publicAdminController.postAddProject);

router.get('/admin/edit-project/:projectId', checkAuthenticated, publicAdminController.getEditProject);

router.post('/admin/edit-project', publicAdminController.postEditProject);

router.post('/admin/delete-project', checkAuthenticated, publicAdminController.postDeleteProject);

// Contact routes
router.get('/admin/contact', checkAuthenticated, publicAdminController.getEditContact);

router.post('/admin/contact', checkAuthenticated, publicAdminController.postEditContact);




// About social routes
router.get('/admin/about-social', socialAdminController.getEditAbout);

router.post('/admin/about-social', socialAdminController.postEditAbout);

// Books routes
router.get('/admin/books', socialAdminController.getBooks)

router.get('/admin/add-book', socialAdminController.getAddBook);

router.post('/admin/add-book', socialAdminController.postAddBook);

router.get('/admin/edit-book/:bookId', socialAdminController.getEditBook);

router.post('/admin/edit-book', socialAdminController.postEditBook);

router.post('/admin/delete-book', socialAdminController.postDeleteBook);

// Hobbies routes
router.get('/admin/hobbies', socialAdminController.getEditHobbies);

router.post('/admin/hobbies', socialAdminController.postEditHobbies);

// Fashion routes
router.get('/admin/fashion', socialAdminController.getEditFashion);

router.post('/admin/fashion', socialAdminController.postEditFashion);

// Contact routes
router.get('/admin/contact-social',socialAdminController.getEditContact);

router.post('/admin/contact-social', socialAdminController.postEditContact);

function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next()
    }
    res.redirect('/login')
}

function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return res.redirect('/admin')
    }
    next()
}

module.exports = router;