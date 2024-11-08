// One fine day while Farmer Arepo Tenaciously Labored at Turning the soil, 
// he discovered a field that was scattered with strange stone tablets. 
// Noticing they were carved with letters in a square pattern, he wisely kept them in case some might be special.

// YOUR TASK:
// Please help Farmer Arepo by inspecting each tablet to see if it forms a valid Sator Square!

// The Square
// is a two-dimentional palindrome, made from words of equal length that can be read in these four ways:
// 1)    left-to-right    (across)
// 2)    top-to-bottom    (down)
// 3)    bottom-to-top    (up)
// 4)    right-to-left    (reverse)

// AN EXAMPLE:
// Considering this square:

//     B A T S
//     A B U T
//     T U B A
//     S T A B

// Here are the four ways a word (in this case "TUBA") can be read:

//                          down
//                           ↓
//            B A T S    B A T S    B A T S    B A T S
//            A B U T    A B U T    A B U T    A B U T ← reverse
//   across → T U B A    T U B A    T U B A    T U B A
//            S T A B    S T A B    S T A B    S T A B
//                                    ↑
//                                    up

// IMPORTANT:
// * In a true Sator Square, ALL of its words can be read in ALL four of these ways.
// * If there is any deviation, it would be false to consider it a Sator Square.

// SOME DETAILS:
// * tablet (square) dimensions range from 2x2 to 33x33 inclusive
// * all characters used will be upper-case alphabet letters
// * there is no need to validate any input

// INPUT:
// * an N x N (square) two-dimentional matrix of uppercase letters

// OUTPUT:
// * boolean true or false whether or not the tablet is a Sator Square

export function isSatorSquare(tablet: string[][]): boolean {

    // GET THE WORDS
    const columnWords: string[] = [];
    const rowWords: string[] = [];
    let columnWordsReverse: string[] = [];
    let rowWordsReverse: string[] = [];

    for (let column = 0; column < tablet.length; column++) {
        let columnWord = '';
        let rowWord = '';
        for (let row = 0; row < tablet[column].length; row++) {
            const columnChar = tablet[column][row];
            const rowChar = tablet[row][column];
            columnWord += columnChar;
            rowWord += rowChar;
        }
        rowWords.push(rowWord);
        columnWords.push(columnWord);
        columnWordsReverse.push(columnWord.split('').reverse().join(''));
        rowWordsReverse.push(rowWord.split('').reverse().join(''));
    }

    // Check if the words are the same
    let isTheSame = true;


    columnWordsReverse = columnWordsReverse.reverse();
    rowWordsReverse = rowWordsReverse.reverse();

    console.log('rowWords', rowWords);
    console.log('columnWords', columnWords);
    console.log('columnWordsReverse', columnWordsReverse);
    console.log('rowWordsReverse', rowWordsReverse);


    rowWords.forEach((rowWord, columnIndex) => {
        if (rowWord !== columnWords[columnIndex]) isTheSame = false;
        if (rowWord !== columnWordsReverse[columnIndex]) isTheSame = false;
        if (rowWord !== rowWordsReverse[columnIndex]) isTheSame = false;
    });

    return isTheSame;
}



const tests = [
    [['T', 'E', 'N'],
    ['E', 'Y', 'E'],
    ['N', 'E', 'T']],

    [['N', 'O', 'T'],
    ['O', 'V', 'O'],
    ['N', 'O', 'T']],

    [['B', 'A', 'T', 'S'],
    ['A', 'B', 'U', 'T'],
    ['T', 'U', 'B', 'A'],
    ['S', 'T', 'A', 'B']],

    [['P', 'A', 'R', 'T'],
    ['A', 'G', 'A', 'R'],
    ['R', 'A', 'G', 'A'],
    ['T', 'R', 'A', 'M']],

    [['S', 'A', 'T', 'O', 'R'],
    ['A', 'R', 'E', 'P', 'O'],
    ['T', 'E', 'N', 'E', 'T'],
    ['O', 'P', 'E', 'R', 'A'],
    ['R', 'O', 'T', 'A', 'S']],

    [['S', 'A', 'L', 'A', 'S'],
    ['A', 'R', 'E', 'N', 'A'],
    ['L', 'E', 'V', 'E', 'L'],
    ['A', 'R', 'E', 'N', 'A'],
    ['S', 'A', 'L', 'A', 'S']]
];

console.log(isSatorSquare(tests[2]));
