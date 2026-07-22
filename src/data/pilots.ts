export const pilots = {
  agdash: {
  id: "agdash",

  soilAnalysis: {
    baseline: [],
    day60: [],
    day90: [],
    day180: [],
  },

  gallery: {
    baseline: [
      {
        src: "/images/agdash/baseline/baseline-01.jpeg",
        title: "Baseline Soil Sampling",
        date: "25 Apr 2026",
      },
    ],

    application: [
      {
        src: "/images/agdash/application/application-01.jpeg",
        title: "Basalt Application",
        date: "26 Apr 2026",
      },
    ],

    monitoring: [
      {
        src: "/images/agdash/monitoring/monitoring-01.jpeg",
        title: "Day 60 Monitoring",
        date: "25 Jun 2026",
      },
    ],

    laboratory: [],
  },

  name: "Agdash Pilot",
  crop: "Rice",
  region: "Agdash",
  area: "1 ha",
    status: "Monitoring",
  },
  khachmaz: {
    id: "khachmaz",
    name: "Khachmaz Pilot",
    crop: "Tomato",
    region: "Khachmaz",
    area: "1 ha",
    status: "Monitoring",
    applicationDate: "23 May 2026",

    controlPlot: true,

    soilAnalysis: {
      baseline: [],
      day60: [],
      day90: [],
      day180: [],
    },

    doses: [
      { amount: "500 kg", area: "0.25 ha" },
      { amount: "1000 kg", area: "0.25 ha" },
      { amount: "1500 kg", area: "0.25 ha" },
    ],

    progress: [
      { title: "Basalt Applied", status: "Completed" },
      { title: "Initial Soil Sampling", status: "Completed" },
      { title: "Laboratory Analysis", status: "In Progress" },
      { title: "MRV Verification", status: "Pending" },
      { title: "Carbon Registration", status: "Pending" },
    ],
  },
    lankaran: {
    id: "lankaran",
    name: "Lankaran Pilot",
    crop: "Mandarin",
    region: "Lankaran",
    area: "1 ha",
    status: "Monitoring",
    applicationDate: "25 May 2026",

    controlPlot: true,

    soilAnalysis: {
      baseline: [],
      day60: [],
      day90: [],
      day180: [],
    },

    doses: [
      { amount: "500 kg", area: "0.25 ha" },
      { amount: "1000 kg", area: "0.25 ha" },
      { amount: "1500 kg", area: "0.25 ha" },
    ],

    progress: [
      { title: "Basalt Applied", status: "Completed" },
      { title: "Initial Soil Sampling", status: "Completed" },
      { title: "Laboratory Analysis", status: "In Progress" },
      { title: "MRV Verification", status: "Pending" },
      { title: "Carbon Registration", status: "Pending" },
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