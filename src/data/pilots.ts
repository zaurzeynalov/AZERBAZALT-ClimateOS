export const pilots = {
  agdash: {
    id: "agdash",
    soilAnalysis: {
  baseline: [],
  day60: [],
  day90: [],
  day180: [],
},
    name: "Agdash Pilot",
    crop: "Rice",
    region: "Agdash",
    area: "1 ha",
    status: "Active",
    applicationDate: "26 April 2026",

    controlPlot: true,

    doses: [
      {
        amount: "500 kg",
        area: "0.25 ha",
      },
      {
        amount: "1000 kg",
        area: "0.25 ha",
      },
      {
        amount: "1500 kg",
        area: "0.25 ha",
      },
    ],

    progress: [
      {
        title: "Basalt Applied",
        status: "Completed",
      },
      {
        title: "Initial Soil Sampling",
        status: "Completed",
      },
      {
        title: "Laboratory Analysis",
        status: "In Progress",
      },
      {
        title: "MRV Verification",
        status: "Pending",
      },
      {
        title: "Carbon Registration",
        status: "Pending",
      },
    ],
  },

  ujar: {
    id: "ujar",

    name: "Ujar Pilot",

    crop: "Cotton",

    region: "Ujar",

    area: "1 ha",

    status: "Monitoring",

    applicationDate: "12 May 2026",

    samples: ["Soil", "Plant"],

    progress: [
      {
        title: "Basalt Applied",
        status: "Completed",
      },
      {
        title: "Soil Sampling",
        status: "Completed",
      },
      {
        title: "Plant Sampling",
        status: "Completed",
      },
      {
        title: "Laboratory Analysis",
        status: "Pending",
      },
      {
        title: "Monitoring",
        status: "In Progress",
      },
    ],
  },
};