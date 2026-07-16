"use client";

import { useState } from "react";
const applicationPhotos = [
  "01.jpeg",
  "02.jpeg",
  "03.jpeg",
  "04.jpeg",
  "05.jpeg",
  "06.jpeg",
];

const monitoringPhotos = [
  "01.jpeg",
  "02.jpeg",
  "03.jpeg",
  "04.jpeg",
  "05.jpeg",
  "06.jpeg",
  "07.jpeg",
  "08.jpeg",
  "09.jpeg",
  "10.jpeg",
  "11.jpeg",
  "12.jpeg",
  "13.jpeg",
  "14.jpeg",
  "15.jpeg",
  "16.jpeg",
  "17.jpeg",
  "18.jpeg",
  "19.jpeg",
  "20.jpeg",
  "21.jpeg",
];
export default function FieldPhotoGallery() {
  const [isOpen, setIsOpen] = useState(false);
const [category, setCategory] = useState("all");
const displayedPhotos =
  category === "application"
    ? applicationPhotos.map((name) => ({
        image: `/images/agdash/application/${name}`,
        title: "Basalt Application",
        date: "26 Apr 2026",
      }))
    : category === "monitoring"
    ? monitoringPhotos.map((name) => ({
        image: `/images/agdash/monitoring/${name}`,
        title: "Field Monitoring",
        date: "May–Jul 2026",
      }))
    : [
        ...applicationPhotos.map((name) => ({
          image: `/images/agdash/application/${name}`,
          title: "Basalt Application",
          date: "26 Apr 2026",
        })),
        ...monitoringPhotos.map((name) => ({
          image: `/images/agdash/monitoring/${name}`,
          title: "Field Monitoring",
          date: "May–Jul 2026",
        })),
      ];
  return (
    <div className="mt-8 rounded-2xl border border-slate-700 bg-slate-800/70 p-6">

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between"
      >
        <div>
          <h2 className="text-xl font-semibold text-white">
            📷 Field Photo Gallery
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            Agdash Pilot • 6 Photos
          </p>
        </div>

        <span className="text-xl text-slate-400">
          {isOpen ? "▲" : "▼"}
        </span>
      </button>

      {isOpen && (
        <div>
        <div className="mb-6 flex gap-3">

  <button
    onClick={() => setCategory("all")}
    className={`rounded-lg px-4 py-2 text-sm font-medium ${
      category === "all"
        ? "bg-cyan-600 text-white"
        : "bg-slate-700 text-slate-300 hover:bg-slate-600"
    }`}
  >
    All (27)
  </button>

  <button
    onClick={() => setCategory("application")}
    className={`rounded-lg px-4 py-2 text-sm font-medium ${
      category === "application"
        ? "bg-cyan-600 text-white"
        : "bg-slate-700 text-slate-300 hover:bg-slate-600"
    }`}
  >
    Application (6)
  </button>

  <button
    onClick={() => setCategory("monitoring")}
    className={`rounded-lg px-4 py-2 text-sm font-medium ${
      category === "monitoring"
        ? "bg-cyan-600 text-white"
        : "bg-slate-700 text-slate-300 hover:bg-slate-600"
    }`}
  >
    Monitoring (21)
  </button>

</div>
        
  <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

  {displayedPhotos.map((photo) => (
  <div
    key={photo.image}
    className="overflow-hidden rounded-xl border border-slate-700 bg-slate-900/40"
  >
    <img
      src={photo.image}
      alt={photo.title}
      className="h-56 w-full object-cover transition hover:scale-105 cursor-pointer"
    />

    <div className="p-3">
      <div className="font-medium text-white">
        {photo.title}
      </div>

      <div className="mt-1 text-sm text-slate-400">
        {photo.date}
      </div>
        </div>
      </div>
    ))}

  </div>
</div>
)}

    </div>
  );
}