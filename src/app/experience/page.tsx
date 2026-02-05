import Link from 'next/link'
import { Home, Calendar, MapPin, Briefcase } from 'lucide-react'

interface Experience {
  id: string
  company: string
  position: string
  location: string
  startDate: string
  endDate: string
  current: boolean
  description: string
  achievements: string[]
  technologies: string[]
  companyUrl?: string
}

const experiences: Experience[] = [
  {
    id: '1',
    company: 'FLUVIP - The Martech Group',
    position: 'Senior Frontend Developer',
    location: 'Remote',
    startDate: 'Oct 2023',
    endDate: 'Present',
    current: true,
    description:
      'Design and maintenance of highly complex web applications using Angular 15+, leading technological modernization processes and team mentorship.',
    achievements: [
      'Architecture and development of scalable web applications with Angular 15+',
      'Leadership in migration of legacy projects to modern versions, optimizing technical debt',
      'Proactive collaboration with Design, Product, and Backend teams (Node.js/NestJS)',
      'Strategic participation in Scrum development lifecycle with continuous value delivery',
      'Mentorship of junior developers in Clean Code and software engineering best practices',
    ],
    technologies: [
      'Angular 15+',
      'TypeScript',
      'RxJS',
      'Node.js',
      'NestJS',
      'Scrum',
    ],
    companyUrl: 'https://fluvip.com',
  },
  {
    id: '2',
    company: 'Quik',
    position: 'Senior Developer',
    location: 'Maracaibo, Venezuela',
    startDate: 'Feb 2022',
    endDate: 'Dec 2023',
    current: false,
    description:
      'Lead Developer of the 2 main Flutter applications, responsible for core features, Quik Go creation (ridesharing), and team mentorship.',
    achievements: [
      'Development of main features and new interfaces in Flutter',
      'Creation of Quik Go (ridesharing functionality)',
      'Improvement in state management and team code review',
      'Backend development in Firebase Cloud Functions with Node/Express',
      'Optimization of algorithms and methods for greater efficiency',
    ],
    technologies: [
      'Flutter',
      'Dart',
      'Angular',
      'Node.js',
      'Firebase',
      'Express',
    ],
  },
  {
    id: '3',
    company: 'Freelancer',
    position: 'Developer',
    location: 'Remote',
    startDate: 'Sep 2018',
    endDate: 'May 2022',
    current: false,
    description:
      'Development of projects on Upwork, creation of websites with WordPress, custom scripts, and web applications with React + Node.',
    achievements: [
      'Development of multiple projects for international clients',
      'Creation of websites with WordPress and custom solutions',
      'Full-stack web application development with React and Node.js',
      'Implementation of scripts and automations for clients',
    ],
    technologies: ['React.js', 'Angular', 'Node.js', 'WordPress', 'JavaScript'],
  },
  {
    id: '4',
    company: 'Mood (Boitas)',
    position: 'Mobile Developer',
    location: 'México',
    startDate: 'Oct 2021',
    endDate: 'Feb 2022',
    current: false,
    description:
      'Development of rider apps with location tracking and delivery notifications, using Ionic + Vue + GraphQL with OAuth.',
    achievements: [
      'Development of rider app with real-time location tracking',
      'Implementation of dispatch flow and delivery notifications',
      'OAuth authentication integration',
      'Creation of WebView with external authentication',
    ],
    technologies: ['Vue.js', 'Ionic', 'GraphQL', 'OAuth'],
  },
  {
    id: '5',
    company: 'DLDS',
    position: 'Full Stack Developer',
    location: 'Chile',
    startDate: 'Aug 2021',
    endDate: 'Nov 2021',
    current: false,
    description:
      'Development of business administration application with Angular and NestJS, integrating ERP and Shopify.',
    achievements: [
      'Frontend development with Angular for business administration',
      'Backend services creation with Node.js and NestJS',
      'Integration with ERP systems and Shopify',
      'Implementation of authentication system with Bearer Token',
    ],
    technologies: ['Angular', 'NestJS', 'Node.js', 'Shopify', 'PHP'],
  },
  {
    id: '6',
    company: 'Linnkr',
    position: 'Full-stack Developer',
    location: 'United States',
    startDate: 'Dec 2020',
    endDate: 'May 2021',
    current: false,
    description:
      'Creation of dashboards and database methods with MySQL, using NestJS and Angular 7.',
    achievements: [
      'Development of interactive dashboards',
      'Creation of database methods with MySQL',
      'Backend development with NestJS',
      'Frontend integration with Angular 7',
    ],
    technologies: ['Angular', 'TypeScript', 'NestJS', 'MySQL', 'Node.js'],
  },
  {
    id: '7',
    company: 'Intelenz',
    position: 'Front-End Developer',
    location: 'Remote',
    startDate: 'Jun 2018',
    endDate: 'Nov 2020',
    current: false,
    description:
      'Development of Intelenz web application, creation of new Angular modules and UI improvements.',
    achievements: [
      'Development of new modules in Angular',
      'Modification of plugins for the application',
      'User interface improvements',
      'Implementation of reactive programming with RxJS',
    ],
    technologies: ['Angular', 'TypeScript', 'RxJS', 'JavaScript'],
  },
  {
    id: '8',
    company: 'Cytelix System',
    position: 'Moodle Developer',
    location: 'Maracaibo, Venezuela',
    startDate: 'Nov 2017',
    endDate: 'Jun 2018',
    current: false,
    description:
      'Development of activities for Moodle platform, platform administration, and web development.',
    achievements: [
      'Development of educational activities for students in Moodle',
      'Educational platform administration',
      'Course content layout and design',
      'Web development and requirements analysis',
    ],
    technologies: ['JavaScript', 'Moodle', 'jQuery', 'HTML', 'CSS'],
  },
  {
    id: '9',
    company: 'Servieduca',
    position: 'Support Engineer',
    location: 'Maracaibo, Venezuela',
    startDate: 'Mar 2016',
    endDate: 'Nov 2017',
    current: false,
    description:
      'Support of websites and Power Builder-based systems, development and project management.',
    achievements: [
      'Technical support for corporate websites',
      'Maintenance of Power Builder systems',
      'Development on existing projects',
      'Technical project control and management',
    ],
    technologies: ['Power Builder', 'JavaScript', 'HTML', 'CSS', 'SQL'],
  },
]

export default function ExperiencePage() {
  return (
    <div className="text-foreground relative mx-auto min-h-screen w-full max-w-5xl p-8 md:p-16">
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
          Professional Experience
        </h1>
        <p className="font-base text-foreground max-w-2xl text-lg opacity-80 sm:text-xl">
          Over 7 years of experience building scalable web and mobile
          applications, leading teams, and delivering high-quality solutions.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Timeline line */}
        <div className="border-border absolute top-0 left-0 hidden h-full w-1 border-l-4 md:left-1/2 md:block md:-translate-x-1/2" />

        {/* Experience items */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <ExperienceCard key={exp.id} experience={exp} index={index} />
          ))}
        </div>
      </div>

      {/* Summary Stats */}
      <div className="mt-16 grid gap-6 sm:grid-cols-3">
        <StatCard
          icon={<Briefcase className="h-8 w-8" />}
          value="9+"
          label="Years Experience"
        />
        <StatCard
          icon={<Calendar className="h-8 w-8" />}
          value="9"
          label="Companies"
        />
        <StatCard
          icon={<MapPin className="h-8 w-8" />}
          value="20+"
          label="Projects Delivered"
        />
      </div>
    </div>
  )
}

function ExperienceCard({
  experience,
  index,
}: {
  experience: Experience
  index: number
}) {
  const isEven = index % 2 === 0

  return (
    <div
      className={`relative md:w-[calc(50%-2rem)] ${
        isEven ? 'md:ml-0' : 'md:ml-auto'
      }`}
    >
      {/* Timeline dot */}
      <div
        className={`bg-main border-border absolute top-6 hidden h-6 w-6 rounded-full border-4 md:block ${
          isEven ? 'md:-right-[3.25rem]' : 'md:-left-[3.25rem]'
        }`}
      />

      {/* Card */}
      <article className="border-border shadow-shadow bg-secondary-background hover:translate-x-boxShadowX hover:translate-y-boxShadowY rounded-base border-2 p-6 transition-all duration-300 hover:shadow-none">
        {/* Header */}
        <div className="mb-4">
          <div className="mb-2 flex flex-wrap items-start justify-between gap-2">
            <div>
              <h3 className="font-heading text-foreground text-xl sm:text-2xl">
                {experience.position}
              </h3>
              {experience.companyUrl ? (
                <a
                  href={experience.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-main font-heading text-lg hover:underline"
                >
                  {experience.company}
                </a>
              ) : (
                <p className="text-main font-heading text-lg">
                  {experience.company}
                </p>
              )}
            </div>
            {experience.current && (
              <span className="bg-main text-main-foreground rounded-base px-3 py-1 text-xs font-bold">
                CURRENT
              </span>
            )}
          </div>

          <div className="text-foreground flex flex-wrap gap-4 text-sm opacity-70">
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {experience.startDate} - {experience.endDate}
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              {experience.location}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-foreground mb-4 text-sm opacity-80 sm:text-base">
          {experience.description}
        </p>

        {/* Achievements */}
        <div className="mb-4">
          <h4 className="font-heading text-foreground mb-2 text-sm font-semibold">
            Key Achievements:
          </h4>
          <ul className="text-foreground space-y-1 text-sm opacity-80">
            {experience.achievements.map((achievement, idx) => (
              <li key={idx} className="flex gap-2">
                <span className="text-main mt-1">▸</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="border-border bg-background rounded-base border px-3 py-1 text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </article>
    </div>
  )
}

function StatCard({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode
  value: string
  label: string
}) {
  return (
    <div className="border-border shadow-shadow bg-secondary-background hover:translate-x-boxShadowX hover:translate-y-boxShadowY rounded-base border-2 p-6 text-center transition-all duration-300 hover:shadow-none">
      <div className="text-main mb-3 flex justify-center">{icon}</div>
      <div className="font-heading text-foreground mb-1 text-3xl">{value}</div>
      <div className="text-foreground text-sm opacity-70">{label}</div>
    </div>
  )
}
