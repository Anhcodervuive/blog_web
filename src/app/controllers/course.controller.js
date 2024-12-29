const Course = require('../models/course.model')
const { multipleMongooseToObj, MongooseToObj } = require('../../util/mongoose')

class CourseController {
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((course) =>
                res.render('courses/show', { course: MongooseToObj(course) })
            )
            .catch(next)
    }

    create(req, res, next) {
        res.render('courses/create')
    }

    // store(req, res, next) {
    //     const formData = req.body;
    //     const course = new Course(formData);
    //     course.save()
    //         .then(res.redirect(301, '/'))
    //         .catch(next);

    //     // res.redirect(301, '/');
    // }

    async store(req, res, next) {
        try {
            const formData = req.body;
            const course = await Course.create(formData);
            res.redirect(301, "/");
        } catch (error) {
            console.error(error)
            res.status(500).send('Error occurred while creating course')
        }
    }
}

module.exports = new CourseController()
