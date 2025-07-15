import { MapPin, Calendar, Building } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Experience = () => {
  const experiences = [
    {
      title: "Graduate Research Assistant",
      company: "Resilient Machine Learning Institute",
      period: "Mai 2024 - Ongoing",
      location: "Montreal, Canada",
      description: "LLM, Reinforcement Learning, Optimization, Spectrum Sensing, Computer Vision",
      keyTerms: ["LLM", "Reinforcement Learning", "Optimization", "Spectrum Sensing", "Computer Vision"]
    },
    {
      title: "Data Analyst",
      company: "HUAWEI",
      period: "November 2023 - April 2024",
      location: "Tunis, Tunisia",
      description: "Develop Network planning use cases based on big data and SQL, such as user operation, 4G user migration, etc.",
      keyTerms: ["Radio Frequency Engineering", "Big Data", "SQL", "Linux", "Python"]
    },
    {
      title: "AI Research Intern",
      company: "KAUST",
      period: "February 2025 - July 2023",
      location: "Thuwal, Saudi Arabia",
      description: "Quantifying and mitigating the energy consumption associated with model inference across a range of GPUs.",
      keyTerms: ["Computer Vision", "NLP", "Recommendation System", "PyTorch", "Git", "Docker", "Linux", "AWS", "Optimization"]
    },
    {
      title: "Computer Vision Intern",
      company: "Biware Solution",
      period: "June 2022 - August 2022",
      location: "Tunis, Tunisia",
      description: "Fraud detection in KYC financial application by working in 4 different aspects: Face matching, Fake ID detection, OCR and spoofness recognition.",
      keyTerms: ["Machine Learning", "Deep Learning", "Computer Vision", "TensorFlow", "Git", "Docker", "Data pre-processing", "Data visualization"]
    }
  ];

  return (
    <section id="experience" className="section-padding bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Experience
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional journey across research and industry roles
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="card-glass hover-lift group relative">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    {/* Main Content */}
                    <div className="flex-1">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-3 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10">
                          <Building className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-foreground mb-1">
                            {exp.title}
                          </h3>
                          <p className="text-lg font-semibold text-primary mb-2">
                            {exp.company}
                          </p>
                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {exp.period}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              {exp.location}
                            </div>
                          </div>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Key Terms */}
                      <div className="space-y-2">
                        <h4 className="font-medium text-foreground text-sm">Key Terms:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.keyTerms.map((term, termIndex) => (
                            <span
                              key={termIndex}
                              className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium hover:bg-primary/20 transition-colors duration-200"
                            >
                              {term}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Timeline Indicator */}
                    <div className="hidden lg:flex flex-col items-center">
                      <div className="w-4 h-4 bg-primary rounded-full shadow-lg"></div>
                      {index < experiences.length - 1 && (
                        <div className="w-0.5 h-24 bg-gradient-to-b from-primary to-primary/20 mt-2"></div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;