let btnNumbers = document.querySelectorAll('.btn-number'),
    screenContent = document.querySelector('.screen'),
    cancelBtn = document.querySelector('.btn-del'),
    actionBtn = document.querySelectorAll('.btn-action'),
    resBtn = document.querySelector('.btn-res');

    let currentNumber = '',
    isAction = false,
    oldNumber = '',
    res = '',
    howAction = false,
    actionOld = '',
    multuVvod = false,
    actionNow = '';

function del() {
    res = currentNumber = oldNumber = actionOld = actionNow = '';
    isAction = howAction = multuVvod = btnNumbers[10].disabled = false;
}

for (let i = 0; i < btnNumbers.length; i++) {

    btnNumbers[i].addEventListener('click', function () {
        if ( (actionNow >= 1 || multuVvod == true) && (currentNumber === 0 || oldNumber === 0 || currentNumber || oldNumber)) {
            if(isAction == true){
                del();
                isAction = 5;
            }
            if ((res === 0 || res) && multuVvod == false) {
                oldNumber = res;
                currentNumber = '';
            }

            let number = btnNumbers[i].value;
                currentNumber += number;

                if(btnNumbers[i].value =='.'){
                        if(actionNow >=1 || isAction==5)
                        {
                            currentNumber = '0.';
                        }
                        btnNumbers[10].disabled = true;
                }
                if (actionNow >= 1 ) {
                    actionOld = actionNow; 
                    if(multuVvod==false){
                        actionNow = '';
                    }
                    multuVvod = true;
                }
                screenContent.textContent = currentNumber;
            rasschet();
        } else {
            if ((res === 0 || res) && multuVvod == false) {
                oldNumber = res;
                currentNumber = '';
            }
            let number = btnNumbers[i].value;
            currentNumber += number;
            if(btnNumbers[i].value =='.'){
                currentNumber = '0.';
                btnNumbers[10].disabled = true;
            }
            screenContent.textContent = currentNumber;
            multuVvod = true;
        }
        howAction = true;
        isAction = false;
    });
}

cancelBtn.addEventListener('click', function () {
    del();
    screenContent.textContent = currentNumber;
});

for (let i = 0; i < actionBtn.length; i++) {
    actionBtn[i].addEventListener('click', function () {
        multuVvod = false; //отключаем ввод нескольких символов
        if (howAction == true) { //если до этого были цифры - записываем их 
            oldNumber = currentNumber;
            currentNumber = '';
        }
        howAction = false; //выключаем ввод чисел
        if (res === 0 || res) { //если есть результат то выводим его
            screenContent.textContent = res;
        }
        actionNow = i + 1; //запоимнаем операцию
        btnNumbers[10].disabled = false; //разрешаем точку
    })
}

function rasschet() {
    if (actionOld == 1) {
        res = (+currentNumber) * (+oldNumber);
    }
    if (actionOld == 2) {
        res = +currentNumber + (+oldNumber);
    }
    if (actionOld == 3) {
        res = (+oldNumber) - (+currentNumber);
    }
    if (actionOld == 4) {
        res = (+oldNumber) / (+currentNumber);
    }
    res = String(res);
}

resBtn.addEventListener('click', function () {
    if ((currentNumber && oldNumber)) {
        screenContent.textContent = res;
        btnNumbers[10].disabled = false;
        actionNow = 5;
        howAction = false;
    }
});


// let timerId =  setTimeout(sayHello, 3000 );
// clearTimeout(timerId);

// let timerId =  setInterval(sayHello, 3000 );


// function sayHello() {
//     alert('sayHello');
//   }
//   clearTimeout(timerId);


