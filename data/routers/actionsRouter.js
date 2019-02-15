const express = require('express');
const db = require('../helpers/actionModel');
const router = express.Router();

router.get('/:id', (req, res) => {
  const id = req.params.id;
  db.get(id)
    .then(action => {
      console.log(action);
      res.status(200).json(action);
    })
    .catch(() => {
      res
        .status(404)
        .json({ error: "Cannot find the ID of action you're looking for." });
    });
});

module.exports = router;
