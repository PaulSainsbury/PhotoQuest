Template.questSummary.helpers({
  questType : function() {
    return QuestTypes.findOne(this.typeId);
  }
})