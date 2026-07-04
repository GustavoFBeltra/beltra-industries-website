import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-svh max-w-7xl flex-col items-center justify-center px-5 text-center sm:px-8">
      <p className="tech-label text-graphite">Error 404</p>
      <h1 className="display mt-6 text-6xl sm:text-8xl">Not in the catalog</h1>
      <p className="mt-6 max-w-md text-sm leading-relaxed text-graphite">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="tech-label mt-10 border border-ink bg-ink px-7 py-4 text-paper transition-colors hover:bg-paper hover:text-ink"
      >
        Back to Home
      </Link>
    </section>
  );
}
