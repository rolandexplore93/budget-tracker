export const formatInputDate = (date) => {
    const d = new Date(date);
    let month =  `${d.getMonth() + 1}`;
    let day =  `${d.getDate()}`;
    const year =  `${d.getFullYear()}`;

    if(month.length < 2){month = `0${month}`; console.log(month)}
    if(day.length < 2){day = `0${day}`; console.log(day)}

    return [year, month, day].join('-')
}

// export const formatDate = (date) => {
//     const d = new Date(date);
//     const year = d.getFullYear();
//     const dateToday = d.getDate();
//     // get days of the week
//     const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//     const day = d.getDay();
//     const daySpellOut = daysOfTheWeek[d.getDay()];
//     console.log(day)

//     // get months
//     const monthsInAYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//     let month = d.getMonth() + 1;
//     let monthSpellOut = monthsInAYear[d.getMonth()];
//     console.log(month)
//     // console.log(`${day}, ${dateToday} ${month} ${year} `)
//     return [year, '05', '05'].join('-')
// }

