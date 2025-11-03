import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface ActivityCardProps {
  title: string;
  description: string;
  link: string;
  index: number;
}

export function ActivityCard({ title, description, link, index }: ActivityCardProps) {
  const gradientColors = [
    "from-primary/10 via-emerald-50/50 to-teal-50/30 dark:from-primary/20 dark:via-emerald-900/10 dark:to-teal-900/10",
    "from-emerald-50/50 via-teal-50/30 to-cyan-50/30 dark:from-emerald-900/10 dark:via-teal-900/10 dark:to-cyan-900/10",
    "from-teal-50/50 via-cyan-50/30 to-primary/10 dark:from-teal-900/10 dark:via-cyan-900/10 dark:to-primary/20",
  ];
  
  return (
    <Link to={link} className="group block h-full">
      <Card 
        className={`h-full bg-gradient-to-br ${gradientColors[index % 3]} border-2 border-primary/20 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 transform hover:-translate-y-1`}
        style={{ animationDelay: `${index * 100}ms` }}
      >
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center justify-between text-lg font-bold text-primary group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
            {title}
            <ArrowRight className="h-5 w-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-muted-foreground leading-relaxed text-sm">
            {description}
          </CardDescription>
        </CardContent>
      </Card>
    </Link>
  );
}
