const mongoose = require('../DB/conn')
const { Schema } = mongoose

const Log = mongoose.model(
    'Log',
    new Schema({
        car_id: {
            type: String,
            required: true,
        },
        data_hora: {
            type: Date,
            default: Date.now,
        }
    },
        { timestamps: true },
    )
)

module.exports = Log