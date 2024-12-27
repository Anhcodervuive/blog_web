class SiteController {
    Home(req, res) {
        return res.render('home')
    }
}

module.exports = new SiteController()
