function ADN(chaineADN) {
    return chaineADN.replace(/A/g, 't')
                    .replace(/T/g, 'a')
                    .replace(/C/g, 'g')
                    .replace(/G/g, 'c')
                    .toUpperCase();
}

console.log(ADN("ATTGC")); // Résultat attendu : "TAACG"
console.log(ADN("GTAT")); // Résultat attendu : "CATA"

console.log(ADN("ATGATCT")) // Résultat : TACTAGA