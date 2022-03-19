import mongoose from 'mongoose';

export default function (link, username, password) {
  link = link.replace('{DBUSERNAME}', username);
  link = link.replace('{DBPASSWORD}', password);

  const options = { useNewUrlParser: true };

  mongoose.connect(link, options);
}
