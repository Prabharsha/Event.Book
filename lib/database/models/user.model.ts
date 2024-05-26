import { Schema, model, models } from "mongoose";


const UserSchema = new Schema({

    clerkId: { type: String, required: true, unique: true },
    emai: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    fristName: { type: String, required: true },
    lastName: { type: String, required: true },
    photo: { type: String, required: true },

});

const User = models.user || model('User', UserSchema);

export default User;