import mongoose from 'mongoose';

mongoose.connect(
  `mongodb+srv://arjanhoek:Jz7AoLgRpBlQi07C@cluster0.cghgi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    // useCreateIndex: true,
  }
);
