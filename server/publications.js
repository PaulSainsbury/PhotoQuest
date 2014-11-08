Meteor.publish('quests', function() {
  return Quests.find();
});

Meteor.publish('questTypes', function() {
  return QuestTypes.find();
});