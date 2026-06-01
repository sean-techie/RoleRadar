import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-32 px-6">
      <h1 className="text-6xl font-bold text-white max-w-4xl leading-tight">
        Analyze Job Market Trends With AI & Data Engineering
      </h1>

      <p className="text-gray-400 text-xl mt-6 max-w-2xl">
        Discover in-demand skills, track hiring trends,
        and make smarter career decisions using real-time
        job market analytics.
      </p>

      <Link href="/jobs">
        <button className="mt-10 bg-white text-black px-8 py-4 rounded-xl font-semibold hover:opacity-80 transition">
          Explore Dashboard
        </button>
      </Link>
    </section>
  );
}