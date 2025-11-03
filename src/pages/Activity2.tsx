import { ArrowLeft, Mountain, Zap, Droplets, Lightbulb, Globe, Factory, Gauge } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import activity2Image from "@/assets/activity2.jpg";

const Activity2 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary-light/5 via-orange-50/20 to-background dark:via-orange-950/10">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <Link to="/">
          <Button variant="ghost" className="mb-8 group">
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Button>
        </Link>

        <div className="animate-in fade-in slide-in-from-bottom duration-700">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-primary via-orange-600 to-red-500 bg-clip-text text-transparent">
              Geothermal Power Plant System
          </h1>
            <p className="text-lg text-muted-foreground">
              Harnessing Earth's Internal Heat for Clean Electricity Generation
            </p>
          </div>
          
          {/* Objective Card */}
          <Card className="mb-6 bg-gradient-to-br from-card to-orange-50/30 dark:to-orange-950/20 border-primary/30 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Lightbulb className="h-6 w-6 text-primary" />
              Objective
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed text-base">
                Design a geothermal power plant system for electricity generation in a region with hot water wells, utilizing the Earth's natural heat to produce clean, sustainable energy. This system leverages subsurface thermal reservoirs to generate continuous baseload power with minimal environmental impact and high reliability.
              </p>
            </CardContent>
          </Card>

          {/* Source of Energy */}
          <Card className="mb-6 bg-gradient-to-br from-card to-primary/5 border-primary/30 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Mountain className="h-6 w-6 text-orange-600" />
                Source of Energy
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Geothermal energy originates from the Earth's core, where temperatures exceed 5,000°C. Heat continuously flows outward through the mantle and crust, creating geothermal reservoirs at accessible depths (1-3 km). These reservoirs contain:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-orange-50/50 dark:bg-orange-950/30 border border-orange-200/50">
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <Droplets className="h-5 w-5 text-orange-600" />
                    Hot Water Reservoirs
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Porous rock formations containing pressurized hot water (150-370°C) heated by underlying magma chambers or deep geological structures. These aquifers are accessed through production wells drilled to depths of 1,500-3,000 meters.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-red-50/50 dark:bg-red-950/30 border border-red-200/50">
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <Gauge className="h-5 w-5 text-red-600" />
                    Steam Reservoirs
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Dry or wet steam fields where water vaporizes under high pressure and temperature. Dry steam (180-300°C) can directly drive turbines, while flash steam systems use hot water that flashes to steam when pressure is reduced.
                  </p>
                </div>
              </div>
              <div className="p-4 rounded-lg bg-amber-50/50 dark:bg-amber-950/30 border border-amber-200/50">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Geological Requirements:</strong> Geothermal resources are typically found in volcanic regions, tectonic plate boundaries, or areas with high subsurface heat flow. Key indicators include hot springs, geysers, and recent volcanic activity.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Conversion Process */}
          <Card className="mb-6 bg-gradient-to-br from-card to-red-50/30 dark:to-red-950/20 border-primary/30 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Zap className="h-6 w-6 text-red-600" />
                Conversion Process
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-3">Geothermal Power Generation Cycle</h3>
                  <ol className="list-decimal list-inside space-y-3 text-muted-foreground ml-4">
                    <li><strong className="text-foreground">Resource Extraction:</strong> Production wells are drilled into geothermal reservoirs. High-pressure hot water/steam rises naturally or is pumped to the surface through insulated well casings.</li>
                    <li><strong className="text-foreground">Steam Separation (Flash System):</strong> Hot pressurized water is released into a flash tank where it instantly vaporizes into steam due to pressure reduction. Separators remove non-condensable gases (CO₂, H₂S).</li>
                    <li><strong className="text-foreground">Steam Expansion:</strong> Clean, high-pressure steam is directed to a steam turbine. Steam expands through turbine blades, causing rotation at speeds of 3,000-3,600 RPM.</li>
                    <li><strong className="text-foreground">Mechanical to Electrical:</strong> Turbine rotation drives a synchronous generator, producing three-phase AC electricity at standard grid frequencies (50/60 Hz).</li>
                    <li><strong className="text-foreground">Condensation:</strong> Exhausted steam is condensed back to water in a condenser using cooling towers or direct water cooling, creating vacuum that improves turbine efficiency.</li>
                    <li><strong className="text-foreground">Reinjection:</strong> Condensed water and any remaining geothermal fluid are pumped back into the reservoir through injection wells, maintaining reservoir pressure and sustainability.</li>
                  </ol>
                </div>
                <Separator />
                <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <h3 className="font-semibold mb-2">Binary Cycle System (For Lower Temperature)</h3>
                  <p className="text-sm text-muted-foreground">
                    For lower temperature resources (100-180°C), a binary cycle uses a secondary working fluid (like isobutane or pentane) with lower boiling points. Geothermal fluid heats the working fluid through a heat exchanger, vaporizing it to drive the turbine. This closed-loop system prevents exposure of working fluid to the reservoir.
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
                  <Mountain className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Production Wells</p>
                    <p className="text-sm text-muted-foreground">Deep wells (1.5-3km) for extracting hot water/steam</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent/50 transition-colors">
                  <Factory className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Steam Turbine</p>
                    <p className="text-sm text-muted-foreground">Multi-stage axial flow turbine for steam expansion</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent/50 transition-colors">
                  <Zap className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Generator</p>
                    <p className="text-sm text-muted-foreground">Synchronous generator (50-200 MW capacity)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent/50 transition-colors">
                  <Droplets className="h-5 w-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Condenser</p>
                    <p className="text-sm text-muted-foreground">Surface or air-cooled condenser for steam recovery</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent/50 transition-colors">
                  <Gauge className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Cooling Towers</p>
                    <p className="text-sm text-muted-foreground">Heat dissipation and cooling water management</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent/50 transition-colors">
                  <Mountain className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Injection Wells</p>
                    <p className="text-sm text-muted-foreground">Reinjection of cooled water to maintain reservoir</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent/50 transition-colors">
                  <Lightbulb className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Control Systems</p>
                    <p className="text-sm text-muted-foreground">Automated monitoring and power management</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent/50 transition-colors">
                  <Globe className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Grid Interface</p>
                    <p className="text-sm text-muted-foreground">Transformers and switchgear for power transmission</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Output Utilization */}
          <Card className="mb-6 bg-gradient-to-br from-card to-orange-50/30 dark:to-orange-950/20 border-primary/30 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Zap className="h-6 w-6 text-orange-600" />
                Output Utilization
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 border border-blue-200/50">
                  <h3 className="font-semibold mb-2 text-foreground">Electricity Generation</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Geothermal plants generate high-quality AC electricity suitable for direct grid integration:
                  </p>
                  <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                    <li>• <strong className="text-foreground">Baseload Power:</strong> Continuous 24/7 generation with 90-95% capacity factor</li>
                    <li>• <strong className="text-foreground">Grid Stability:</strong> Provides consistent frequency regulation and voltage control</li>
                    <li>• <strong className="text-foreground">Scalability:</strong> Single plants range from 5 MW to over 300 MW capacity</li>
                  </ul>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border border-green-200/50">
                    <h3 className="font-semibold mb-2 text-foreground">Industrial Applications</h3>
                    <p className="text-sm text-muted-foreground">
                      Power for manufacturing facilities, data centers, and heavy industries requiring stable, continuous electricity supply.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 border border-purple-200/50">
                    <h3 className="font-semibold mb-2 text-foreground">District Heating</h3>
                    <p className="text-sm text-muted-foreground">
                      Waste heat from power generation can be utilized for district heating systems, providing hot water and space heating to nearby communities.
                    </p>
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Typical Output:</strong> A 50 MW geothermal plant can power approximately 50,000 homes and operate continuously for 30-50 years with proper reservoir management.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Real World Relevance */}
          <Card className="mb-6 bg-gradient-to-br from-card to-red-50/30 dark:to-red-950/20 border-primary/30 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Globe className="h-6 w-6 text-red-600" />
                Real World Relevance
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Geothermal power is a mature, reliable renewable energy technology with significant global deployment, particularly in geologically active regions with accessible thermal reservoirs.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-orange-50/50 dark:bg-orange-950/30 border border-orange-200/50">
                  <h3 className="font-semibold mb-2 text-foreground">Global Deployment</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• <strong>Iceland:</strong> 30% of electricity, 90% of heating from geothermal</li>
                    <li>• <strong>USA:</strong> Largest installed capacity (~3.7 GW) in California, Nevada</li>
                    <li>• <strong>Philippines:</strong> 27% of electricity from geothermal (2nd globally)</li>
                    <li>• <strong>Kenya:</strong> 38% of electricity, growing to 50% by 2030</li>
                    <li>• <strong>Indonesia:</strong> 5% of electricity, targeting 7.2 GW by 2025</li>
                  </ul>
                </div>
                <div className="p-4 rounded-lg bg-blue-50/50 dark:bg-blue-950/30 border border-blue-200/50">
                  <h3 className="font-semibold mb-2 text-foreground">Economic Advantages</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Levelized cost of $0.05-0.10/kWh (competitive with fossil fuels)</li>
                    <li>• High capacity factor (90-95%) vs solar (20-30%) or wind (30-40%)</li>
                    <li>• Long plant lifespan (30-50 years with minimal degradation)</li>
                    <li>• Low fuel costs (no fuel required after initial drilling)</li>
                    <li>• Stable energy prices unaffected by fuel market volatility</li>
            </ul>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-emerald-50/50 dark:bg-emerald-950/30 border border-emerald-200/50">
                <h3 className="font-semibold mb-2 text-foreground">Environmental Impact</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                  Geothermal power generation has minimal environmental footprint compared to fossil fuel alternatives:
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                  <li>• <strong className="text-foreground">CO₂ Emissions:</strong> 38 g/kWh (vs 820 g/kWh for coal, 350 g/kWh for natural gas)</li>
                  <li>• <strong className="text-foreground">Land Use:</strong> Small footprint (~400 m² per MW vs 50,000 m² for solar farms)</li>
                  <li>• <strong className="text-foreground">Water Consumption:</strong> Minimal compared to thermal power plants</li>
                  <li>• <strong className="text-foreground">Air Quality:</strong> Negligible air pollution (only trace gases from reservoirs)</li>
            </ul>
          </div>

              <div className="p-4 rounded-lg bg-amber-50/50 dark:bg-amber-950/30 border border-amber-200/50">
                <h3 className="font-semibold mb-2 text-foreground">Future Potential</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Enhanced Geothermal Systems (EGS) technology enables power generation in areas without natural reservoirs by creating artificial fracture networks. This could expand geothermal potential to most continental regions. Global technical potential exceeds 200 GW, with developing countries in the "Ring of Fire" having the greatest opportunities for growth.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* System Diagram */}
          <Card className="bg-gradient-to-br from-card to-secondary/30 border-primary/30 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl">System Diagram</CardTitle>
              <CardDescription>Complete geothermal power plant architecture</CardDescription>
            </CardHeader>
            <CardContent>
            <img
              src={activity2Image}
              alt="Geothermal power plant system diagram showing wells, turbines, and cooling towers"
                className="w-full h-auto rounded-lg shadow-lg border border-primary/20"
            />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Activity2;
