function liste_filtre(liste) {
    return liste.filter(item => {
        return typeof item === 'number' || (typeof item === 'string' && parseInt(item).toString() === item);
    }).map(item => {
        return parseInt(item);
    });
}

console.log(liste_filtre([1, 2, 'a', 'b']));                    // Réponse attendu : [1, 2]
console.log(liste_filtre([1, 'a', 'b', 0, 15]));                // Réponse attendu : [1, 0, 15]
console.log(liste_filtre([1, 2, 'aasf', '3', '124', 123]));     // Réponse attendu : [1, 2, 3, 124, 123]

console.log(liste_filtre([12, 21, 'Maxime', 'Fleury', 'ESIEE-IT', 8])); 
