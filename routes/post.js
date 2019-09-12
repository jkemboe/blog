const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.send('Posts Route')
});

router.post('/', (req, res) => {
      console.log(req.params)
})

module.exports = router;