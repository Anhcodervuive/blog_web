const CourseModel = require('../models/course.model.js');
const { multipleMongooseToObj } = require('../../util/mongoose.js');

class SiteController {
    async Home(req, res, next) {
        // return res.render('home')
        CourseModel.find({})
            .then(courses => res.render('home', {courses: multipleMongooseToObj(courses)}))
            .catch(next);
    }
}

module.exports = new SiteController()
