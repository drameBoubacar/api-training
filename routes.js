const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('todolist');
})

router.post('/list', (req, res) => {
  console.log(req.body);
  res.redirect('/');
})


module.exports = router;
