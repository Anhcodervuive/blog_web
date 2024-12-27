class NewsController {
  //  GET /new
  index(req, res) {
    res.render("news");
  }

  show(req, res) {
    res.send("HELLO, here is some details");
  }
}

module.exports = new NewsController();
