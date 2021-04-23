/*
 * @Description: 
 * @Author: dzy
 * @Date: 2021-04-22 11:08:28
 * @LastEditTime: 2021-04-23 09:07:47
 * @LastEditors: dzy
 * @Reference: 
 */
let intervalIn = null;
let intervalOut = null;
// 定时动画间隔10ms
const TIME = 10;
// 定义移动步长1px
const ONCE_MOVE_PX = 1;
// 父级宽度
let Parent_Width = null;
// 每一项的默认宽度
let Child_Default_Width = null;


/**
 * 初始化每一项的宽度（平分）
 */
let initChildDomWidth = function () {
    let parentDom =  document.querySelector('.parent');
    Parent_Width = parentDom.offsetWidth;
    Child_Default_Width = Parent_Width / 5;
    Array.from(document.querySelectorAll('.child-item')).map(item => {
        item.style.width = Child_Default_Width + 'px';
    });
}

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
        if (2 * Child_Default_Width === div.offsetWidth) {
            clearInterval(intervalIn);
        } else {
            div.style.width = div.offsetWidth + ONCE_MOVE_PX + "px";
            let otherChildWidth = (Parent_Width - div.offsetWidth) / otherDiv.length + 'px';
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
        if (Child_Default_Width === div.offsetWidth) {
            clearInterval(intervalOut);
        } else {
            div.style.width = div.offsetWidth - ONCE_MOVE_PX + "px";
            let otherChildWidth = (Parent_Width - div.offsetWidth) / otherDiv.length + 'px';
            otherDiv.map(item => {
                item.style.width = otherChildWidth;
            });
        }
    }, TIME);
}

initChildDomWidth();


