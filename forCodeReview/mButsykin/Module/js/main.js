SandBox('popup-module', 'handlers-module', function(A) {
    var popup = new A.popUp({
        openSelector: '.openPopUp',
        closeSelector: '.closePopUp'
    });

    function onCenter() {
        alert(2)
    }

    popup.handlerListener.once('centered', onCenter);
});