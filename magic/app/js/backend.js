'use-strict';

{
  const url = 'https://js.dump.academy/code-and-magick';
  window.save = (data, onLoad, onError) => {

    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        onLoad(xhr.response);
      } else {
        onError(`Статус ответа: ${xhr.status} ${xhr.statusText}`);
      }
    });

    xhr.addEventListener('error', () => {
      onError('Произошла ошибка соединения');
    });
    xhr.addEventListener('timeout', () => {
      onError(`Запрос не успел выполниться за ${xhr.timeout}мс`);
    });


    xhr.open('POST', url);
    xhr.send(data);
    
  }

}

{
  const url = 'https://js.dump.academy/code-and-magick/data';

  window.load = (onLoad, onError) => {
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        onLoad(xhr.response);
      } else {
        onError(`Статус ответа: ${xhr.status} ${xhr.statusText}`);
      }
    });
    
    xhr.addEventListener('error', () => {
      onError('Произошла ошибка соединения');
    });
    xhr.addEventListener('timeout', () => {
      onError(`Запрос не успел выполниться за ${xhr.timeout}мс`);
    });

    
    xhr.open('GET', url);
    xhr.send();

  }
}

{
  window.backend = {
    save: window.save,
    load: window.load
  }
}