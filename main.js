walk(document.body);

//Event listener for RES
window.addEventListener('neverEndingLoad', function () {
    walk(document.body)
});

function walk(node) {
    // I stole this function from cloud-to-butt:
    // https://github.com/panicsteve/cloud-to-butt
    var child, next;
    switch (node.nodeType) {
        case 1:  // Element
        case 9:  // Document
        case 11: // Document fragment
            child = node.firstChild;
            while (child) {
                next = child.nextSibling;
                walk(child);
                child = next;
            }
            break;

        case 3: // Text node
            handleText(node);
            break;
    }
}

function handleText(textNode) {
    var v = textNode.nodeValue;

    v = v.replace(/\bBernie Sanders'\b/g, getSynonym(true));
    v = v.replace(/\bBernie Sanders\b/g, getSynonym());
    v = v.replace(/\bSanders'\b/g, getSynonym(true));
    v = v.replace(/\bSanders\b/g, getSynonym());
    v = v.replace(/\bBernie\b/g, getSynonym());

    textNode.nodeValue = v;
}

function getSynonym(posessive) {
    var possibleSynonyms = [
        "Sernie Banders",
        "Our Lord And Savior",
        "That Old Guy",
        "The Dude That Is Not Hillary",
        "Grey Eel",
        "The Only Consistent Politician",
        "Super Bern",
        "He-Who-Must-Not-Be-Shamed",
        "The Most Experienced Politician"
    ];
    var synonym = possibleSynonyms[Math.floor(Math.random() * possibleSynonyms.length)];
    if (posessive) {
        synonym = synonym + getAttachment(synonym);
    }
    return synonym;
}

function getAttachment(synonym) {
    if (synonym.slice(-1) == "s") {
        return "'"
    }
    else {
        return "'s"
    }
}
