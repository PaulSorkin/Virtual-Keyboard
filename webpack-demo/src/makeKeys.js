import { keysObjects } from './keysObjects'

function makeKeys() {
    keysObjects.forEach(el => {
        const keyboardKeys = document.querySelector('#keyboard-keys');
        const key_item = document.createElement('button');
        key_item.classList.add('keyboard_key');
        //const insertLineBreak = [13, 28, 41, 55].indexOf(el) !== -1;    //doesnt work
        /*if (el.key === 'Backspace') {
          keysObjects.indexOf(el) !== -1;
        }*/
        key_item.setAttribute("type", "button");
        key_item.id = el.keyCode;

        switch(el.code) {
          case "Backspace":
            key_item.classList.add('keyboard_key-double-wide');
            keysObjects.indexOf(el) !== -1;
            break;
          case "Tab":
            key_item.classList.add('keyboard_key-wide');
            break;
          case "CapsLock":
            key_item.classList.add('keyboard_key-double-wide');
            break;
          case "Enter":
            key_item.classList.add('keyboard_key-double-wide');
            break;
            case "ShiftLeft":
              key_item.classList.add('keyboard_key-double-wide');
              break;
            case "ControlLeft":
              key_item.classList.add('keyboard_key-wide');
              break;
            case "Space":
              key_item.classList.add('space-bar');
              break;
              }

        el.unicode ? key_item.innerHTML = el.unicode : key_item.innerHTML = el.key;
        //key_item.innerHTML = el.key;
        keyboardKeys.appendChild(key_item);
      });
}

 export { makeKeys }
