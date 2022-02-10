const express = require('express');
// const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const compression = require('compression');
const enforce = require('express-sslify');

if (process.env.NODE_ENV !== 'production') require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// Instantiate a new Express App
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json()); // make every request to JSON
app.use(bodyParser.urlencoded({ extended: true })); // make sure they have no unnecessary spaces

// app.use(cors()); // Not needed anymore

function shouldCompress (req, res) {
    if (req.headers['x-no-compression']) {
      // don't compress responses with this request header
      return false;
    }
  
    // fallback to standard filter function
    return compression.filter(req, res);
}

if (process.env.NODE_ENV === 'production'){
    app.use(compression({ filter: shouldCompress }));
    app.use(enforce.HTTPS({ trustProtoHeader: true }));
    app.use(express.static(path.join(__dirname, 'client/build')));

    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    })
}

app.listen(port, error => {
    if (error) throw error;
    console.log('Server running on port' + port);
})

app.get('/service-worker.js', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'build', 'service-worker.js'));
});

// Stripe POST Route
app.post('/payment', (req, res) => {
    const body = {
        source: req.body.token.id,
        amount: req.body.amount,
        currency: 'usd'
    };

    stripe.charges.create(body, (stripeErr, stripeRes) => {
        if (stripeErr) {
            res.status(500).send({ error: stripeErr });
        } else {
            res.status(200).send({ success: stripeRes });
        }
    })
})