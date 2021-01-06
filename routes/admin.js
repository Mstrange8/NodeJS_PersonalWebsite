const path = require('path');

const express = require('express');

const router = express.Router();

const adminController = require('../controllers/admin');

// About routes
router.get('/admin/about', adminController.getEditAbout);

router.post('/admin/about', adminController.postEditAbout);

// Education routes
router.get('/admin/education', adminController.getEducation)

router.get('/admin/add-education', adminController.getAddEducation);

router.post('/admin/add-education', adminController.postAddEducation);

router.get('/admin/edit-education/:educationId', adminController.getEditEducation);

router.post('/admin/edit-education', adminController.postEditEducation);

router.post('/admin/delete-education', adminController.postDeleteEducation);

// Work routes
router.get('/admin/work', adminController.getWork);

router.get('/admin/add-work', adminController.getAddWork);

router.post('/admin/add-work', adminController.postAddWork);

router.get('/admin/edit-work/:workId', adminController.getEditWork)

router.post('/admin/edit-work', adminController.postEditWork);

router.post('/admin/delete-work', adminController.postDeleteWork);

// Skills routes
router.get('/admin/skills', adminController.getEditSkills);

router.post('/admin/skills', adminController.postEditSkills);

// Projects routes
router.get('/admin/projects', adminController.getProjects)

router.get('/admin/add-project', adminController.getAddProject);

router.post('/admin/add-project', adminController.postAddProject);

router.get('/admin/edit-project/:projectId', adminController.getEditProject);

router.post('/admin/edit-project', adminController.postEditProject);

router.post('/admin/delete-project', adminController.postDeleteProject);

// Contact routes
router.get('/admin/contact', adminController.getEditContact);

router.post('/admin/contact', adminController.postEditContact);

module.exports = router;