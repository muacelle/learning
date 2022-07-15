function urlSlug(title) {
    return title.toLowerCase().split(' ').filter(a => a !== '').join('-');
}

console.log(urlSlug(" Winter Is   Coming"));