module.exports = {
    defaultServerResponse: {
        status: 400,
        message: '',
        body: {}
    },
    tempAirMessage:{
        TEMPAIR_CREATED: 'Creation de température seuil réussie',
        TEMPAIR_FETCHED: 'température seuil récupéré avec succès',
        TEMPAIR_NOT_FOUND: 'température seuil non trouvé',
        TEMPAIR_UPDATED: 'température seuil mise à jour avec succès',
        TEMPAIR_DELETED: 'température seuil supprimé avec succès',
    },

    userMessage: {
     SIGNUP_SUCCESS: 'Signup Success',
     DUPLICATE_EMAIL: 'Un utilisateur existe déjà avec ce courriel',
     LOGIN_SUCCESS: 'Connexion réussie',
     USER_NOT_FOUND: 'Utilisateur non trouvé',
     INVALID_PASSWORD: 'Mot de passe invalide',
    },
    requesteValidationMessage:{
        BAD_REQUEST: 'Champs invalide',
       TOKEN_MISSING: 'Token manquant',
    },
    databaseMessage: {
      INVALID_ID: 'Id invalide'
    },
	 historiqueMessage:{
        HISTORIQUE_CREATED: 'Creation historique réussie',
        HISTORIQUE_FETCHED: 'Historique température récupéré avec succès'
    },
}
