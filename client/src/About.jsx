import React from "react";
import { motion } from "framer-motion";
import {
  Search,
  Scissors,
  Droplets,
  Wrench,
  Cpu,
  Shirt,
  PenTool,
  Handshake,
} from "lucide-react";

export default function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen bg-background-light">
      {/* Header
      <header className="sticky top-0 z-50 flex items-center justify-between px-4 py-3 bg-background-light border-b border-primary/10 md:px-10">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-4 text-primary">
            <div className="size-6">
              <svg
                fill="none"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <h2 className="text-lg font-bold leading-tight tracking-tight text-slate-900">
              CraftTools Co.
            </h2>
          </div>
          <nav className="hidden md:flex items-center gap-9">
            <a
              href="#"
              className="text-sm font-medium text-slate-700 hover:text-primary transition-colors"
            >
              Shop
            </a>
            <a
              href="#"
              className="text-sm font-medium text-slate-700 hover:text-primary transition-colors"
            >
              Categories
            </a>
            <a href="#" className="text-sm font-bold text-primary">
              Our Story
            </a>
            <a
              href="#"
              className="text-sm font-medium text-slate-700 hover:text-primary transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>
        <div className="flex items-center justify-end flex-1 gap-4 md:gap-8">
          <div className="hidden sm:flex items-center bg-primary/10 rounded-lg h-10 px-4 max-w-64 flex-1">
            <Search className="size-5 text-slate-500 mr-2" />
            <input
              type="text"
              placeholder="Search tools..."
              className="bg-transparent border-none focus:ring-0 text-sm w-full placeholder:text-slate-500"
            />
          </div>
          <div
            className="size-10 rounded-full border-2 border-primary/20 bg-cover bg-center"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDiOsHx1SvrnHAI-_IOLz1GFsH_mNwCSL2Rbk8bCGUqdgBlW4CI0SAiK_1V6vh44J5YCGc6aBeslP-rAuTqIboaFkXtw9kulhJ9SFejHsgs5mDrF70rJiEUPRyNtQqxb-kp6Lu4TpVTCMYpvF-qDpQY2Xql_LrXFPvbGoPEZKkTkWdobuun8rHqZeon3p-aUH9gRgZhoYJAXdT7yj1XW6fYRwitVAQLduQ_a0XT3EOBFBX01uAy8iNY-LLUD59MO_BMYZ8975XBOtM")',
            }}
          />
        </div>
      </header> */}

      <main className="flex-1">
        {/* Hero Section */}
        <section className="px-4 py-6 md:px-10 md:py-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative flex flex-col items-center justify-center min-h-[520px] p-8 text-center bg-cover bg-center rounded-xl overflow-hidden"
            style={{
              backgroundImage:
                'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBaUTF-VY8fVuKIsN_uAPrvxKvzycDVjGcRLv7kHla_jRgNdztxNOzIEYnfTTeB8XC0WT3uWTPZO8ydUyUdPDRD6NnROECKeKaGVWIy-OxWkPKOCunmLXDER0XCdAehZeuoShcYB4fh_ZgMVy0gcR_6_ZSgh9MgBlzYY32qdMOX8SHqPYZq_O6NIkwbne1iENtNRur6VesH9sAyATZMRlSK2cl3G_cU6FB79jUkDMM05rKm3efCPF8SARcwLkV7m0Y9M6xsRa47cTk")',
            }}
          >
            <div className="max-w-[800px] flex flex-col gap-4">
              <h1 className="text-4xl font-black leading-tight tracking-tighter text-white md:text-6xl">
                Empowering Makers and Crafters
              </h1>
              <p className="text-lg font-normal text-white/90 md:text-xl max-w-2xl mx-auto">
                From the first stitch to the final solder, we provide the
                precision instruments that turn your vision into reality.
              </p>
            </div>
            <div className="flex gap-4 mt-8">
              <button className="h-12 px-6 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all min-w-[140px]">
                Browse Shop
              </button>
              <button className="h-12 px-6 bg-white/20 backdrop-blur-md text-white font-bold rounded-lg hover:bg-white/30 transition-all min-w-[140px]">
                Our Catalog
              </button>
            </div>
          </motion.div>
        </section>

        {/* Our Story Section */}
        <section className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-1"
          >
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase mb-4">
              The Beginning
            </div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6 text-slate-900">
              Our Story
            </h2>
            <div className="space-y-4 text-slate-700 text-lg leading-relaxed">
              <p>
                At CraftTools Co., we believe every creator deserves precision.
                Our journey started with a simple goal: to provide a wide range
                of high-quality tools that inspire confidence in every project.
              </p>
              <p>
                Whether you're an electronics enthusiast requiring precision
                soldering irons for delicate circuit work, or a textile artist
                searching for the finest sewing kits, we bridge the gap between
                imagination and reality. We are makers ourselves, and we know
                that the right tool doesn't just make the job easier—it makes it
                possible.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 md:order-2 grid grid-cols-2 gap-4"
          >
            <div
              className="aspect-square rounded-xl bg-cover bg-center shadow-lg"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCue8e5c0lEAfnNS6UcpiMNnhi2P379AeJrB7F0fdXJnJcJdzFpGdCqGVpOu3D-AnfSoxED7zR1S4hROKjGfQLuhw5PbbGjkPP0JQ36yJXv75tX2k6afUHRJCLLrfUUqrZYi6fCFblTFUvdJAlfJAcWHKN2X3iEP1W4xAr25b1arTEkRj0jHj5LgshDtSC1c5YMCo3WivtRD2PXylIjgeJd1Y1w-nghXv4nAEzYz-Drj3i6ffP2kVNiuhxOWOm25zzhW3-nawv2M4c")',
              }}
            />
            <div
              className="aspect-square rounded-xl bg-cover bg-center shadow-lg mt-8"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCWSp4t0MUffqhfdLEvtM-Ne8AyTUaiDQlOg_sNjBCGYFCf2vHwBsVTRbtiaZQQLJBwoslWxMKXGb6M774CBCq0Fmw9WXoPBhAUbbV1sZSqXj3cePaKnL0czDDj8ulUTqF6OoC5-hcg72dasEA8FsvlDyrfgUMjJZAR_ruTq6mZidxcVoCQWi20GCjLcs32cePCa0CFcs6CXm7BLnxxE9Cl7j_65NFxfBhrCtTkLOgOj_gIceREinV7U0foUrjImWpSPiIScu_muxQ")',
              }}
            />
          </motion.div>
        </section>

        {/* Quality Section */}
        <section className="bg-primary/5 py-20 px-6">
          <div className="max-w-6xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
              Quality You Can Trust
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              We don't just sell tools; we curate excellence. Every product in
              our inventory undergoes rigorous testing to ensure it meets our
              standards for durability and professional utility.
            </p>
          </div>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Yoker Knives",
                desc: "Renowned for their carbon-steel blades and ergonomic grips, Yoker Knives are the industry standard for precision cutting.",
                icon: Scissors,
              },
              {
                title: "B-7000 Glue",
                desc: "The essential multi-purpose adhesive for jewelry, electronics, and intricate repairs. Clear, waterproof, and flexible.",
                icon: Droplets,
              },
              {
                title: "Visking Protools",
                desc: "Rugged, reliable, and built to last a lifetime. Visking sets the bar for professional-grade manual equipment.",
                icon: Wrench,
              },
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-xl border border-primary/10 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary mb-6">
                  <item.icon className="size-8" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">
                  {item.title}
                </h3>
                <p className="text-slate-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Featured Categories */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold mb-12 text-center text-slate-900">
            Featured Categories
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              {
                title: "Electronics & Soldering",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD6clkpTdseiu6u4YkW6Qtzy6K6GE3y4s5p9XDRNWXe4wGC2gDnOAifsUM0jNoJlY3GF-xaPgK2zuGaa8iLBKsiF6zilsqOM3cC0eD4Deh3G2kd65O81lbW2kicroXtG3DMxL05zPbd8jRSLHl0z2tLWxEMlJ8y-aohYx_9Vnf4LyC9s9EybFg8DuDQyEYrv8dN_Lgj-t4fM3MmSsAgkbJW6Ta_tfz5jLYmhVIQ__nIuqYEQnHgIiF8QqJS8cXEiJAMBZUMucfwC7E",
                icon: Cpu,
              },
              {
                title: "Sewing & Textiles",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBikjtGVVk3I-WA6RknFbEn5eV5S5G1_zzzaaW2ZUCNGbwVW8YUtligI3eo2Rcktt8VzrbaC9YqAmaIUXCk1UVF8-2KuP2njXEGmGMc6CW9HTXSvSztWq7g8jLLLUOZdbeGfvT-_M9mVaxf9uZysaiDhzGmLE43ohTlTTISphiY5ofLrBtn37ug4zi4ouXcid9nt7Y62VXiSH_3NrTZLggm3tee5opHMsAzCEI84x0CMql1dgixDtPbapZJz8ygNG0NAERFji-xItc",
                icon: Shirt,
              },
              {
                title: "Precision Cutting Tools",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBG_8yyuIGeACmWQlt8Wo0po-DhuZmEkHnzd7qJF1I_PjJ6kD1226EHjFkNR2-NdLK3QUcLhorjGkbZttPrZ5byOlAdEb4TR5xkhm8ClJFfLtxRSDlsLIKJKh0t41wiZuLtoa9gEBHji0tZUY1tFhvKJunHzg12AEbI021ssiJb_OegqBQ2bNA9W769C71D3Y-Z59k2Xm0S1M2fZlJoxYFApBon43thAJibLV4tm_htt_mGncF_93JnTYC4TNc0xUi-LgYGsqTh5MY",
                icon: PenTool,
              },
            ].map((cat, idx) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[4/3] rounded-xl overflow-hidden mb-4 relative">
                  <img
                    src={cat.img}
                    alt={cat.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <cat.icon className="size-6 mb-2" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary transition-colors">
                  {cat.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-24 bg-background-dark text-slate-100 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent" />
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <Handshake className="size-12 text-primary mx-auto mb-6" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-black italic leading-tight mb-8"
            >
              "Your partner in every project, from the first stitch to the final
              solder."
            </motion.h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8" />
            <p className="text-slate-400 text-lg uppercase tracking-widest font-bold">
              Our Mission Statement
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-primary/10 bg-background-light py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center gap-3 text-primary mb-6">
              <svg className="size-6" fill="currentColor" viewBox="0 0 48 48">
                <path d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z"></path>
              </svg>
              <span className="font-bold text-xl text-slate-900">
                CraftTools Co.
              </span>
            </div>
            <p className="text-slate-600 max-w-sm">
              High-quality tools for professional makers, hobbyists, and
              artists. Precision in every piece.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-slate-900">Company</h4>
            <ul className="space-y-2 text-slate-600 text-sm">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  The Lab
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Sustainability
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-slate-900">Support</h4>
            <ul className="space-y-2 text-slate-600 text-sm">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Shipping
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Tool Care Guide
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto border-t border-primary/10 mt-12 pt-8 text-center text-slate-500 text-xs">
          © 2024 CraftTools Co. All rights reserved. Precision guaranteed.
        </div>
      </footer>
    </div>
  );
}
