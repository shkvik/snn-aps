const fs = require('fs')

module.exports = function (app) {

    function isFolder(path){
        return fs.lstatSync(path).isDirectory() && fs.existsSync(path);
    }

    app.get('/', (req, res) => {
        res.json({
            test: 'test'
        })
    })
}