import _ from 'lodash';
import './style.css';
import Icon from './icon.png'
import { makeHeading } from './h1'
import { makeTextArea, textArea } from './textArea'
import { keyboard} from './keyboard'
import { keysObjects } from './keysObjects'
import { makeKeys } from './makeKeys'





document.body.appendChild(makeHeading());
document.body.appendChild(makeTextArea());
document.body.appendChild(keyboard());
const keyboardKeys = document.querySelector('#keyboard-keys');
keyboardKeys.appendChild(makeKeys());

const btn = document.createElement('div');
btn.classList.add('btn');
btn.innerText = ('bla-bla');
document.body.appendChild(btn);

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



