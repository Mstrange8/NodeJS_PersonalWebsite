const path = require('path');

const express = require('express');

const router = express.Router();

const publicAdminController = require('../controllers/public/admin');

const socialAdminController = require('../controllers/social/admin');

// About routes
router.get('/admin/about', publicAdminController.getEditAbout);

router.post('/admin/about', publicAdminController.postEditAbout);

// Education routes
router.get('/admin/education', publicAdminController.getEducation)

router.get('/admin/add-education', publicAdminController.getAddEducation);

router.post('/admin/add-education', publicAdminController.postAddEducation);

router.get('/admin/edit-education/:educationId', publicAdminController.getEditEducation);

router.post('/admin/edit-education', publicAdminController.postEditEducation);

router.post('/admin/delete-education', publicAdminController.postDeleteEducation);

// Work routes
router.get('/admin/work', publicAdminController.getWork);

router.get('/admin/add-work', publicAdminController.getAddWork);

router.post('/admin/add-work', publicAdminController.postAddWork);

router.get('/admin/edit-work/:workId', publicAdminController.getEditWork)

router.post('/admin/edit-work', publicAdminController.postEditWork);

router.post('/admin/delete-work', publicAdminController.postDeleteWork);

// Skills routes
router.get('/admin/skills', publicAdminController.getEditSkills);

router.post('/admin/skills', publicAdminController.postEditSkills);

// Projects routes
router.get('/admin/projects', publicAdminController.getProjects)

router.get('/admin/add-project', publicAdminController.getAddProject);

router.post('/admin/add-project', publicAdminController.postAddProject);

router.get('/admin/edit-project/:projectId', publicAdminController.getEditProject);

router.post('/admin/edit-project', publicAdminController.postEditProject);

router.post('/admin/delete-project', publicAdminController.postDeleteProject);

// Contact routes
router.get('/admin/contact', publicAdminController.getEditContact);

router.post('/admin/contact', publicAdminController.postEditContact);




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
router.get('/admin/fashion', socialAdminController.getFashion)

router.get('/admin/add-fashion', socialAdminController.getAddFashion);

router.post('/admin/add-fashion', socialAdminController.postAddFashion);

router.get('/admin/edit-fashion/:fashionId', socialAdminController.getEditFashion);

router.post('/admin/edit-fashion', socialAdminController.postEditFashion);

router.post('/admin/delete-fashion', socialAdminController.postDeleteFashion);

// Contact routes
router.get('/admin/contact-social',socialAdminController.getEditContact);

router.post('/admin/contact-social', socialAdminController.postEditContact);


module.exports = router;