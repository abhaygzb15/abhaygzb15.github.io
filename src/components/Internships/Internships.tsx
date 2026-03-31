import { useState } from 'react'

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
    'Selected in Build for Bharat Fellowship 2026 among the top 18 students out of 10,000+ applicants across India, currently working as an Android Developer on GovTech projects.',
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
    'nterned at Chronicles Sporting Events, where I conducted research, developed the app from scratch, and worked on front-end design, backend development, and feature implementation.',
    skills: ['Flutter', 'Firebase', 'REST API', 'Figma', 'SDLC'],
    image: '/assets/I3.jpeg',
  },
  {
    id: 4,
    role: 'Software Developer',
    company: 'International Centre for Genetic Engineering and Biotechnology',
    duration: 'Nov 2024 - Feb 2025',
    location: 'Remote',
    link: 'https://drive.google.com/file/d/1O6voThOvQHS0hxBr-DPNhm30ZbcX8Lvg/view?usp=sharing&usp=embed_facebook',
    description:
    'eveloped a real-time location mapping and routing mobile app from scratch, handling everything from UI/ UX to core features. Integrated live tracking, frontend and backend modules, and real-time updates.',
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

const Internships = () => {
  const [expandedId, setExpandedId] = useState<number | null>(0)

  return (
    <section id="internships" className="relative section-padding bg-terminal-bg overflow-hidden">
      {/* Decorative glow */}
      <div
        className="absolute top-20 right-12 w-48 h-48 rounded-full pointer-events-none opacity-20"
        style={{ background: 'radial-gradient(circle, rgba(0,200,83,0.2) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 container-max">
        {/* Section title */}
        <div className="text-center mb-16">
          <h2
            className="font-bold text-white"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}
          >
            Professional Experience
          </h2>
        </div>

        {/* Experiences accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {experiences.map((experience) => (
            <div key={experience.id} className="overflow-hidden rounded-lg">
              {/* Header - Always visible */}
              <button
                onClick={() => setExpandedId(expandedId === experience.id ? null : experience.id)}
                className="w-full px-8 py-5 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 transition-all duration-300 flex items-center justify-between group"
              >
                <div className="flex-1 text-left">
                  <h3 className="font-bold text-white text-lg">
                    {experience.role} @ {experience.company}
                  </h3>
                </div>
                <div className="flex items-center gap-8">
                  <span className="font-semibold text-white">{experience.duration}</span>
                  <span className="text-2xl text-white group-hover:scale-125 transition-transform duration-300">
                    {expandedId === experience.id ? '−' : '+'}
                  </span>
                </div>
              </button>

              {/* Content - Expandable */}
              {expandedId === experience.id && (
                <div className="bg-gray-900/50 border-l-4 border-purple-600 px-8 py-8 animate-in fade-in duration-200">
                  <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left content */}
                    <div className="flex-1">
                      {/* Location and view button */}
                      <div className="flex flex-col gap-4 mb-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3 text-gray-300">
                            <span className="text-purple-400">📍</span>
                            <span className="font-mono text-sm">{experience.location}</span>
                          </div>
                          <a
                            href={experience.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-mono text-sm rounded transition-colors"
                          >
                            <span>View</span>
                            <span className="text-lg">→</span>
                          </a>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 text-sm leading-relaxed mb-6">
                        {experience.description}
                      </p>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-3">
                        {experience.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-4 py-2 bg-purple-900/50 border border-purple-600 text-purple-200 font-mono text-sm rounded-full hover:bg-purple-800/70 transition-colors"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right image */}
                    <div className="lg:w-64 flex-shrink-0">
                      <div className="w-full aspect-square rounded-lg overflow-hidden border-2 border-purple-600 bg-gray-800">
                        <img
                          src={experience.image}
                          alt={experience.company}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Internships
