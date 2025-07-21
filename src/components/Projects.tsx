import { ExternalLink, Github, Lightbulb, Smartphone, TrendingUp, Wifi } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: 'DRL for Power Allocation in Wireless Communication',
      description: 'Deep reinforcement learning model optimizing power allocation in wireless networks, improving signal quality and energy efficiency through intelligent resource management.',
      technologies: ['Python', 'Deep RL', 'TensorFlow', 'Wireless Networks', 'MATLAB'],
      icon: Wifi,
      category: 'Research',
      featured: true,
      repoUrl: 'https://github.com/AyDaoud/RL_Power_Allocation-or-Reinforcement-Learning-Power-Allocation'
    },
    {
      title: 'LLM Q&A System using Google PaLM & LangChain',
      description: 'Intelligent question-answering system leveraging large language models for natural language understanding and contextual response generation.',
      technologies: ['Python', 'LangChain', 'Google PaLM', 'NLP', 'API Integration'],
      icon: Lightbulb,
      category: 'AI/ML',
      featured: true,
      repoUrl: 'https://github.com/AyDaoud/LLM_langchain'
    },
    {
      title: 'Dynamic Portfolio Optimization',
      description: 'Algorithmic trading system using modern portfolio theory and machine learning for automated investment strategy optimization and risk management.',
      technologies: ['Python', 'Machine Learning', 'Financial Modeling', 'Optimization'],
      icon: TrendingUp,
      category: 'Finance',
      featured: true,
      repoUrl: 'https://github.com/AyDaoud/Portfolio-Optimization'
    },
    {
      title: 'Java-based Mobile Car Rental App',
      description: 'Full-stack mobile application for car rental services with user authentication, booking system, and real-time availability tracking.',
      technologies: ['Java', 'Android Studio', 'SQLite', 'REST API', 'Mobile UI/UX'],
      icon: Smartphone,
      category: 'Mobile Dev',
      featured: false,
      repoUrl: 'https://github.com/AyDaoud/Mobile-application-for-renting-cars'
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Research': 'bg-blue-100 text-blue-800',
      'AI/ML': 'bg-purple-100 text-purple-800',
      'Finance': 'bg-green-100 text-green-800',
      'Mobile Dev': 'bg-orange-100 text-orange-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <section id="projects" className="section-padding bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Showcasing innovative solutions across AI research, machine learning, and software development
            </p>
          </div>

          {/* Featured Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-8">Featured Work</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects
                .filter(project => project.featured)
                .map((project, index) => (
                  <Card key={index} className="card-glass hover-lift group h-full">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex items-center justify-between mb-4">
                        <div className="p-3 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10">
                          <project.icon className="h-6 w-6 text-primary" />
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(project.category)}`}>
                          {project.category}
                        </span>
                      </div>

                      <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-200">
                        {project.title}
                      </h3>

                      <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                        {project.description}
                      </p>

                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium text-foreground text-sm mb-2">Technologies:</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="flex gap-3 pt-2">
                          <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                            <Button size="sm" variant="outline" className="w-full">
                              <Github className="h-4 w-4 mr-2" />
                              Code
                            </Button>
                          </a>
                          <Button size="sm" className="flex-1">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Demo
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>

          {/* Other Projects */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8">Other Projects</h3>
            <div className="grid gap-6">
              {projects
                .filter(project => !project.featured)
                .map((project, index) => (
                  <Card key={index} className="card-glass hover-lift">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center gap-6">
                        <div className="flex items-center md:w-1/3">
                          <div className="p-3 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 mr-4">
                            <project.icon className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                              {project.title}
                            </h3>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(project.category)}`}>
                              {project.category}
                            </span>
                          </div>
                        </div>

                        <div className="md:w-1/2">
                          <p className="text-muted-foreground leading-relaxed">
                            {project.description}
                          </p>
                        </div>

                        <div className="md:w-1/6 flex justify-end gap-2">
                          <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                            <Button size="sm" variant="outline">
                              <Github className="h-4 w-4" />
                            </Button>
                          </a>
                          <Button size="sm">
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>

          {/* View More Projects CTA */}
          <div className="text-center mt-12">
            <Button
              onClick={() => window.open('https://github.com/AyDaoud', '_blank')}
              className="btn-hero"
            >
              <Github className="h-4 w-4 mr-2" />
              View All Projects on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
