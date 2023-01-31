const allBooks = [
    {
        title: 'Book 1',
        author: 'Author 1',
        image: 'https://www.pcclean.io/wp-content/gallery/book-hd-wallpapers/697523.jpg',
        alreadyRead: false
    },
    {
        title: 'Book 2',
        author: 'Author 2',
        image: 'https://www.pcclean.io/wp-content/gallery/book-hd-wallpapers/697523.jpg',
        alreadyRead: true
    }
];

const addBooksTable = () => {
    const mainDiv = document.querySelector('.listBooks');
    const bookTable = document.createElement('table');
    mainDiv.appendChild(bookTable);

    bookTable.innerHTML = '<thead><tr></tr></thead>'
    bookTable.innerHTML += '<tbody></tbody>';

    const headerRow = bookTable.querySelector('thead tr');

    const keys = Object.keys(allBooks[0]);

    for (const colTitle of keys) {

        const th = document.createElement('th');
        th.innerHTML = `<i>${colTitle}</i>`;
        th.setAttribute('data-key', colTitle);

        headerRow.appendChild(th);
    }

    const tbody = bookTable.querySelector('tbody');

    return tbody;
};

const addBookToTable = (tbody, book) => {

    const table = tbody.parentElement;

    const ths = table.querySelectorAll('thead th');

    const row = document.createElement('tr');

    for (const th of ths) {

        const key = th.getAttribute('data-key');

        const td = document.createElement('td');

        switch (key) {

            case 'image':
                td.innerHTML = `<img src="${book[key]}" />`;
                break;

            default:
                td.textContent = book[key];
                break;
        }

        row.appendChild(td);
    }

    tbody.appendChild(row);
};


const tbody = addBooksTable();

for (const book of allBooks) {

    addBookToTable(tbody, book);
}
