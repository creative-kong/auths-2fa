import mongoose, { Document, Schema } from 'mongoose'

interface UserPreferences {
    enable2Fa : boolean
    emailNotification : boolean
    twoFASecret? : string
}

export interface UserDocument extends Document {
    firstName : string
    lastName : string
    email : string 
    password : string
    isEmailVerified : boolean
    userPreferences : UserPreferences
    createdAt : Date
    updatedAt : Date
}