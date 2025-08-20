import { Schema, model } from "mongoose"
const shapeSchema = new Schema({
    type: {
        type: String,
        enum: ['Circle', 'Rectangle', 'Line'],
        required: true
    },
    props: {
        x:Number,
        y:Number,
        width:Number,
        height:Number,
        radius:Number,
        endX:Number,
        endY:Number
    },
    userId: {
        type:String,
        required: true
    },
    canvasId: {
        type: String,
        required: true
    },
    deleted: {
        type: Boolean,
        default: false
    }
})
export const ShapeModel = model('Shape', shapeSchema);