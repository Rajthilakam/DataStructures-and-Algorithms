let books = [
    {
        id: 'b1',
        title: 'Coders at Work',
        price: 2434,
        authorId: 'a2'
    },
    {
        id: 'b2',
        title: 'Essays on Software Engineering',
        price: 2399,
        authorId: 'a3'
    },
    {
        id: 'b3',
        title: 'Web Usability',
        price: 2250,
        authorId: 'a4'
    },
    {
        id: 'b4',
        title: 'Clean Code',
        price: 3224,
        authorId: 'a1'
    },
]

function mapIntoObject(books) {
    return books.reduce(function (acc, curr) {
        acc[curr.id] = curr;
        return acc;
    }, {});
}   

let result = mapIntoObject(books)
console.log(result)