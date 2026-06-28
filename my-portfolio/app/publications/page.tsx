const publications = [
  {
    year: "2024",
    title:
      "Bioinspired Electronic Sensors for Healthcare Applications",
    journal: "Chemical Engineering Journal",
    IF:"13.2",
    type: "Scopus & SCI Journal",
    doi: "https://doi.org/10.1016/j.cej.2024.155894",
    status: "Published",
    
  },
  {
    year: "2025",
    title:
      "Multiplex Biosensor Interface Utilizing PANI-AgNP Nanocomposite for Glucose and Urea detection",
    journal: "Topics in Catalysis",
    type: "SCI Journal",
    doi: " https://doi.org/10.1007/s11244-025-02058-3",
    status: "Published",
  },
  {
    year: "2025",
    title:
      "Advanced TiO2-polypyrrole nanostructures enhance glucose detection accuracy with cutting-edge non-enzymatic electrochemical capabilities",
    journal: "Chemical Physics Impact",
    type: "Scopus & SCI Journal",
    doi: "https://doi.org/10.1016/j.chphi.2025.100818",
    status: "Published",
  },
  {
    year: "2024",
    title:
      "Challenges and prospects of functionalized nanomaterial-based biosensors",
    book: "Functionalized Nanomaterials for Biosensing and Bioelectronics Applications",
    type: "Chapter 15",
    doi: "https://doi.org/10.1016/B978-0-12-823829-5.00009-9",
    status: "Published",
  },
  {
    year: "2022",
    title:
      "Role of nanotechnology for coronavirus detection",
    book: "In Sensing Tools and Techniques for COVID-19 ",
    type: "Chapter 3",
    doi: "https://doi.org/10.1016/B978-0-12-823829-5.00009-9",
    status: "Published",
    },
  {
    year: "2024",
    title:
      "Advancement in Medical Imaging: Nanotechnology",
    book: "Futuristic Trends in Chemical, Material Sciences & Nano Technology",
    type: "chapter 2",
    number: "e-ISBN: 978-93-5747-912-7",
    status: "Published",
  },
  {
    year: "2025",
    title:
      "Impact of Rudraksha as a Catalyst in Overcoming Depression",
    book: "Modern Approaches in Identification and Therapeutic Applications of Secondary Metabolites",
    type: "chapter 3",
    status: "Accepted",
  },
  {
    year: "2025",
    title:
      "Investigation of Antimicrobial Activity of Silver Nanoparticles",
    book: "Modern Approaches in Identification and Therapeutic Applications of Secondary Metabolites",
    type: "chapter 15",
    status: "Accepted",
  },
  {
    year: "2026",
    title:
      "Optimization of Multiplexed Biosensor Interface for the detection of Glucose and Urea Utilizing MgO-PVP composite",
    status: "Under reviewd",
  },
];

export default function Publications() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-blue-50">

      {/* Header */}

      <section className="bg-blue-900 text-white py-20">

        <div className="max-w-7xl mx-auto px-8">

          <h1 className="text-5xl font-bold">
            Publications
          </h1>

          <p className="mt-6 text-xl text-blue-100 max-w-4xl">
            Peer-reviewed journal publications in Biosensors, 
            Nanotechnology and Healthcare Technologies.
          </p>

        </div>

      </section>

      {/* Statistics */}

      <section className="max-w-6xl mx-auto py-16 px-8">

        <div className="grid md:grid-cols-4 gap-8">

          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <h2 className="text-4xl font-bold text-blue-800">5+</h2>
            <p className="mt-3">Journal Papers</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <h2 className="text-4xl font-bold text-blue-800">66+</h2>
            <p className="mt-3">Google Scholar Citations</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <h2 className="text-4xl font-bold text-blue-800">4</h2>
            <p className="mt-3">h-index</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <h2 className="text-4xl font-bold text-blue-800">2023–2025</h2>
            <p className="mt-3">Publication Period</p>
          </div>

        </div>

      </section>

      {/* Publication List */}

      <section className="max-w-7xl mx-auto py-10 px-8">

        <h2 className="text-4xl font-bold text-blue-900 mb-10">
          Journal Publications
        </h2>

        <div className="space-y-8">

          {publications.map((paper, index) => (

            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition"
            >

              <div className="flex flex-wrap justify-between items-center">

                <span className="bg-blue-700 text-white px-4 py-1 rounded-full text-sm">
                  {paper.year}
                </span>

                <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm">
                  {paper.status}
                </span>

              </div>

              <h3 className="mt-6 text-2xl font-bold text-blue-900">
                {paper.title}
              </h3>

              <p className="mt-3 text-lg text-gray-700">
                <strong>Journal:</strong> {paper.journal}
              </p>

              <p className="mt-2 text-gray-600">
                <strong>Type:</strong> {paper.type}
              </p>

              <div className="mt-6 flex gap-4">

                <a
                  href={paper.doi}
                  target="_blank"
                  className="bg-blue-700 text-white px-5 py-2 rounded-lg hover:bg-blue-800"
                >
                  DOI
                </a>

                <button className="border border-blue-700 text-blue-700 px-5 py-2 rounded-lg hover:bg-blue-50">
                  PDF
                </button>

                <button className="border border-blue-700 text-blue-700 px-5 py-2 rounded-lg hover:bg-blue-50">
                  Cite
                </button>

              </div>

            </div>

          ))}

        </div>

      </section>

    </main>
  );
}