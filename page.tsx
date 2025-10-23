import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-slate-900">Wynaxa</Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/about" className="text-slate-900 font-medium">About</Link>
            <Link href="/ecosystem" className="text-slate-600 hover:text-slate-900 transition">Ecosystem</Link>
            <Link href="/investors" className="text-slate-600 hover:text-slate-900 transition">Investors</Link>
            <Link href="/partners" className="text-slate-600 hover:text-slate-900 transition">Partners</Link>
            <Link href="/contact" className="text-slate-600 hover:text-slate-900 transition">Contact</Link>
          </div>

          <Button className="bg-emerald-600 hover:bg-emerald-700">
            Investor Access
          </Button>
        </div>
      </nav>

      {/* Intro Banner */}
      <section className="py-24 px-6 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            We're not just building products —
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">
            we're shaping a movement.
          </h2>
        </div>
      </section>

      {/* Our Story Timeline */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-16">Our Story</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Bristol Roots</h3>
              <p className="text-slate-600">
                Founded in Bristol with a vision to transform local economies through technology
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏢</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Ireland HQ</h3>
              <p className="text-slate-600">
                Established headquarters in Ireland to serve European and global markets
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Ecosystem Launch</h3>
              <p className="text-slate-600">
                Launched our four-product ecosystem serving communities worldwide
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Future Roadmap</h3>
              <p className="text-slate-600">
                Scaling globally while keeping our local-first mission at the core
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission + Values */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                To empower communities worldwide by building technology that keeps economic value local,
                fosters genuine connection, and creates sustainable positive impact for generations to come.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                We believe technology should serve people and communities, not extract from them.
                Every product we build is designed to bring people closer together while strengthening
                local economies.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Values</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-emerald-600">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Inspired</h3>
                    <p className="text-slate-600">We push boundaries to create innovative solutions</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Trusted</h3>
                    <p className="text-slate-600">Transparency and integrity guide every decision</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-600">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Futuristic</h3>
                    <p className="text-slate-600">Building tomorrow's solutions today</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Hopeful</h3>
                    <p className="text-slate-600">Optimistic about creating positive change</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-orange-600">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Community-Led</h3>
                    <p className="text-slate-600">Local voices shape our direction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-16">Leadership Team</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover-lift">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-emerald-400 to-blue-600 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">Christian Shanahan</h3>
                <p className="text-sm text-emerald-600 font-medium mb-3">Founder & CEO</p>
                <p className="text-slate-600 italic mb-4">
                  "Building technology that serves communities, not corporations."
                </p>
                <Button variant="outline" size="sm">
                  LinkedIn →
                </Button>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">Roshni Patel</h3>
                <p className="text-sm text-purple-600 font-medium mb-3">Chief Technology Officer</p>
                <p className="text-slate-600 italic mb-4">
                  "Innovation grounded in real-world impact."
                </p>
                <Button variant="outline" size="sm">
                  LinkedIn →
                </Button>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-red-600 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">Mike Todd</h3>
                <p className="text-sm text-orange-600 font-medium mb-3">Head of Wynaxa Pay</p>
                <p className="text-slate-600 italic mb-4">
                  "Transforming payments into community empowerment."
                </p>
                <Button variant="outline" size="sm">
                  LinkedIn →
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Future Roadmap */}
      <section className="py-24 px-6 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Future Roadmap</h2>

          <div className="space-y-12">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">🎯</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Product Excellence</h3>
                <p className="text-slate-300 text-lg">
                  Continuously refining our ecosystem to deliver seamless, impactful experiences
                  for communities and businesses worldwide.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">📈</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Global Scale</h3>
                <p className="text-slate-300 text-lg">
                  Expanding to new regions while maintaining our commitment to local
                  empowerment and community-driven growth.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">💫</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Lasting Impact</h3>
                <p className="text-slate-300 text-lg">
                  Creating measurable, sustainable change in communities through technology
                  that prioritizes people over profit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Join Us in Shaping the Future
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Whether you're an investor, partner, or community member,
            there's a place for you in the Wynaxa movement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
              Become an Investor
            </Button>
            <Button size="lg" variant="outline">
              Partner with Us
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-slate-950 text-slate-400">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            <Link href="/about" className="hover:text-white transition">About</Link>
            <Link href="/ecosystem" className="hover:text-white transition">Ecosystem</Link>
            <Link href="/investors" className="hover:text-white transition">Investors</Link>
            <Link href="/partners" className="hover:text-white transition">Partners</Link>
            <Link href="/contact" className="hover:text-white transition">Contact</Link>
          </div>
          <div className="text-sm">
            © 2025 Wynaxa. All rights reserved. | Privacy Policy | Terms of Service
          </div>
        </div>
      </footer>
    </div>
  );
}
