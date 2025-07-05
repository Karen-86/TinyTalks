export default function TimeoutPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-100 px-4">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-semibold text-neutral-800">
          You've Been Logged Out
        </h1>
        <p className="text-neutral-500 text-base">
          No activity was detected for 3 minutes.
        </p>
        <a
          href="/"
          className="mt-4 inline-block px-6 py-2 rounded-md bg-neutral-200 text-neutral-700 hover:bg-neutral-300 transition"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
}
