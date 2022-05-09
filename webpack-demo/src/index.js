//import _ from 'lodash';
import './style.css';
import { makeHeading } from './h1'
import { makeTextArea } from './textArea'
import { keyboard} from './keyboard'
//import { keysObjects } from './keysObjects'
import { makeKeys } from './makeKeys'

alert ('Привет, коллега! Можешь не тратить свое впемя и ставить 0 баллов за проваленную работу. Я не успел до дедлайна, попробую доделать чуть позже. Спасибо!')

let capsOn = false;

document.body.appendChild(makeHeading());
document.body.appendChild(makeTextArea());
document.body.appendChild(keyboard());
makeKeys();

// caps



/*const capsKey = document.getElementById('20');
const keyboardKeys = document.getElementById('keyboard-keys');
function caps() {
  keyboardKeys.innerHTML = ''
  if (capsOn === false) {
    capsKey.classList.add('keyboard_key-pushed');
    capsOn = true;
    makeKeys();
    capsKey.addEventListener('click', caps)
  } else {
    capsKey.classList.remove('keyboard_key-pushed');
    capsOn = false;
    makeKeys();
    capsKey.addEventListener('click', caps)
  }
}

capsKey.addEventListener('click', caps)*/



const btn = document.createElement('button');
btn.classList.add('btn');
btn.innerText = ('bla-bla');
document.body.append(btn);

/*let makeKeys = () => keysObjects.forEach(el => {
  const keyboardKeys = document.querySelector('#keyboard-keys');
  let key_item = document.createElement('button');
  key_item.classList.add('keyboard_key');
  key_item.id = el.keyCode;
  key_item.innerText = `${el.key}`;
  keyboardKeys.appendChild(key_item);
});

makeKeys();*/

/*function component() {
    const element = document.createElement('div');
  
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

     // Add the image to our existing div.
    const myIcon = new Image();
    myIcon.src = Icon;

    //element.appendChild(myIcon);
  
    return element;
  }
  
  document.body.appendChild(component());*/

export { capsOn }