(function () {
    'use strict';
    // create modal window
    function initModal(conf) {
        var modalId = conf.modalId,
            modalHeader = conf.modalHeader,
            modalFooter = conf.modalFooter,
            closeButton = conf.closeButton,
            sizeModal = conf.sizeModal,
            title = conf.title,
            body = conf.body,
            footer = conf.footer,
            popupWindow,
            popupHeader,
            popupFooter,
            popupBody,
            constructor,
            modalDialog,
            closeBut;

        //check existing modals
        if (document.getElementById('modal')){
            //if already present in DOM show this modal
            closeModal();
        }else{
            popupWindow = document.createElement("div");
            popupWindow.className = modalId + " fade";
            if (modalId) {
                popupWindow.id = 'modal';
            }
            if (sizeModal) {
                constructor = '<div class="modal-dialog ' + sizeModal + '">' +
                    '<div class= "modal-content">';
            } else {
                constructor = '<div class="modal-dialog">' +
                    '<div class= "modal-content">';
            }
            if (modalHeader) {
                if (closeButton) {
                    popupHeader = '<div class="modal-header">' +
                        '<button type="button" class="closeModalButton">×</button>' +
                        '<h3 class="modal-title">' + title + '</h3>' +
                        '</div>';
                } else {
                    popupHeader = '<div class="modal-header">' +
                        '<h3 class="modal-title">' + title + '</h3>' +
                        '</div>';
                }
                constructor += popupHeader;
            }
            if (body) {
                popupBody = ' <div class="modal-body">' + body + '</div>';
                constructor += popupBody;
            }
            if (modalFooter) {
                popupFooter = '<div class="modal-footer">' + footer + '</div>';
                constructor += popupFooter;
            }
            constructor += '</div></div></div>';
            popupWindow.innerHTML = constructor;
            document.body.appendChild(popupWindow);

            // set close listener for button and background
            if(closeButton && modalHeader){
                closeBut = popupWindow.getElementsByClassName('closeModalButton')[0];
                closeBut.addEventListener('click', closeModal, false);
            }
            popupWindow.addEventListener('click', closeModal, false);

            // stop propagation for dialog
            modalDialog = popupWindow.getElementsByClassName('modal-dialog')[0];
            modalDialog.addEventListener('click', stopPropagation, false);

            // modal position first init
            rebaseModal();

            // modal position set resize listener
            window.addEventListener('resize', rebaseModal, false);

            showModal()
        }
    }

    function closeModal() {
        modalBg(false);
    }

    function showModal() {
        modalBg(true);
    }

    //toggle background display
    function modalBg(n){
        var modalBg = document.getElementById('modal');
        if (n) {
            addClass(modalBg, 'in');
            remoevClass(modalBg, 'out');
        } else {
            remoevClass(modalBg, 'in');
            modalBg.parentNode.removeChild(modalBg);
        }
    }

    //add class
    function addClass(elem, className) {
        elem.classList.add(className);
    }

    //remove class
    function remoevClass(elem, className) {
        elem.classList.remove(className);
    }

    //stopPropagation
    function stopPropagation(e) {
        e.stopPropagation();
    }

    //if browser size resized
    function rebaseModal() {
        var windowHeight,
            windowWidth,
            modalHeight,
            modalWidth,
            modalWindow,
            modalMarginTop,
            popupWindow;

        popupWindow = document.getElementById('modal');
        modalWindow = popupWindow.getElementsByClassName('modal-dialog')[0];
        windowWidth = window.innerWidth
            || document.documentElement.clientWidth
            || document.body.clientWidth;
        windowHeight = window.innerHeight
            || document.documentElement.clientHeight
            || document.body.clientHeight;
        modalWidth = modalWindow.offsetWidth;
        modalHeight = modalWindow.offsetHeight;
        modalMarginTop = Math.round((windowHeight - modalHeight) / 2);

        if (modalMarginTop < 60) {
            modalMarginTop = 60;
            modalWindow.setAttribute("style", "margin-top:" + modalMarginTop + "px;");
        } else{
            modalWindow.setAttribute("style", "margin-top:" + modalMarginTop + "px;");
        }
    }

    window.initModal = initModal;
})();