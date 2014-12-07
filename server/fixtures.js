var Fixture = {
  createUsers : function () {
    var billId = Accounts.createUser({
      username: 'bill', 
      email: 'paul+bill@digitaltinder.com',
      password: 'bill',
      profile: { name: 'Bill Billington'}
    });
    var bill = Meteor.users.findOne(billId);

    var aliceId = Accounts.createUser({
      username: 'alice', 
      email: 'paul+alice@digitaltinder.com',
      password: 'alice',
      profile: { name: 'Alice Allerton'}
    });
    var alice = Meteor.users.findOne(aliceId);
    
    return {
      bill: bill,
      alice: alice
    }
  },
  createQuestTypes : function() {
    var photoId = QuestTypes.insert({
      name: 'Photo',
      iconClass: 'glyphicon glyphicon-camera'
    });
    var photo = QuestTypes.findOne(photoId);
    
    var postcardId = QuestTypes.insert({
      name: 'Postcard',
      iconClass: 'glyphicon glyphicon-envelope'
    });
    var postcard = QuestTypes.findOne(postcardId);
    
    var searchId = QuestTypes.insert({
      name: 'Search',
      iconClass: 'glyphicon glyphicon-eye-open'
    });
    var search = QuestTypes.findOne(searchId);
    
    var meetId = QuestTypes.insert({
      name: 'Meet',
      iconClass: 'glyphicon glyphicon-user'
    });
    var meet = QuestTypes.findOne(meetId);
    
    return {
      photo: photo,
      postcard: postcard,
      search: search,
      meet: meet
    }
  }, 
  createQuests: function(users, questTypes) {
    var now = new Date().getTime();

    var zooId = Quests.insert({
      owner_userId: users.bill._id,
      owner: users.bill.profile.name,
      created: new Date(now - 10 * 3600 * 1000),
      typeId: questTypes.photo._id,
      typeName: questTypes.photo.name,
      title: 'Big 5 in Johannesburg',
      description: 'Take a photo of at least 3 of the big 5 at the zoo.',
      difficulty: 5,
      location: 'Johannesburg City Zoo, Emmarentia, Johannesburg, South Africa',
      completedCount: 0
    });
  
    var nelsonSquareId = Quests.insert({
      owner_userId: users.bill._id,
      owner: users.bill.profile.name,
      created: new Date(now - 7 * 3600 * 1000),
      typeId: questTypes.photo._id,
      typeName: questTypes.photo.name,
      title: 'I visited Nelson',
      description: 'Get a local to take a picture of you at the Nelson Mandela Statue',
      difficulty: 2,
      location: 'Nelson Mandela Square, Sandton, Johannesburg, South Africa',
      completedCount: 0
    });
    
    var pilanesbergPostcardId = Quests.insert({
      owner_userId: users.alice._id,
      owner: users.alice.profile.name,
      created: new Date(now - 5 * 3600 * 1000),
      typeId: questTypes.postcard._id,
      typeName: questTypes.postcard.name,
      title: 'A message from a crater',
      description: 'Send a postcard to me from Pilanesberg',
      difficulty: 1,
      location: 'Pilanesberg National Park, Pilanesberg, Northwest Province, South Africa',
      completedCount: 0
    });
    
    var cptTableMountain = Quests.insert({
      owner_userId: users.alice._id,
      owner: users.alice.profile.name,
      created: new Date(now - 7 * 3600 * 1000),
      typeId: questTypes.photo._id,
      typeName: questTypes.photo.name,
      title: 'I was at the mountain',
      description: 'Take a pic to show that you were at table mountain',
      difficulty: 1,
      location: 'Table Mountain, Cape Town, South Africa',
      completedCount: 0
    });
    
    var cptOceanarium = Quests.insert({
      owner_userId: users.alice._id,
      owner: users.alice.profile.name,
      created: new Date(now - 8 * 3600 * 1000),
      typeId: questTypes.photo._id,
      typeName: questTypes.photo.name,
      title: 'CPT Aquarium',
      description: 'Photograph the biggest tank you can find in the Aquarium',
      difficulty: 1,
      location: 'Cape Town Aquarium, V&A Waterfront, Cape Town, South Africa',
      completedCount: 0
    });  

    var dbnOceanarium = Quests.insert({
      owner_userId: users.bill._id,
      owner: users.bill.profile.name,
      created: new Date(now - 5 * 3600 * 1000),
      typeId: questTypes.photo._id,
      typeName: questTypes.photo.name,
      title: 'DBN Aquarium',
      description: 'Photograph the biggest tank you can find in the Aquarium',
      difficulty: 1,
      location: 'uShaka Marine World, Waterfront, Durban, South Africa',
      completedCount: 0
    });  
  }
};

// Fixture data

if (Quests.find().count() === 0) {
  var users = Fixture.createUsers();
  var questTypes = Fixture.createQuestTypes();
  var quests = Fixture.createQuests(users, questTypes);
}

