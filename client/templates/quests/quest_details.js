Template.questDetails.helpers({
  createdDate : function() {
    return moment(this.created).format("YYYY-MM-DD");
  },
  questType : function() {
    return QuestTypes.findOne(this.typeId);
  }
});
