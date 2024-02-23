const mongoose = require('mongoose');
const setting = require('./../../config/schemaConfig');
const Property = require('./../property/property.model')
const reviewSchema = new mongoose.Schema({
    property: {
        type: mongoose.Types.ObjectId,
        ref: 'Property',
        required: true,
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true,
    },
    ratings: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
    },
    comment: {
        type: String,
    },
}, setting);


reviewSchema.pre('/*find/', (next) => {
    this.populate({ path: 'user', select: 'name' })
})

reviewSchema.statics.calcAvgRatingsAndQuentityRatings = async (id) => {
    const result = await this.aggregate(
        [
            { $match: { property: id } },
            { $group: { _id: "property", avgRatings: { $avg: '$ratings' }, ratingsQuentity: { $sum: 1 } } }
        ]
    )

    if (result) {
        await Property.findByIdAndUpdate(id, {
            ratingsAvg: result[0].avgRatings,
            ratingsQuentity: result[0].ratingsQuentity
        })
    } else {
        await Property.findByIdAndUpdate(id, {
            ratingsAvg: 0,
            ratingsQuentity: 0
        })
    }
}

reviewSchema.post('save', async () => {
    await this.calcAvgRatingsAndQuentityRatings(this.Property)
})


reviewSchema.post('remove', async () => {
    await this.calcAvgRatingsAndQuentityRatings(this.Property)
})

module.exports = mongoose.model('Review', reviewSchema);
