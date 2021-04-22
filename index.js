/*
 * @Description: 
 * @Author: dzy
 * @Date: 2021-04-22 11:08:28
 * @LastEditTime: 2021-04-22 18:03:50
 * @LastEditors: dzy
 * @Reference: 
 */
let intervalIn = null;
let intervalOut = null;
const childDefaultWidth = 100;
const parentWidth = 500;
// 定时动画间隔10ms
const TIME = 50;
const ONCE_MOVE_PX = 1;
/**
 * 鼠标移入，宽度变成2倍
 * @param {*} div 
 */
let widthToDouble = function (div) {
    if (intervalOut) {
        clearInterval(intervalOut);
    }
    if (intervalIn) {
        clearInterval(intervalIn);
    }
    intervalIn = setInterval(function () {
        let otherDiv = Array.from(document.querySelectorAll('.child-item')).filter(item => item !== div);
        if (2 * childDefaultWidth === div.offsetWidth) {
            clearInterval(intervalIn);
        } else {
            div.style.width = div.offsetWidth + ONCE_MOVE_PX + "px";
            let otherChildWidth = (parentWidth - div.offsetWidth) / otherDiv.length + 'px';
            otherDiv.map(item => {
                item.style.width = otherChildWidth;
            });
        }
    }, TIME);
}
/**
 * 鼠标移出，宽度恢复默认
 * @param {*} div 
 */
let widthToHalf = function (div) {
    if (intervalIn) {
        clearInterval(intervalIn);
    }
    if (intervalOut) {
        clearInterval(intervalOut);
    }
    intervalOut = setInterval(function () {
        let otherDiv = Array.from(document.querySelectorAll('.child-item')).filter(item => item !== div);
        if (childDefaultWidth === div.offsetWidth) {
            clearInterval(intervalOut);
        } else {
            div.style.width = div.offsetWidth - ONCE_MOVE_PX + "px";
            let otherChildWidth = (parentWidth - div.offsetWidth) / otherDiv.length + 'px';
            otherDiv.map(item => {
                item.style.width = otherChildWidth;
            });
        }
    }, TIME);
}

