function numeroTelephone(numero) {
    const part1 = numero.slice(0, 3).join('');
    const part2 = numero.slice(3, 6).join('');
    const part3 = numero.slice(6, 10).join('');

    return `(${part1}) ${part2}-${part3}`;
}

console.log(numeroTelephone([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // Résultat attendu : (123) 456-7890

console.log(numeroTelephone([0, 6, 4, 3, 0, 9, 9, 8, 5, 4])); // Résultat : (064) 309-9854