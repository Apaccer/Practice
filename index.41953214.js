!function(){var e,t=r()||[],n=document.querySelector(".header-form"),a=document.querySelector(".tasks-list");function s(e){var t=e.taskName,n=e.taskText;return'\n <li class="task-list-item">\n    <button class="task-list-item-btn">Удалить</button>\n   <h3>'.concat(t,"</h3>\n    <p>").concat(n,"</p>\n</li>")}function o(e){a.insertAdjacentHTML("beforeend",e)}function r(){var e=localStorage.getItem("keyJsonArray");return JSON.parse(e)}n.addEventListener("submit",(function(e){e.preventDefault();var a=n.elements.taskName.value,r=n.elements.taskText.value,l={taskName:a,taskText:r};t.push(l),c=t,u=JSON.stringify(c),localStorage.setItem("keyJsonArray",u),console.log(t),o(s(l)),e.currentTarget.reset();var c,u})),e=t.map(s).join(""),console.log(e),o(e),console.log(r())}();
//# sourceMappingURL=index.41953214.js.map
