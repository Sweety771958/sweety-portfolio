export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-blue-50 px-8 py-20">
    
      {/* Heading */}
       <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
       <div></div>
        <h1 className="text-5xl font-bold text-blue-900">
          About Me
        </h1>

        <p className="mt-8 text-lg text-gray-700 leading-8 text-justify">
          I am <span className="font-semibold text-blue-900">Dr. Sweety Pal</span>,
          an Assistant Professor in the <strong>School of Biomedical Engineering &
          Health Sciences</strong> at <strong>Shobhit Institute of Engineering &
          Technology (Deemed-to-be University), Meerut</strong>.

          My research focuses on the application of Nanotechnology, Non-Ennzymatic Biosensor,
          Electrochemical Biosensor, Cognitive Neuroscience, and Smart Healthcare Technologies
          for disease diagnosis and healthcare innovation.
        </p>
      </section>

      {/* Education */}
      <section className="max-w-5xl mx-auto mt-16">
        <h2 className="text-3xl font-bold text-blue-800"> 
          Education
        </h2>
        
        <div className="mt-8 space-y-6">

          <div className="bg-white shadow-md rounded-xl p-6">
            <h3 className="text-xl font-semibold text-blue-700">
              🎓 Ph.D. in Biomedical Engineering
            </h3>
          </div>

          <div className="bg-white shadow-md rounded-xl p-6">
            <h3 className="text-xl font-semibold text-blue-700">
              🎓 M.Sc. in Biomedical (Gold Medalist)
            </h3>
          </div>

          <div className="bg-white shadow-md rounded-xl p-6">
            <h3 className="text-xl font-semibold text-blue-700">
              🎓 B.Sc. honors in Biomedical Sciences (Gold Medalist)
            </h3>
          </div>

        </div>
      </section>

      {/* Research Interests */}
      <section className="max-w-5xl mx-auto mt-16">
        <h2 className="text-3xl font-bold text-blue-800">
          Research Interests
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mt-8">

          {[
            "Biosensors & Nanotechnology",
            "EEG Signal Processing",
            "AI in Healthcare",
            "Cognitive Neuroscience",
          ].map((item) => (
            <div
              key={item}
              className="bg-white shadow-md rounded-xl p-5"
            >
              <h3 className="text-lg font-semibold text-blue-700">
                {item}
              </h3>
            </div>
          ))}

        </div>
      </section>

      {/* Professional Experience */}
<section className="max-w-5xl mx-auto mt-16">
  <h2 className="text-3xl font-bold text-blue-800">
    Professional Experience
  </h2>

  <div className="mt-8 space-y-6">

    <div className="bg-white shadow-lg rounded-xl p-6 border-l-4 border-blue-700 hover:shadow-2xl transition-all duration-300">
      <h3 className="text-xl font-bold text-orange-700">
        👩‍🏫 Assistant Professor
      </h3>

      <p className="mt-2 text-gray-700">
        School of Biomedical Engineering & Health Sciences,
        Shobhit Institute of Engineering & Technology
        (Deemed-to-be University), Meerut
      </p>

      <p className="mt-2 text-orange-700 font-semibold">
        August 2025 – Present
      </p>
    </div>

    <div className="bg-white shadow-lg rounded-xl p-6 border-l-4 border-green-600 hover:shadow-2xl transition-all duration-300">
      <h3 className="text-xl font-bold text-green-700">
        🔬 Research Assistant
      </h3>

      <p className="mt-2 text-gray-700">
        Department of Biomedical Engineering,
        Shobhit Institute of Engineering & Technology
        (Deemed-to-be University), Meerut
      </p>

      <p className="mt-2 text-green-700 font-semibold">
        November 2021 – July 2025
      </p>
    </div>

    <div className="bg-white shadow-lg rounded-xl p-6 border-l-4 border-purple-600 hover:shadow-2xl transition-all duration-300">
      <h3 className="text-xl font-bold text-purple-700">
        🏥 Biomedical Engineering Intern
      </h3>

      <p className="mt-2 text-gray-700">
        Aoratas Technica Engineering Pvt. Ltd.,
        New Delhi
      </p>

      <p className="mt-2 text-purple-700 font-semibold">
        June 2018 – January 2019
      </p>
    </div>

  </div>
</section>

    </main>
  );
}