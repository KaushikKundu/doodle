import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    id: {
        type: 'string',
        format: 'uuid',
    },
    username: {
        type: 'string',
        minLength: 1,
        maxLength: 50,
    },
    email: {
        type: 'string',
        format: 'email',
    },
    password: {
        type: 'string',
        minLength: 8,
        maxLength: 100,
    },
    
})
const User = mongoose.model('User', userSchema);
export default User ;