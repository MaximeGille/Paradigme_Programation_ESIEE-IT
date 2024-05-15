function maskify(numéroCarte) {
    if (numéroCarte.length <= 4) {
        return numéroCarte;
    } else {
        const carteCachee = numéroCarte.slice(0, -4).replace(/./g, '#');
        const quatrederniernombre = numéroCarte.slice(-4);
        return carteCachee + quatrederniernombre;
    }
}

console.log(maskify('4556364607935616')); // Résultat Attendu: ############5616
console.log(maskify('1')); // Résultat Attendu: 1
console.log(maskify('11111')); // Résultat Attendu: #1111

console.log(maskify('1352715372547254724537254662473')) // Résultat ###########################2473