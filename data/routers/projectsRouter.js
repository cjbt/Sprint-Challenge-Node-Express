const express = require('express');
const db = require('../helpers/projectModel');
const router = express.Router();

router.get('/:id', (req, res) => {
  const id = req.params.id;
  db.get(id)
    .then()
    .catch();
});

module.exports = router;
