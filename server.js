let app = require('./app');

let port = process.env.PORT || 3003;
let server = app.listen(port, "0.0.0.0", function () {
    console.log('Express server listening on port ' + port);
});