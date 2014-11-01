Meteor.publish('quests', function() {
  return Quests.find();
});