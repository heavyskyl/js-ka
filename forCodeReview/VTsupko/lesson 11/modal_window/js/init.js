window.onload = function () {

    var modalDefault = document.getElementById("modal-default"),
        modalSm = document.getElementById("modal-sm"),
        modalMd = document.getElementById("modal-md"),
        modalLg= document.getElementById("modal-lg"),
        modalNoHead = document.getElementById("modal-noHead"),
        modalNoFooter = document.getElementById("modal-noFooter"),
        modalNoCloseBut = document.getElementById("modal-noCloseButton");

    modalDefault.addEventListener("click", defaultModal, false);
    modalSm.addEventListener("click", smallModal, false);
    modalMd.addEventListener("click", mediumModal, false);
    modalLg.addEventListener("click", largeModal, false);
    modalNoHead.addEventListener("click", noHeaderModal, false);
    modalNoFooter.addEventListener("click", noFooterModal, false);
    modalNoCloseBut.addEventListener("click", noCloseButtonModal, false);

};
//open modal
function defaultModal() {
    var data = {
        modalId: 'defaultModal',
        modalHeader: true,
        modalFooter: true,
        closeButton: true,
        sizeModal: 'modal-full',
        title: 'Custom Title',
        body: 'Phasellus porta dignissim ipsum id iaculis. Proin viverra suscipit liberoe, ' +
            'sed luctus sapien ultricies porttitor. Phasellus imperdiet, enim in sagittisa ' +
            'sollicitudin, diam ante commodo felis, ut feugiat leo purus sit amet enim. Si ' +
            'sit amet risus ac augue convallis sollicitudin et ut turpis. Maecenas tempusu ' +
            'imperdiet augue, sed dapibus est dapibus fermentum. Suspendisse non commodo , ' +
            'id congue eros. Sed pellentesque quam id gravida mattis. Nullam commodo mii , ' +
            'vitae interdum eros lacinia sit amet. Ut pharetra tincidunt faucibus. Donec , ' +
            'neque non cursus fringilla, sapien augue laoreet lorem, non pretium nibh odio ' +
            'id nulla. Nam a metus malesuada, volutpat nulla nec, pharetra felis. Maecenas ' +
            'eget neque laoreet egestas nec et odio. In commodo urna sit amet vestibulumy. ' +
            'Nam nisi turpis, vehicula nec ante at, sagittis euismod magna',
        footer: 'Custom footer'
    };
    initModal(data);
}

function smallModal() {
    var data = {
        modalId: 'smallModal',
        modalHeader: true,
        modalFooter: true,
        closeButton: true,
        sizeModal: 'modal-sm',
        title: 'Custom Title',
        body: 'Phasellus porta dignissim ipsum id iaculis. Proin viverra suscipit liberoe, ' +
            'sed luctus sapien ultricies porttitor. Phasellus imperdiet, enim in sagittisa ' +
            'sollicitudin, diam ante commodo felis, ut feugiat leo purus sit amet enim. Si ' +
            'sit amet risus ac augue convallis sollicitudin et ut turpis. Maecenas tempusu ' +
            'imperdiet augue, sed dapibus est dapibus fermentum. Suspendisse non commodo , ' +
            'id congue eros. Sed pellentesque quam id gravida mattis. Nullam commodo mii , ' +
            'vitae interdum eros lacinia sit amet. Ut pharetra tincidunt faucibus. Donec , ' +
            'neque non cursus fringilla, sapien augue laoreet lorem, non pretium nibh odio ' +
            'id nulla. Nam a metus malesuada, volutpat nulla nec, pharetra felis. Maecenas ' +
            'eget neque laoreet egestas nec et odio. In commodo urna sit amet vestibulumy. ' +
            'Nam nisi turpis, vehicula nec ante at, sagittis euismod magna',
        footer: 'Custom footer'
    };
    initModal(data);
}

function mediumModal() {
    var data = {
        modalId: 'mediumModal',
        modalHeader: true,
        modalFooter: true,
        closeButton: true,
        sizeModal: 'modal-md',
        title: 'Custom Title',
        body: 'Phasellus porta dignissim ipsum id iaculis. Proin viverra suscipit liberoe, ' +
            'sed luctus sapien ultricies porttitor. Phasellus imperdiet, enim in sagittisa ' +
            'sollicitudin, diam ante commodo felis, ut feugiat leo purus sit amet enim. Si ' +
            'sit amet risus ac augue convallis sollicitudin et ut turpis. Maecenas tempusu ' +
            'imperdiet augue, sed dapibus est dapibus fermentum. Suspendisse non commodo , ' +
            'id congue eros. Sed pellentesque quam id gravida mattis. Nullam commodo mii , ' +
            'vitae interdum eros lacinia sit amet. Ut pharetra tincidunt faucibus. Donec , ' +
            'neque non cursus fringilla, sapien augue laoreet lorem, non pretium nibh odio ' +
            'id nulla. Nam a metus malesuada, volutpat nulla nec, pharetra felis. Maecenas ' +
            'eget neque laoreet egestas nec et odio. In commodo urna sit amet vestibulumy. ' +
            'Nam nisi turpis, vehicula nec ante at, sagittis euismod magna',
        footer: 'Custom footer'
    };
    initModal(data);
}

function largeModal() {
    var data = {
        modalId: 'largeModal',
        modalHeader: true,
        modalFooter: true,
        closeButton: true,
        sizeModal: 'modal-lg',
        title: 'Custom Title',
        body: 'Phasellus porta dignissim ipsum id iaculis. Proin viverra suscipit liberoe, ' +
            'sed luctus sapien ultricies porttitor. Phasellus imperdiet, enim in sagittisa ' +
            'sollicitudin, diam ante commodo felis, ut feugiat leo purus sit amet enim. Si ' +
            'sit amet risus ac augue convallis sollicitudin et ut turpis. Maecenas tempusu ' +
            'imperdiet augue, sed dapibus est dapibus fermentum. Suspendisse non commodo , ' +
            'id congue eros. Sed pellentesque quam id gravida mattis. Nullam commodo mii , ' +
            'vitae interdum eros lacinia sit amet. Ut pharetra tincidunt faucibus. Donec , ' +
            'neque non cursus fringilla, sapien augue laoreet lorem, non pretium nibh odio ' +
            'id nulla. Nam a metus malesuada, volutpat nulla nec, pharetra felis. Maecenas ' +
            'eget neque laoreet egestas nec et odio. In commodo urna sit amet vestibulumy. ' +
            'Nam nisi turpis, vehicula nec ante at, sagittis euismod magna',
        footer: 'Custom footer'
    };
    initModal(data);
}

function noHeaderModal() {
    var data = {
        modalId: 'noHeaderModal',
        modalHeader: false,
        modalFooter: true,
        closeButton: true,
        sizeModal: 'modal-full',
        title: 'Custom Title',
        body: 'Phasellus porta dignissim ipsum id iaculis. Proin viverra suscipit liberoe, ' +
            'sed luctus sapien ultricies porttitor. Phasellus imperdiet, enim in sagittisa ' +
            'sollicitudin, diam ante commodo felis, ut feugiat leo purus sit amet enim. Si ' +
            'sit amet risus ac augue convallis sollicitudin et ut turpis. Maecenas tempusu ' +
            'imperdiet augue, sed dapibus est dapibus fermentum. Suspendisse non commodo , ' +
            'id congue eros. Sed pellentesque quam id gravida mattis. Nullam commodo mii , ' +
            'vitae interdum eros lacinia sit amet. Ut pharetra tincidunt faucibus. Donec , ' +
            'neque non cursus fringilla, sapien augue laoreet lorem, non pretium nibh odio ' +
            'id nulla. Nam a metus malesuada, volutpat nulla nec, pharetra felis. Maecenas ' +
            'eget neque laoreet egestas nec et odio. In commodo urna sit amet vestibulumy. ' +
            'Nam nisi turpis, vehicula nec ante at, sagittis euismod magna',
        footer: 'Custom footer'
    };
    initModal(data);
}

function noFooterModal() {
    var data = {
        modalId: 'noFooterModal',
        modalHeader: true,
        modalFooter: false,
        closeButton: true,
        sizeModal: 'modal-full',
        title: 'Custom Title',
        body: 'Phasellus porta dignissim ipsum id iaculis. Proin viverra suscipit liberoe, ' +
            'sed luctus sapien ultricies porttitor. Phasellus imperdiet, enim in sagittisa ' +
            'sollicitudin, diam ante commodo felis, ut feugiat leo purus sit amet enim. Si ' +
            'sit amet risus ac augue convallis sollicitudin et ut turpis. Maecenas tempusu ' +
            'imperdiet augue, sed dapibus est dapibus fermentum. Suspendisse non commodo , ' +
            'id congue eros. Sed pellentesque quam id gravida mattis. Nullam commodo mii , ' +
            'vitae interdum eros lacinia sit amet. Ut pharetra tincidunt faucibus. Donec , ' +
            'neque non cursus fringilla, sapien augue laoreet lorem, non pretium nibh odio ' +
            'id nulla. Nam a metus malesuada, volutpat nulla nec, pharetra felis. Maecenas ' +
            'eget neque laoreet egestas nec et odio. In commodo urna sit amet vestibulumy. ' +
            'Nam nisi turpis, vehicula nec ante at, sagittis euismod magna',
        footer: 'Custom footer'
    };
    initModal(data);
}

function noCloseButtonModal() {
    var data = {
        modalId: 'noCloseButtonModal',
        modalHeader: true,
        modalFooter: true,
        closeButton: false,
        sizeModal: 'modal-full',
        title: 'Custom Title',
        body: 'Phasellus porta dignissim ipsum id iaculis. Proin viverra suscipit liberoe, ' +
            'sed luctus sapien ultricies porttitor. Phasellus imperdiet, enim in sagittisa ' +
            'sollicitudin, diam ante commodo felis, ut feugiat leo purus sit amet enim. Si ' +
            'sit amet risus ac augue convallis sollicitudin et ut turpis. Maecenas tempusu ' +
            'imperdiet augue, sed dapibus est dapibus fermentum. Suspendisse non commodo , ' +
            'id congue eros. Sed pellentesque quam id gravida mattis. Nullam commodo mii , ' +
            'vitae interdum eros lacinia sit amet. Ut pharetra tincidunt faucibus. Donec , ' +
            'neque non cursus fringilla, sapien augue laoreet lorem, non pretium nibh odio ' +
            'id nulla. Nam a metus malesuada, volutpat nulla nec, pharetra felis. Maecenas ' +
            'eget neque laoreet egestas nec et odio. In commodo urna sit amet vestibulumy. ' +
            'Nam nisi turpis, vehicula nec ante at, sagittis euismod magna',
        footer: 'Custom footer'
    };
    initModal(data);
}
