import { Users, TrendingUp, Calendar, Award } from 'lucide-react';

const ExtracurricularSection = () => {
  const activities = [
    {
      title: "President, Culture Club",
      description: "Led the organization of 20+ cultural events, enhancing student engagement",
      icon: Users,
      achievements: ["Event Leadership", "Team Management", "Student Engagement"]
    },
    {
      title: "Treasurer, Rotary Club", 
      description: "Participated in community outreach programs and collaborated",
      icon: TrendingUp,
      achievements: ["Budget Management", "Financial Planning", "Community Outreach"]
    }
  ];

  return (
    <section id="extracurricular" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-gradient">Leadership</span> & Activities
          </h2>
          <p className="text-xl text-muted-foreground">
            Building communities and making an impact
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="glass-card group hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-4 mb-4">
                <activity.icon className="h-10 w-10 text-primary mt-2" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">{activity.title}</h3>
                  <p className="text-muted-foreground">{activity.description}</p>
                </div>
              </div>
              <div className="space-y-2">
                {activity.achievements.map((achievement, idx) => (
                  <div
                    key={idx}
                    className="text-sm text-muted-foreground bg-background/50 rounded-full px-3 py-1 inline-block mr-2"
                  >
                    {achievement}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Activity Image */}
        <div className="glass-card text-center">
          <h3 className="text-2xl font-semibold mb-6 text-accent-gradient">Event Highlights</h3>
          <div className="relative max-w-md mx-auto">
            <div className="relative w-full h-80 rounded-lg overflow-hidden">
              <img
                src="/lovable-uploads/dd2de082-3980-4f66-8eb6-3292c3cf52d7.png"
                alt="Club Event - Leadership in Action"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-sm font-medium">Leadership in Action</p>
                <p className="text-xs opacity-90">Culture Club Event</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExtracurricularSection;