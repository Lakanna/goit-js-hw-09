import Notiflix from 'notiflix';

const defs = {
  form: document.querySelector('.form'),
  };

defs.form.addEventListener('submit', handlerSubmit);

function handlerSubmit(evt) {
   
  evt.preventDefault();

  const delayForm = Number(defs.form.elements.delay.value);
  const stepForm = Number(defs.form.elements.step.value);
  const amount = Number(defs.form.elements.amount.value);

  let counter = 1;
  let counterDelay = delayForm;

  
  while (counter <= amount) {

    createPromise(counter, counterDelay)
      .then(({ position, delay }) => {
       Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
  .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
    
    counterDelay = delayForm + stepForm * counter;
    counter += 1;
    
  };
      
};

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  }
  )
  return promise;
};
  
 
