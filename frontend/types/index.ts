export interface Project {
  id: number
  title: string
  description: string
  techStack: string[]
  githubUrl?: string
  liveUrl?: string
  imageUrl?: string
}

export interface Skill {
  // id: number
  name: string
  category: 'Backend' | 'Frontend' | 'Database' | 'DevOps'
  level?: number
}

export interface ContactForm {
  name: string
  email: string
  message: string
}