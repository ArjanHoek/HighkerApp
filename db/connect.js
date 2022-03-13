import mongoose from 'mongoose';

export default function (link, username, password) {
  link = link.replace('{DBUSERNAME}', username);
  link = link.replace('{DBPASSWORD}', password);

  mongoose.connect(link, {
    useNewUrlParser: true,
  });
}
