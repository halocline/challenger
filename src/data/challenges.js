export const challenges = [
  {
    id: '2',
    owner: 'gliss',
    name: 'Ascend the Iron Throne',
    location: {
      name: 'Rye, CO',
      map: `https://www.google.com/maps/place/Bishop+Castle/@38.0614198,-105.0944196,15z/data=!4m5!3m4!1s0x0:0xb4caa79dbbdf1913!8m2!3d38.0614198!4d-105.0944196`,
    },
    dates: undefined,
    conceptDescription: 'Climb to the top of the iron bridge at Bishop Castle', // internally facing
    promotion: {
      photos: [],
      description: `Bishop Castle is a massive structure of stone concrete and iron &mdash; handbuilt by a single man, Jim Bishop.`,
      intro: `Stand atop the bridge at Bishop Castle. It's scary than you think.`,
    },
    objectives: [
      {
        objective: 'Stand atop the bridge at Bishop Castle',
        criteria: [
          {
            criterion: 'Submit a photo of yourself on top of the arch bridge',
            type: 'submit a photo',
          },
          {
            criterion: 'Photo is taken at Bishop Castle',
            type: 'verified geolocation',
          },
        ],
        requirement: 'required',
      },
    ],
    resources: [],
  },
  {
    id: '1',
    owner: 'gliss',
    name: 'Pagosa Springs Plunge',
    location: {
      name: 'Pagosa Springs, CO',
      map: `https://www.google.com/maps/place/37%C2%B016'00.6%22N+107%C2%B000'29.9%22W/@37.266819,-107.0088472,172m/data=!3m2!1e3!4b1!4m6!3m5!1s0x0:0x0!7e2!8m2!3d37.2668193!4d-107.0083004`,
    },
    dates: undefined,
    conceptDescription:
      'Jump from the rocks into deep plunge pools where water is remarkably refreshing as it’s fed from underground hot springs', // internally facing
    promotion: {
      photos: [],
      description:
        'Jump from the rocks into deep plunge pools where water is remarkably refreshing as it’s fed from underground hot springs',
      intro: 'Jump into hot spring fed plunge pools',
    },
    objectives: [
      {
        objective:
          'Jump into a San Juan river swimming hole in downtown Pagosa Springs',
        criteria: [
          {
            criterion: 'Submit a photo of yourself jumping into the river',
            type: 'submit a photo',
          },
          {
            criterion: 'Photo is taken in downtown Pagosa Springs',
            type: 'verified geolocation',
          },
        ],
        requirement: 'required',
      },
      {
        objective: 'Catch a San Juan river trout',
        criteria: [
          {
            criterion: 'Submit a photo of yourself holding or netting a trout',
            type: 'submit a photo',
          },
          {
            criterion: 'Photo is taken in downtown Pagosa Springs',
            type: 'verified geolocation',
          },
        ],
        requirement: 'bonus',
      },
      {
        objective:
          'Take a soak in the "Lobster Pot" pool, typically 110-113 degrees',
        criteria: [
          {
            criterion:
              'Submit a photo of yourself in pool, next to Lobster Pot sign',
            type: 'submit a photo',
          },
          {
            criterion: 'Photo is taken in downtown Pagosa Springs',
            type: 'verified geolocation',
          },
        ],
        requirement: 'bonus',
      },
    ],
    resources: [],
  },
  {
    id: '0',
    owner: 'gliss',
    name: '',
    location: {
      name: '', // descriptive name
      map: '', // url to google map
    },
    dates: '',
    conceptDescription: '', // internally facing
    promotion: {
      photos: [],
      description: '', // what makes this cool and why you should care
      intro: '', // abbreviated version
    },
    objectives: [
      {
        objective: '', // describes what needs to be accomplished
        criteria: [
          {
            criterion: '', // name of task
            type: '', // one of type ('submit a photo', 'verified timestamp', 'tweet', 'verified geolocation', ...)
          },
          {},
        ], // list of tasks needed to be completed in order to accomplish
        requirement: '', // one of type (required, bonus, optional, ...)
      },
      {},
    ], // what is needed to complete the challenge
    resources: [],
  },
];
