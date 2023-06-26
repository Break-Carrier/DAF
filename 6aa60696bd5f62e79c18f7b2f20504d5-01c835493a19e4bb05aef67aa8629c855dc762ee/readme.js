/*
Pour ce test, vous disposez d'une base de données mongo contenant une collection "subscriptions" contenant les documents suivants

[{
    "_id": "5e819da591dd64d948912132",
    "Company": "5e7e1437c98625d1673643dc",
    "Tool": "5e819da591dd64d948912131",
    "ToolModel": "5e7e2a618a66c2987ef47d55",
    "ToolCategory": "5e7e27f8ead5dcbb7e21ffe9",
    "SubscriptionModel": "5e819ae9c124f4fc48bffa45",
    "SubscriptionType": {
        "_id": "5e819da691dd64d9489122b8",
        "name": "HLO"
    },
    "contract_reference": "00903",
    "duration": 12,
    "start_date": "2019-12-30T23:00:00.000Z",
    "active": true,
    "payment_method": "no_payment_method",
    "denounced": false,
    "canceled": false,
    "renewable": true,
    "current_status": "processing",
    "ended_on": "2021-12-30T22:59:59.000Z"
},
{
    "_id": "5e819da591dd64d94891218d",
    "Company": "5e7e1438c98625d1673643fa",
    "Tool": "5e819da591dd64d94891218c",
    "ToolModel": "5e7e2a618a66c2987ef47d55",
    "ToolCategory": "5e7e27f8ead5dcbb7e21ffe9",
    "SubscriptionModel": "5e819ae9c124f4fc48bffa45",
    "SubscriptionType": {
        "_id": "5e819da691dd64d9489122b8",
        "name": "HLO"
    },
    "contract_reference": "00908",
    "duration": 12,
    "start_date": "2019-08-30T22:00:00.000Z",
    "active": true,
    "payment_method": "no_payment_method",
    "denounced": false,
    "canceled": true,
    "renewable": true,
    "current_status": "deletable",
    "ended_on": "2020-08-31T21:59:59.999Z"
},
{
    "_id": "5e819da591dd64d9489121a6",
    "Company": "5e7e1438c98625d16736440c",
    "Tool": "5e819da591dd64d9489121a5",
    "ToolModel": "5e7e2a618a66c2987ef47d55",
    "ToolCategory": "5e7e27f8ead5dcbb7e21ffe9",
    "SubscriptionModel": "5e819ae9c124f4fc48bffa45",
    "SubscriptionType": {
        "_id": "5e819da691dd64d9489122b8",
        "name": "HLO"
    },
    "contract_reference": "00910",
    "duration": 12,
    "start_date": "2011-03-30T22:00:00.000Z",
    "active": true,
    "payment_method": "no_payment_method",
    "denounced": false,
    "canceled": false,
    "renewable": true,
    "current_status": "canceled",
    "ended_on": "2022-03-30T21:59:59.000Z"
},
{
    "_id": "5e819da691dd64d9489121ce",
    "Company": "5e7e1438c98625d167364418",
    "Tool": "5e819da691dd64d9489121cd",
    "ToolModel": "5e7e2a618a66c2987ef47d55",
    "ToolCategory": "5e7e27f8ead5dcbb7e21ffe9",
    "SubscriptionModel": "5e819ae9c124f4fc48bffa45",
    "SubscriptionType": {
        "_id": "5e819da691dd64d9489122b8",
        "name": "HLO"
    },
    "contract_reference": "00912",
    "duration": 12,
    "start_date": "2018-12-30T23:00:00.000Z",
    "active": true,
    "payment_method": "no_payment_method",
    "denounced": false,
    "canceled": false,
    "renewable": true,
    "current_status": "canceled",
    "ended_on": "2021-12-30T22:59:59.000Z"
},
{
    "_id": "5e819da691dd64d9489121e9",
    "Company": "5e7e1438c98625d16736442a",
    "Tool": "5e819da691dd64d9489121e8",
    "ToolModel": "5e7e2a618a66c2987ef47d55",
    "ToolCategory": "5e7e27f8ead5dcbb7e21ffe9",
    "SubscriptionModel": "5e819ae9c124f4fc48bffa45",
    "SubscriptionType": {
        "_id": "5e819da691dd64d9489122b8",
        "name": "HLO"
    },
    "contract_reference": "00915",
    "duration": 12,
    "start_date": "2015-11-29T23:00:00.000Z",
    "active": true,
    "payment_method": "no_payment_method",
    "denounced": false,
    "canceled": false,
    "renewable": true,
    "current_status": "canceled",
    "ended_on": "2021-11-29T22:59:59.000Z"
},
{
    "_id": "5e819da691dd64d94891221c",
    "Company": "5e7e1439c98625d16736443c",
    "Tool": "5e819da691dd64d94891221b",
    "ToolModel": "5e7e2a618a66c2987ef47d55",
    "ToolCategory": "5e7e27f8ead5dcbb7e21ffe9",
    "SubscriptionModel": "5e819ae9c124f4fc48bffa45",
    "SubscriptionType": {
        "_id": "5e819da691dd64d9489122b8",
        "name": "MAJ"
    },
    "contract_reference": "00918",
    "duration": 12,
    "start_date": "2019-07-30T22:00:00.000Z",
    "active": true,
    "payment_method": "no_payment_method",
    "denounced": false,
    "canceled": false,
    "renewable": true,
    "current_status": "processing",
    "ended_on": "2021-07-30T21:59:59.000Z"
},
{
    "_id": "5e819da691dd64d948912224",
    "Company": "5e7e1439c98625d167364442",
    "Tool": "5e819da691dd64d948912223",
    "ToolModel": "5e7e2a618a66c2987ef47d55",
    "ToolCategory": "5e7e27f8ead5dcbb7e21ffe9",
    "SubscriptionModel": "5e819ae9c124f4fc48bffa45",
    "SubscriptionType": {
        "_id": "5e819da691dd64d9489122b8",
        "name": "MAJ"
    },
    "contract_reference": "00919",
    "duration": 12,
    "start_date": "2013-08-30T22:00:00.000Z",
    "active": true,
    "payment_method": "no_payment_method",
    "denounced": false,
    "canceled": false,
    "renewable": true,
    "current_status": "processing",
    "ended_on": "2021-08-30T21:59:59.000Z"
},
{
    "_id": "5e819da691dd64d94891224b",
    "Company": "5e7e1439c98625d16736445a",
    "Tool": "5e819da691dd64d94891224a",
    "ToolModel": "5e7e2a618a66c2987ef47d55",
    "ToolCategory": "5e7e27f8ead5dcbb7e21ffe9",
    "SubscriptionModel": "5e819ae9c124f4fc48bffa45",
    "SubscriptionType": {
        "_id": "5e819da691dd64d9489122b8",
        "name": "MAJ"
    },
    "contract_reference": "00922",
    "duration": 12,
    "start_date": "2018-05-30T22:00:00.000Z",
    "active": true,
    "payment_method": "no_payment_method",
    "denounced": false,
    "canceled": false,
    "renewable": true,
    "current_status": "processing",
    "ended_on": "2021-05-30T21:59:59.000Z"
},
{
    "_id": "5e819da691dd64d94891225e",
    "Company": "5e7e1439c98625d167364460",
    "Tool": "5e819da691dd64d94891225d",
    "ToolModel": "5e7e2a618a66c2987ef47d55",
    "ToolCategory": "5e7e27f8ead5dcbb7e21ffe9",
    "SubscriptionModel": "5e819ae9c124f4fc48bffa45",
    "SubscriptionType": {
        "_id": "5e819da691dd64d9489122b8",
        "name": "MAJ"
    },
    "contract_reference": "00924",
    "duration": 12,
    "start_date": "2007-10-30T23:00:00.000Z",
    "active": true,
    "payment_method": "no_payment_method",
    "denounced": false,
    "canceled": false,
    "renewable": true,
    "current_status": "processing",
    "ended_on": "2021-10-30T21:59:59.000Z"
},
{
    "_id": "5e819da691dd64d9489122b8",
    "Company": "5e7e1439c98625d167364454",
    "Tool": "5e819da691dd64d9489122b7",
    "ToolModel": "5e7e2a618a66c2987ef47d55",
    "ToolCategory": "5e7e27f8ead5dcbb7e21ffe9",
    "SubscriptionModel": "5e819ae9c124f4fc48bffa45",
    "SubscriptionType": {
        "_id": "5e819da691dd64d9489122b8",
        "name": "MAJ"
    },
    "contract_reference": "00930",
    "duration": 12,
    "start_date": "2017-08-30T22:00:00.000Z",
    "active": true,
    "payment_method": "no_payment_method",
    "denounced": false,
    "canceled": false,
    "renewable": true,
    "current_status": "processing",
    "ended_on": "2021-08-30T21:59:59.000Z"
}]


Vous disposez aussi d'une fonction de type "getter" permettant de réaliser une requête vers la base de données à partir du paramètre options fournies à la fonction. 
Cette fonction renvoie un tableau d'objet "subscriptions" selon les filtres définis dans l'objet options passé à la fonction. Voici la déclaration de cette fonction:
*/

    app.subscriptionContractList = async (options) => {
        // retourne le tableau de subscriptions ci-dessus
    };

/* Voici un exemple d'utilisation de getter, pour une fonction type userList: */

    let user_options = {
        select: 'name last_name',
        limit: 0,
        where: [{
            'name': 'Tom'
        }]
    }

    const users = await app.userList(user_options);

/* 
Ce test vous demande de réaliser les tâches suivantes: 

1. Commencez par créer une route Express de type GET. Vous pouvez choisir l'URL qui vous convient. 
Les erreurs doivent etre détéctées et gérées en mettant en place un middleware basique retournant un console.error() avec les détails de l'erreur.

2. Dans cette route, vous allez devoir interagir avec un tableau de souscriptions. 
Pour cela, utilisez la fonction subscriptionContractList avec un objet options contenant un tableau "where". 

Cette fonction doit récupérer toutes les souscriptions qui respectent les critères suivants :
   - Le statut actuel (current_status) est en "processing".
   - La date de début (start_date) est postérieure au 30/12/2018.
   - Le nom du type de souscription (SubscriptionType.name) est "MAJ".

3. A partir de la réponse obtenue, créez un tableau contenant le "contract_reference" de chaque souscription, trié par ordre descendant.

4. Retournez le tableau final dans un objet possédant deux paires de key-value : 
 - "success: true"
 - "references: [votretableau]"

6. Enfin, affichez la liste des référence dans une page web (basique) réalisée en vue.js ou react.js. 
Notez qu'il n'est normalement pas possible d'envoyer deux réponses dans une route, vous pouvez ignorer cette restriction pour le test.

Pour vous aider, n'hésitez pas à consulter les documentations de différentes bibliothèques, telles que Mongoose et Express. 
Le cas échéant, merci de nous indiquer quelles documentations vous avez employé.
Il n'est pas necessaire de créer une application fonctionnelle, vous devez simplement fournir la route et le HTML correspondants. 
Essayez d'utiliser autant que possible les fonctions "vanilla" de JavaScript (ES6), et d'éviter les bibliothèques comme Lodash.

N'hésitez pas a en montrer plus que demandé, si vous le souhaitez.
Enfin, en cas de bloquage, la proposition d'une solution alternative (avec code) à celle demandée est acceptée :). 
*/