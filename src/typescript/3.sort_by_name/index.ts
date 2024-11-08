// Descripción: Escribe una función que tome un array de cadenas (nombres) y devuelva un objeto en el que las claves sean las iniciales de los nombres y los valores sean arrays que contengan los nombres que empiezan con esa letra.
// Instrucciones:
// Todos los nombres en el array serán cadenas de texto no vacías. Ignora la capitalización de las letras al agrupar.
// Ejemplos:

// function(["Ana", "Alberto", "Beatriz", "Bruno", "Carlos", "Clara"]);
// RESULT:
// A: ["Ana", "Alberto"],
// B: ["Beatriz", "Bruno"],
// C: ["Carlos", "Clara"]

// function(["Mario", "Miguel", "marta", "Monica"]);
// RESULT:
// M: ["Mario", "Miguel", "marta", "Monica"]



const example1 = ["Ana", "Alberto", "Beatriz", "Bruno", "Carlos", "Clara"];
const example2 = ["Mario", "Miguel", "marta", "Monica"];

// Criterios de evaluación:
// Uso correcto de objetos y arrays. Manejo adecuado de strings. Claridad y eficiencia del código.

function sortByName(names: string[]): { [key: string]: string[] } {
    // const keys: string[] = []
    const result: { [key: string]: string[] } = {};
    names.forEach((name: string) => {
        // Get the first letter of each name
        const firstChar = name.split('',)[0].toUpperCase()
        // Create the key
        if (!result[firstChar]) result[firstChar] = []
        // Add the name
        result[firstChar].push(name.toUpperCase())
    });

    return result;
};

console.log(sortByName(example1));
console.log(sortByName(example2));