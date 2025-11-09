// app/en/iletisim/page.tsx

export default function ContactEnPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="bg-sky-950 text-white">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <p className="text-xs uppercase tracking-[0.25em] text-sky-300 mb-2">
            CONTACT
          </p>
          <h1 className="text-2xl md:text-3xl font-semibold">Contact</h1>
          <p className="text-sm text-sky-100 max-w-xl mt-3">
            For quotations, technical information or any questions, please get
            in touch with us.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8 grid gap-8 md:grid-cols-2 text-sm">
          <div className="space-y-3 text-sky-900">
            <h2 className="text-sm font-semibold">Contact Details</h2>
            <p>
              <strong>Phone:</strong> +90 (216) 395 06 68
            </p>
            <p>
              <strong>Address:</strong> EVLIYA ÇELEBI MAH. ŞAHAN SOKAK NO:2/A
              TUZLA / ISTANBUL – TURKEY
            </p>
            <p>
              <strong>E-mail:</strong> info@sierramarine.com.tr
            </p>
          </div>

          <form className="space-y-3">
            <div>
              <label className="block text-xs font-medium mb-1">
                Name &amp; Surname
              </label>
              <input
                type="text"
                className="w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
              />
            </div>
            <div>
              <label className="block text-xs font-medium mb-1">
                E-mail
              </label>
              <input
                type="email"
                className="w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
              />
            </div>
            <div>
              <label className="block text-xs font-medium mb-1">
                Your Message
              </label>
              <textarea
                rows={4}
                className="w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-md bg-sky-900 px-4 py-2 text-xs font-semibold text-white hover:bg-sky-800"
            >
              Send
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
