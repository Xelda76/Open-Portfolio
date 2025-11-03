import { ActivityCard } from "@/components/ActivityCard";

const activities = [
  {
    title: "Activity 1: Hybrid Energy System",
    description: "Design a hybrid renewable energy system combining Biogas and Wind Energy to power a rural health clinic.",
    link: "/activity-1",
  },
  {
    title: "Activity 2: Geothermal Power Plant",
    description: "Design a geothermal power plant system for electricity generation in a region with hot water wells.",
    link: "/activity-2",
  },
  {
    title: "Activity 3: OTEC System",
    description: "Develop the block diagram of an Ocean Thermal Energy Conversion (OTEC) system for electricity production and freshwater generation.",
    link: "/activity-3",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary-light/5 via-emerald-50/20 to-background dark:via-emerald-950/10">
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom duration-700">
          <div className="inline-block mb-6">
            <div className="flex items-center justify-center gap-2 text-2xl mb-2">
              <span className="text-emerald-600">🌱</span>
              <span className="text-primary font-semibold">Clean & Green Energy</span>
              <span className="text-emerald-600">🌱</span>
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-emerald-600 to-teal-500 bg-clip-text text-transparent">
            Renewable Energy Systems
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Exploring Sustainable Energy Solutions for a Cleaner Future
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity, index) => (
            <ActivityCard
              key={activity.link}
              title={activity.title}
              description={activity.description}
              link={activity.link}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
