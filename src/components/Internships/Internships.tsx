import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { AnimatedList } from '@/components/ui/animated-list'
import { Lens } from '@/components/ui/lens'

interface Experience {
  id: number
  role: string
  company: string
  duration: string
  location: string
  link: string
  description: string
  skills: string[]
  image: string
}

const experiences: Experience[] = [
  {
    id: 1,
    role: 'Full Stack Engineer',
    company: 'IHMCL,NHAI',
    duration: 'Jan 2026 - Present',
    location: 'Dwarka, New Delhi',
    link: 'https://www.linkedin.com/posts/bharat-digital-io-fellowship_full-stack-bfbf26-ugcPost-7424396353163833344-bgRI?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD68KCoBsMBV9Nwm6juOJWYF0RAFF_yIc1o',
    description:
    'Selected in Build for Bharat Fellowship 2026 among the top 18 students out of 10,000+ applicants across India, currently working as an Android Developer on GovTech projects with National Highways Authority of India.',
    skills: ['Kotlin', 'Android', 'Rest API', 'React', 'Databases'],
    image: '/assets/I1.png',
  },
  {
    id: 2,
    role: 'Mobile App Developer',
    company: 'NIC,Govt of India',
    duration: 'Jun 2025 - July 2025',
    location: 'Nirman Bhawan, New Delhi',
    link: 'https://drive.google.com/file/d/1RyY8lHztkjdL6vSw70-XWOqAW8OE7C-a/view?pli=1&usp=embed_facebook&usp=embed_facebook',
    description:
    'Worked under the Ministry of Housing and Urban Affairs on an Appointment Booking System for applicant name change services. Developed features like role-based access, live status tracking, feedback management, real-time notifications, and online appointment booking.',
    skills: ['Flutter', 'Firebase', 'MySQL', 'Figma'],
    image: '/assets/I2.jpeg',
  },
  {
    id: 3,
    role: 'App Developer Intern',
    company: 'Chronicles Sporting Events Pvt. Ltd.',
    duration: 'July 2024 - Feb 2025',
    location: 'Hybrid',
    link: 'https://drive.google.com/file/d/10Z2hhOn6GtLLtwK6DMX9F-Z-dq9os8vi/view?usp=sharing&usp=embed_facebook',
    description:
    'Interned at Chronicles Sporting Events, where I conducted research, developed the app from scratch, and worked on front-end design, backend development, and feature implementation.',
    skills: ['Flutter', 'Firebase', 'REST API', 'Figma', 'SDLC'],
    image: '/assets/I3.jpeg',
  },
  {
    id: 4,
    role: 'Software Developer',
    company: 'ICGEB Lab',
    duration: 'Nov 2024 - Feb 2025',
    location: 'Remote',
    link: 'https://drive.google.com/file/d/1O6voThOvQHS0hxBr-DPNhm30ZbcX8Lvg/view?usp=sharing&usp=embed_facebook',
    description:
    'At International Centre for Genetic Engineering and Biotechnology, I developed a real-time location mapping and routing mobile app from scratch, handling everything from UI/ UX to core features. Integrated live tracking, frontend and backend modules, and real-time updates.',
    skills: ['Flutter', 'Firebase', 'Google Maps', 'Figma'],
    image: '/assets/I4.jpg',
  },
  {
    id: 5,
    role: 'Data Science Internship',
    company: 'YBI Foundation',
    duration: 'June 2024 - July 2024',
    location: 'Remote',
    link: 'https://www.linkedin.com/in/abhaypawar15/overlay/Position/2481461328/treasury/?profileId=ACoAAD68KCoBsMBV9Nwm6juOJWYF0RAFF_yIc1o&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B6GNPbVFTQpWYqXl5f%2Fv77A%3D%3D',
    description:
    'Gained hands-on experience in Python, data science, and machine learning fundamentals. Utilized Google Colab and Python libraries for data manipulation and analysis. Developed and submitted projects on GitHub, demonstrating proficiency in data skills.',
    skills: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Excel'],
    image: '/assets/I5.jpg',
  },
]

// Stagger variants for the skill tags inside expanded panel
const skillContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } },
}
const skillItemVariants = {
  hidden: { opacity: 0, scale: 0.75, y: 6 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring' as const, stiffness: 400, damping: 28 } },
}

const Internships = () => {
  const [expandedId, setExpandedId] = useState<number | null>(0)

  return (
    <section id="internships" className="relative section-padding overflow-hidden">
      {/* Decorative glow */}
      <div
        className="absolute top-20 right-12 w-48 h-48 rounded-full pointer-events-none opacity-20"
        style={{ background: 'radial-gradient(circle, rgba(0,200,83,0.2) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 container-max">
        {/* Section title */}
        <div className="reveal text-center mb-12">
          <h2
            className="font-bold text-white"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            Professional Experience
          </h2>
        </div>

        {/* Experiences — animated list entrance */}
        <div className="relative mx-auto w-full max-w-4xl overflow-hidden px-1 pb-10">
        <AnimatedList className="gap-3" delay={180}>
          {experiences.map((experience) => {
            const isOpen = expandedId === experience.id
            return (
              <figure
                key={experience.id}
                className="experience-list-item relative mx-auto min-h-fit w-full cursor-pointer overflow-hidden rounded-2xl"
              >
                {/* Header — shimmer CSS class applied when expanded */}
                <button
                  onClick={() => setExpandedId(isOpen ? null : experience.id)}
                  className={`w-full px-6 py-4 flex items-center justify-between group transition-colors duration-300
                    ${isOpen ? 'experience-header-active border-b border-terminal-green/30' : 'hover:bg-terminal-green/10'}`}
                >
                  <div className="flex-1 text-left">
                    <h3 className="font-bold text-white text-base">
                      {experience.role}
                      <span className="text-terminal-muted font-normal mx-2">@</span>
                      <span className="text-terminal-green">{experience.company}</span>
                    </h3>
                  </div>
                  <div className="flex items-center gap-6 shrink-0 ml-4">
                    <span className="font-mono text-sm text-gray-400 hidden sm:block">{experience.duration}</span>
                    {/* Show / Hide pill */}
                    <span
                      className={`font-mono text-xs px-3 py-1 rounded border transition-all duration-200
                        ${isOpen
                          ? 'border-terminal-green text-terminal-green bg-terminal-green/10'
                          : 'border-terminal-border text-terminal-muted group-hover:border-terminal-green/50 group-hover:text-terminal-green'
                        }`}
                    >
                      {isOpen ? 'Hide' : 'Show'}
                    </span>
                  </div>
                </button>

                {/* Expandable panel — smooth height + fade via AnimatePresence */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="panel"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div className="bg-terminal-bg/80 border-l-2 border-terminal-green px-6 py-6">
                        <div className="flex flex-col lg:flex-row gap-6">
                          <div className="flex-1">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                              <div className="flex items-center gap-2 text-gray-400 font-mono text-sm">
                                <span className="text-terminal-green">📍</span>
                                {experience.location}
                              </div>
                              <a
                                href={experience.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-1.5
                                           border border-terminal-green text-terminal-green font-mono text-sm rounded
                                           hover:bg-terminal-green hover:text-terminal-bg transition-all duration-200 w-fit"
                              >
                                View →
                              </a>
                            </div>

                            <p className="text-gray-300 text-sm leading-relaxed mb-5">
                              {experience.description}
                            </p>

                            {/* Staggered skill tags */}
                            <motion.div
                              className="flex flex-wrap gap-2"
                              variants={skillContainerVariants}
                              initial="hidden"
                              animate="visible"
                            >
                              {experience.skills.map((skill) => (
                                <motion.span
                                  key={skill}
                                  variants={skillItemVariants}
                                  className="px-3 py-1 bg-terminal-green/10 border border-terminal-green/40
                                             text-terminal-green font-mono text-xs rounded-full
                                             hover:bg-terminal-green/20 transition-colors"
                                >
                                  {skill}
                                </motion.span>
                              ))}
                            </motion.div>
                          </div>

                          {/* Company image with Lens zoom */}
                          <div className="lg:w-56 shrink-0">
                            <Lens
                              className="w-full aspect-square rounded-lg overflow-hidden border border-terminal-green/30 bg-terminal-bg-card"
                              lensSize={120}
                              zoomFactor={1.8}
                            >
                              <img
                                src={experience.image}
                                alt={experience.company}
                                className="w-full h-full object-cover"
                              />
                            </Lens>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </figure>
            )
          })}
        </AnimatedList>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-terminal-bg" />
        </div>
      </div>
    </section>
  )
}

export default Internships
