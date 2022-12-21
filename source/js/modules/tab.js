// Решение данной задачи заимствовано из источника: https://frontips.ru/variant-adaptivnyh-vkladok-tabs-na-javascript/

const initTabs = () => { // объявляем основную функцию для вкладок, чтобы вся логика была в одном месте
  const head = document.querySelector('.tab__head'); // ищем элемент с кнопками и записываем в константу
  const body = document.querySelector('.tab__body'); // ищем элемент с контентом и записываем в константу

  const getActiveTabName = () => { // объявляем функцию для получения названия активной вкладки
    return head.querySelector('.tab__link--active').dataset.tab; // возвращаем значение data-tab активной кнопки
  };

  const setActiveContent = () => { // объявляем функцию для установки активного элемента контента
    if (body.querySelector('.tab__content-list--active')) { // если уже есть активный элемент контента
      body.querySelector('.tab__content-list--active').classList.remove('tab__content-list--active'); // то скрываем его
    }
    body.querySelector(`[data-tab=${getActiveTabName()}]`).classList.add('tab__content-list--active'); // затем ищем элемент контента, у которого значение data-tab совпадает со значением data-tab активной кнопки и отображаем его
  };

  // проверяем при загрузке страницы, есть ли активная вкладка
  if (!head.querySelector('.tab__link--active')) { // если активной вкладки нет
    head.querySelector('.tab__link').classList.add('tab__link--active'); // то делаем активной по-умолчанию первую вкладку
  }

  setActiveContent(getActiveTabName()); // устанавливаем активный элемент контента в соответствии с активной кнопкой при загрузке страницы

  head.addEventListener('click', (evt) => { // при клике на .tabs__head
    const caption = evt.target.closest('.tab__link'); // узнаем, был ли клик на кнопке
    if (!caption || caption.classList.contains('tab__link--active')) {
      return;
    } else // если клик был не на кнопке, то прерываем выполнение функции // если клик был на активной кнопке, то тоже прерываем выполнение функции и ничего не делаем

    if (head.querySelector('.tab__link--active')) { // если уже есть активная кнопка
      head.querySelector('.tab__link--active').classList.remove('tab__link--active'); // то удаляем ей активный класс
    }

    caption.classList.add('tab__link--active'); // затем добавляем активный класс кнопке, на которой был клик
    setActiveContent(getActiveTabName()); // устанавливаем активный элемент контента в соответствии с активной кнопкой
  });

};

export {initTabs};
