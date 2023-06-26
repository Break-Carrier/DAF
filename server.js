import express from 'express';
import cors from 'cors';

// On importe les données du fichier "subscriptions.js"
import subscriptions from './subscriptions.js';

// Création de l'application Express
const app = express();

// Middleware CORS pour autoriser les requêtes de différents domaines
app.use(cors());

// Middleware pour analyser les données de requête en JSON
app.use(express.json());

// Déclaration de la fonction getter
// On définit une fonction asynchrone qui accepte un objet options en paramètre
app.subscriptionContractList = async (options) => {

    // On initialise une variable pour récupérer les subscriptions
    let results = subscriptions;

    // Si l'option 'where' est définie
    if(options.where) {

        // On stocke les conditions dans une variable
        let conditions = options.where;

        // On filtre les données rçues en fonction des conditions
        results = results.filter(subscription => {

            // On parcours chaque clé de "conditions"
            for (let key in conditions) {

                // On divise la clé en un tableau de sous-clés
                let keys = key.split('.');

                // On initialise l'élément à vérifier avec la subscription en cours
                let item = subscription;

                // On parcours chaque sous-clé
                for (let k of keys) {

                    // On met à jour l'élément à vérifier avec la valeur de la sous-clé actuelle
                    item = item[k];

                    // Si l'élément est indéfini, on retourne faux (la subscription ne correspond pas aux conditions)
                    if (item === undefined) return false;
                }

                // Si l'élément ne correspond pas à la valeur de la condition, on retourne faux
                if (item !== conditions[key]) {
                    return false;
                }
            }

            // Si on arrive ici, l'abonnement correspond à toutes les conditions, on retourne vrai
            return true;
        });
    }

    // Si l'option 'select' est définie
    if(options.select) {

        // On divise les champs sélectionnés en un tableau de champs
        const fields = options.select.split(' ');

        // On map les résultats pour ne garder que les champs sélectionnés
        results = results.map(subscription => {

            // On initialise une variable vide pour stocker les champs sélectionnés
            let selected = {};

            // On parcours chaque champ
            fields.forEach(field => {

                // On ajoute le champ à selected
                selected[field] = subscription[field];
            });

            // On retourne selected
            return selected;
        });
    }

    // Si l'option 'limit' est définie et supérieure à 0
    if(options.limit > 0) {

        // On limite le nombre de résultats
        results = results.slice(0, options.limit);
    }

    // On retourne les résultats
    return results;
};


// Définition des routes d'API.

// Route pour obtenir toutes les subscriptions :
app.get('/subscriptions', (req, res) => {
    res.json(subscriptions);
});

// Route pour filtrer les subscriptions :
// On déclare une route GET sur l'URL '/filtered-subscriptions'
app.get('/filtered-subscriptions', async (req, res, next) => {

    // On définit les options de notre requête
    const options = {
      // Les conditions à respecter
      where: {
        current_status: 'processing', // Le status courant doit être 'processing'
        'SubscriptionType.name': 'MAJ' // Le nom du type de subscription doit être 'MAJ'
      },
      // Les champs à récupérer
      select: 'contract_reference start_date SubscriptionType duration active payment_method canceled current_status ended_on',
      // La limite de résultats à récupérer (0 pour aucun)
      limit: 0
    };
  
    try {
      // On fait une requête à notre API pour récupérer les subscriptions correspondant aux options
      const response = await app.subscriptionContractList(options);

      // On filtre et trie les subscriptions récupérés
      const filteredSubscriptions = response
        // On garde uniquement les subscriptions dont la date de début est après le 30/12/2018
        .filter(subscription => new Date(subscription.start_date) > new Date('2018-12-30'))
        // On trie les subscriptions par référence de contrat, en ordre décroissant
        .sort((a, b) => b.contract_reference - a.contract_reference);
  
      // On renvoie les susbcripotion filtrés et triés au client
      res.json(filteredSubscriptions);

    } catch (err) {
      // En cas d'erreur, on passe l'erreur au gestionnaire d'erreurs
      next(err);
    }
});


// En écoute sur le port 5000
app.listen(5000, () => {
    console.log('Le serveur est en écoute sur le port 5000');
});
