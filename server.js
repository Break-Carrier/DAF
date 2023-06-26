import express from 'express';
import cors from 'cors';

// Import des données du fichier "subscriptions.js"
import subscriptions from './subscriptions.js';

// Création de l'application Express
const app = express();

// Middleware CORS pour autoriser les requêtes de différents domaines
app.use(cors());

// Middleware pour analyser les données de requête en JSON
app.use(express.json());

// Déclaration de la fonction getter
app.subscriptionContractList = async (options) => {
    let results = subscriptions;
    if(options.where) {
        let conditions = options.where;
        results = results.filter(subscription => {
            for (let key in conditions) {
                let keys = key.split('.');
                let item = subscription;
                for (let k of keys) {
                    item = item[k];
                    if (item === undefined) return false;
                }
                if (item !== conditions[key]) {
                    return false;
                }
            }
            return true;
        });
    }
    if(options.select) {
        const fields = options.select.split(' ');
        results = results.map(subscription => {
            let selected = {};
            fields.forEach(field => {
                selected[field] = subscription[field];
            });
            return selected;
        });
    }
    if(options.limit > 0) {
        results = results.slice(0, options.limit);
    }
    return results;
};

// Définition des routes d'API.

// Route pour obtenir toutes les subscriptions :
app.get('/subscriptions', (req, res) => {
    res.json(subscriptions);
});

// Route pour filtrer les subscriptions :
app.get('/filtered-subscriptions', async (req, res, next) => {
    const options = {
      where: {
        current_status: 'processing',
        'SubscriptionType.name': 'MAJ'
      },
      select: 'contract_reference start_date SubscriptionType duration active payment_method canceled current_status ended_on',
      limit: 0
    };
  
    try {
      const response = await app.subscriptionContractList(options);
      const filteredSubscriptions = response
        .filter(subscription => new Date(subscription.start_date) > new Date('2018-12-30'))
        .sort((a, b) => b.contract_reference - a.contract_reference);
  
      res.json(filteredSubscriptions);
    } catch (err) {
      next(err);
    }
});

// En écoute sur le port 5000
app.listen(5000, () => {
    console.log('Le serveur est en écoute sur le port 5000');
});
