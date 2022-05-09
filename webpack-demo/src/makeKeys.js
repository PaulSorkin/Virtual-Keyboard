import { keysObjects } from './keysObjects'

function makeKeys() {
    keysObjects.forEach(el => {
        const keyboardKeys = document.querySelector('#keyboard-keys');
        const key_item = document.createElement('button');
        key_item.classList.add('keyboard_key');
        key_item.setAttribute("type", "button");
        key_item.id = el.keyCode;

        let capsOn = false;

        switch(el.code) {
          case "Backspace":
            key_item.classList.add('keyboard_key-double-wide');
            keysObjects.indexOf(el) !== -1;                         //doesnt work
            key_item.innerHTML = el.unicode;
            break;
          case "Tab":
            //key_item.classList.add('keyboard_key-wide');
            key_item.innerHTML = el.unicode;
            break;
          case "CapsLock":
            key_item.classList.add('keyboard_key-double-wide');
            capsOn === true ? key_item.classList.add('keyboard_key-pushed') : key_item.classList.remove('keyboard_key-pushed');
            key_item.innerHTML = el.unicode;
            key_item.addEventListener('click', ()=> {
              if (capsOn === false) {
                key_item.classList.add('keyboard_key-pushed');
                capsOn = true;
              } else {
                key_item.classList.remove('keyboard_key-pushed');
                capsOn = false;
              }
            });
            break;
          case "Enter":
            key_item.classList.add('keyboard_key-double-wide');
            key_item.innerHTML = el.unicode;
            break;
            case "ShiftLeft":
              key_item.classList.add('keyboard_key-double-wide');
              key_item.innerHTML = el.unicode + ' Shift';
              break;
            case "ControlLeft":
              key_item.classList.add('keyboard_key-wide');
              key_item.innerHTML = 'Ctrl';
              break;
            case "Space":
              key_item.classList.add('space-bar');
              break;
            case "MetaLeft":
              key_item.innerHTML = el.unicode;
              break;
            case "NumpadDecimal":
              key_item.innerText = "Del";
              break;
            default:
              capsOn === false ? key_item.innerHTML = el.key : key_item.innerHTML = el.key.toUpperCase();
              }
            
        keyboardKeys.appendChild(key_item);
      });
}



 export { makeKeys }
