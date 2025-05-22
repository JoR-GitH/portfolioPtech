import React from 'react'
import {ExternalLink, Github} from "lucide-react";

const projects = [
    {
        id: 1,
        title:"Edition",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis eros quis justo tincidunt tincidunt.",
        image: "/projects/project1.png",
        tags: ["React", "Tailwind", "Next.js"],
        demoUrl: "#",
        githubUrl: "#",
    },
    {
        id: 2,
        title: "Best Made Co",
        description:
            "Interactive analytics dashboard with data visualization and filtering capabilities.",
        image: "/projects/project2.png",
        tags: ["TypeScript", "D3.js", "Next.js"],
        demoUrl: "#",
        githubUrl: "#",
    },
    {
        id: 3,
        title: "Guy Bourdin Portfolio",
        description:
            "Full-featured e-commerce platform with user authentication and payment processing.",
        image: "/projects/project3.png",
        tags: ["React", "Node.js", "Stripe"],
        demoUrl: "#",
        githubUrl: "#",
    },
]

const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Featured <span className="text-primary">Projects</span>
                </h2>
                <p className="text-center mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects. Each project was carefully crafted with attention
                    to detail, performance and user experience.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div key={key} className="group bg-card rounded-lg shadow-xs overflow-hidden card-hover">
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs font-medium rounded-full border">{tag}</span>
                                    ))}
                                </div>

                                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                                <p className="text-sm mb-4">{project.description}</p>
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <a
                                            href={project.demoUrl}
                                            target="_blank" rel="noreferrer"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300" >
                                            <ExternalLink size={20} />
                                        </a>
                                        <a
                                            href={project.githubUrl}
                                            target="_blank" rel="noreferrer"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        >
                                            <Github size={20} />
                                        </a>
                                    </div>
                            </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default ProjectsSection
