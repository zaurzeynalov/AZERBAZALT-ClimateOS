export const laboratoryParameters = [
  {
  id: "organic_matter",

  name: "Organic Matter",

  category: "soil",

  unit: "%",

  carbonRelevant: true,

  methods: [
    "Walkley-Black",
    "Loss on Ignition"
  ],

  laboratories: [
    "AQTI",
    "AGRIMAN",
    "SGS"
  ],

  comparable: true,

  preferredMethod: "Walkley-Black",

  statusRules: {
    higherIsBetter: true,
    tolerance: 5
  }
},
  {
    id: "ph",
    name: "pH",
    unit: "pH",
    category: "soil",
    methods: [],
    laboratories: [],
    carbonRelevant: true,
  },
  {
    id: "ec",
    name: "Electrical Conductivity",
    unit: "dS/m",
    category: "soil",
    methods: [],
    laboratories: [],
    carbonRelevant: true,
  },
];