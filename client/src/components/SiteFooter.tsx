import { Mail } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="bg-charcoal text-white py-16">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div>
            <h4 className="font-serif text-lg font-bold mb-4">About</h4>
            <ul className="space-y-3">
              <li><a href="/about" className="text-white/70 hover:text-white">About Sukhi</a></li>
              <li><a href="/autobiography" className="text-white/70 hover:text-white">My Story</a></li>
              <li><a href="/election-2025" className="text-white/70 hover:text-white">Election 2025</a></li>
              <li><a href="/issues" className="text-white/70 hover:text-white">Issues</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-bold mb-4">Connect</h4>
            <ul className="space-y-3">
              <li><a href="https://www.linkedin.com/in/sukhisahota" className="text-white/70 hover:text-white">LinkedIn</a></li>
              <li><a href="https://www.instagram.com/sukhi4thepeople/" className="text-white/70 hover:text-white">Instagram</a></li>
              <li><a href="https://www.facebook.com/Sukhi4thepeople" className="text-white/70 hover:text-white">Facebook</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-bold mb-4">Contact</h4>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Have a question or want to get involved?
            </p>
            <a href="mailto:info@sukhisahota.ca" className="inline-flex items-center gap-2 text-orange font-semibold">
              <Mail className="w-4 h-4" />
              info@sukhisahota.ca
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-white/50">
            © 2026 Sukhi Sahota. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
