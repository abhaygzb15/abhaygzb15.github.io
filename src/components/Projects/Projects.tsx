interface Project {
  title: string
  status: 'Completed'
  description: string
  tech: string[]
  github: string
  demo?: string
  image: string
}

// TODO: Replace with your actual projects
const projects: Project[] = [
  {
    title: 'MMA Fantasy Sports-App',
    status: 'Completed',
    description:
    'Developed a fantasy sports app for organizing and hosting MMA leagues with User, Promoter, and Admin profiles. Integrated challenge-based gameplay, detailed statistics, and infographics for an engaging experience',
    tech: ['Flutter', 'Firebase', 'Android', 'iOS', 'Figma'],
    github: 'private', // TODO: Add GitHub URL
    demo: 'https://drive.google.com/file/d/1DpGA5OKlfiKRw4lv6VtfD9J0DegTBSPa/view',   // TODO: Add live demo URL or remove this field
    image: '/assets/p1.png',
  },
  {
    title: 'Vision-Language Fusion for Advanced Image Captioning',
    status: 'Completed',
    description:
    'Designed an object detection module using YOLOv5, Mask R-CNN, and Swin Transformers. Implemented caption generation using transformer models (ViT-GPT2, BLIP, BLIP-2) and LSTM-RNN for quality comparison. Built a Streamlit dashboard with real-time captioning, custom prompts, and  model selection options',
    tech: ['NLP', 'OpenCV', 'Streamlit', 'Hugging Face', 'Pytorch'],
    github: 'https://github.com/abhaygzb15/Vision-Language-Fusion-for-Advanced-Image-Captioning', // TODO: Add GitHub URL
    image: '/assets/p2.png',
  },

  {
    title: 'Implementing Kinematic Control of Open ManipulatorX',
    status: 'Completed',
    description:
    'Developed a robotic arm control system and implemented Forward and Inverse Kinematics to achieve precise movements. Created a custom GUI for user-friendly control and validated performance using Gazebo simulation. Successfully programmed the robotic arm to draw different shapes, letters, and words with accuracy',
    tech: ['Kinematics', 'Processing', 'GUI', 'Arduino'],
    demo: 'https://cic.du.ac.in/userfiles/downloads/SLP2024/Open%20ManipulatorX.pdf',   // TODO: Add live demo URL or remove this field
    github: 'private', // TODO: Add GitHub URL
    image: '/assets/p3.jpg',
  },

  {
    title: 'Athlete Aware',
    status: 'Completed',
    description:
    'Developed an education platform to disseminate anti-doping information to athletes, coaches, and the public. Integrated interactive modules, quizzes, a community forum, chatbot support, and infographics for enhanced learning',
    tech: ['Flutter', 'Firebase', 'Android', 'OpenAI API'],
    demo: 'https://drive.google.com/file/d/1Ee4B_9VKftFu2SwfzAvndBJ90veWt7Ra/view?usp=embed_facebook',   // TODO: Add live demo URL or remove this field
    github: 'private', // TODO: Add GitHub URL
    image: '/assets/p4.png',
  },

  {
    title: 'Food Delivery Chatbot',
    status: 'Completed',
    description:
    'Developed a Food Delivery Chatbot that allows users to place orders, track status, and receive real-time updates. Utilized Dialogflow for NLP and FastAPI for the backend, among other tools like MySQL, HTML/CSS, etc. Enhanced user interaction and streamlined order management through a responsive web interface',
    tech: ['NLP', 'OpenCV', 'Streamlit', 'Hugging Face', 'Pytorch'],
    github: 'https://github.com/abhaygzb15/Food-Delivery-Chatbot', // TODO: Add GitHub URL
    image: '/assets/p5.png',
  },

  {
    title: 'Olympics Data Analysis and Prediction',
    status: 'Completed',
    description:
    'Conducted comprehensive EDA on the modern Olympic Games dataset (1896-2020) using Python libraries for data cleaning, visualization, and predictive modeling with regression and random forest. Developed an interactive Streamlit web app to analyze overall trends, country-wise performance, athlete statistics, and medal tallies',
    tech: ['Python', 'Numpy', 'Matplotlib', 'ML', 'Data Analysis'],
    github: 'https://github.com/abhaygzb15/Olympics-Data-Analysis', // TODO: Add GitHub URL
    image: '/assets/p6.png',
  },
]

// Status badge color

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
)

const Projects = () => {
  return (
    <section id="projects" className="relative section-padding bg-terminal-bg overflow-hidden">

      {/* Decorative glow blobs */}
      <div
        className="absolute top-16 left-8 w-40 h-40 rounded-full pointer-events-none opacity-30"
        style={{ background: 'radial-gradient(circle, rgba(0,200,83,0.18) 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-20 right-12 w-32 h-32 rounded-full pointer-events-none opacity-25"
        style={{ background: 'radial-gradient(circle, rgba(0,200,83,0.15) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 container-max md:pl-8">

        {/* Section title */}
        <div className="text-center mb-14">
          <p className="font-mono text-terminal-muted text-sm mb-2 tracking-widest">// projects</p>
          <h2
            className="font-mono font-bold text-terminal-green terminal-glow"
            style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}
          >
            Featured Projects
          </h2>
        </div>

        {/* Project cards */}
        <div className="space-y-8">
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex flex-col lg:flex-row gap-0 bg-terminal-bg-card border border-terminal-border rounded-2xl overflow-hidden hover:border-terminal-green/40 transition-colors duration-300"
            >
              {/* ── Left: screenshot panel ── */}
              <div className="lg:w-[38%] p-5 border-b lg:border-b-0 lg:border-r border-terminal-border/50 flex flex-col justify-between gap-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-52 md:h-56 object-contain rounded-lg border border-terminal-border/50 bg-terminal-bg p-2"
                />
              </div>

              {/* ── Right: project content ── */}
              <div className="lg:w-[62%] p-6 flex flex-col justify-center gap-5">

                {/* Title */}
                <h3 className="font-mono font-bold text-terminal-green text-xl md:text-2xl">
                  Project:{' '}
                  <span className="text-gray-100">{project.title}</span>
                </h3>

                {/* Description */}
                <div className="border-l-2 border-terminal-green pl-4">
                  <p className="font-mono text-gray-300 text-sm leading-relaxed">
                    <span className="text-terminal-green">{'>'}</span>{' '}
                    {project.description}
                  </p>
                </div>

                {/* Methodology */}
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-xs text-gray-500 uppercase tracking-widest shrink-0">
                    METHODOLOGY:
                  </span>
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 border border-terminal-border text-gray-300 font-mono text-xs rounded hover:border-terminal-green/50 transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Access */}
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-xs text-gray-500 uppercase tracking-widest shrink-0">
                    ACCESS:
                  </span>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-4 py-1.5 border border-terminal-border text-gray-300 font-mono text-xs rounded hover:border-terminal-green hover:text-terminal-green transition-colors"
                    >
                      {'>'} Live Demo
                    </a>
                  )}
                  {project.github.trim().toLowerCase() !== 'private' && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-4 py-1.5 border border-terminal-border text-gray-300 font-mono text-xs rounded hover:border-terminal-green hover:text-terminal-green transition-colors"
                    >
                      <GithubIcon />
                      {'>'} GitHub
                    </a>
                  )}
                </div>

              </div>
            </article>
          ))}
        </div>

        {/* View all link */}
        <div className="mt-10 text-center">
          <a
            href="https://github.com/abhaygzb15"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-sm text-terminal-muted hover:text-terminal-green transition-colors"
          >
            <span className="text-terminal-green">{'>'}_</span>
            view all on GitHub
          </a>
        </div>

      </div>
    </section>
  )
}

export default Projects
