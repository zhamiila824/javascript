document.addEventListener('DOMContentLoaded', function(){

    let leftSide = document.querySelector('.yellow');
    let rightSide = document.querySelector('.green');
    let leftBtn = document.querySelector('.yellow-right');
    let rightBtn = document.querySelector('.green-left');
    let leftContent = document.querySelector('.yellow-content');
    let rightContent = document.querySelector('.green-content');
    let leftScroll = document.querySelector('.left-scroll');
    let rightScroll = document.querySelector('.right-scroll');

    // leftBtn.addEventListener('click', () => {
    //     leftSide.classList.toggle('maximized');
    //     rightSide.classList.toggle('minimized');
    //     rightContent.classList.toggle('disable');
    //     rightScroll.classList.toggle('disable');
    //
    // });

    leftBtn.onclick = function() {
        if(leftSide.classList.contains('minimized')){
            leftSide.classList.remove('minimized');
            leftSide.classList.add('maximized');
            rightSide.classList.remove('maximized');
            rightSide.classList.add('minimized');
            leftContent.classList.remove('disable');
            rightContent.classList.add('disable');
            leftScroll.classList.remove('disable');
            rightScroll.classList.add('disable');
        }
        else if(leftSide.classList.contains('maximized')){
            leftSide.classList.remove('maximized');
            rightSide.classList.remove('minimized');
            rightContent.classList.remove('disable');
            rightScroll.classList.remove('disable');
        }
        else{
            leftSide.classList.add('maximized');
            rightSide.classList.add('minimized');
            rightContent.classList.add('disable');
            rightScroll.classList.add('disable');
        }
    };

    rightBtn.onclick = function() {
        if(rightSide.classList.contains('minimized')){
            rightSide.classList.remove('minimized');
            rightSide.classList.add('maximized');
            leftSide.classList.remove('maximized');
            leftSide.classList.add('minimized');
            rightContent.classList.remove('disable');
            leftContent.classList.add('disable');
            rightScroll.classList.remove('disable');
            leftScroll.classList.add('disable');
        }
        else if(rightSide.classList.contains('maximized')){
            rightSide.classList.remove('maximized');
            leftSide.classList.remove('minimized');
            leftContent.classList.remove('disable');
            leftScroll.classList.remove('disable');
        }
        else{
            rightSide.classList.add('maximized');
            leftSide.classList.add('minimized');
            leftContent.classList.add('disable');
            leftScroll.classList.add('disable');
        }
    };
});