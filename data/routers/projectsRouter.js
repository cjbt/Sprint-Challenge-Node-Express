const express = require('express');
const db = require('../helpers/projectModel');
const router = express.Router();

router.get('/:id', (req, res) => {
  const id = req.params.id;
  db.get(id)
    .then(project => {
      res.status(200).json(project);
    })
    .catch(() => {
      res.status(404).json({ message: "Cannot find an ID you're looking for" });
    });
});

router.get('/:projectId/actions', (req, res) => {
  const projectId = req.params.projectId;
  db.getProjectActions(projectId)
    .then(actions => {
      if (actions.length === 0) {
        res
          .status(404)
          .json({ message: "Cannot find an ID you're looking for" });
      } else {
        console.log(actions);
        res.status(200).json(actions);
      }
    })
    .catch(() => {
      res
        .status(500)
        .json({ error: "Something went wrong.. and it's my bad." });
    });
});

router.post('/', (req, res) => {
  const project = req.body;
  db.insert(project)
    .then(item => {
      console.log(item);
      res.status(200).json(item);
    })
    .catch(() => {
      res.status(400).json({ error: 'You need to add a name and description' });
    });
});

router.put('/:id', (req, res) => {
  const id = req.params.id;
  const changes = req.body;
  db.update(id, changes)
    .then(updated => {
      if (updated.updated === null) {
        res
          .status(404)
          .json({ message: "Cannot find an ID you're looking for" });
      } else {
        console.log(updated);
        res.status(200).json({ updated });
      }
    })
    .catch(() => {
      res.status(500).json({ message: 'Something went wrong.' });
    });
});

module.exports = router;
