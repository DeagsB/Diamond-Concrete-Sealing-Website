import React from 'react'

export default function Home() {
  return (
    <div>
      <section className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl font-extrabold text-ink">Seal it once. Shine for years.</h1>
            <p className="mt-4 text-muted">Professional concrete cleaning, prep, and premium industrial-grade sealing.</p>
            <div className="mt-6">
              <a href="#contact" className="inline-block bg-ink text-white px-4 py-2 rounded">Request Quote</a>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden">
            <div className="bg-gray-200 w-full h-72"></div>
          </div>
        </div>
      </section>

      <section id="why" className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 border rounded">Prep that bonds</div>
          <div className="p-6 border rounded">Premium industrial-grade sealer</div>
          <div className="p-6 border rounded">Professional application</div>
        </div>
      </section>

      <section id="contact" className="container mx-auto px-4 py-12">
        <div className="max-w-xl">
          <h2 className="text-2xl font-bold">Get a fast quote</h2>
          <form action="/api/quote" method="post" className="mt-4 grid gap-3">
            <input name="name" placeholder="Your name" className="p-3 border rounded" required />
            <input name="email" type="email" placeholder="you@example.com" className="p-3 border rounded" required />
            <input name="phone" placeholder="Phone" className="p-3 border rounded" />
            <textarea name="details" placeholder="Details" className="p-3 border rounded" rows={4}></textarea>
            <button type="submit" className="bg-ink text-white px-4 py-2 rounded">Request my quote</button>
          </form>
        </div>
      </section>
    </div>
  )
}
