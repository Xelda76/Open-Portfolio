import { ArrowLeft, Waves, Zap, Droplets, Lightbulb, Globe, Thermometer, Factory, Fish } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
// ...existing code...
import activity3Image from "@/assets/WhatsApp Image 2025-11-03 at 21.10.22_209fa46b.jpg";
// ...existing code...

const Activity3 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary-light/5 via-blue-50/20 to-background dark:via-blue-950/10">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <Link to="/">
          <Button variant="ghost" className="mb-8 group">
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Button>
        </Link>

        <div className="animate-in fade-in slide-in-from-bottom duration-700">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-primary via-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Ocean Thermal Energy Conversion (OTEC) System
          </h1>
            <p className="text-lg text-muted-foreground">
              Harnessing Ocean Temperature Gradients for Clean Energy and Freshwater
            </p>
          </div>
          
          {/* Objective Card */}
          <Card className="mb-6 bg-gradient-to-br from-card to-blue-50/30 dark:to-blue-950/20 border-primary/30 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Lightbulb className="h-6 w-6 text-primary" />
              Objective
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed text-base">
                Develop the block diagram of an Ocean Thermal Energy Conversion (OTEC) system for electricity production and freshwater generation, utilizing the temperature difference between warm surface water and cold deep ocean water. OTEC represents a sustainable solution for tropical coastal regions, providing both clean energy and potable water while operating continuously without fuel consumption.
              </p>
            </CardContent>
          </Card>

          {/* Source of Energy */}
          <Card className="mb-6 bg-gradient-to-br from-card to-primary/5 border-primary/30 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Waves className="h-6 w-6 text-blue-600" />
                Source of Energy
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                OTEC exploits the natural temperature gradient in tropical and subtropical oceans, where solar energy creates a significant thermal difference between surface and deep waters.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-orange-50/50 dark:bg-orange-950/30 border border-orange-200/50">
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <Thermometer className="h-5 w-5 text-orange-600" />
                    Warm Surface Water
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-2">
                    Surface ocean water in tropical regions (between 25°N and 25°S latitudes) maintains temperatures of 25-30°C year-round. This warm layer (0-50m depth) is heated by direct solar radiation and contains vast thermal energy reserves.
                  </p>
                  <p className="text-xs text-muted-foreground">
                    <strong>Temperature Range:</strong> 25-30°C | <strong>Depth:</strong> 0-50 meters
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-cyan-50/50 dark:bg-cyan-950/30 border border-cyan-200/50">
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <Droplets className="h-5 w-5 text-cyan-600" />
                    Cold Deep Water
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-2">
                    Deep ocean water below the thermocline (typically 800-1000m depth) remains at consistently cold temperatures of 4-7°C due to limited solar penetration and upwelling from polar regions. This cold reservoir provides the necessary heat sink for efficient energy conversion.
                  </p>
                  <p className="text-xs text-muted-foreground">
                    <strong>Temperature Range:</strong> 4-7°C | <strong>Depth:</strong> 800-1000 meters
                  </p>
                </div>
              </div>
              <div className="p-4 rounded-lg bg-blue-50/50 dark:bg-blue-950/30 border border-blue-200/50">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Temperature Differential:</strong> A minimum 20°C difference between warm and cold water is required for efficient OTEC operation. Tropical oceans provide ideal conditions with temperature gradients of 20-24°C, enabling continuous power generation 24/7, 365 days per year.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Conversion Process */}
          <Card className="mb-6 bg-gradient-to-br from-card to-cyan-50/30 dark:to-cyan-950/20 border-primary/30 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Zap className="h-6 w-6 text-cyan-600" />
                Conversion Process
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-3">Closed-Cycle OTEC Process</h3>
                  <ol className="list-decimal list-inside space-y-3 text-muted-foreground ml-4">
                    <li><strong className="text-foreground">Warm Water Intake:</strong> Surface water (25-30°C) is pumped through large-diameter pipes (5-10m diameter) from depths of 20-50m into the OTEC facility. Flow rates can reach 100-400 m³/s for a 1 MW plant.</li>
                    <li><strong className="text-foreground">Evaporation (Heat Addition):</strong> Warm seawater flows through a heat exchanger (evaporator), transferring thermal energy to a low-boiling-point working fluid (ammonia, R-134a, or R-717). The working fluid vaporizes at temperatures around 15-20°C under reduced pressure.</li>
                    <li><strong className="text-foreground">Turbine Expansion:</strong> High-pressure vapor (working fluid) expands through a turbine, converting thermal energy to mechanical rotation. Turbine speeds reach 3,000-6,000 RPM depending on design.</li>
                    <li><strong className="text-foreground">Electrical Generation:</strong> Turbine rotation drives a generator, producing AC electricity. Power output ranges from 1-100 MW per OTEC unit, with larger systems under development.</li>
                    <li><strong className="text-foreground">Condensation (Heat Rejection):</strong> Exhausted working fluid vapor flows to a condenser where cold deep seawater (4-7°C) extracts heat, causing the working fluid to condense back to liquid state. This completes the thermodynamic cycle.</li>
                    <li><strong className="text-foreground">Cold Water Intake & Discharge:</strong> Cold water is pumped from 800-1000m depth through insulated pipes. After heat exchange, both warm and cold water are discharged at intermediate depths (50-100m) to minimize environmental impact.</li>
                  </ol>
                </div>
                <Separator />
                <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <h3 className="font-semibold mb-2">Open-Cycle OTEC (Alternative)</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    In open-cycle systems, warm seawater itself is flash-evaporated under vacuum (3 kPa pressure), producing low-pressure steam that drives a turbine. The steam is then condensed using cold seawater, producing desalinated freshwater as a valuable byproduct.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Efficiency:</strong> Closed-cycle OTEC achieves 3-5% thermal efficiency, while open-cycle reaches 2-3% but provides freshwater. System efficiency is low due to small temperature differences, but continuous operation and zero fuel costs make it economically viable in suitable locations.
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
                  <Waves className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Warm Water Intake System</p>
                    <p className="text-sm text-muted-foreground">Large-diameter pipes and pumps for surface water extraction</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent/50 transition-colors">
                  <Droplets className="h-5 w-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Cold Water Intake System</p>
                    <p className="text-sm text-muted-foreground">Deep-water pipes (800-1000m) with high-pressure pumps</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent/50 transition-colors">
                  <Thermometer className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Evaporator Heat Exchanger</p>
                    <p className="text-sm text-muted-foreground">Titanium or aluminum heat exchangers for warm water</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent/50 transition-colors">
                  <Thermometer className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Condenser Heat Exchanger</p>
                    <p className="text-sm text-muted-foreground">Cold water heat exchangers for vapor condensation</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent/50 transition-colors">
                  <Factory className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Turbine-Generator Assembly</p>
                    <p className="text-sm text-muted-foreground">Axial flow turbine with synchronous generator</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent/50 transition-colors">
                  <Droplets className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Working Fluid System</p>
                    <p className="text-sm text-muted-foreground">Ammonia or R-134a closed-loop circulation</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent/50 transition-colors">
                  <Droplets className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Desalination Unit</p>
                    <p className="text-sm text-muted-foreground">Freshwater production from open-cycle systems</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent/50 transition-colors">
                  <Globe className="h-5 w-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Power Transmission</p>
                    <p className="text-sm text-muted-foreground">Submarine cables for onshore grid connection</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Output Utilization */}
          <Card className="mb-6 bg-gradient-to-br from-card to-blue-50/30 dark:to-blue-950/20 border-primary/30 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Zap className="h-6 w-6 text-blue-600" />
                Output Utilization
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-950/30 dark:to-amber-950/30 border border-yellow-200/50">
                    <h3 className="font-semibold mb-2 text-foreground flex items-center gap-2">
                      <Zap className="h-5 w-5 text-yellow-600" />
                      Electricity Generation
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      OTEC plants generate continuous baseload electricity suitable for grid integration:
                    </p>
                    <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                      <li>• Continuous 24/7 power output</li>
                      <li>• Capacity factors of 80-90%</li>
                      <li>• Grid-stable AC electricity</li>
                      <li>• Typical output: 1-100 MW per unit</li>
                    </ul>
                  </div>
                  <div className="p-4 rounded-lg bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/30 dark:to-blue-950/30 border border-cyan-200/50">
                    <h3 className="font-semibold mb-2 text-foreground flex items-center gap-2">
                      <Droplets className="h-5 w-5 text-cyan-600" />
                      Freshwater Production
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Open-cycle OTEC produces desalinated water as valuable byproduct:
                    </p>
                    <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                      <li>• Pure distilled water (0-100 ppm TDS)</li>
                      <li>• Production: 4,500 L per MWh</li>
                      <li>• Dual-purpose systems maximize value</li>
                      <li>• Critical for island communities</li>
                    </ul>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-lg bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border border-green-200/50">
                    <h3 className="font-semibold mb-2 text-foreground flex items-center gap-2">
                      <Fish className="h-5 w-5 text-green-600" />
                      Aquaculture
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Nutrient-rich deep seawater supports fish farming, seaweed cultivation, and marine biotechnology applications.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 border border-purple-200/50">
                    <h3 className="font-semibold mb-2 text-foreground flex items-center gap-2">
                      <Thermometer className="h-5 w-5 text-purple-600" />
                      Air Conditioning
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Cold deep water provides efficient district cooling systems for coastal buildings and resorts.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-gradient-to-br from-indigo-50 to-violet-50 dark:from-indigo-950/30 dark:to-violet-950/30 border border-indigo-200/50">
                    <h3 className="font-semibold mb-2 text-foreground flex items-center gap-2">
                      <Factory className="h-5 w-5 text-indigo-600" />
                      Industrial Uses
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Power for data centers, desalination plants, and manufacturing facilities in tropical coastal areas.
                    </p>
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Example Output:</strong> A 10 MW OTEC plant can power approximately 8,000-10,000 homes continuously while producing 45,000 liters of freshwater per hour, making it ideal for tropical island nations with limited freshwater resources.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Real World Relevance */}
          <Card className="mb-6 bg-gradient-to-br from-card to-cyan-50/30 dark:to-cyan-950/20 border-primary/30 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Globe className="h-6 w-6 text-cyan-600" />
                Real World Relevance
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                OTEC technology offers unique advantages for tropical island nations and coastal regions, providing both clean energy and freshwater while operating continuously without fuel requirements.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-blue-50/50 dark:bg-blue-950/30 border border-blue-200/50">
                  <h3 className="font-semibold mb-2 text-foreground">Operational & Pilot Projects</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• <strong>Japan:</strong> Kumejima 100 kW pilot plant (2013-present)</li>
                    <li>• <strong>Hawaii (USA):</strong> NELHA 100 kW system, Makai Ocean Engineering 105 kW</li>
                    <li>• <strong>Martinique (France):</strong> 10 MW project under development</li>
                    <li>• <strong>China:</strong> 15 kW demonstration plant in South China Sea</li>
                    <li>• <strong>India:</strong> 1 MW pilot plant planned in Lakshadweep</li>
                  </ul>
                </div>
                <div className="p-4 rounded-lg bg-green-50/50 dark:bg-green-950/30 border border-green-200/50">
                  <h3 className="font-semibold mb-2 text-foreground">Ideal Applications</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Small island nations (Hawaii, Caribbean, Pacific)</li>
                    <li>• Remote coastal communities</li>
                    <li>• Offshore platforms and research stations</li>
                    <li>• Tropical tourist resorts</li>
                    <li>• Military bases in tropical regions</li>
            </ul>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-emerald-50/50 dark:bg-emerald-950/30 border border-emerald-200/50">
                <h3 className="font-semibold mb-2 text-foreground">Economic & Environmental Benefits</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium mb-1 text-foreground">Economic Advantages:</p>
                    <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                      <li>• Zero fuel costs (operational cost: $0.15-0.25/kWh)</li>
                      <li>• Long lifespan (25-30 years)</li>
                      <li>• Revenue from electricity + freshwater + aquaculture</li>
                      <li>• Reduces dependence on imported diesel</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-1 text-foreground">Environmental Impact:</p>
                    <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                      <li>• Zero carbon emissions during operation</li>
                      <li>• Minimal visual impact (submerged components)</li>
                      <li>• Positive impact on marine ecosystems (nutrients)</li>
                      <li>• Reduces greenhouse gas emissions vs fossil fuels</li>
            </ul>
          </div>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-amber-50/50 dark:bg-amber-950/30 border border-amber-200/50">
                <h3 className="font-semibold mb-2 text-foreground">Future Potential & Challenges</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                  OTEC has enormous global potential, with an estimated 10,000 GW of accessible resource in tropical oceans. However, high initial capital costs ($15,000-25,000 per kW) and complex engineering for deep-water infrastructure remain challenges.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Technology Trends:</strong> Floating OTEC platforms, hybrid systems with solar/wind, and integrated multi-product facilities (power + water + cooling + aquaculture) are emerging to improve economics. As technology matures and scales up, OTEC could become a cornerstone of sustainable development for tropical island nations.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* System Diagram */}
          <Card className="bg-gradient-to-br from-card to-secondary/30 border-primary/30 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl">System Block Diagram</CardTitle>
              <CardDescription>Complete OTEC system architecture and process flow</CardDescription>
            </CardHeader>
            <CardContent>
            <img
              src={activity3Image}
              alt="OTEC system block diagram showing water intakes, heat exchangers, and power generation"
                className="w-full h-auto rounded-lg shadow-lg border border-primary/20"
            />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Activity3;
