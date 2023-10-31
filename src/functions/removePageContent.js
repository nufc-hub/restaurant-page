// Keeps header element & removes mainDiv element.

const removeMainDiv = () => {
    const content = document.querySelector('.content');

    if (content.children.length >= 1) {
        content.children[1].remove();
    }
}

export default removeMainDiv;