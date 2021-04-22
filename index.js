/*
 * @Description: 
 * @Author: dzy
 * @Date: 2021-04-22 11:08:28
 * @LastEditTime: 2021-04-22 16:57:20
 * @LastEditors: dzy
 * @Reference: 
 */
let intervalIn = null;
let intervalOut = null;
const childDefaultWidth = 100;
const parentWidth = 500;
let widthToDouble = function (div) {
    console.log("鼠标移入");
    if (intervalOut) {
        clearInterval(intervalIn);
    }
    if (intervalIn) {
        clearInterval(intervalIn);
    }
    intervalIn = setInterval(function () {
        let otherDiv = Array.from(document.querySelectorAll('.child-item')).filter(item => item !== div);
        if (2 * childDefaultWidth === div.offsetWidth) {
            clearInterval(intervalIn);
        } else {
            div.style.width = div.offsetWidth + 1 + "px";
            let otherChildWidth = (parentWidth - div.offsetWidth) / 4 + 'px';
            otherDiv.map(item => {
                item.style.width = otherChildWidth;
            });
        }
    }, 10);
}
let widthToHalf = function (div) {
    if (intervalIn) {
        clearInterval(intervalIn);
    }
    if (intervalOut) {
        clearInterval(intervalIn);
    }
    intervalOut = setInterval(function () {
        let otherDiv = Array.from(document.querySelectorAll('.child-item')).filter(item => item !== div);
        if (childDefaultWidth === div.offsetWidth) {
            clearInterval(intervalOut);
        } else {
            div.style.width = div.offsetWidth - 1 + "px";
            let otherChildWidth = (parentWidth - div.offsetWidth) / 4 + 'px';
            otherDiv.map(item => {
                item.style.width = otherChildWidth;
            });
        }
    }, 10);
}

