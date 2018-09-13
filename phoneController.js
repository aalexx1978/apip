var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());
var phone = require('./phone');
module.exports = router;
router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
// add phone
router.post('/', function (req, res, next) {
    console.dir(req);
    phone.create({
            name: req.query.name,
            spec: req.query.spec,
            img: req.query.img,
            price: req.query.price,
            color: req.query.color
        },
        function (err, phone) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(phone);
        });
});
// all phones
router.get('/', function (req, res, next) {
    phone.find({}, function (err, phones) {
        if (err) return res.status(500).send("There was a problem finding the phones.");
        res.status(200).send(phones);
    });
});
// get phone by ID
router.get('/:id', function (req, res) {
    phone.findById(req.params.id, function (err, phone) {
        if (err) return res.status(500).send("There was a problem finding the phone.");
        if (!phone) return res.status(404).send("No phone found.");
        res.status(200).send(phone);
    });
});

// delete phone
router.delete('/:id', function (req, res) {
    phone.findByIdAndRemove(req.query.id, function (err, phone) {
        if (err) return res.status(500).send("There was a problem deleting the phone.");
        res.status(200).send("phone " + phone.name + " was deleted.");
    });
});

//update phone
router.put('/:id', function (req, res) {

    phone.findByIdAndUpdate(req.query.id, req.body, {new: true}, function (err, phone) {
        if (err) return res.status(500).send("There was a problem updating the phone.");
        res.status(200).send(phone);
    });
});
module.exports = router;