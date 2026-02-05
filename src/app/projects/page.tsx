import Link from 'next/link'
import { Home, ExternalLink, Github } from 'lucide-react'

interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  technologies: string[]
  image: string
  demoUrl?: string
  githubUrl?: string
  featured: boolean
}

const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with real-time inventory',
    longDescription:
      'A comprehensive e-commerce platform built with Angular and Node.js, featuring real-time inventory management, payment processing, and advanced analytics dashboard.',
    technologies: ['Angular', 'Node.js', 'MongoDB', 'Stripe', 'Socket.io'],
    image: '/projects/ecommerce.jpg',
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true,
  },
  {
    id: '2',
    title: 'Mobile Fitness App',
    description: 'Cross-platform fitness tracking application',
    longDescription:
      'A Flutter-based mobile application for tracking workouts, nutrition, and health metrics with AI-powered recommendations and social features.',
    technologies: ['Flutter', 'Firebase', 'TensorFlow', 'Dart'],
    image: '/projects/fitness.jpg',
    demoUrl: 'https://example.com',
    featured: true,
  },
  {
    id: '3',
    title: 'Project Management Tool',
    description: 'Collaborative project management with real-time updates',
    longDescription:
      'A modern project management tool with Kanban boards, Gantt charts, team collaboration features, and integrations with popular development tools.',
    technologies: ['Angular', 'RxJS', 'NestJS', 'PostgreSQL', 'WebSockets'],
    image: '/projects/pm-tool.jpg',
    githubUrl: 'https://github.com',
    featured: false,
  },
  {
    id: '4',
    title: 'AI Content Generator',
    description: 'AI-powered content creation platform',
    longDescription:
      'An intelligent content generation platform using GPT models to create blog posts, social media content, and marketing copy with SEO optimization.',
    technologies: ['Next.js', 'OpenAI API', 'TypeScript', 'Tailwind CSS'],
    image: '/projects/ai-content.jpg',
    demoUrl: 'https://example.com',
    featured: false,
  },
  {
    id: '5',
    title: 'Real Estate Portal',
    description: 'Property listing and management system',
    longDescription:
      'A comprehensive real estate platform with advanced search, virtual tours, mortgage calculators, and CRM integration for agents.',
    technologies: ['Angular', 'Node.js', 'MySQL', 'AWS S3', 'Google Maps API'],
    image: '/projects/real-estate.jpg',
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: false,
  },
  {
    id: '6',
    title: 'IoT Dashboard',
    description: 'Real-time IoT device monitoring and control',
    longDescription:
      'An IoT dashboard for monitoring and controlling smart devices with real-time data visualization, alerts, and automation rules.',
    technologies: ['Flutter', 'MQTT', 'InfluxDB', 'Grafana', 'Docker'],
    image: '/projects/iot.jpg',
    featured: false,
  },
]

export default function ProjectsPage() {
  const featuredProjects = projects.filter((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <div className="text-foreground relative mx-auto min-h-screen w-full max-w-7xl p-8 md:p-16">
      {/* Header */}
      <div className="mb-12">
        <Link
          href="/"
          className="border-border shadow-shadow bg-main text-main-foreground hover:translate-x-boxShadowX hover:translate-y-boxShadowY rounded-base mb-8 inline-flex items-center justify-center border-2 p-3 transition-all hover:shadow-none"
          aria-label="Back to Home"
        >
          <Home className="h-6 w-6" />
        </Link>

        <h1 className="font-heading text-foreground mb-4 text-4xl sm:text-5xl md:text-6xl">
          My Projects
        </h1>
        <p className="font-base text-foreground max-w-2xl text-lg opacity-80 sm:text-xl">
          A showcase of my work in web and mobile development, featuring
          full-stack applications, mobile apps, and innovative solutions.
        </p>
      </div>

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <section className="mb-16">
          <h2 className="font-heading text-foreground mb-8 text-2xl sm:text-3xl">
            Featured Projects
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} featured />
            ))}
          </div>
        </section>
      )}

      {/* Other Projects */}
      {otherProjects.length > 0 && (
        <section>
          <h2 className="font-heading text-foreground mb-8 text-2xl sm:text-3xl">
            More Projects
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {otherProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}

function ProjectCard({
  project,
  featured = false,
}: {
  project: Project
  featured?: boolean
}) {
  return (
    <article
      className={`border-border shadow-shadow bg-secondary-background hover:translate-x-boxShadowX hover:translate-y-boxShadowY group rounded-base overflow-hidden border-2 transition-all duration-300 hover:shadow-none ${
        featured ? 'md:col-span-1' : ''
      }`}
    >
      {/* Project Image */}
      <div className="bg-main relative aspect-video w-full overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-main-foreground font-heading text-2xl opacity-50">
            {project.title}
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="font-heading text-foreground mb-2 text-xl sm:text-2xl">
          {project.title}
        </h3>
        <p className="font-base text-foreground mb-4 text-sm opacity-70 sm:text-base">
          {featured ? project.longDescription : project.description}
        </p>

        {/* Technologies */}
        <div className="mb-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="border-border bg-background rounded-base border px-3 py-1 text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-main text-main-foreground hover:translate-x-boxShadowX hover:translate-y-boxShadowY shadow-shadow border-border rounded-base flex items-center gap-2 border-2 px-4 py-2 text-sm font-medium transition-all hover:shadow-none"
            >
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary-background text-foreground hover:translate-x-boxShadowX hover:translate-y-boxShadowY shadow-shadow border-border rounded-base flex items-center gap-2 border-2 px-4 py-2 text-sm font-medium transition-all hover:shadow-none"
            >
              <Github className="h-4 w-4" />
              Code
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
