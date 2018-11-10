import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let eventSchema = new Schema({
  name:  String,
  date:  String,
  time:   String,
  location:   String,
  address:   String,
  description:   String,
});

export default mongoose.model('event', eventSchema);