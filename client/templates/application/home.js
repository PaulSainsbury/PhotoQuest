Template.home.helpers({
  topQuests: function() {
    return Quests.find({}, { sort: { completedCount: -1}, limit: 5});
  }  
});

