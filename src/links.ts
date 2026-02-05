import behance from '../public/icons/behance.svg'
import buymeacoffee from '../public/icons/buymeacoffee.svg'
import dribbble from '../public/icons/dribbble.svg'
import figma from '../public/icons/figma.svg'
import github from '../public/icons/github.svg'
import gumroad from '../public/icons/gumroad.svg'
import instagram from '../public/icons/instagram.svg'
import kofi from '../public/icons/kofi.svg'
import linkedin from '../public/icons/linkedin.svg'
import medium from '../public/icons/medium.svg'
import patreon from '../public/icons/patreon.svg'
import producthunt from '../public/icons/producthunt.svg'
import readcv from '../public/icons/read-cv.svg'
import reddit from '../public/icons/reddit.svg'
import tiktok from '../public/icons/tiktok.svg'
import twitch from '../public/icons/twitch.svg'
import x from '../public/icons/x.svg'
import projects from '../public/icons/projects.svg'
import experience from '../public/icons/experience.svg'
import cv from '../public/icons/cv.svg'
import youtube from '../public/icons/youtube.svg'

type SocialMedia = (typeof websites)[number]

type Link = {
  title: string
  icon: any
  link: string
  text?: string
  isInternal?: boolean
  disabled?: boolean
}

const websites = [
  'behance',
  'buymeacoffee',
  'dribbble',
  'figma',
  'github',
  'gumroad',
  'instagram',
  'kofi',
  'linkedin',
  'medium',
  'patreon',
  'producthunt',
  'readcv',
  'reddit',
  'tiktok',
  'twitch',
  'projects',
  'experience',
  'cv',
  'x',
  'youtube',
]

const LINKS: { [key in SocialMedia]: Link } = {
  experience: {
    title: 'Experience',
    icon: experience,
    link: '/experience',
    isInternal: true,
  },
  projects: {
    title: 'Projects',
    icon: projects,
    link: '/projects',
    isInternal: true,
    disabled: true,
    text: '-soon-',
  },
  cv: {
    title: 'Download CV',
    icon: cv,
    link: '/documents/Angel-Larreal-Software-Developer.pdf',
    text: 'PDF',
  },
  linkedin: {
    title: 'Linkedin',
    icon: linkedin,
    link: 'https://www.linkedin.com/in/angel-larreal-9a7973117/',
    text: 'Angel Larreal',
  },
  github: {
    title: 'Github',
    icon: github,
    link: 'https://github.com/anhelldev',
    text: '@anhelldev',
  },
  instagram: {
    title: 'Instagram',
    icon: instagram,
    link: 'https://www.instagram.com/anhelldev/',
    text: '@anhelldev',
  },
}

export default LINKS
