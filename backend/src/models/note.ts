import { Schema, model, InferSchemaType } from "mongoose"

const noteSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, required: true },
    title: { type: String, required: true},
    text: {type:String},
    temp: {type: Number},
}, {timestamps: true})

type Note = InferSchemaType<typeof noteSchema>;

export default model<Note>("Note", noteSchema)

/*const ImageSchema = new Schema({
    filename: String,
    contentType: String,
    image: Buffer,
})

const ImageModel = model('Image', ImageSchema);

export default ImageModel;*/