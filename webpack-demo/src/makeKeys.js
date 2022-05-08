import { keysObjects } from './keysObjects'

function makeKeys() {
    keysObjects.forEach(el => {
        const keyboardKeys = document.querySelector('#keyboard-keys');
        const key_item = document.createElement('button');
        key_item.classList.add('keyboard_key');
        key_item.setAttribute("type", "button");
        key_item.id = el.keyCode;
        el.unicode ? key_item.innerHTML = el.unicode : key_item.innerHTML = el.key;
        //key_item.innerHTML = el.key;
        keyboardKeys.appendChild(key_item);
      });
}

 export { makeKeys }
