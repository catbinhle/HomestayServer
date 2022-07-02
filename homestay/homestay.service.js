const db = require('_helpers/db');
const Homestay = db.Homestay;

module.exports = {
    postHomestay,
    getHomestay,
    booking
};

async function getHomestay() {
    return await Homestay.find();
}

async function postHomestay(param) {
    if (await Homestay.findOne({ name: param.name })) {
        throw 'Homestay name "' + param.name + '" is already taken';
    }
    const homestay = new Homestay(param);
    await homestay.save();
}

async function booking(param) {
    const homestay = await Homestay.findById(param.id);

    // validate
    if (!homestay) throw 'Homestay not found';
    if (homestay.booking < homestay.numberRooms) {
        Object.assign(homestay, {booking: homestay.booking + param.number});
    }

    await homestay.save();
}
