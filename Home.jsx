
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, MessageCircle, FileText, Shield, Heart, Baby, Send, Sparkles, Brain, Lock, Search } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const [email, setEmail] = React.useState("");
  const [wantTester, setWantTester] = React.useState(false);
  const [babyAge, setBabyAge] = React.useState("");
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [showStickyCTA, setShowStickyCTA] = React.useState(false); // New state for sticky CTA

  React.useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('[data-hero-section]');
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        // Show sticky CTA when the bottom of the hero section is out of view
        setShowStickyCTA(heroBottom < 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle form submission, e.g., save to an entity
    // For now, we'll just show the success message
    setIsSubmitted(true);
  };

  // Updated logo URL from uploaded assets
  const robynLogoUrl = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/941621c56_Robyn.png";
  const emmaImageUrl = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/50142eb9d_emma.jpg";

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Sticky CTA */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ 
          y: showStickyCTA ? 0 : -100, 
          opacity: showStickyCTA ? 1 : 0 
        }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm"
      >
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src={robynLogoUrl} 
              alt="Robyn Logo" 
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className="text-lg font-bold text-gray-900">Robyn</span>
          </div>
          <Button
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full px-6 py-2 font-semibold"
            onClick={() => document.getElementById('waitlist-form').scrollIntoView({ behavior: 'smooth' })}
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Join Waitlist
          </Button>
        </div>
      </motion.div>

      {/* Hero Section */}
      <section data-hero-section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="flex items-center justify-center space-x-4 mb-8">
              <Baby className="w-8 h-8 text-blue-500" />
              <img 
                src={robynLogoUrl} 
                alt="Robyn Logo" 
                className="w-16 h-16 rounded-full object-cover"
              />
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">
                Robyn
              </h1>
            </div>
            
            <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800">
              Your baby's story. Told for you.
            </h2>
            
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Capture each week’s magical moments—just by talking.<br />
              No apps. No typing. Just you, your voice, and memories that last.
            </p>

            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => document.getElementById('waitlist-form').scrollIntoView({ behavior: 'smooth' })}
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Join the Waitlist
            </Button>
            
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 text-center">
              How It Works (in 30 seconds):
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <Phone className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">You Talk</h3>
                <p className="text-gray-600">Robyn calls once a week. Just speak naturally—no scripts.</p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                  <MessageCircle className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Robyn Listens</h3>
                <p className="text-gray-600">Your stories and milestones are gently picked up and organized.</p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto">
                  <FileText className="w-8 h-8 text-pink-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">You Receive</h3>
                <p className="text-gray-600">A beautiful memory entry lands in your inbox. Sweet, private, and 100% yours.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Memory Entry Sample */}
      <section className="py-16 bg-gradient-to-b from-purple-50 to-pink-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 text-center">
              See a Memory Entry
            </h2>
            
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <img 
                src={emmaImageUrl} 
                alt="Baby Emma"
                className="w-full h-64 object-cover rounded-xl mb-6"
              />
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-gray-900">Olivia's Weekly Memory</h3>
                  <span className="text-sm text-gray-500">16 weeks old</span>
                </div>
                
                <p className="text-gray-700 leading-relaxed text-lg">
                  This week, Olivia discovered her laugh—not just the little huffs we've been getting, but a real, full-belly giggle that made us both stop everything and stare at her in wonder. It happened during peek-a-boo, and once she started, she couldn't stop. Even now, just thinking about it makes my heart feel so full it might burst.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Parents Love Robyn */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 text-center">
              Why Parents Love Robyn
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-blue-600" />
                </div>
                <span className="text-gray-700 text-lg">Hands-free weekly journaling</span>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Heart className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-gray-700 text-lg">A calm nudge to reflect on your baby’s growth</span>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Search className="w-4 h-4 text-purple-600" />
                </div>
                <span className="text-gray-700 text-lg">Searchable memories forever</span>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="w-4 h-4 text-pink-600" />
                </div>
                <span className="text-gray-700 text-lg">Private, secure, and always yours</span>
              </div>
            </div>

            {/* Brain Quote - Centered */}
            <div className="text-center">
              <div className="bg-yellow-50 text-gray-700 px-6 py-4 text-lg flex items-center justify-center space-x-3 rounded-full inline-flex">
                <Brain className="w-6 h-6 text-yellow-600" />
                <span>It's like your brain… but less tired.</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Privacy */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-6"
          >
            <h2 className="text-3xl font-bold text-gray-900">
              Built with Privacy in Mind
            </h2>
            
            <div className="max-w-2xl mx-auto space-y-4">
              <p className="text-gray-700 text-lg">
                Everything you share is encrypted and stored securely.<br />
                We never share your data—ever. This is your family's story, not ours.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Early Access + Waitlist */}
      <section id="waitlist-form" className="py-16 bg-gradient-to-b from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-8"
          >
            <h2 className="text-3xl font-bold text-gray-900">
              Robyn is in Early Access
            </h2>
            
            <p className="text-xl text-gray-600">
              We're not live yet—but you can be one of the first to try it.
            </p>
            
            {isSubmitted ? (
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Welcome to the Robyn Family! 🎉</h3>
                <p className="text-gray-600">We'll be in touch soon with updates on early access.</p>
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto">
                  <Input
                    type="email"
                    placeholder="Your Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="text-lg p-4 rounded-xl border-2 border-gray-200 focus:border-blue-500"
                  />

                  <div className="space-y-2 text-left">
                     <label htmlFor="baby-age" className="text-gray-700 font-medium">Baby's Current Age <span className="text-gray-500 font-normal">(optional)</span></label>
                    <Select onValueChange={setBabyAge}>
                      <SelectTrigger className="text-lg p-4 rounded-xl border-2 border-gray-200 focus:border-blue-500">
                        <SelectValue placeholder="Select age range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="expecting">Expecting</SelectItem>
                        <SelectItem value="newborn">Newborn (0-3 months)</SelectItem>
                        <SelectItem value="infant">Infant (3-12 months)</SelectItem>
                        <SelectItem value="toddler">Toddler (1-3 years)</SelectItem>
                        <SelectItem value="older">Older child</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Checkbox
                      id="tester"
                      checked={wantTester}
                      onCheckedChange={setWantTester}
                    />
                    <label htmlFor="tester" className="text-gray-700">
                      I want to apply to be a tester
                    </label>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Join the Waitlist
                  </Button>
                  
                  <p className="text-gray-500 text-sm flex items-center justify-center space-x-2">
                    <Heart className="w-4 h-4 text-pink-500" />
                    <span>No spam. Just joy when we launch.</span>
                  </p>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-12 text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900">
              You're Not Alone in This Feeling
            </h2>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="bg-gray-50 p-6 rounded-xl">
                <p className="text-gray-700 italic mb-4">"I wish I had a sidekick like Robyn when my daughter was little."</p>
                <p className="font-semibold text-gray-800">Sarah M.</p>
                <p className="text-sm text-gray-500">Mom of 2</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <p className="text-gray-700 italic mb-4">"Thousands of photos but no story behind them…"</p>
                <p className="font-semibold text-gray-800">Michael R.</p>
                <p className="text-sm text-gray-500">First-Time Dad</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <p className="text-gray-700 italic mb-4">"I started a baby book… then life happened. Robyn would've saved me."</p>
                <p className="font-semibold text-gray-800">Jessica L.</p>
                <p className="text-sm text-gray-500">Mom of Twins</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* P.S. Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-6"
          >
            <h2 className="text-3xl font-bold text-gray-900">
              P.S.
            </h2>
            
            <div className="max-w-2xl mx-auto space-y-4">
              <p className="text-xl text-gray-700 leading-relaxed">
                You’ve already lived so many unforgettable moments.<br />
                Let’s make sure they’re not actually forgotten.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="py-8 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <img 
              src={robynLogoUrl} 
              alt="Robyn Logo" 
              className="w-8 h-8 rounded-full"
            />
            <span className="text-xl font-bold">Robyn</span>
          </div>
          <p className="text-gray-400">Built for growing families</p>
        </div>
      </footer>
    </div>
  );
}
