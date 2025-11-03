import { ArrowLeft, Wind, Zap, Droplets, Lightbulb, Globe, Factory, Recycle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import activity1Image from "@/assets/WhatsApp Image 2025-11-03 at 21.10.07_fe4ffc2c.jpg";

const Activity1 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary-light/5 via-emerald-50/20 to-background dark:via-emerald-950/10">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <Link to="/">
          <Button variant="ghost" className="mb-8 group">
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Button>
        </Link>

        <div className="animate-in fade-in slide-in-from-bottom duration-700">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-primary via-emerald-600 to-teal-500 bg-clip-text text-transparent">
              Hybrid Renewable Energy System
          </h1>
            <p className="text-lg text-muted-foreground">
              Combining Biogas and Wind Energy for Sustainable Power Generation
            </p>
          </div>
          
          {/* Objective Card */}
          <Card className="mb-6 bg-gradient-to-br from-card to-emerald-50/30 dark:to-emerald-950/20 border-primary/30 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Lightbulb className="h-6 w-6 text-primary" />
              Objective
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed text-base">
                Design a hybrid renewable energy system combining Biogas and Wind Energy to power a rural health clinic, ensuring reliable electricity supply for critical medical equipment and lighting. This integrated approach maximizes energy availability while minimizing environmental impact and operational costs.
              </p>
            </CardContent>
          </Card>

          {/* Source of Energy */}
          <Card className="mb-6 bg-gradient-to-br from-card to-primary/5 border-primary/30 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Globe className="h-6 w-6 text-emerald-600" />
                Source of Energy
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-emerald-50/50 dark:bg-emerald-950/30 border border-emerald-200/50">
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <Recycle className="h-5 w-5 text-emerald-600" />
                    Biogas Source
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Organic waste materials including agricultural residues, animal manure, food waste, and human waste. These biodegradable materials are collected and fed into an anaerobic digester where microorganisms break them down in the absence of oxygen, producing methane-rich biogas.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-blue-50/50 dark:bg-blue-950/30 border border-blue-200/50">
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <Wind className="h-5 w-5 text-blue-600" />
                    Wind Energy Source
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Natural wind flow driven by atmospheric pressure differences and solar radiation. Wind turbines capture kinetic energy from moving air masses, converting it into mechanical rotation that drives electrical generators. Wind is a renewable, abundant, and freely available resource.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Conversion Process */}
          <Card className="mb-6 bg-gradient-to-br from-card to-teal-50/30 dark:to-teal-950/20 border-primary/30 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Zap className="h-6 w-6 text-teal-600" />
                Conversion Process
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <Recycle className="h-5 w-5 text-emerald-600" />
                    Biogas Conversion Pathway
                  </h3>
                  <ol className="list-decimal list-inside space-y-2 text-muted-foreground ml-4">
                    <li><strong className="text-foreground">Feedstock Preparation:</strong> Organic waste is collected, sorted, and pre-processed to remove non-biodegradable materials.</li>
                    <li><strong className="text-foreground">Anaerobic Digestion:</strong> Waste is fed into sealed digesters where bacteria decompose organic matter, producing biogas (60-70% methane, 30-40% CO₂).</li>
                    <li><strong className="text-foreground">Gas Cleaning:</strong> Biogas is scrubbed to remove hydrogen sulfide, moisture, and impurities.</li>
                    <li><strong className="text-foreground">Combustion:</strong> Clean biogas is burned in an internal combustion engine or gas turbine, generating mechanical energy.</li>
                    <li><strong className="text-foreground">Power Generation:</strong> Mechanical energy drives a generator producing AC electricity.</li>
                  </ol>
                </div>
                <Separator />
                <div>
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <Wind className="h-5 w-5 text-blue-600" />
                    Wind Energy Conversion Pathway
                  </h3>
                  <ol className="list-decimal list-inside space-y-2 text-muted-foreground ml-4">
                    <li><strong className="text-foreground">Wind Capture:</strong> Rotor blades intercept wind flow, converting kinetic energy into rotational motion.</li>
                    <li><strong className="text-foreground">Mechanical Transmission:</strong> Rotor spins a gearbox or direct drive system, increasing rotational speed.</li>
                    <li><strong className="text-foreground">Electrical Generation:</strong> High-speed rotation drives a synchronous or asynchronous generator, producing AC electricity.</li>
                    <li><strong className="text-foreground">Power Conditioning:</strong> Generated AC is regulated and synchronized with the grid or load requirements.</li>
                  </ol>
                </div>
                <Separator />
                <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <h3 className="font-semibold mb-2">Hybrid Integration System</h3>
                  <p className="text-sm text-muted-foreground">
                    Both energy sources are connected to a common DC bus through rectifiers. A battery bank stores excess energy and provides backup during low generation periods. An intelligent power management system automatically switches between sources based on availability, ensuring continuous power supply to the health clinic.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* System Components */}
          <Card className="mb-6 bg-gradient-to-br from-card to-secondary/30 border-primary/30 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">System Components</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent/50 transition-colors">
                  <Recycle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Biogas Digester</p>
                    <p className="text-sm text-muted-foreground">Anaerobic digestion unit for organic waste conversion</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent/50 transition-colors">
                  <Wind className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Wind Turbine</p>
                    <p className="text-sm text-muted-foreground">Horizontal or vertical axis turbine for wind capture</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent/50 transition-colors">
                  <Zap className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Battery Storage System</p>
                    <p className="text-sm text-muted-foreground">Lithium-ion or lead-acid batteries for energy backup</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent/50 transition-colors">
                  <Droplets className="h-5 w-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Inverter System</p>
                    <p className="text-sm text-muted-foreground">DC to AC conversion and power conditioning</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent/50 transition-colors">
                  <Factory className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Gas Engine/Generator</p>
                    <p className="text-sm text-muted-foreground">Biogas-powered generator for electricity production</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent/50 transition-colors">
                  <Lightbulb className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Load Management Panel</p>
                    <p className="text-sm text-muted-foreground">Distribution and load balancing system</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Output Utilization */}
          <Card className="mb-6 bg-gradient-to-br from-card to-emerald-50/30 dark:to-emerald-950/20 border-primary/30 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Droplets className="h-6 w-6 text-emerald-600" />
                Output Utilization
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 rounded-lg bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-950/30 dark:to-pink-950/30 border border-red-200/50">
                  <h3 className="font-semibold mb-2 text-foreground">Critical Medical Equipment</h3>
                  <p className="text-sm text-muted-foreground">
                    Power for refrigerators storing vaccines and medicines, X-ray machines, ultrasound devices, ventilators, and monitoring equipment requiring 24/7 operation.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-950/30 dark:to-amber-950/30 border border-yellow-200/50">
                  <h3 className="font-semibold mb-2 text-foreground">Lighting & HVAC</h3>
                  <p className="text-sm text-muted-foreground">
                    Illumination for examination rooms, corridors, and emergency areas. Climate control systems for maintaining optimal temperature and air quality.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 border border-blue-200/50">
                  <h3 className="font-semibold mb-2 text-foreground">Support Systems</h3>
                  <p className="text-sm text-muted-foreground">
                    Communication equipment, water pumps, sterilization units, and administrative office equipment essential for clinic operations.
                  </p>
                </div>
              </div>
              <div className="mt-4 p-4 rounded-lg bg-primary/5 border border-primary/20">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Total Power Capacity:</strong> Typically ranges from 10-50 kW depending on clinic size. The hybrid system ensures redundancy - when wind is low, biogas provides backup, and vice versa, maintaining continuous operation.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Real World Relevance */}
          <Card className="mb-6 bg-gradient-to-br from-card to-teal-50/30 dark:to-teal-950/20 border-primary/30 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Globe className="h-6 w-6 text-teal-600" />
                Real World Relevance
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Hybrid renewable energy systems combining biogas and wind power are increasingly deployed in rural and remote areas worldwide, particularly in developing regions where grid connectivity is limited or unreliable.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-emerald-50/50 dark:bg-emerald-950/30 border border-emerald-200/50">
                  <h3 className="font-semibold mb-2 text-foreground">Global Applications</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Rural health centers in Sub-Saharan Africa</li>
                    <li>• Remote villages in India and Southeast Asia</li>
                    <li>• Island communities with limited grid access</li>
                    <li>• Agricultural farms with abundant organic waste</li>
            </ul>
                </div>
                <div className="p-4 rounded-lg bg-blue-50/50 dark:bg-blue-950/30 border border-blue-200/50">
                  <h3 className="font-semibold mb-2 text-foreground">Economic Impact</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Reduces operational costs by 40-60% vs diesel</li>
                    <li>• Creates local jobs in waste management</li>
                    <li>• Improves healthcare accessibility in rural areas</li>
                    <li>• Payback period typically 5-8 years</li>
            </ul>
          </div>
              </div>

              <div className="p-4 rounded-lg bg-amber-50/50 dark:bg-amber-950/30 border border-amber-200/50">
                <h3 className="font-semibold mb-2 text-foreground">Environmental Benefits</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  This system significantly reduces greenhouse gas emissions by preventing methane release from waste decomposition and displacing fossil fuel consumption. A typical 20 kW hybrid system can offset approximately 50-70 tons of CO₂ annually while providing sustainable waste management solutions for rural communities.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* System Diagram */}
          <Card className="bg-gradient-to-br from-card to-secondary/30 border-primary/30 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl">System Diagram</CardTitle>
              <CardDescription>Complete hybrid energy system architecture</CardDescription>
            </CardHeader>
            <CardContent>
            <img
              src={activity1Image}
              alt="Hybrid renewable energy system diagram showing biogas and wind energy integration"
                className="w-full h-auto rounded-lg shadow-lg border border-primary/20"
            />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Activity1;
