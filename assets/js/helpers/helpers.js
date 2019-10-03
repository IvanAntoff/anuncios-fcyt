const hbs = require('hbs');

hbs.registerHelper('formatDate', (eventStrDate, userDate) => {
	eventDate = new Date(eventStrDate);

	let formattedDate = '';
	let eventDay = eventDate.getDate();
	let today = userDate.getDate();

	if (today == eventDay) formattedDate += 'Hoy a las ';
	else if (today + 1 == eventDay) formattedDate += 'Mañana a las ';
	else formattedDate += `En ${eventDay - today} días a las `;

	formattedDate += `${eventDate.getHours()}:${eventDate.getMinutes()}hs`;

	return formattedDate;
});
