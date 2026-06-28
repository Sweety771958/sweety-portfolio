
const researchAreas = [
  {
    title: "Bio-inspired Electronic Sensors",
    subtitle: "E-Tongue • E-Nose • E-Eye • E-Skin",
    description:
      "Design and development of bio-inspired electronic sensing systems for disease diagnosis, food quality monitoring, environmental monitoring, and point-of-care healthcare applications.",
  },
  {
    title: "Electrochemical Biosensors",
    subtitle: "Point-of-Care Diagnostics",
    description:
      "Development of multiplex electrochemical biosensors for simultaneous detection of renal, liver, metabolic, and neurological disease biomarkers using nanomaterials and smart sensing technologies.",
  },
  {
    title: "EEG Signal Processing",
    subtitle: "Biomedical Signal Processing",
    description:
      "Analysis of EEG signals for meditation, cognitive neuroscience, stress assessment, seizure detection, brain-computer interface applications, and neurological disorder identification using Python and MNE(On going).",
  },
];

const journals = [
  "Chemical Engineering Journal",
  "Topics in Catalysis",
  "Chemical Physics Impact",
];

const bookChapters = [
  "Role of nanotechnology for coronavirus detection",
  "Advancement in Medical Imaging: Nanotechnology",
  "Challenges and prospects of functionalized nanomaterial-based biosensors",

];

export default function Research() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-blue-50">

      {/* Header */}

      <section className="bg-blue-900 text-white py-20">

        <div className="max-w-7xl mx-auto px-8">

          <h1 className="text-5xl font-bold">
            Research
          </h1>

          <p className="mt-6 text-xl text-blue-100 max-w-4xl">
            My research focuses on Biomedical Engineering,
            Artificial Intelligence, Biosensors,Nanotechnology
            Biomedical Signal Processing,
            Cognitive Neuroscience,
            Brain Computer Interface,
            and Smart Healthcare Technologies.
          </p>

        </div>

      </section>

      {/* Research Statistics */}

      <section className="max-w-6xl mx-auto py-16 px-8">

        <div className="grid md:grid-cols-4 gap-8">

          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <h2 className="text-4xl font-bold text-blue-800">66+</h2>
            <p className="mt-2">Google Scholar Citations</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <h2 className="text-4xl font-bold text-blue-800">4</h2>
            <p className="mt-2">h-index</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <h2 className="text-4xl font-bold text-blue-800">5+</h2>
            <p className="mt-2">Journal Articles</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <h2 className="text-4xl font-bold text-blue-800">5+</h2>
            <p className="mt-2">Book Chapters</p>
          </div>

        </div>

      </section>

      {/* Research Areas */}

      <section className="max-w-7xl mx-auto py-10 px-8">

        <h2 className="text-4xl font-bold text-blue-900 mb-10">
          Research Areas
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {researchAreas.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition"
            >
              <h3 className="text-2xl font-bold text-blue-800">
                {item.title}
              </h3>

              <p className="mt-5 text-gray-600 leading-7">
                {item.description}
              </p>

            </div>
          ))}

        </div>

      </section>

      {/* Journal Publications */}

      <section className="max-w-7xl mx-auto py-20 px-8">

        <h2 className="text-4xl font-bold text-blue-900 mb-8">
          Selected Journal Publications
        </h2>

        <div className="space-y-5">

          {journals.map((journal) => (
            <div
              key={journal}
              className="bg-white shadow-md rounded-lg p-6"
            >
              <h3 className="text-xl font-bold text-blue-700">
                {journal}
              </h3>

              <p className="text-purple-600 mt-2">
                High-impact SCI journal featuring research on advanced electrochemical biosensors, nanotechnology, and biomedical engineering for healthcare applications.

              </p>

            </div>
          ))}

        </div>

      </section>

      {/* Book Chapters */}

      <section className="bg-white py-20">

        <div className="max-w-7xl mx-auto px-8">

          <h2 className="text-4xl font-bold text-blue-900 mb-10">
            Book Chapters
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            {bookChapters.map((chapter) => (
              <div
                key={chapter}
                className="border-l-4 border-blue-700 bg-blue-50 rounded-lg p-6"
              >
                <h3 className="text-xl font-semibold text-blue-800">
                  {chapter}
                </h3>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* Research Vision */}

      <section className="max-w-6xl mx-auto py-20 px-8">

        <h2 className="text-4xl font-bold text-blue-900">
          Research Vision
        </h2>

        <p className="mt-8 text-lg text-gray-700 leading-9">
          My long-term research vision is to develop intelligent healthcare
          technologies by integrating Artificial Intelligence,
          Biomedical Engineering, Biosensors,
          Brain Computer Interface,
          EEG Signal Processing,
          and Cognitive Neuroscience to improve disease diagnosis,
          personalized medicine, and digital healthcare systems.
        </p>

      </section>

    </main>
  );
}