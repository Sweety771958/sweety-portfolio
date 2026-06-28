import Navbar from "./components/Navbar";
import StatsSection from "./components/StatsSection";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-b from-white to-blue-50 pt-24">

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-8 py-20 grid md:grid-cols-2 gap-16 items-center">

          {/* Left Section */}
          <div>

            <span className="text-blue-700 font-semibold uppercase tracking-widest">
              Welcome to My Portfolio
            </span>

            <h1 className="mt-4 text-6xl font-extrabold text-blue-900 leading-tight">
              Dr. Sweety Pal
            </h1>

            <h2 className="mt-5 text-2xl font-semibold text-gray-700">
              Assistant Professor
            </h2>

            <p className="mt-8 text-lg text-gray-900 leading-8">
              School of Biomedical Engineering & Health Sciences<br></br>
              Shobhit Deemed-to-be University, Meerut, UP, India
            </p>

            <div className="mt-10 flex gap-5">

              <button className="bg-blue-700 hover:bg-red-800 text-white px-8 py-3 rounded-lg shadow-lg transition">
                Download CV
              </button>

              <button className="bg-blue-700 hover:bg-red-800 text-white px-8 py-3 rounded-lg shadow-lg transition">
                Contact Me
              </button>

            </div>

          </div>

          {/* Right Section */}
          <div className="flex justify-center">

            <div className="w-80 h-80 rounded-full bg-blue-100 border-8 border-blue-200 shadow-xl flex items-center justify-center">

              <span className="text-gray-500 text-xl">
                Your Photo Here
              </span>

            </div>

          </div>

        </section>

        {/* Research Metrics */}

        <StatsSection />

        {/* Research Interests */}

        <section className="max-w-7xl mx-auto py-20 px-8">

          <h2 className="text-4xl font-bold text-center text-blue-900">
            Research Interests
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-14">

            {[
              "Nanotechnology",
              "EEG Signal Processing",
              "Brain Computer Interface",
              "Biosensors",
              "Brain Cancer Detection",
              "Cognitive Neuroscience",
            ].map((item) => (
              <div
                key={item}
                className="bg-white rounded-xl shadow-lg p-8 hover:-translate-y-2 transition"
              >
                <h3 className="text-xl font-bold text-blue-800">
                  {item}
                </h3>

                <p className="mt-4 text-gray-600">
                  Research and development in {item}.
                </p>
              </div>
            ))}

          </div>

        </section>

      </main>
    </>
  );
}
