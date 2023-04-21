// 获取书签容器和表单的引用
// const bookmarksDiv = document.getElementById('bookmarks');
    try {
const boxContainer = document.getElementById('mine-box_container');

const addButton = document.getElementById('add-button');

const form = document.getElementById('add-bookmark-form');

// 从 local storage 中加载书签
let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];

// 渲染书签
function renderBookmarks() {
    // 移除之前渲染的书签元素
    // const bookmarkContainer = document.querySelector('.bookmark-container');
        while (boxContainer.firstChild && boxContainer.firstChild.id!="add-button") {
        boxContainer.removeChild(boxContainer.firstChild);
    }
    // 遍历书签数组
    for (let bookmark of bookmarks) {
        // 创建书签容器
        const dialogBox = document.createElement('div');
        dialogBox.classList.add('dialog-box');
        // 创建书签名称
        const dialogTitle = document.createElement('p');
        dialogTitle.classList.add('dialog-title');
        dialogTitle.setAttribute('aria-hidden', 'true');
        dialogTitle.innerText = bookmark.name[0];
        // 创建遮罩层
        const overlay = document.createElement('div');
        overlay.classList.add('overlay');
        // 创建书签 URL
        const dialogUrl = document.createElement('p');
        dialogUrl.classList.add('dialog-url');
        dialogUrl.setAttribute('aria-hidden', 'true');
        dialogUrl.innerText = bookmark.name;
        // 创建超链接
        const anchor = document.createElement('a');
        anchor.href = bookmark.url;
        anchor.setAttribute('title', bookmark.name);
        // 为超链接添加点击事件处理函数
        anchor.addEventListener('click', () => {
            window.location.href = bookmark.url;
        });

        // 为超链接添加长按事件处理函数，改为由按钮触发
        const editButton = document.getElementById('edit-button');

        // 为每一个书签单独添加点击监听
        editButton.addEventListener('click', (event) => {
            event.preventDefault();
            // 触发长按事件的逻辑
            const form = document.createElement('form');
            form.innerHTML = `
<!-- 创建编辑书签的表单 -->
<label>
Name:
<input type="text" name="网站" value="${bookmark.name}">
</label>
<br>
<label>
URL:
<input type="url" name="地址" value="${bookmark.url}">
</label>
<br>
<button type="submit">保存</button>
<button type="button" id="cancel-button">取消</button>
<button type="button" id="delete-button">删除</button>
<button type="button" id="sort-button">排序</button>
`;
            // 表单提交事件处理函数
            form.addEventListener('submit', (event) => {
                event.preventDefault();
                // 获取表单数据
                const formData = new FormData(form);
                const name = formData.get('name');
                const url = formData.get('url');
                // 添加书签
                if (!bookmark) {
                    bookmarks.push({ name, url });
                } else {
                    // 更新书签
                    bookmark.name = name;
                    bookmark.url = url;
                }
                // 更新 local storage 中的书签数组
                localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
                // 重新渲染书签列表
                renderBookmarks();
            });
            // 严重 bug, 点击保存会删除, 然后我的页面会卡住，无法关闭和打开添加！
            
            // 取消按钮点击事件处理函数
            form.querySelector('#cancel-button').addEventListener('click', () => {
                // 重新渲染书签列表
                renderBookmarks();
            });

            // 删除按钮点击事件处理函数
            form.querySelector('#delete-button').addEventListener('click', () => {
                // 从书签数组中删除该书签
                bookmarks.splice(bookmarks.indexOf(bookmark), 1);
                // 更新 local storage 中的书签数组
                localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
                // 重新渲染书签列表
                renderBookmarks();
            });

            // 排序按钮点击事件处理函数
            form.querySelector('#sort-button').addEventListener('click', () => {
                // 对书签数组按照名称排序
                bookmarks.sort((a, b) => a.name.localeCompare(b.name));
                // 更新 local storage 中的书签数组
                localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
                // 重新渲染书签列表
                renderBookmarks();
            });

            dialogBox.appendChild(form);
        });

        // 将所有元素添加到书签容器中
        dialogBox.appendChild(dialogTitle);
        dialogBox.appendChild(overlay);
        dialogBox.appendChild(dialogUrl);
        dialogBox.appendChild(anchor);
        // 将书签容器添加到书签列表中
        boxContainer.insertBefore(dialogBox, addButton);
    }

}
// 初始化渲染书签
renderBookmarks();
// 点击编辑按钮返回，移出 renderBookmarks 就不会第二次操作返回两次了
const editButton = document.getElementById('edit-button');

editButton.addEventListener('click', (event) => {
    event.preventDefault();
    // 触发长按事件的逻辑
    history.back();
});

/*
const hideButton = document.getElementById('hide-button');
hideButton.addEventListener('click', (event) => {
    // 如果不阻止默认事件，就会创建一个 undefined 空书签
    event.preventDefault();
    history.back();
});
*/

// 添加书签
form.addEventListener('submit', event => {
    // 阻止默认提交行为
    event.preventDefault();
    // 获取输入的书签名称和 URL
    const name = event.target.elements.name.value;
    const url = event.target.elements.url.value;
    // 将新书签添加到书签数组中
    bookmarks.push({ name, url });
    // 将书签数组存储到 local storage 中
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    // 重新渲染书签
    renderBookmarks();
    // 重置表单
    form.reset();
    history.back();
});
    } catch(e) {
        console.error(e);
    }