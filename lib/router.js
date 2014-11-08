// Setup
Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() {
    return [Meteor.subscribe('quests'), Meteor.subscribe('questTypes')];
  }
});

Router.route('/', { name: 'home' });

Router.route('/quest/:_id', {
  name: 'questDetails',
  data: function() { return Quests.findOne(this.params._id); }
});

Router.route('/quests/:searchTerm?', {
  name: 'questList',
  template: 'questList',
  data: function() {
    var searchTerm = this.params.searchTerm || '';

    searchTerm = searchTerm.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
    var mongoDbArr = [
      {title: { $regex : searchTerm, $options:"i" }},
      {description: { $regex : searchTerm, $options:"i" }}
    ];
    console.log(mongoDbArr);
    
    var templateData = { quests: Quests.find({ $or: mongoDbArr}) };
    
    console.log(templateData.quests.count());
    
    return templateData;
  }
});