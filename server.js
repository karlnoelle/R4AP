import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

// Import Event model
import Event from './server/models/events';

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/test');

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB started');
});

// Route Definitions
router.route('/events').get((req, res) => {
    Event.find((err, events) => {
        if (err)
            console.log(err);
        else
            res.json(events);
    })
})

router.route('/create-event').post((req, res) => {
    let event = new Event(req.body);
    event.save()
        .then(event => {
            res.status(200).json({'event': 'event created successfully'});
        })
        .catch(err => {
            res.status(400).send('Failed to create event');
        });
});

router.route('/event/:eventID').get((req, res) => {
    Event.findById(req.params.id, (err, event) => {
        if (err) {
            res.sendStatus(err);
        } else {
            res.json(event);
        }
    })
});

app.use('/', router);

app.listen(4000, () => console.log('Server started'));