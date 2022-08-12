const { Schema, model, Types } = require('mongoose');
const ReactionSchema = require('./Reaction');
const validateEmail = require('../utils/validateEmail');


// const ReactionSchema // subdocument

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: [validateEmail, 'Please provide a valid email address']
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought'
      }
    ],
    reactions: [ReactionSchema]
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
  }
);

UserSchema.virtual('thoughtCount').get(function() {
  return this.thoughts.length;
});

const User = model('User', UserSchema);

module.exports = User;
