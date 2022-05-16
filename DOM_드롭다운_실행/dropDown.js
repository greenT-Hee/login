const contSelect = document.querySelector('.cont-select');
const btnSelect = document.querySelector('.btn-select');
const listMember = document.querySelector('.list-member');
const option = document.querySelectorAll('.opt-member');

// 토글버튼이 클릭 --> 메뉴 보인다 
// list-member를 show

btnSelect.addEventListener('click', function(){
    listMember.classList.toggle('show');
    btnSelect.classList.toggle('on');
})

btnSelect.addEventListener('blur', function(){
    listMember.classList.remove('show');
    btnSelect.classList.remove('on');
})

option.forEach(function(item){
    item.addEventListener('mousedown',function(e){
        const value = e.currentTarget.textContent;
        btnSelect.textContent = value;
        btnSelect.classList.add('selected-style')
    })
})



//마우스다운 이벤트는 블러보다 먼저 실행되는 이벤트래요!
//https://stackoverflow.com/questions/39439115/how-to-execute-click-function-before-the-blur-function