const {sortByName} = require('../../app');

describe('sort books by name', ()=>{
    test('should sort', ()=>{
        const books = [
            "Война и мир",
            "Война и мир",
            "Мастер и Маргарита",
            "1984",
            "Дневной дозор",
            "Капитанская дочка"
        ];
        const result = sortByName(books);
        const expected = [
            "1984",
            "Война и мир",
            "Война и мир",
            "Дневной дозор",
            "Капитанская дочка",
            "Мастер и Маргарита",
        ]
        expect(result).toEqual(expected);
    })
});

