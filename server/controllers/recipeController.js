const homepage = async (req, res) => {
    res.render('index.ejs', { title : "Cooking Blog - Home"})
}

module.exports = { homepage }