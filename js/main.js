document.addEventListener('DOMContentLoaded', function(){

    let leftSide = document.querySelector('.yellow');
    let rightSide = document.querySelector('.green');
    let leftBtn = document.querySelector('.yellow-right');
    let rightBtn = document.querySelector('.green-left');
    let leftContent = document.querySelector('.yellow-content');
    let rightContent = document.querySelector('.green-content');
    let leftScroll = document.querySelector('.left-scroll');
    let rightScroll = document.querySelector('.right-scroll');
    let leftImg = document.querySelector('.yellow .main-pic');
    let rightImg = document.querySelector('.green .main-pic');
    let leftHidden = document.querySelector('.yellow .hidden-text');
    let rightHidden = document.querySelector('.green .hidden-text');
    let leftRow = document.querySelector('.yellow .row');
    let rightRow = document.querySelector('.green .row');
    let leftLikes = document.querySelector('.yellow .likes');
    let rightLikes = document.querySelector('.green .likes');
    let formScroll = document.querySelectorAll('.scroll');

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
            leftImg.classList.add('bigger');
            leftRow.classList.add('vmeste');
            leftHidden.classList.add('active');
            leftLikes.classList.remove('disable');
            rightHidden.classList.remove('active');
            rightImg.classList.remove('bigger');
            rightSide.classList.remove('maximized');
            rightSide.classList.add('minimized');
            leftContent.classList.remove('disable');
            rightContent.classList.add('disable');
            leftScroll.classList.remove('disable');
            rightScroll.classList.add('disable');
            rightLikes.classList.add('disable');
        }
        else if(leftSide.classList.contains('maximized')){
            leftSide.classList.remove('maximized');
            leftImg.classList.remove('bigger');
            leftRow.classList.remove('vmeste');
            leftHidden.classList.remove('active');
            leftLikes.classList.add('disable');
            rightSide.classList.remove('minimized');
            rightContent.classList.remove('disable');
            rightScroll.classList.remove('disable');
            rightRow.classList.remove('vmeste');
            rightLikes.classList.add('disable');
        }
        else{
            leftSide.classList.add('maximized');
            leftImg.classList.add('bigger');
            leftRow.classList.add('vmeste');
            leftHidden.classList.add('active');
            leftLikes.classList.remove('disable');
            rightSide.classList.add('minimized');
            rightContent.classList.add('disable');
            rightScroll.classList.add('disable');
        }
    };

    rightBtn.onclick = function() {
        if(rightSide.classList.contains('minimized')){
            rightSide.classList.remove('minimized');
            rightSide.classList.add('maximized');
            rightImg.classList.add('bigger');
            rightHidden.classList.add('active');
            rightRow.classList.add('vmeste');
            rightLikes.classList.remove('disable');
            leftImg.classList.remove('bigger');
            leftRow.classList.remove('vmeste');
            leftSide.classList.remove('maximized');
            leftSide.classList.add('minimized');
            rightContent.classList.remove('disable');
            leftContent.classList.add('disable');
            rightScroll.classList.remove('disable');
            leftScroll.classList.add('disable');
            leftLikes.classList.add('disable');
        }
        else if(rightSide.classList.contains('maximized')){
            rightSide.classList.remove('maximized');
            rightImg.classList.remove('bigger');
            rightHidden.classList.remove('active');
            rightRow.classList.remove('vmeste');
            rightLikes.classList.add('disable');
            leftSide.classList.remove('minimized');
            leftContent.classList.remove('disable');
            leftScroll.classList.remove('disable');
            leftHidden.classList.remove('active');
            leftRow.classList.remove('vmeste');
            leftLikes.classList.add('disable');
        }
        else{
            rightSide.classList.add('maximized');
            rightImg.classList.add('bigger');
            rightHidden.classList.add('active');
            rightRow.classList.add('vmeste');
            rightLikes.classList.remove('disable');
            leftSide.classList.add('minimized');
            leftContent.classList.add('disable');
            leftScroll.classList.add('disable');
        }
    };

    formScroll[0].onclick = function(){
        formScroll[0].querySelector('.checked').classList.remove('checked');
        let inputChecked = formScroll[0].querySelector('input[type="radio"]:checked');
        inputChecked.parentElement.classList.add('checked');
    };
    formScroll[1].onclick = function(){
        formScroll[1].querySelector('.checked').classList.remove('checked');
        let inputChecked = formScroll[1].querySelector('input[type="radio"]:checked');
        inputChecked.parentElement.classList.add('checked');
    };
});