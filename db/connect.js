const mongoose = require('mongoose');
const { DBLINK, DBUSERNAME, DBPASSWORD } = process.env;

let link = DBLINK;
link = link.replace('{DBUSERNAME}', DBUSERNAME);
link = link.replace('{DBPASSWORD}', DBPASSWORD);

const options = { useNewUrlParser: true };

mongoose.connect(link, options);
