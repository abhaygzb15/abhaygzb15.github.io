import Carousel, { type CarouselSlide } from '@/components/ui/carousel'

const achievementSlides: CarouselSlide[] = [
  {
    label: 'Hackathon',
    title: 'Tata Technologies InnoVent',
    subtitle: 'Top 31 / 2822 Teams',
    date: 'Jan 2026',
    description:
      'Selected among top 31 teams out of 2822 for the theme "Novel Digital Twin for Battery Ageing and Reuse Optimization."',
    button: 'Explore recognition',
    src: '/assets/tata.png',
    link: 'https://www.tatatechnologies.com/in/innovent-2025-26/',
  },
  {
    label: 'Hackathon',
    title: 'Smart India Hackathon',
    subtitle: 'Finalist - 2024 & 2025',
    date: '2024 - 2025',
    description:
      "Reached the finals of SIH in two consecutive years, one of India's largest student hackathons.",
    button: 'View proof',
    src: '/assets/result.jpeg',
    link: 'https://drive.google.com/drive/folders/114HPHFffYtCEq5xuKjjQp7eUtXH4xpn2?usp=sharing',
  },
  {
    label: 'Hackathon',
    title: 'Samsung Solve For Tomorrow',
    subtitle: 'Top 25 - Space & Tech Theme',
    date: 'Jul 2025',
    description:
      'Ranked under top 100 teams overall and selected among top 25 in "Social Change through Space and Tech."',
    button: 'View proof',
    src: '/assets/samsung.png',
    link: 'https://drive.google.com/file/d/1o9Mot86LEosT1eon5T-jWreUjsWysH-J/view?usp=sharing',
  },
  {
    label: 'Competitive Exam',
    title: 'GATE Computer Science',
    subtitle: 'Qualified 2025 & 2026',
    date: 'GATE CSE',
    description:
      "Cleared Graduate Aptitude Test in Engineering (CSE) in both GATE'25 and GATE'26.",
    button: 'Qualified',
    src: '/assets/gate.png',
  },
  {
    label: 'Competitive Exam',
    title: 'GATE Data Science',
    subtitle: 'AIR 3863',
    date: 'GATE 2026',
    description:
      'Secured All India Rank 3863 in the Data Science & AI paper of GATE 2026.',
    button: 'All India Rank',
    src: '/assets/gate.png',
  },
  {
    label: 'Volunteering',
    title: 'Indian Military Heritage Festival',
    subtitle: 'Event Management Intern',
    date: 'Oct 2023',
    description:
      'Served as Event Management Intern for USI at Manekshaw Centre, New Delhi.',
    button: 'Event work',
    src: '/assets/military_heritage.jpg',
  },
  {
    label: 'Volunteering',
    title: 'Tech Fest - Convoke',
    subtitle: 'University of Delhi',
    date: '2023',
    description:
      'Volunteered at Convoke, the Tech Fest of the University of Delhi, assisting in event coordination and logistics.',
    button: 'Campus work',
    src: '/assets/convoke.jpg',
  },
  {
    label: 'Certification',
    title: 'Data Science Job Simulation',
    subtitle: 'British Airways',
    date: 'May 2024',
    description:
      'Completed British Airways Data Science Job Simulation covering Web Scraping, Python, and advanced analytics skills.',
    button: 'View certificate',
    src: '/assets/british.jpg',
    link: 'https://www.linkedin.com/in/abhaypawar15/overlay/1727014020881/single-media-viewer?type=DOCUMENT&profileId=ACoAAD68KCoBsMBV9Nwm6juOJWYF0RAFF_yIc1o&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BLnnXzQygRSen4EgqL3yPHg%3D%3D',
  },
]

const Achievements = () => {
  return (
    <section id="achievements" className="overflow-hidden py-20">
      <div className="container-max mb-10 px-6 md:px-12 md:pl-8 lg:px-24">
        <div className="flex items-center justify-between">
          <h2 className="font-mono text-3xl font-bold text-gray-100">Achievements</h2>
          <span className="hidden font-mono text-sm text-terminal-muted sm:block">
            // recognition_log
          </span>
        </div>
      </div>

      <div className="relative h-full w-full overflow-hidden">
        <Carousel slides={achievementSlides} />
      </div>
    </section>
  )
}

export default Achievements
