// Fixture data
if (Quests.find().count() === 0) {
  var now = new Date().getTime();

  // create two users
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

  var zooId = Quests.insert({
    owner_userId: bill._id,
    owner: bill.profile.name,
    created: new Date(now - 7 * 3600 * 1000),
    type: 'Photo',
    title: 'Johannesburg City Zoo',
    description: 'Take a photo of at least 3 of the big 5 at the zoo.',
    difficulty: 5,
    location: 'Johannesburg',
    completedCount: 0
  });
  
  var nelsonSquareId = Quests.insert({
    owner_userId: bill._id,
    owner: bill.profile.name,
    created: new Date(now - 7 * 3600 * 1000),
    type: 'Photo',
    title: 'Nelson Mandela Square',
    description: 'Get a local to take a picture of you at the Nelson Mandela Statue',
    difficulty: 2,
    location: 'Johannesburg',
    completedCount: 0
  });

}