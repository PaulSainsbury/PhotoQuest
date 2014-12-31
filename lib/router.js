// Setup
Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() {
    return [Meteor.subscribe('questTypes')];
  }
});

Router.route('/',
  {
    name: 'home',
    waitOn: function() {
      return [Meteor.subscribe('quests', { sort: { completedCount: -1}, limit: 5} )];
    },
    data: function() {
      return {topQuests: Quests.find({}, { sort: { completedCount: -1}, limit: 5})};
    }
});

Router.route('/quest/:_id', {
  name: 'questDetails',
  waitOn: function() {
    return [Meteor.subscribe('singleQuest', this.params._id)];
  },
  data: function() { return Quests.findOne(this.params._id); }
});

var questSearchTerm = function (term){
  var searchTerm = term || '';

  searchTerm = searchTerm.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
  var mongoDbArr = [
    {title: { $regex : searchTerm, $options:"i" }},
    {description: { $regex : searchTerm, $options:"i" }}
  ];
  console.log(mongoDbArr);
  return mongoDbArr;
};

Router.route('/quests/:searchTerm?', {
  name: 'questList',
  template: 'questList',
  waitOn: function() {
    var searchExpression = questSearchTerm(this.params.searchTerm);
    return [Meteor.subscribe('findQuests', { $or: searchExpression})];
  },
  data: function() {
    var searchExpression = questSearchTerm(this.params.searchTerm);
    var templateData = { quests: Quests.find({ $or: searchExpression}) };

    console.log(templateData.quests.count());

    return templateData;
  }
});
