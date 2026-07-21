export const lankaran = {
  id: "lankaran",

  name: "Lankaran Pilot",

  crop: "Mandarin",

  region: "Lankaran",

  area: "1 ha",

  status: "Active",

  applicationDate: "25 May 2026",

  controlPlot: true,

  soilAnalysis: {
    baseline: [],
    day60: [],
    day90: [],
    day180: [],
  },

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
};