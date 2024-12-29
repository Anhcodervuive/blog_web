const Course = require('../models/course.model');
const { multipleMongooseToObj, MongooseToObj } = require('../../util/mongoose');

class CourseController {
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug})
            .then((course) => res.render('courses/show', { course: MongooseToObj(course) }))
            .catch(next);
    }
}

module.exports = new CourseController;