document.addEventListener('DOMContentLoaded', function(){
    let leftSide = document.querySelector('.yellow');
    let rightSide = document.querySelector('.green');
    let leftBtn = document.querySelector('.yellow-right');
    let rightBtn = document.querySelector('.green-left');
    let rightContent = document.querySelector('.green-content');
    let leftContent = document.querySelector('.yellow-content');

    leftBtn.onclick = function() {
        if(leftSide.classList.contains('minimized')){
            leftSide.classList.remove('minimized');
            leftSide.classList.add('maximized');
            rightSide.classList.remove('maximized');
            rightSide.classList.add('minimized');
            leftContent.classList.remove('disable');
            rightContent.classList.add('disable');
        }
        else if(leftSide.classList.contains('maximized')){
            leftSide.classList.remove('maximized');
            rightSide.classList.remove('minimized');
            rightContent.classList.remove('disable');
        }
        else{
            leftSide.classList.add('maximized');
            rightSide.classList.add('minimized');
            rightContent.classList.add('disable');
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
        }
        else if(rightSide.classList.contains('maximized')){
            rightSide.classList.remove('maximized');
            leftSide.classList.remove('minimized');
            leftContent.classList.remove('disable');
        }
        else{
            rightSide.classList.add('maximized');
            leftSide.classList.add('minimized');
            leftContent.classList.add('disable');
        }
    };
    // leftBtn.onclick = function() {
    //     if(rightSide.classList.contains('minimaized')){
    //
    //         leftSide.classList.remove('maximaized');
    //         rightSide.classList.remove('minimaized');
    //
    //         leftBtn.classList.remove('go-right');
    //         rightBtn.classList.remove('go-right');
    //     } else if(leftSide.classList.contains('minimaized')){
    //
    //         rightSide.classList.remove('maximaized');
    //         rightSide.classList.add('minimaized');
    //         leftSide.classList.add('maximaized');
    //         leftSide.classList.remove('minimaized');
    //
    //         leftBtn.classList.remove('go-left');
    //         rightBtn.classList.remove('go-left');
    //         leftBtn.classList.add('go-right');
    //         rightBtn.classList.add('go-right');
    //     } else{
    //
    //         leftSide.classList.add('maximaized');
    //         rightSide.classList.add('minimaized');
    //
    //         leftBtn.classList.add('go-right');
    //         rightBtn.classList.add('go-right');
    //     };
    //
    //     if(rightSide.classList.contains('minimaized')){
    //
    //         leftImg.classList.add('animated');
    //         leftCalculator.classList.add('animated');
    //         leftCostBox.classList.add('animated');
    //         leftAvatars.classList.add('animated');
    //         leftAvatars.classList.remove('visibleHidden');
    //
    //     } else {
    //
    //         leftImg.classList.remove('animated');
    //         leftCalculator.classList.remove('animated');
    //         leftCostBox.classList.remove('animated');
    //         leftAvatars.classList.remove('animated');
    //         leftAvatars.classList.add('visibleHidden');
    //
    //     }
    //
    //     if (leftItemInfo.classList.contains('hidden')) {
    //         leftItemInfo.classList.remove('hidden');
    //         setTimeout(function () {
    //             leftItemInfo.classList.remove('visibleHidden');
    //         }, 20);
    //     } else {
    //         leftItemInfo.classList.add('visibleHidden');
    //         setTimeout(function () {
    //             leftItemInfo.classList.add('hidden');
    //         }, 400);
    //     };
    //
    //
    //
    // };




});