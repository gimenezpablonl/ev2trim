const express = require('express');
const Celular = require('../models/Celular');
const router = express.Router();

router.get('/', async (req, res) =>{
    const celulares = await Celular.find();
    res.json(celulares);
})

router.post('/', async (req, res) =>{
    const { marca, modelo, cantProcesadores } = req.body;
    const celular = new Celular({marca, modelo, cantProcesadores});
    await celular.save();
    res.json('ok');
})

router.put('/:id', async (req,res) =>{
    await Celular.findByIdAndUpdate(req.params.id, req.body);
    res.json('ok');
})

router.delete('/:id' , async (req,res) => {
    await Celular.findByIdAndRemove(req.params.id);
    res.json('ok');
})


module.exports = router;