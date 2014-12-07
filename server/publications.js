Meteor.publish('quests', function(options) {
  check(options, {
    sort: Object,
    limit: Number
  });
  return Quests.find({}, options);
});

Meteor.publish('findQuests', function(search) {
  check(search, {
    $or: Array
  });
  return Quests.find(search);
});


Meteor.publish('singleQuest', function(id) {
  check(id, String);
  return Quests.find(id);
});


Meteor.publish('questTypes', function() {
  return QuestTypes.find();
});