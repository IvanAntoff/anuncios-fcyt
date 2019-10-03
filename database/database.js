var fs = require('fs');

const databasePath = './data.json';

let databaseExists = () => {
	return fs.existsSync(databasePath);
};

let getEvents = () => {
	if (databaseExists()) {
		let database = fs.readFileSync(databasePath);
		let databaseObject = JSON.parse(database);
		return databaseObject.events;
	} else {
		return false;
	}
};

exports.getEvents = getEvents;
