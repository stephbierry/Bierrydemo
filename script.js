// Variable pour stocker le compte des clics
let count = 0; 

// Récupérer les éléments du DOM (Document Object Model) par leur ID
const compteurElement = document.getElementById('compteur');
const boutonClic = document.getElementById('boutonClic');

// Vérifiez que les éléments existent (utile car cette page est liée par a-propos.html)
if (boutonClic) {
    // Ajouter un écouteur d'événement sur le bouton
    boutonClic.addEventListener('click', () => {
        // 1. Incrémenter le compteur
        count++; 
        
        // 2. Mettre à jour le texte dans l'élément <span>
        compteurElement.textContent = count; 
    });
}