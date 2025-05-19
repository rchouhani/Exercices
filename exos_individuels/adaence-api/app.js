const express = require('express');
const app = express();
const port = 3000;
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
const elders = [
    {
      "firstname": "Franco",
      "age": 95,
      "job": "Ouvrier d'usine",
      "city": "Saint-Étienne",
      "zipcode": "42000",
      "description": "Franco adore raconter ses souvenirs de l’usine et partager un bon café avec les jeunes du quartier.",
      "imageUrl": "/images/danie-franco-ClHY-KyvI1M-unsplash.jpg",
      "type": "Un café/thé"
    },
    {
      "firstname": "Soares",
      "age": 84,
      "job": "Puéricultrice",
      "city": "Angers",
      "zipcode": "49000",
      "description": "Soares a consacré sa vie aux tout-petits et aime aujourd’hui transmettre tendresse et conseils de vie.",
      "imageUrl": "/images/vladimir-soares-z_8Jqe0Cc-s-unsplash.jpg",
      "type": "Un repas"
    },
    {
      "firstname": "Tim",
      "age": 80,
      "job": "Facteur",
      "city": "Aurillac",
      "zipcode": "15000",
      "description": "Ancien facteur, Tim connaît chaque recoin de sa ville et adore les longues balades en bonne compagnie.",
      "imageUrl": "/images/tim-mossholder-FRPbQvAwY10-unsplash.jpg",
      "type": "Une promenade"
    },
    {
      "firstname": "Shimo",
      "age": 94,
      "job": "Professeure",
      "city": "Besançon",
      "zipcode": "25000",
      "description": "Shimo a le cœur sur la main et des tas d’histoires passionnantes à raconter sur ses années d’enseignement.",
      "imageUrl": "/images/shimo-yann-7nTFrV1xQGE-unsplash.jpg",
      "type": "Un café/thé"
    },
    {
      "firstname": "Zanon",
      "age": 86,
      "job": "Journaliste",
      "city": "Paris",
      "zipcode": "75011",
      "description": "Zanon est curieuse du monde et adore échanger autour d’un bon livre ou d’un article d’actualité.",
      "imageUrl": "/images/tatiana-zanon-MMhazsT2wtM-unsplash.jpg",
      "type": "Une sortie culturelle"
    },
    {
      "firstname": "Matveev",
      "age": 77,
      "job": "Pilote d'avion",
      "city": "Toulouse",
      "zipcode": "31000",
      "description": "Pilote à la retraite, Matveev a mille anecdotes à partager sur ses voyages aux quatre coins du monde.",
      "imageUrl": "/images/michael-matveev-Bk8zT4gLLt0-unsplash.jpg",
      "type": "Une sortie culturelle"
    },
    {
      "firstname": "Mahe",
      "age": 93,
      "job": "Mécanicienne",
      "city": "Le Mans",
      "zipcode": "72000",
      "description": "Mahe a les mains d’or et le sourire généreux. Elle aime parler de mécanique, mais surtout de lien humain.",
      "imageUrl": "/images/quentin-mahe-a6jCS61X1Hg-unsplash.jpg",
      "type": "Autre activité"
    },
    {
      "firstname": "Samir",
      "age": 82,
      "job": "Musicien",
      "city": "Lyon",
      "zipcode": "69007",
      "description": "Musicien passionné, Samir aime improviser quelques notes et créer des moments chaleureux avec les jeunes.",
      "imageUrl": "/images/mohammad-samir-huHXKc_usoA-unsplash.jpg",
      "type": "Un repas"
    }
  ]

app.get('/elders/', (req, res) => {
    elders.forEach((elder) => {
        if(elder == req.params){
        }
    })
    res.send(elders);
})


app.get("/elders/:name/:city", (req, res) => {
    elders.forEach((elder) => {
        if (elder.firstname.toLowerCase() === req.params.name.toLowerCase()
            || elder.city.toLowerCase() === req.params.city.toLowerCase()){
            res.send(elder)
        } else {
            res.send(`${req.params.name} et ${req.params.city} n'existe pas encore`)
        }
    })
})

app.delete("/elders/:name", (req, res) => {
  elders.forEach((elder) => {
    if (elder.firstname.toLowerCase() === req.params.name){
      res.send(elder.stefano)
    }
  })
})
app.post("/elders", (req, res) => {
  // comment et où afficher le console.log ?
  console.log("Body : ", req.body);
    // Ajouter la tâche au tableau, pkoi le faire içi et dans thunderclient ?
    elders.push({
      "firstname": "Ste",
      "age": 63,
      "job": "Main",
      "city": "",
      "zipcode": "16000",
      "description": "Marin passionné, Stefano aime improviser quelques sorties et créer des moments chaleureux avec les jeunes.",
      "imageUrl": "/images/mohammad-samir-huHXKc_usoA-unsplash.jpg",
      "type": "Un repas"
    });
    res.status(201).json({ title: req.body.title }); // a quoi correspond le title ?
    //comment faire pour avoir une API à jour car actuellement, le tableau d'objet contenant les elders est en dur dans
    // la page app.js
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})
