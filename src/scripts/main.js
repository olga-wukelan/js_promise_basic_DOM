'use strict';

const body = document.querySelector('body');
const logo = document.querySelector('.logo');

function clickOnLogo() {
  const promise = new Promise((resolve, reject) => {
    logo.addEventListener(
      'click',
      () => {
        setTimeout(timer);
        resolve('Promise was resolved!');
      },
      { once: true },
    );

    const timer = setTimeout(() => {
      reject(new Error('Promise was rejected!'));
    }, 3000);
  });

  promise.then((message) => {
    const div = document.createElement('div');

    div.classList.add('message');
    div.textContent = message;
    body.append(div);
  });

  promise.catch((error) => {
    const div = document.createElement('div');

    div.classList.add('message', 'error-message');
    div.textContent = error;
    body.append(div);
  });
}

clickOnLogo();
