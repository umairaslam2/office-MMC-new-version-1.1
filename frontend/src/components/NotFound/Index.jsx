import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-slate-50 p-6">
      <div className="max-w-4xl w-full bg-white shadow-2xl rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">

        {/* left: illustration */}
        <div className="flex items-center justify-center p-8 bg-blue-50">
          <div className="w-full max-w-sm">

            <svg viewBox="0 0 200 200" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="g1" x1="0" x2="1">
                  <stop offset="0%" stopColor="#60a5fa" />
                  <stop offset="100%" stopColor="#34d399" />
                </linearGradient>
              </defs>

              <rect width="100%" height="100%" rx="20" fill="url(#g1)" opacity="0.12" />

              {/* simplified doctor illustration */}
              <g transform="translate(40,30)">
                <circle cx="60" cy="30" r="22" fill="#fde68a" />
                <rect x="40" y="52" width="40" height="36" rx="8" fill="#e6eef8" />
                <path d="M30 80 q30 20 60 0" fill="#fff" opacity="0.9" />
                <rect x="52" y="56" width="16" height="28" rx="4" fill="#ffffff" stroke="#dbeafe" />
                <path d="M58 60 l-8 -6" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" />
                <path d="M62 60 l8 -6" stroke="#34d399" strokeWidth="2" strokeLinecap="round" />
                <circle cx="52" cy="26" r="3" fill="#000" opacity="0.6" />
                <circle cx="68" cy="26" r="3" fill="#000" opacity="0.6" />
                <path d="M50 34 q10 8 20 0" stroke="#374151" strokeWidth="1.5" fill="none" strokeLinecap="round" />
              </g>
            </svg>

            <p className="mt-6 text-sm text-slate-600">
              If you need a link to a doctor or service, click the home button — we'll take you back to the clinic page.
            </p>

          </div>
        </div>

        {/* right section */}
        <div className="p-8 flex flex-col justify-center gap-6">
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-800">
            404 — Page Not Found
          </h1>

          <p className="text-slate-600">
            It seems the page you were looking for does not exist. Perhaps the link is broken or the page has moved.
          </p>

          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            Back to Home
          </Link>

          <div className="text-xs text-slate-400 mt-4">
            Remember: If you have an old bookmark, the website structure will have been updated.
          </div>
        </div>

      </div>
    </div>
  );
};

export default NotFound;
