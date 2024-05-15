function ratp(busArrets) {
    const nombrespersonnes = busArrets.reduce((total, [personnesMontees, personnesDescendues]) => {
        total += personnesMontees;
        total -= personnesDescendues;
        return total;
    }, 0);

    return nombrespersonnes;
}

console.log(ratp([[10,0],[3,5],[5,8]])); // Résultat attendu: 5
console.log(ratp([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]])); // Résultat attendu: 17
console.log(ratp([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]])); // Résultat attendu: 21

console.log(ratp([[34,0],[54,23],[45,32]])); // Résultat 78
