function keyboard() {
    let keyboard = document.createElement('div');
    keyboard.classList.add('keyboard');
    keyboard.id = 'keyboard';

    let keyboardKeys = document.createElement('div');
    keyboardKeys.classList.add('keyboard_keys');
    keyboardKeys.id = 'keyboard-keys';
    keyboard.appendChild(keyboardKeys);

    return keyboard;
}

export { keyboard }