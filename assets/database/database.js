var fs = require('fs');
const databasePath = __dirname + '/data.json';

let getEvents = () => {
	let database = fs.readFileSync(databasePath);
	let databaseObject = JSON.parse(database);
	return databaseObject.events;
};

exports.getEvents = getEvents;
