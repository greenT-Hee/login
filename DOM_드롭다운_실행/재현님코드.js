const btn = document.querySelector('.btn-select');
const list = document.querySelector(".list-member");

const arrLang = ['Python','Java','JavaScript','C#','C/C++'];

// 자스로 요소를 만드는 이유
//백엔드에서 데이터를 받아오면(지금은 arrLang 배열) 데이나나 요소를 수정할 떄가 생길 일이 빈번한데, html로 박아놓으면 static해져서 관리가 어려워 요소를 JS로 만드는 것임.

arrLang.forEach((item)=> {
    const li = document.createElement('li');
    const btn = document.createElement('button');

    btn.setAttribute('type','button');
    //<button type = "button"></button>
    btn.textContent = item;
    // btn.classList.add('') = btn.setAttribute('class','');
    li.appendChild(btn);
    list.appendChild(li);
});

btn.addEventListener('click', () => {
    btn.classList.toggle('on');
});

list.addEventListener('click', (event) => {
    if (event.target.nodeName === 'BUTTON') {
        btn.textContent = event.target.textContent;
        btn.classList.remove('on');
    }
});

