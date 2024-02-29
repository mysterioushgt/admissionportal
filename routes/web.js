const express=require('express')
const FrontController = require('../controllers/FrontController')
const CourseController = require('../controllers/CourseController')
const route=express.Router()

//for authentication
const checkUserAuth=require('../middleware/auth')
const AdminController = require('../controllers/AdminController');


route.get('/',FrontController.login)
route.get('/register',FrontController.register)
route.get('/home',checkUserAuth,FrontController.home)
route.get('/about', checkUserAuth, FrontController.about)
route.get('/contact', checkUserAuth,FrontController.contact)
route.post('/userinsert',FrontController.userinsert)

//profile update
route.get('/profile',checkUserAuth ,FrontController.profile)
route.post('/updateProfile',checkUserAuth ,FrontController.updateProfile)
route.post('/changePassword',checkUserAuth ,FrontController.changePassword)



route.post('/verifyLogin',FrontController.verifyLogin)
route.get('/logout',FrontController.logout)


//admin route
route.get('/admin/dashboard',checkUserAuth ,AdminController.dashboard)

route.post('/update_status/:id',checkUserAuth,AdminController.updateStatus)

//course Route
route.post("/course_insert",checkUserAuth,CourseController.courseInsert)
route.get("/course_display",checkUserAuth,CourseController.courseDisplay)
route.get("/courseView/:id",checkUserAuth,CourseController.courseView)
route.get("/courseEdit/:id",checkUserAuth,CourseController.courseEdit)
route.post("/courseUpdate/:id",checkUserAuth,CourseController.courseUpdate)
route.get("/courseDelete/:id",checkUserAuth,CourseController.courseDelete)



module.exports=route