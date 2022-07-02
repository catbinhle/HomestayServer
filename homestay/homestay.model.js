const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: { type: String, required: true },
    address: { type: String, required: true},
    mainImage: { type: String, required: true },
    rooms: { type: [String], required: true },
    coffees: { type: [String], required: true },
    numberRooms: { type: Number, required: true },
    booking: { type: Number, required: true },

});

schema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
        delete ret.hash;
    }
});

module.exports = mongoose.model('Homestay', schema);