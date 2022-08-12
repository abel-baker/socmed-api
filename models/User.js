const { Schema, model, Types } = require('mongoose');
const ReactionSchema = require('./Reaction');


// const ReactionSchema // subdocument

const UserSchema = new Schema(
  {

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
