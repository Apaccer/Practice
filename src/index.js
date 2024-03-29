/**
 * Створи список справ.
 * На сторінці є два інпути які має вводиться назва і текст задачі.
 * Після натискання на кнопку "Додати" завдання додається до списку #task-list.
 *
 * Розмітка картки задачі
 * <li class="task-list-item">
 *     <button class="task-list-item-btn">Удалить</button>
 *     <h3>Заголовок</h3>
 *     <p>Текст</p>
 * </li>
 *
 * У кожної картки має бути кнопка "Видалити", щоб можна було
 * прибрати завдання зі списку.
 * Список із завданнями має бути доступним після перезавантаження сторінки.
 */
const array = getDataFromStorage() || [];
const form = document.querySelector('.header-form');
const list = document.querySelector('.tasks-list');
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  const taskName = form.elements.taskName.value;
  const taskText = form.elements.taskText.value;
  const obj = {
    taskName,
    taskText,
  };
  array.push(obj);
  addArrayToStorage(array);
  console.log(array);
  const markup = markupItem(obj);
  renderItem(markup);
  e.currentTarget.reset();
}
function firstRender() {
  const arrayMap = array.map(markupItem).join('');

  console.log(arrayMap);
  renderItem(arrayMap);
}
firstRender();
function markupItem({ taskName, taskText }) {
  const markup = `
 <li class="task-list-item">
    <button class="task-list-item-btn">Удалить</button>
   <h3>${taskName}</h3>
    <p>${taskText}</p>
</li>`;
  return markup;
}
function renderItem(markup) {
  list.insertAdjacentHTML('beforeend', markup);
}
function addArrayToStorage(array) {
  const json = JSON.stringify(array);
  localStorage.setItem('keyJsonArray', json);
}
function getDataFromStorage() {
  const data = localStorage.getItem('keyJsonArray');
  return JSON.parse(data);
}
console.log(getDataFromStorage());
