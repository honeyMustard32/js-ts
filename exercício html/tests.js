const nome = prompt('Digite seu nome completo:')
document.body.innerHTML += `Bem vindo, ${nome}. <br />`
document.body.innerHTML += `Seu nome tem ${nome.length} letras. <br />`
document.body.innerHTML += `A segunda letra do seu nome é ${nome[1]}. <br />`
document.body.innerHTML += `Qual o primeiro índice da letra U no seu nome? ${nome.indexOf('u')} <br />`
document.body.innerHTML += `Qual o último índice da letra U no seu nome? ${nome.lastIndexOf('u')}<br />`
document.body.innerHTML += `As últimas 3 letras do seu nome são ${nome.slice(-3)} <br />`
document.body.innerHTML += `Seu nome com letras minúsculas ${nome.toLowerCase()}<br />`
document.body.innerHTML += `Seu nome com letras maiúsculas ${nome.toUpperCase()}<br />`
