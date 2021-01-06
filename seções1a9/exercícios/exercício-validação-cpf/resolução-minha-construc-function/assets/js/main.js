const form = document.querySelector('#form');

form.addEventListener('keyup', e => {
    e.preventDefault;
    
    const inputCPF = e.target.querySelector('#cpf-input');

    if (inputCPF !== '') {
        return;
    }

    if ( inputCPF.inArray( e.keyCode, [37, 38, 39, 40] ) !== -1) {
        return;
    }
})