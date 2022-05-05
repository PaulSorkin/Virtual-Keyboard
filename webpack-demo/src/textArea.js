function makeTextArea() {
    const textArea = document.createElement('textarea');
    textArea.id = 'text-area';
    textArea.classList.add('text_area');

    return textArea;
}

export { makeTextArea }