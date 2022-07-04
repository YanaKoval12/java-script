function filterNames(arr, text) {
 const filterString = arr
.filter(name => text.includes(name) >= 5);

return filterString;
}
console.log(filterNames(['John', 'Olivya', 'Oleksandr', 'Emanuel', 'Vanya', 'Nastya'], 'ya' ))