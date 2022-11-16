const router = require('express').Router();

router.get('/',(req, res) => {
    res.send("Hello ITA");
});

module.exports = router;