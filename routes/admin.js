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
router.get('/admin/about', socialAdminController.getEditAbout);

router.post('/admin/about', socialAdminController.postEditAbout);

// Books routes
router.get('/admin/education', socialAdminController.getEducation)

router.get('/admin/add-education', socialAdminController.getAddEducation);

router.post('/admin/add-education', socialAdminController.postAddEducation);

router.get('/admin/edit-education/:educationId', socialAdminController.getEditEducation);

router.post('/admin/edit-education', socialAdminController.postEditEducation);

router.post('/admin/delete-education', publicAdminController.postDeleteEducation);


// Hobbies routes
router.get('/admin/skills', socialAdminController.getEditSkills);

router.post('/admin/skills', socialAdminController.postEditSkills);

// Fashion routes
router.get('/admin/projects', socialAdminController.getProjects)

router.get('/admin/add-project', socialAdminController.getAddProject);

router.post('/admin/add-project', socialAdminController.postAddProject);

router.get('/admin/edit-project/:projectId', socialAdminController.getEditProject);

router.post('/admin/edit-project', socialAdminController.postEditProject);

router.post('/admin/delete-project', socialAdminController.postDeleteProject);

// Contact routes
router.get('/admin/contact',socialAdminController.getEditContact);

router.post('/admin/contact', socialAdminController.postEditContact);


module.exports = router;