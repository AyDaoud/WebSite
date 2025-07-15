import { Brain, Database, Eye, Radio, Cpu, BarChart3 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Portfolio = () => {
  const skills = [
    {
      category: 'Computer Vision',
      icon: Eye,
      description: 'Deep learning models for image processing and analysis',
      technologies: ['OpenCV', 'TensorFlow', 'PyTorch', 'YOLO', 'CNNs'],
      color: 'text-blue-600'
    },
    {
      category: 'Reinforcement Learning',
      icon: Brain,
      description: 'Intelligent agents and decision-making systems',
      technologies: ['DQN', 'Policy Gradients', 'Actor-Critic', 'Multi-Agent RL'],
      color: 'text-purple-600'
    },
    {
      category: 'Data Engineering & SQL',
      icon: Database,
      description: 'Data pipeline design and database optimization',
      technologies: ['PostgreSQL', 'ETL', 'Apache Spark', 'Data Warehousing'],
      color: 'text-green-600'
    },
    {
      category: 'Signal Processing',
      icon: Radio,
      description: 'Wireless communication and signal analysis',
      technologies: ['MATLAB', 'DSP', 'Communication Systems', 'MIMO'],
      color: 'text-orange-600'
    },
    {
      category: 'Machine Learning',
      icon: Cpu,
      description: 'End-to-end ML solutions and model deployment',
      technologies: ['Scikit-learn', 'LangChain', 'Google PaLM', 'MLOps'],
      color: 'text-red-600'
    },
    {
      category: 'Data Analytics',
      icon: BarChart3,
      description: 'Statistical analysis and business intelligence',
      technologies: ['Python', 'R', 'Tableau', 'Portfolio Optimization'],
      color: 'text-teal-600'
    }
  ];

  return (
    <section id="portfolio" className="section-padding bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              My Expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Specialized skills across AI, machine learning, and data science domains
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <Card key={index} className="card-glass hover-lift group">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 mr-4`}>
                      <skill.icon className={`h-6 w-6 ${skill.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {skill.category}
                    </h3>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {skill.description}
                  </p>

                  <div className="space-y-2">
                    <h4 className="font-medium text-foreground text-sm">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {skill.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium hover:bg-primary/20 transition-colors duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Stats or Highlights */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient mb-2">5+</div>
              <p className="text-muted-foreground">Years of Experience</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient mb-2">20+</div>
              <p className="text-muted-foreground">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient mb-2">3</div>
              <p className="text-muted-foreground">Research Publications</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;