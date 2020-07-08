let currentTime = document.getElementById('currtime');

function updateTime() {
    let timeNow = new Date(),
        hh = timeNow.getHours(),
        mm = timeNow.getMinutes(),
        ss = timeNow.getSeconds()


    currentTime.innerHTML = setZero(hh) + "<span>:</span>" + mm + "<span>:</span>" + (String(ss).length == 1 ? "0" : "") + ss;

    //setTimeout(updateTime, 1000);
}

function setZero(value) {

    debugger;
    console.log('value:' + value); 

    'use strict';
    let _value = '0' + value;

    console.log('_value:' + _value);

    let _newValue = '';

    console.log('_newValue:' + _newValue);

    for (let i = _value.length - 1; i > _value.length - 3; i--) {
        console.log('i:' + i);
        _newValue = _value[i] + _newValue;
        console.log('_newValue:' + _newValue);
    }

    try {
        var calculo = 10 / 0;
        console.log('calculo:' + _calculo);
        console.log(calculo);
    }
    catch (e) {
        console.log('deu erro');
    }
    finally {
        console.log('passou aqui!');
    }

    console.log('_newValue' + _newValue);
    return _newValue;
}

updateTime();

