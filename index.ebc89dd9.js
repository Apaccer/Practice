const e=document.querySelector(".header-form"),t=document.querySelector(".tasks-list");e.addEventListener("submit",(function(n){n.preventDefault();const s=e.elements.taskName.value,r=e.elements.taskText.value;(function(e){t.insertAdjacentHTML("beforeend",e)})(function(e,t){return`\n <li class="task-list-item">\n    <button class="task-list-item-btn">Удалить</button>\n   <h3>${e}</h3>\n    <p>${t}</p>\n</li>`}(s,r)),n.currentTarget.reset()}));
//# sourceMappingURL=index.ebc89dd9.js.map