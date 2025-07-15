import { GraduationCap, MapPin, Users, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const education = [
    {
      degree: 'MSc Degree',
      institution: 'École de Technologie Supérieure, Montreal',
      period: 'May 2024 – May 2025',
      status: 'Current'
    },
    {
      degree: 'Engineering in Signals & Systems',
      institution: 'École Polytechnique de Tunisie',
      period: '2020 – 2023',
      status: 'Completed'
    },
    {
      degree: 'Preparatory Institute',
      institution: 'Tunisia',
      period: '2018 – 2020',
      status: 'Top 5%'
    }
  ];

  const community = [
    {
      role: 'Chairman',
      organization: 'NATEG EPT Chapter',
      period: '2021–2022',
      icon: Users
    },
    {
      role: 'Member',
      organization: 'ACM EPT',
      period: '2020–2021',
      icon: Users
    }
  ];

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Me
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              AI Research Assistant at REMI and MSc student at ÉTS, Montreal. Passionate about AI, 
              machine learning, data engineering, and wireless communication. Multilingual 
              (Arabic, French, English) and experienced in research-driven roles across 
              academic and industry settings.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Education Section */}
            <div className="space-y-8">
              <div className="flex items-center mb-8">
                <GraduationCap className="h-8 w-8 text-primary mr-4" />
                <h3 className="text-2xl font-bold text-foreground">Education</h3>
              </div>

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <Card key={index} className="card-glass hover-lift">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="font-semibold text-lg text-foreground">
                          {edu.degree}
                        </h4>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          edu.status === 'Current' 
                            ? 'bg-primary/10 text-primary' 
                            : edu.status === 'Top 5%'
                            ? 'bg-accent/10 text-accent'
                            : 'bg-muted text-muted-foreground'
                        }`}>
                          {edu.status}
                        </span>
                      </div>
                      <p className="text-muted-foreground mb-2 flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        {edu.institution}
                      </p>
                      <p className="text-sm text-muted-foreground flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        {edu.period}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Community Involvement Section */}
            <div className="space-y-8">
              <div className="flex items-center mb-8">
                <Users className="h-8 w-8 text-primary mr-4" />
                <h3 className="text-2xl font-bold text-foreground">Community Involvement</h3>
              </div>

              <div className="space-y-6">
                {community.map((item, index) => (
                  <Card key={index} className="card-glass hover-lift">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-3">
                        <item.icon className="h-6 w-6 text-primary mr-3" />
                        <h4 className="font-semibold text-lg text-foreground">
                          {item.role}
                        </h4>
                      </div>
                      <p className="text-muted-foreground mb-2">
                        {item.organization}
                      </p>
                      <p className="text-sm text-muted-foreground flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        {item.period}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Languages & Skills */}
              <Card className="card-glass">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg text-foreground mb-4">
                    Languages
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {['Arabic', 'French', 'English'].map((lang) => (
                      <span
                        key={lang}
                        className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;