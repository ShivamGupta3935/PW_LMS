import mongoose, {Schema} from "mongoose";
import bcrypt from 'bcryptjs'

const userSchema = new Schema({
     fullname: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
     },
     email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        unique: true
     },
     password: {
        type: String,
        required: true,
        minLength: [8, "password must be at least 8 character"],
        select: false
     },
     avatar: {
        public_id: {
            type: String
        },
        secure_url: {
            type: String,
            required: true
        }
     },
     role: {
        type: String,
        enum: ["USER", "ADMIN"],
        default: "USER"
     },
     forgetPasswordToken: String,
     forgetPasswordExpiry: Date
},
{
    timestamps: true
}
)

//jwt token
userSchema.methods = {
      generateJWTtoken : async function(){
      return jwt.sign(
      {
         id: this._id, 
         email: this.email, 
         subscription: this.subscription, 
         role: this.role
      },
      process.env.JWT_SECRET,
      {
         expiresIn: process.env.JWT_EXPIRY
      }

   )}
}

userSchema.pre('save',async function(next){
   if (!this.isModified("password")) {
      return next()
   }

   this.password = await bcrypt.hash(this.password, 8)
})

export const User = mongoose.model("User", userSchema)