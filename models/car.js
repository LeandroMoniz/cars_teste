const mongoose = require('../DB/conn')
const { Schema } = mongoose


const Car = mongoose.model(
    'Car',
    new Schema(
        {
            _id: {
                type: String,
                required: true,
            },
            title: {
                type: String,
                required: true,
            },
            price: {
                type: Number,
                required: true,
            }
        },
        { timestamps: true },
    ),
)


module.exports = Car