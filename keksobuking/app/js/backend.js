'use-strict';

{
  const urlPost = 'https://js.dump.academy/keksobooking';
  const urlGet = 'https://js.dump.academy/keksobooking/data';

  const request = (onLoad, onError) => {
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

    return xhr;
  }



  const save = (data, onLoad, onError) => {
    const xhr = request(onLoad, onError);

    xhr.open('POST', urlPost);
    xhr.send(data);
    
  }



  const load = (onLoad, onError) => {
    const xhr = request(onLoad, onError);
    
    xhr.open('GET', urlGet);
    xhr.send();

  }

  window.backend = {
    save,
    load
  }
}