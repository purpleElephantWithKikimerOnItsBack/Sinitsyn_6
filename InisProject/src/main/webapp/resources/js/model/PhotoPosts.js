const photoPosts = [
  {
    id: '1',
    description: 'this is alien. he\'s flying. i want same things',
    createdAt: new Date('2019-03-05'),
    author: 'kikimer',
    photoLink: 'images/alien.jpg',
    hashTags: ['alien', 'space', 'absolutechill'],
    likes: ['alienlover'],
  },
  {
    id: '2',
    description: 'more aliens. they\'re cool',
    createdAt: new Date('2019-03-05'),
    author: 'kikimer',
    photoLink: 'images/aliens.jpg',
    hashTags: ['alien', 'morealiens', 'halfinvisible', 'absolutechill'],
    likes: ['alienlover1', 'alienlover2'],
  },
  {
    id: '3',
    description: 'hell idk what the F is it. crazy girls',
    createdAt: new Date('2019-03-05'),
    author: 'kikimer',
    photoLink: 'images/bubble.jpg',
    hashTags: ['flygirlfly', 'bubble', 'senseless'],
    likes: ['one', 'two', 'three'],
  },
  {
    id: '4',
    description: 'whale in the air. i like it',
    createdAt: new Date('2019-03-05'),
    author: 'kikimer',
    photoLink: 'images/whale.jpg',
    hashTags: ['whale', 'air', 'smallgirlmmmnice'],
    likes: ['friendOne', 'friendTwo', 'friendThree', 'ohIronic', 'iHaveNoFriends'],
  },
  {
    id: '5',
    description: 'man i really don\'t know what is it. it\'s mental',
    createdAt: new Date('2019-03-05'),
    author: 'kikimer',
    photoLink: 'images/girl_on_bicycle.jpg',
    hashTags: ['idk', 'hellwhatisit'],
    likes: [],
  },
  {
    id: '6',
    description: 'reptiloids yeah. perfect world.',
    createdAt: new Date('2019-03-05'),
    author: 'kikimer',
    photoLink: 'images/reptiloids.jpg',
    hashTags: ['reptiloids', 'imaginaryandperfect', 'awesome'],
    likes: ['reptiloidman', 'reptiloidwoman'],
  },
  {
    id: '7',
    description: 'pure spaceman. hope he\'s fine',
    createdAt: new Date('2019-03-07'),
    author: '2cupsofrolton',
    photoLink: 'images/spaceman.jpg',
    hashTags: ['spaceman', 'hopenotdead', 'helpthispureguy', 'callambulance'],
    likes: ['funeralCeremony'],
  },
  {
    id: '8',
    description: 'flying mechas. and a lady. maybe made of flesh. who knows.',
    createdAt: new Date('2019-03-05'),
    author: 'kikimer',
    photoLink: 'images/mecha.jpg',
    hashTags: ['supra', 'bird', 'fleshgirl'],
    likes: [],
  },
  {
    id: '9',
    description: 'birdman. looks nice. he\'s awesome and he can fly. not many of you can.',
    createdAt: new Date('2019-03-05'),
    author: 'kikimer',
    photoLink: 'images/birdman.jpg',
    hashTags: ['birdman', 'absolutebeauty', 'feathers'],
    likes: ['birdiesFamily'],
  },
  {
    id: '10',
    description: 'dolphin-man? dolphin-woman? nobody know. luckily.',
    createdAt: new Date('2019-03-06'),
    author: 'kikimer',
    photoLink: 'images/dolphin.jpg',
    hashTags: ['halfdolphin', 'halfhuman', 'sea'],
    likes: [],
  },
  {
    id: '11',
    description: 'man is buying some stuff. why not.',
    createdAt: new Date('2019-03-10'),
    author: 'andy',
    photoLink: 'images/shopping.jpg',
    hashTags: ['hollyshit', 'hisheadinhispalm', 'nothingtoworryabout'],
    likes: ['Rublevsky', 'Evroopt'],
  },
  {
    id: '12',
    description: 'maybe it\'s the reality',
    createdAt: new Date('2019-03-10'),
    author: 'christopher',
    photoLink: 'images/alien_chilling.jpg',
    hashTags: ['alien', 'spaceman', 'lilsad'],
    likes: ['alienlover1', 'alienlover2', 'alienlover3'],
  },
  {
    id: '13',
    description: 'love to go outside on sunday mornings',
    createdAt: new Date('2019-03-11'),
    author: 'jhoanna',
    photoLink: 'images/planet_walking.jpg',
    hashTags: ['space', 'planetunderthefoot', 'walkingday'],
    likes: ['jupiter', 'saturn', 'earth'],
  },
  {
    id: '14',
    description: 'kinda creepy',
    createdAt: new Date('2019-03-12'),
    author: 'jon',
    photoLink: 'images/my_friends_aliens.jpg',
    hashTags: ['nicefaces', 'morealiens'],
    likes: ['alienlover1488'],
  },
  {
    id: '15',
    description: 'yee haw',
    createdAt: new Date('2019-03-12'),
    author: 'alcoholic',
    photoLink: 'images/why_not.jpg',
    hashTags: ['thatsinteresting', 'tryingfirsttime'],
    likes: ['nicetry'],
  },
  {
    id: '16',
    description: 'another picture of aliens making smth weird.',
    createdAt: new Date('2019-03-12'),
    author: 'kikimer',
    photoLink: 'images/pretty_f_awesome.jpg',
    hashTags: ['reptiloids', 'imaginaryandperfect', 'awesome'],
    likes: ['horsehunter', 'misanthrope'],
  },
  {
    id: '17',
    description: 'going craaaaazyyy',
    createdAt: new Date('2019-03-13'),
    author: 'kikimer',
    photoLink: 'images/its_me.jpg',
    hashTags: ['me', 'myself', 'and', 'i'],
    likes: ['wannadie'],
  },
  {
    id: '18',
    description: 'looks beautiful. men can fly.',
    createdAt: new Date('2019-03-13'),
    author: 'jhonny',
    photoLink: 'images/death_playing.jpg',
    hashTags: ['deathitself', 'flyingman', 'theendofhopes'],
    likes: ['literallyeveryone'],
  },
  {
    id: '19',
    description: 'tshhhh, dont cry. you will not escape your destiny',
    createdAt: new Date('2019-03-13'),
    author: 'kikimer',
    photoLink: 'images/keep_going.jpg',
    hashTags: ['thatsit', 'lastphotoofher', 'goodbyeprettywoman'],
    likes: ['goesdownthestreetpreetywoman'],
  },
  {
    id: '20',
    description: 'marvellous view from here',
    createdAt: new Date('2019-03-14'),
    author: 'kikimer',
    photoLink: 'images/yeah_lets_have_a_fun_time.jpg',
    hashTags: ['earth', 'chill'],
    likes: ['flatyearthcommunity', 'kikimer'],
  },
];
