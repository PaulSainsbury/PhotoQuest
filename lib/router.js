// Setup
Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() {
    return Meteor.subscribe('quests');
  }
});

Router.route('/', { name: 'home' });

Router.route('/quest/:_id', {
  name: 'questDetails',
  data: function() { return Quests.findOne(this.params._id); }
});