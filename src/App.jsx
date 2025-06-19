import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { ArrowUpRight, ArrowDown, ArrowLeft } from 'lucide-react'
import { motion } from 'framer-motion'
import './App.css'

// Import placeholder images
import placeholder1 from './assets/xgOPkP8Of4RF.jpg'
import placeholder2 from './assets/qVDDbxxBzMja.jpg'
import placeholder3 from './assets/EUhFabMz66wc.jpg'
import placeholder4 from './assets/BV5UCgrktHud.jpg'
import placeholder5 from './assets/JDRUhjfC1T8j.jpg'

// Project Detail Component
function ProjectDetail() {
  const { id } = useParams()
  
  const projects = {
    1: {
      title: "Healthcare Mobile App",
      subtitle: "The New Era of Seamless Digital Experience",
      client: "Your Client Name",
      industry: "Healthcare",
      image: placeholder1,
      description: "In an era where seamless digital experiences define user expectations, the Healthcare Mobile App emerges as a beacon of innovation in the medical technology landscape. This case study delves into the user experience (UX) design journey undertaken to transform conventional healthcare interactions into intuitive, efficient, and user-centric experiences.",
      content: "As traditional healthcare institutions grapple with the evolving demands of a digital-savvy clientele, our team steps forward with a visionary approach to redefine how users engage with their healthcare resources. The intersection of cutting-edge technology, user-centered design principles.",
      futureContent: "As the healthcare technology sector continues to evolve, our team remains committed to ongoing improvements and innovations. Learn about the future roadmap of the app, exploring upcoming features, integrations, and strategies to stay at the forefront of user-centric healthcare solutions. The Healthcare Mobile App serves not only as a testament to the power of thoughtful UX design but also as a harbinger of what the future holds for seamless, secure, and enjoyable healthcare interactions."
    }
  }

  const project = projects[id] || projects[1]

  return (
    <div className="min-h-screen bg-white w-full">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm">
        <nav className="flex items-center justify-between px-6 py-4 w-full">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-[#002FA7] rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">DK</span>
            </div>
            <span className="text-lg font-bold text-gray-900">DK Creative</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/#work" className="text-sm font-medium hover:text-[#002FA7] transition-colors">
              Work
            </Link>
            <Link to="/#about" className="text-sm font-medium hover:text-[#002FA7] transition-colors">
              About
            </Link>
            <Link to="/#contact" className="text-sm font-medium hover:text-[#002FA7] transition-colors">
              Contact
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Button size="sm" className="bg-[#002FA7] text-white hover:bg-[#001f7a]">
              Get for free
            </Button>
          </div>
        </nav>
      </header>

      {/* Project Info Section */}
      <section className="pt-32 pb-12 px-6 w-full">
        <div className="w-full">
          <div className="flex flex-col md:flex-row justify-between items-start mb-8">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-gray-600 mb-2">Industry</p>
              <p className="text-lg font-medium">{project.industry}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-2">Client</p>
              <p className="text-lg font-medium">{project.client}</p>
            </div>
          </div>
          
          <motion.h1 
            className="text-4xl md:text-6xl font-bold leading-tight mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {project.title}.
            <br />
            <span className="text-gray-400">{project.subtitle}</span>
          </motion.h1>
        </div>
      </section>

      {/* Hero Image Section */}
      <section className="px-6 w-full mb-20">
        <div className="w-full">
          <motion.div 
            className="bg-gray-200 rounded-3xl h-96 md:h-[600px] relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover rounded-3xl"
            />
            {/* Mock UI Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 max-w-md w-full mx-4">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold">Summary</h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-8 h-8 bg-blue-200 rounded-full"></div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4">February 2021</p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-blue-900 text-white p-4 rounded-xl">
                    <div className="w-8 h-8 bg-white/20 rounded-full mb-3"></div>
                    <div className="text-2xl font-bold">120</div>
                    <div className="text-sm opacity-80">Upcoming Appt.</div>
                    <div className="text-xs opacity-60">4 not confirmed</div>
                  </div>
                  <div className="bg-blue-100 p-4 rounded-xl">
                    <div className="w-8 h-8 bg-blue-500/20 rounded-full mb-3"></div>
                    <div className="text-2xl font-bold text-blue-600">72</div>
                    <div className="text-sm text-gray-700">Finished Appt.</div>
                    <div className="text-xs text-green-600">▲ 3.4%</div>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-xl border">
                  <div className="text-xl font-bold">$ 1,023.70</div>
                  <div className="text-sm text-gray-600">42 sold products</div>
                  <div className="mt-2 h-8 bg-gradient-to-r from-blue-200 to-blue-400 rounded"></div>
                </div>
                
                <div className="mt-4">
                  <h4 className="font-semibold mb-2">Today's cases</h4>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gray-200 rounded"></div>
                    <span className="text-sm">Digital X-Ray</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="px-6 w-full mb-20">
        <div className="w-full max-w-4xl">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold leading-tight mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Revolutionizing Healthcare: Enhancing User Experience with the Healthcare Mobile App
          </motion.h2>
          
          <motion.p 
            className="text-lg leading-relaxed mb-8 text-gray-700"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {project.description}
          </motion.p>
          
          <motion.p 
            className="text-lg leading-relaxed mb-12 text-gray-700"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {project.content}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button className="bg-[#002FA7] text-white hover:bg-[#001f7a] px-6 py-3 rounded-full">
              Visit Website
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* App Screenshots Section */}
      <section className="px-6 w-full mb-20">
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Desktop Screenshot */}
            <motion.div 
              className="bg-gray-200 rounded-3xl p-8 h-96"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gray-800 rounded-xl h-full p-4">
                <div className="flex space-x-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-white text-sm">
                  <div className="mb-4">Exchange</div>
                  <div className="text-2xl font-bold mb-2">0.8932 Euro</div>
                  <div className="h-20 bg-blue-500/20 rounded mb-4"></div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span>History</span>
                      <span>Upcoming</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Mobile Screenshot 1 */}
            <motion.div 
              className="bg-gray-200 rounded-3xl p-8 h-96"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-gray-800 rounded-2xl h-full p-4">
                <div className="text-white">
                  <div className="text-center mb-6">
                    <div className="w-12 h-12 bg-blue-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <span className="text-white font-bold">*</span>
                    </div>
                  </div>
                  <div className="text-sm text-gray-400 mb-2">Account</div>
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">B</span>
                    </div>
                    <span>Beno Co.</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-gray-600 rounded"></div>
                      <span className="text-sm">Overview</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-gray-600 rounded"></div>
                      <span className="text-sm">Cards</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-blue-500 rounded"></div>
                      <span className="text-sm text-blue-400">Payments</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-gray-600 rounded"></div>
                      <span className="text-sm">Wallet</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-gray-600 rounded"></div>
                      <span className="text-sm">Reports</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Mobile Screenshot 2 */}
            <motion.div 
              className="bg-gray-200 rounded-3xl p-8 h-96"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="bg-gray-800 rounded-2xl h-full p-4">
                <div className="text-white">
                  <div className="flex items-center justify-between mb-4">
                    <ArrowLeft className="w-5 h-5" />
                    <span className="text-sm">Exchange</span>
                    <div className="w-5 h-5"></div>
                  </div>
                  <div className="text-xs text-gray-400 mb-1">1 United State Dollar equals</div>
                  <div className="text-2xl font-bold mb-4">0.8932 Euro</div>
                  <div className="text-xs text-gray-400 mb-4">10:43:12 AM</div>
                  <div className="h-16 bg-blue-500/20 rounded mb-4"></div>
                  <div className="flex space-x-4 text-xs">
                    <span className="text-blue-400">History</span>
                    <span className="text-gray-400">Upcoming</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final Content Section */}
      <section className="px-6 w-full mb-20">
        <div className="w-full max-w-4xl">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold leading-tight mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Elevating Healthcare Experiences: Healthcare Mobile App's Impact and Future Endeavors
          </motion.h2>
          
          <motion.p 
            className="text-lg leading-relaxed mb-12 text-gray-700"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {project.futureContent}
          </motion.p>
        </div>
      </section>

      {/* Final Screenshots Grid */}
      <section className="px-6 w-full mb-20">
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-gray-200 rounded-3xl p-6 h-80"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gray-800 rounded-xl h-full p-4">
                <div className="flex space-x-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-white text-sm">
                  <div className="mb-4">Exchange</div>
                  <div className="text-xl font-bold mb-2">0.8932 Euro</div>
                  <div className="h-16 bg-blue-500/20 rounded"></div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="bg-gray-200 rounded-3xl p-6 h-80"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-gray-800 rounded-2xl h-full p-4">
                <div className="text-white">
                  <div className="text-center mb-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full mx-auto flex items-center justify-center">
                      <span className="text-white text-xs">*</span>
                    </div>
                  </div>
                  <div className="text-xs text-gray-400 mb-2">Account</div>
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                    <span className="text-sm">Beno Co.</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-gray-600 rounded"></div>
                      <span className="text-xs">Overview</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-gray-600 rounded"></div>
                      <span className="text-xs">Cards</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-blue-500 rounded"></div>
                      <span className="text-xs text-blue-400">Payments</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="bg-gray-200 rounded-3xl p-6 h-80"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="bg-gray-800 rounded-2xl h-full p-4">
                <div className="text-white">
                  <div className="flex items-center justify-between mb-3">
                    <ArrowLeft className="w-4 h-4" />
                    <span className="text-xs">Exchange</span>
                    <div className="w-4 h-4"></div>
                  </div>
                  <div className="text-lg font-bold mb-2">0.8932 Euro</div>
                  <div className="h-12 bg-blue-500/20 rounded mb-3"></div>
                  <div className="flex space-x-3 text-xs">
                    <span className="text-blue-400">History</span>
                    <span className="text-gray-400">Upcoming</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-black text-white w-full">
        <div className="w-full text-center">
          <p className="text-sm text-gray-400 mb-4">Contact</p>
          <motion.h2 
            className="text-6xl md:text-8xl font-bold leading-tight mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Let's start
            <br />
            creating together
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Button className="bg-[#002FA7] text-white hover:bg-[#001f7a] px-8 py-3 rounded-full">
              Let's talk
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-6 w-full">
        <div className="w-full">
          <div className="flex flex-col md:flex-row justify-between items-start">
            <div className="mb-8 md:mb-0">
              <p className="text-sm text-gray-400 mb-4">Contact</p>
              <h3 className="text-4xl font-bold mb-8">
                Let's start
                <br />
                creating together
              </h3>
              <Button className="bg-[#002FA7] text-white hover:bg-[#001f7a] px-6 py-2 rounded-full">
                Let's talk
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-16">
              <div>
                <div className="space-y-2">
                  <Link to="/" className="block text-sm hover:text-[#002FA7] transition-colors">
                    Home
                  </Link>
                  <Link to="/#work" className="block text-sm hover:text-[#002FA7] transition-colors">
                    Work
                  </Link>
                  <Link to="/#about" className="block text-sm hover:text-[#002FA7] transition-colors">
                    About
                  </Link>
                  <Link to="/#contact" className="block text-sm hover:text-[#002FA7] transition-colors">
                    Contact
                  </Link>
                </div>
              </div>
              
              <div>
                <div className="space-y-2">
                  <a href="#" className="block text-sm hover:text-[#002FA7] transition-colors">
                    Twitter
                  </a>
                  <a href="#" className="block text-sm hover:text-[#002FA7] transition-colors">
                    Dribbble
                  </a>
                  <a href="#" className="block text-sm hover:text-[#002FA7] transition-colors">
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-800 text-center">
            <p className="text-sm text-gray-400">
              2023 Pearl Framer template crafted with love by{" "}
              <a href="#" className="text-[#002FA7] hover:underline">
                Dawid Pietrasiak
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Home Component
function Home() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const projects = [
    {
      id: 1,
      title: "Fintech Dello Banking App",
      client: "Booking Corp.",
      image: placeholder1,
      textColor: "text-gray-800"
    },
    {
      id: 2,
      title: "Dazzle © Branding",
      client: "Dazzle Inc.",
      image: placeholder2,
      textColor: "text-white"
    },
    {
      id: 3,
      title: "Healthcare Mobile App",
      client: "Your Client Name",
      image: placeholder3,
      textColor: "text-gray-800"
    },
    {
      id: 4,
      title: "Technical Infographic",
      client: "Tech Bank Client",
      image: placeholder4,
      textColor: "text-gray-800"
    },
    {
      id: 5,
      title: "Extend & Support - App Plugin",
      client: "Client Name",
      image: placeholder5,
      textColor: "text-gray-800"
    }
  ]

  const services = [
    "Branding",
    "UX/UI Designs",
    "Motion & Animation",
    "Mobile"
  ]

  const brands = [
    "Ziggo", "★", "✕", "dazzle", "⟨⟩",
    "◆", "copay", "e.xodus", "(())", "ket:ko"
  ]

  return (
    <div className="min-h-screen bg-white w-full">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm">
        <nav className="flex items-center justify-between px-6 py-4 w-full">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-[#002FA7] rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">DK</span>
            </div>
            <span className="text-lg font-bold text-gray-900">DK Creative</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#work" className="text-sm font-medium hover:text-[#002FA7] transition-colors">
              Work
            </a>
            <a href="#about" className="text-sm font-medium hover:text-[#002FA7] transition-colors">
              About
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-[#002FA7] transition-colors">
              Contact
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <Button size="sm" className="bg-[#002FA7] text-white hover:bg-[#001f7a]">
              Get for free
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 w-full">
        <div className="w-full">
          <div className="text-left mb-8">
            <p className="text-sm text-gray-600 mb-4">Branding • Product Design</p>
            <motion.h1 
              className="text-4xl md:text-5xl font-medium leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Discover the essence of Pearl, a free
              <br />
              Framer template.{" "}
              <span className="text-gray-400">
                Let's shape your
                <br />
                brand into a masterpiece together.
              </span>
            </motion.h1>
          </div>
          
          <motion.div 
            className="flex justify-start"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Button className="bg-[#002FA7] text-white hover:bg-[#001f7a] px-8 py-3 rounded-full">
              Get for free
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-6 w-full" id="work">
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="rounded-3xl h-96 relative overflow-hidden cursor-pointer group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Link to={index === 0 ? `/detail/${project.id}` : '#'}>
                  <div className="absolute inset-0">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover rounded-3xl"
                    />
                  </div>
                  <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-sm rounded-2xl p-4">
                    <p className="text-sm text-gray-600 mb-2">
                      {project.client}
                    </p>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {project.title}
                    </h3>
                  </div>
                  <div className="absolute top-8 right-8">
                    <ArrowUpRight className="h-6 w-6 text-white opacity-60 group-hover:opacity-100 transition-opacity" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Section */}
      <section className="py-20 px-6 bg-gray-50 w-full">
        <div className="w-full">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <p className="text-sm text-gray-600 mb-4">Designing Success</p>
              <h2 className="text-5xl font-bold leading-tight mb-8">
                See how we've turned ideas into
                <br />
                reality. Dive into the stories of{" "}
                <span className="text-gray-400">
                  successful product designs that
                  <br />
                  make a difference.
                </span>
              </h2>
            </div>
            <div className="lg:w-1/2 flex justify-end">
              <Button variant="outline" className="border-2 border-[#002FA7] text-black hover:bg-[#002FA7] hover:text-white">
                Our Work
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 w-full">
        <div className="w-full">
          <p className="text-sm text-gray-600 mb-12">Services</p>
          <div className="space-y-8">
            {services.map((service, index) => (
              <motion.div
                key={service}
                className="border-b border-gray-200 pb-8 group cursor-pointer"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-4xl md:text-6xl font-bold group-hover:text-[#002FA7] transition-colors">
                    {service}
                  </h3>
                  <ArrowDown className="h-8 w-8 text-gray-400 group-hover:text-[#002FA7] transition-colors" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-gray-50 w-full" id="about">
        <div className="w-full">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <p className="text-sm text-gray-600 mb-4">Our Story</p>
              <h2 className="text-5xl font-bold leading-tight mb-8">
                Explore our journey and learn what
                <br />
                sets us apart in{" "}
                <span className="text-gray-400">
                  crafting impactful
                  <br />
                  digital experiences.
                </span>
              </h2>
            </div>
            <div className="lg:w-1/2 flex justify-end">
              <Button variant="outline" className="border-2 border-[#002FA7] text-black hover:bg-[#002FA7] hover:text-white">
                About Us
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-20 px-6 w-full">
        <div className="w-full">
          <div className="grid grid-cols-5 gap-8 items-center">
            {brands.map((brand, index) => (
              <motion.div
                key={index}
                className="text-center text-2xl font-bold text-gray-800"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {brand}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-black text-white w-full" id="contact">
        <div className="w-full text-center">
          <p className="text-sm text-gray-400 mb-4">Contact</p>
          <motion.h2 
            className="text-6xl md:text-8xl font-bold leading-tight mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Let's start
            <br />
            creating together
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Button className="bg-[#002FA7] text-white hover:bg-[#001f7a] px-8 py-3 rounded-full">
              Let's talk
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-6 w-full">
        <div className="w-full">
          <div className="flex flex-col md:flex-row justify-between items-start">
            <div className="mb-8 md:mb-0">
              <p className="text-sm text-gray-400 mb-4">Contact</p>
              <h3 className="text-4xl font-bold mb-8">
                Let's start
                <br />
                creating together
              </h3>
              <Button className="bg-[#002FA7] text-white hover:bg-[#001f7a] px-6 py-2 rounded-full">
                Let's talk
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-16">
              <div>
                <div className="space-y-2">
                  <a href="#" className="block text-sm hover:text-[#002FA7] transition-colors">
                    Home
                  </a>
                  <a href="#work" className="block text-sm hover:text-[#002FA7] transition-colors">
                    Work
                  </a>
                  <a href="#about" className="block text-sm hover:text-[#002FA7] transition-colors">
                    About
                  </a>
                  <a href="#contact" className="block text-sm hover:text-[#002FA7] transition-colors">
                    Contact
                  </a>
                </div>
              </div>
              
              <div>
                <div className="space-y-2">
                  <a href="#" className="block text-sm hover:text-[#002FA7] transition-colors">
                    Twitter
                  </a>
                  <a href="#" className="block text-sm hover:text-[#002FA7] transition-colors">
                    Dribbble
                  </a>
                  <a href="#" className="block text-sm hover:text-[#002FA7] transition-colors">
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-800 text-center">
            <p className="text-sm text-gray-400">
              2023 Pearl Framer template crafted with love by{" "}
              <a href="#" className="text-[#002FA7] hover:underline">
                Dawid Pietrasiak
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<ProjectDetail />} />
      </Routes>
    </Router>
  )
}

export default App

