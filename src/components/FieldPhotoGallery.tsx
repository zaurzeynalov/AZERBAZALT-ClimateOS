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
  "22.jpeg",
  "23.jpeg",
  "24.jpeg",
  "25.jpeg",
  "26.jpeg",
  "27.jpeg",
  "28.jpeg",
  "29.jpeg",
  "30.jpeg",
  "31.jpeg",
  "32.jpeg",
  "33.jpeg",
  "34.jpeg",
  "35.jpeg",
];
type Props = {
  pilot: string;
};

export default function FieldPhotoGallery({ pilot }: Props) {
 const applicationTitle =
  pilot === "ujar"
    ? "Ujar – Basalt Application"
    : "Basalt Application";

const monitoringTitle =
  pilot === "ujar"
    ? "Ujar – Field Monitoring"
    : "Field Monitoring";

const applicationDate =
  pilot === "ujar"
    ? "12 May 2026"
    : "26 Apr 2026";

const monitoringDate =
  pilot === "ujar"
    ? "10 Jul 2026"
    : "May–Jul 2026";


  const [isOpen, setIsOpen] = useState(false);
const [category, setCategory] = useState("all");
const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
const displayedPhotos =
  category === "application"
    ? applicationPhotos.map((name) => ({
image: `/images/${pilot}/application/${name}`,
title: applicationTitle,
  date: applicationDate,
      }))
    : category === "monitoring"
    ? monitoringPhotos.map((name) => ({
image: `/images/${pilot}/monitoring/${name}`,
        title: monitoringTitle,
date: monitoringDate,
      }))
    : [
  ...applicationPhotos.map((name) => ({
  image: `/images/${pilot}/application/${name}`,
title: applicationTitle,
date: applicationDate,
        })),
  ...monitoringPhotos.map((name) => ({
  image: `/images/${pilot}/monitoring/${name}`,
          title: monitoringTitle,
date: monitoringDate,
        })),
      ];
  return (
    <>
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
 {pilot.charAt(0).toUpperCase() + pilot.slice(1)} Pilot • {applicationPhotos.length + monitoringPhotos.length} Photos
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
All ({applicationPhotos.length + monitoringPhotos.length})
  </button>

  <button
    onClick={() => setCategory("application")}
    className={`rounded-lg px-4 py-2 text-sm font-medium ${
      category === "application"
        ? "bg-cyan-600 text-white"
        : "bg-slate-700 text-slate-300 hover:bg-slate-600"
    }`}
  >
    Application ({applicationPhotos.length})
  </button>

  <button
    onClick={() => setCategory("monitoring")}
    className={`rounded-lg px-4 py-2 text-sm font-medium ${
      category === "monitoring"
        ? "bg-cyan-600 text-white"
        : "bg-slate-700 text-slate-300 hover:bg-slate-600"
    }`}
  >
    Monitoring ({monitoringPhotos.length})
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
  onClick={() => setSelectedPhoto(photo.image)}
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
    {selectedPhoto && (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
    onClick={() => setSelectedPhoto(null)}
  >
    <button
      className="absolute top-6 right-8 text-5xl text-white hover:text-cyan-400"
    >
      ×
    </button>

    <img
      src={selectedPhoto}
      className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-2xl"
      onClick={(e) => e.stopPropagation()}
    />
  </div>
)}
</>
  );
}