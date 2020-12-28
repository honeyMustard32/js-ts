// // RESOLUÇÃO 1
// function clockworkOrange () {
//     const h1 = document.querySelector('#clock');
//     const obj = new Date()

//     let weekDay;
//     switch (obj.getDay()) {
//         case 0: 
//             weekDay = 'Domingo';
//             break; 
//         case 1: 
//             weekDay = 'Segunda-feira';
//             break; 
//         case 2: 
//             weekDay = 'Terça feira';
//             break; 
//         case 3: 
//             weekDay = 'Quarta-feira';
//             break; 
//         case 4: 
//             weekDay = 'Quinta-feira';
//             break; 
//         case 5: 
//             weekDay = 'Sexta-feira';
//             break; 
//         case 6: 
//             weekDay = 'Sábado';
//             break;
//         default:
//             weekDay = '';
//     }

//     const monthDay = obj.getDay();

//     let month;
//     switch (obj.getMonth()) {
//         case 0:
//             month = 'janeiro';
//             break;
//         case 1:
//             month = 'fevereiro';
//             break;
//         case 2:
//             month = 'março';
//             break;
//         case 3:
//             month = 'abril';
//             break;
//         case 4:
//             month = 'maio';
//             break;
//         case 5:
//             month = 'junho';
//             break;
//         case 6:
//             month = 'julho';
//             break;
//         case 7:
//             month = 'agosto';
//             break;
//         case 8:
//             month = 'setembro';
//             break;
//         case 9:
//             month = 'outubro';
//             break;
//         case 10:
//             month = 'novembro';
//             break;
//         case 11:
//             month = 'dezembro';
//             break;
//     }

//     const year = obj.getFullYear();

//     const hour = obj.getHours();

//     const minute = obj.getMinutes();

//     function leftZero (num) {
//         return num >= 10 ? num : `0${num}`;
//     }

//     // console.log(obj.getHours());

//     return h1.innerHTML = `
//         <p>${weekDay}, ${monthDay} de ${month} de ${year}</p>
//         <p>${hour}:${minute}</p>
//         `;
// }

// clockworkOrange();


// // RESOLUÇÃO 2
// const h1 = document.querySelector('#clock');
// const clockwork = new Date()

// h1.innerHTML = clockwork.toLocaleString('pt-Br', {
//     dateStyle: 'full',
//     timeStyle: 'short'
// });


// RESOLUÇÃO 3
const h1 = document.querySelector('#clock');
const obj = new Date()
function getWeekDay (weekDay) {
    const weekDays = [
        'Domingo', 
        'Segunda-feira', 
        'Terça-feira', 
        'Quarta-feira', 
        'Quinta-feira', 
        'Sexta-feira', 
        'Sábado'
    ];
    return weekDays[weekDay];
}

function getMonth (month) {
    const months = [
        'janeiro',
        'fevereiro',
        'março',
        'abril',
        'maio',
        'junho',
        'julho',
        'agosto',
        'setembro',
        'outubro',
        'novembro',
        'dezembro'
    ];
    return months[month]
};

const weekDay = obj.getDay();
const date = obj.getDate();
const month = obj.getMonth();
const year = obj.getFullYear();
const hour = obj.getHours();
const minute = obj.getMinutes();

function leftZero (num) {
  return num >= 10 ? num : `0${num}`;
}

// console.log(obj.getHours());

h1.innerHTML = `
  <p>${getWeekDay(weekDay)}, ${leftZero(date)} de ${getMonth(month)} de ${year}</p>
  <p>${leftZero(hour)}:${leftZero(minute)}</p>
`;

