type GalleryItem = {
  src: string;
  title: string;
  date?: string;
};

type GalleryProps = {
  gallery: {
    baseline: GalleryItem[];
    application: GalleryItem[];
    monitoring: GalleryItem[];
    laboratory: GalleryItem[];
  };
};

const sections = [
  { key: "baseline", title: "Baseline" },
  { key: "application", title: "Application" },
  { key: "monitoring", title: "Monitoring" },
  { key: "laboratory", title: "Laboratory" },
] as const;

export default function PilotGallery({ gallery }: GalleryProps) {
  return (
    <div className="bg-slate-900 rounded-xl border border-slate-800 p-6 mt-6">
      <h2 className="text-2xl font-semibold text-white mb-6">
        Field Gallery
      </h2>

      {sections.map((section) => {
        const images = gallery[section.key];

        if (images.length === 0) return null;

        return (
          <div key={section.key} className="mb-8">
            <h3 className="text-lg font-medium text-white mb-4">
              {section.title}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="rounded-lg overflow-hidden border border-slate-700"
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-56 object-cover"
                  />

                  <div className="p-3">
                    <div className="text-white font-medium">
                      {image.title}
                    </div>

                    {image.date && (
                      <div className="text-slate-400 text-sm mt-1">
                        {image.date}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}