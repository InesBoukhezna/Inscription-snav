// Écouteur d'événement pour la soumission du formulaire
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Empêche la soumission par défaut

    // Validation personnalisée : Vérifie si tous les champs sont remplis
    const requiredFields = ['nom', 'prenom', 'telephone', 'email', 'fonction', 'nom_agence', 'adresse_agence', 'wilaya'];
    let allFilled = true;
    requiredFields.forEach(field => {
        const element = document.getElementById(field);
        if (!element.value.trim()) {
            allFilled = false;
            element.style.borderColor = 'red';  // Met en évidence le champ vide
        } else {
            element.style.borderColor = '#e0e0e0';  // Remet la couleur normale
        }
    });

    if (!allFilled) {
        document.getElementById('message').innerHTML = '<p style="color: red;">Veuillez remplir tous les champs avant d\'envoyer l\'inscription.</p>';
        return;  // Arrête l'envoi
    }

    // Récupère les valeurs du formulaire
    const formData = {
        nom: document.getElementById('nom').value,
        prenom: document.getElementById('prenom').value,
        telephone: document.getElementById('telephone').value,
        email: document.getElementById('email').value,
        fonction: document.getElementById('fonction').value,
        nom_agence: document.getElementById('nom_agence').value,
        adresse_agence: document.getElementById('adresse_agence').value,
        wilaya: document.getElementById('wilaya').value
    };

    // Envoie l'e-mail via EmailJS
    emailjs.send("snav.estalgerie@gmail.com", "snav_inscription", formData)  
        .then(function(response) {
            document.getElementById('message').innerHTML = '<p style="color: green;">Inscription réussie ! Un e-mail a été envoyé.</p>';
            document.getElementById('registrationForm').reset();  // Réinitialise le formulaire
        })
        .catch(function(error) {
            document.getElementById('message').innerHTML = '<p style="color: red;">Erreur lors de l\'envoi : ' + error.text + '</p>';
        });

});
