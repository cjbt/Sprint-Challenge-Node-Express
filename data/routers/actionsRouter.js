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

router.post('/', (req, res) => {
  const action = req.body;
  db.insert(action)
    .then(item => {
      console.log(item);
      res.status(201).json(item);
    })
    .catch(() => {
      res
        .status(500)
        .json({ error: 'Something went wrong. You need the required body' });
    });
});

router.put('/:id', (req, res) => {
  const id = req.params.id;
  const changes = req.body;
  db.update(id, changes)
    .then(updated => {
      if (updated === null) {
        res.status(404).json({ error: 'You need the right ID' });
      } else {
        res.status(200).json(updated);
      }
    })
    .catch(() => {
      res.status(500).json({ error: 'Something went wrong' });
    });
});

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  db.get(id)
    .then(deleted => {
      db.remove(id)
        .then(() => {
          res.status(200).json(deleted);
        })
        .catch(() => {
          res.status(500).json({ error: 'Cannot be deleted for some reason' });
        });
    })
    .catch(() => {
      res.status(404).json({ error: 'You need the right ID' });
    });
});

module.exports = router;
