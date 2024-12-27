const CourseModel = require('../models/course.model.js');

class SiteController {
    async Home(req, res) {
        // return res.render('home')
        const documents = await CourseModel.find({});

        return documents ? res.json(documents) : res.json({'messages' : 'Lỗi không thể đọc dữ liệu'});
    }
}

module.exports = new SiteController()
