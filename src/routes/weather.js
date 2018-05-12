import express from 'express';
import fetch from 'node-fetch';


const router = express.Router();


router.get('/', async (req, res) => {
    const appKey = '32a7a32fbff8e508c631869e5f998fc2';
    const url = `http://api.openweathermap.org/data/2.5/weather?zip=84095,us&APPID=${appKey}`;
    const result = await fetch(url);
    const json = await result.json();   
    console.log(json);
    res.json(json);
});

router.get('/london', async (req, res) => {
    const appKey = '32a7a32fbff8e508c631869e5f998fc2';
    const url = `http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${appKey}`;
    const result = await fetch(url);
    const json = await result.json();   
    console.log(json);
    res.json(json);
});

router.get('/forecast', async (req, res) => {
    const appKey = '32a7a32fbff8e508c631869e5f998fc2';
    const url = `http://api.openweathermap.org/data/2.5/forecast?zip=84001,us&APPID=${appKey}`;
    const result = await fetch(url);
    const json = await result.json();   
    console.log(json);
    res.json(json);
});



export default router;