const CourseModel = require("../models/course")
const nodemailer = require('nodemailer')

class AdminController {
    static dashboard = async (req, res) => {
        try {
            const { name, image } = req.userData
            const data = await CourseModel.find()
            res.render("admin/dashboard", { n: name, i: image, d: data })
        } catch (err) {
            console.error(err);
        }
    }
    static updateStatus = async (req, res) => {
        try {
            //console.log(req.body)
            const { comment, name, email, status } = req.body
            await CourseModel.findByIdAndUpdate(req.params.id, {
                comment: comment,
                status: status
            })
            this.sendEmail(name, email, status, comment)
            res.redirect('/admin/dashboard')
        } catch {
            console.log(error)
        }
    }

    static sendEmail = async (name, email, status, comment) => {
        // console.log(name,email,status,comment)
        // connenct with the smtp server

        let transporter = await nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,

            auth: {
                user: "salonigarg152@gmail.com",
                pass: "wpjkltrnlcynqruu",// two step verification password
            },
        });
        let info = await transporter.sendMail({
            from: "test@gmail.com", // sender address
            to: email, // list of receivers
            subject: ` Course ${status}`, // Subject line
            text: "heelo", // plain text body
            html: `<b>${name}</b> Course  <b>${status}</b> successful! <br>
         <b>Comment from Admin</b> ${comment} `, // html body
        });
    };
}
module.exports = AdminController;