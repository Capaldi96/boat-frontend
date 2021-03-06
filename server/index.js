const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path')
const cors = require('cors');
const { getAllBoats, addBoat, getOneBoat, deleteBoat, editBoat, search, resetDataBase } = require('./database.js');


const port = process.env.PORT || 5000;

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
})
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get('/api/boats/', (req, res) => {
    getAllBoats(dataOrError => {
        res.send(dataOrError);
    })

});

app.get('/api/boats/:id', (req, res) => {
    getOneBoat(req.params.id, dataOrError => {
        res.send(dataOrError);
    });
});

app.get('/api/search', (req, res) => {
    search(req.query, dataOrError => {
        res.send(dataOrError);
    })
})

app.get('/api/resetmongodb', (req, res) => {
    resetDataBase(dataOrError => {
        res.send(dataOrError);
    })
})

//querystring
app.delete('/api/boats/delete/:id', (req, res) => {
    deleteBoat(req.params.id, dataOrError => {
        res.send(dataOrError)
    });
});
app.post('/api/boats/add', (req, res) => {
    addBoat(req.body, () => {
        if (res.statusCode == 200) {
            res.send("Success")
        }
    })
})
app.put('/api/boats/edit/:id', (req, res) => {
    editBoat(req.body, req.params.id, () => {
        res.send(req.body)
    })
});

//Static folder
app.use(express.static(path.join(__dirname, '../dist/')));
//handle SPA
app.get(/.*/, (req, res) => res.sendFile(path.join(__dirname, '../dist/index.html')));


app.listen(port, () => {
    console.log("Server is listening on port" + port);
});