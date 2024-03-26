
function parseHTMLString(htmlString) {
    const parser = new DOMParser();
    const parsedDocument = parser.parseFromString(htmlString, 'text/html');
    return parsedDocument.body.firstChild;
}


/**
 * 
 * @param {String} filepath eg. /components/mobile_navbar_links.html
 * @param {Element} parentElement 
 */
function importHTMLCompnent(filepath, parentElement) {

    return new Promise((resolve) => {
        fetch(filepath).then(response => response.text())
        .then(html => {
    
            parentElement.appendChild(parseHTMLString(html));
        }).catch(error => {
            console.error('Error:', error);
        }).finally(() => {
            resolve();
        })
    });
}