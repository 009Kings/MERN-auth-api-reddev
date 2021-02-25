// dependencies
const db = require('../models');
const router = require('express').Router();

// POST '/' - create one bounty
router.post('/', (req, res) => {
    db.Bounty.create(req.body)
    .then(newBounty => {
        res.status(201).json(newBounty);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ message: 'Internal Server Error' });
    })
});
// GET '/' - read all bounties
router.get('/', (req, res) => {
    db.Bounty.find()
    .then(bounties => {
        res.status(200).json(bounties)
    })
    .catch(err => {
        res.status(500).json({ message: 'Error hit at READ ALL BOUNTIES' })
    })
});
// GET '/:id' - read one bounty
router.get('/:id', (req, res) => {
    db.Bounty.findbyId(req.params.id)
    .then(bounty => {
        res.json(bounty)
    })
    .catch(err => {
        console.log(err);
        res.status(503).json({ message: 'Service unavailable '});
    });
});
// PUT '/:id' - update one bounty
router.put('/:id', (req, res) => {
    console.log(req.body);
    db.Bounty.findbyIdAndUpdate(
        {_id: req.params.id},
        req.body,
        { new: true }
    )
    .then(updatedbounty => {
        res.json(updatedbounty);
    })
    .catch(err => {
        console.log(err);
        res.status(503).json({ message: 'Server problems, who dis?' });
    });
});
// DELETE '/:id' - delete one bounty
router.delete('/:id', (req, res) => {
  console.log(req.params.id)
    db.Bounty.findByIdAndDelete(req.params.id)
    .then(deleteInfo => {
        res.status(204).json({ message: 'We killed it', deleteInfo});
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    });
});

module.exports = router;