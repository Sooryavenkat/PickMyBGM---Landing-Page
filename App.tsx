
import React from 'react';
import { 
  Instagram, 
  Youtube, 
  ShieldCheck, 
  Music, 
  Zap, 
  DollarSign, 
  ArrowRight,
  ChevronRight,
  AlertCircle
} from 'lucide-react';

/**
 * Design Style: Tech Forward (Innovative, clean, future-focused)
 * Colors: Deep Obsidian (#0F0F0F), Slate, Electric Blue/Cyan accents.
 */

const Header: React.FC = () => (
  <header className="fixed top-0 left-0 w-full z-50 glass border-b border-white/5 py-4 px-6 md:px-12">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      <div className="brand-font text-2xl font-bold tracking-tight text-white">
        PickMyBGM
      </div>
    </div>
  </header>
);

const Section1Hero: React.FC = () => (
  <section className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-24 pb-12 tech-gradient overflow-hidden">
    {/* Decorative Elements */}
    <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-600/20 blur-[120px] rounded-full"></div>
    <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full"></div>

    <div className="max-w-5xl mx-auto text-center z-10">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6 animate-pulse">
        <Zap size={14} /> Bridging the Licensing Gap between Music Labels & content Creators.
      </div>
      
      <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
        The first legal way to use <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">movie songs</span> in YouTube & Instagram.
      </h1>
      
      <h2 className="text-lg md:text-xl text-gray-400 mb-10 max-w-4xl mx-auto leading-relaxed font-light">
        Get instant copyright clearance for the biggest Tamil, Telugu, Malayalam, kannada & Hindi hits. The ultimate safety pass for YouTube Ad Monetization and Instagram business growth.
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mb-12">
        <div className="flex items-center gap-3 text-gray-300">
          <div className="w-10 h-10 rounded-lg bg-red-600/10 flex items-center justify-center text-red-500">
            <Youtube size={24} />
          </div>
          <span className="font-medium">No Copyright Strikes.</span>
        </div>
        <div className="flex items-center gap-3 text-gray-300">
          <div className="w-10 h-10 rounded-lg bg-pink-600/10 flex items-center justify-center text-pink-500">
            <Instagram size={24} />
          </div>
          <span className="font-medium">No Audie blocks on Instagram.</span>
        </div>
      </div>

      <div className="flex flex-col items-center gap-4">
        <button 
          onClick={() => window.open('#', '_blank')}
          className="group relative px-8 py-4 bg-white text-black font-bold rounded-xl flex items-center gap-2 transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
        >
          Join Waitlist
          <ArrowRight className="transition-transform group-hover:translate-x-1" />
        </button>
        <p className="text-sm text-cyan-400/80 font-medium italic">
          First 500 signups get 1 Free License.
        </p>
      </div>
    </div>
  </section>
);

const Section2ProblemInstagram: React.FC = () => (
  <section className="py-24 px-6 md:px-12 bg-[#0a0a0a] relative overflow-hidden">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-12 glass p-8 md:p-16 rounded-[2rem] border-pink-500/10">
        <div className="w-24 h-24 md:w-32 md:h-32 rounded-3xl bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 flex items-center justify-center text-white shrink-0 shadow-xl shadow-pink-500/20">
          <Instagram size={48} />
        </div>
        <div className="flex-1">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Creating content for commercial use? Don't let Instagram mute your marketing.
          </h3>
          <p className="text-gray-400 text-lg leading-relaxed">
            Instagram restricts business accounts from using hit movie songs due to copy-right issues. Your videos get Muted, reach is killed, and the "Boost Post" button is disabled.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const Section3ProblemYouTube: React.FC = () => (
  <section className="py-24 px-6 md:px-12 bg-[#0f0f0f] relative overflow-hidden">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row-reverse items-center gap-12 glass p-8 md:p-16 rounded-[2rem] border-red-500/10">
        <div className="w-24 h-24 md:w-32 md:h-32 rounded-3xl bg-red-600 flex items-center justify-center text-white shrink-0 shadow-xl shadow-red-500/20">
          <Youtube size={48} />
        </div>
        <div className="flex-1">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Losing 100% ad monetization? Don’t let YouTube to turn of monetization or replace with stock music.
          </h3>
          <p className="text-gray-400 text-lg leading-relaxed">
            A Content ID Claim redirects 100% of the video's ad revenue to the music label, meaning the creator works for free. Or worse, a Copyright Strike threatens channel termination.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const Section4Solution: React.FC = () => (
  <section className="py-24 px-6 md:px-12 tech-gradient relative">
    <div className="max-w-5xl mx-auto text-center">
      <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center text-blue-400 mx-auto mb-8 neon-border">
        <ShieldCheck size={32} />
      </div>
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
        PickMyBGM is a “Sync Music Licensing Marketplace” integrated directly with YouTube’s Content ID & Instagram’s rights Manager.
      </h2>
      <p className="text-xl text-gray-400 mb-10 leading-relaxed font-light">
        Content creator & Instagram brands buy a song license for a small on-time fee, our system automatically clears copyright claims on their video - eliminating the risk of copyright strikes or unmuting the original audio, thus enabling monetization on the video.
      </p>
      <div className="inline-block px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-cyan-400 font-medium tracking-wide">
        Note - Think it like a <span className="text-white">“Fastag Toll”</span> for content creators & Instagram brands.
      </div>
    </div>
  </section>
);

const Section5ValueProp: React.FC = () => (
  <section className="py-24 px-6 md:px-12 bg-[#0f0f0f]">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Value Prop 1 */}
        <div className="group glass p-8 rounded-3xl border-blue-500/5 hover:border-blue-500/20 transition-all duration-500">
          <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
            <Music size={24} />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">Add Emotion, Not Noise.</h3>
          <p className="text-gray-400 leading-relaxed font-light">
            Access the massive library of Tamil, Telugu, Malayalam, Hindi, Kannada hits from India's top music labels.
          </p>
        </div>

        {/* Value Prop 2 */}
        <div className="group glass p-8 rounded-3xl border-cyan-500/5 hover:border-cyan-500/20 transition-all duration-500">
          <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
            <ShieldCheck size={24} />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">One License. Safe Everywhere.</h3>
          <p className="text-gray-400 leading-relaxed font-light">
            Our proprietary engine connects directly to both major platforms (YouTube Content ID and Meta Rights Manager) to automate claim releases and handle allowlisting in real-time.
          </p>
        </div>

        {/* Value Prop 3 */}
        <div className="group glass p-8 rounded-3xl border-purple-500/5 hover:border-purple-500/20 transition-all duration-500">
          <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform">
            <DollarSign size={24} />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">Pay Small, Earn Big.</h3>
          <p className="text-gray-400 leading-relaxed font-light">
            A transparent, one-time fee structure (depends upon subscriber count & views) that grants 100% of the ad revenue your video generates, even if it goes viral (without complex revenue-sharing agreements).
          </p>
        </div>
      </div>
    </div>
  </section>
);

const Section6FinalCTA: React.FC = () => (
  <section className="py-32 px-6 md:px-12 tech-gradient relative overflow-hidden border-t border-white/5">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
    
    <div className="max-w-4xl mx-auto text-center relative z-10">
      <h2 className="text-4xl md:text-6xl font-bold text-white mb-10 leading-tight">
        Ready to Unmute Your Creativity?
      </h2>
      
      <div className="flex flex-col items-center gap-6">
        <button 
          onClick={() => window.open('#', '_blank')}
          className="group px-12 py-5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-2xl flex items-center gap-3 transition-all hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:scale-105"
        >
          Join Waitlist
          <ChevronRight className="transition-transform group-hover:translate-x-1" />
        </button>
        <div className="flex items-center gap-2 text-gray-400 bg-white/5 px-4 py-2 rounded-full border border-white/10">
          <AlertCircle size={16} className="text-cyan-400" />
          <span className="text-sm font-medium italic">First 500 signups get 1 Free License.</span>
        </div>
      </div>
    </div>
  </section>
);

const Footer: React.FC = () => (
  <footer className="py-12 px-6 md:px-12 bg-black border-t border-white/5">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="brand-font text-xl font-bold tracking-tight text-white/80">
        PickMyBGM
      </div>
      <div className="text-gray-500 text-sm">
        © {new Date().getFullYear()} PickMyBGM. All rights reserved.
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <div className="antialiased selection:bg-cyan-500/30">
      <Header />
      <main>
        <Section1Hero />
        <Section2ProblemInstagram />
        <Section3ProblemYouTube />
        <Section4Solution />
        <Section5ValueProp />
        <Section6FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
