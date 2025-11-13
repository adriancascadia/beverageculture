import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { APP_LOGO, APP_TITLE } from "@/const";
import { Droplets, Award, TrendingUp, Users, Search, Download, Store, Clock, Building2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function Home() {
  const [brandFilter, setBrandFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<"all" | "water" | "beverage">("all");

  const waterBrands = [
    "Perrier", "Evian", "San Pellegrino", "Poland Spring", "Mountain Valley",
    "Aqua Panna", "Volvic", "Badoit", "Apollinaris", "Gerolsteiner",
    "SPA", "Contrexevelle", "Clearly Canadian", "Orbitz", "Saratoga", "Deer Park"
  ];

  const beverageBrands = [
    "Martinelli's Apple Juice", "Orangina", "Welch's",
    "Old Tyme Soda", "SOHO Soda", "Nice and Natural"
  ];

  const allBrands = [...waterBrands, ...beverageBrands];

  const filteredBrands = allBrands.filter(brand => {
    const matchesSearch = brand.toLowerCase().includes(brandFilter.toLowerCase());
    const matchesCategory = 
      categoryFilter === "all" ||
      (categoryFilter === "water" && waterBrands.includes(brand)) ||
      (categoryFilter === "beverage" && beverageBrands.includes(brand));
    return matchesSearch && matchesCategory;
  });
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Droplets className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">Beverage Culture</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#origins" className="text-sm font-medium hover:text-primary transition-colors">Origins</a>
              <a href="#fred-sipper" className="text-sm font-medium hover:text-primary transition-colors">Fred Sipper</a>
              <a href="#timeline" className="text-sm font-medium hover:text-primary transition-colors">Timeline</a>
              <a href="#modern" className="text-sm font-medium hover:text-primary transition-colors">Modern Era</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/10 to-secondary/5"></div>
        <div className="container relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                The Surprisingly Long History of{" "}
                <span className="text-primary">Bottled Water</span> in America
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                From ancient Roman earthenware to Fred Sipper's revolutionary marketing that transformed bottled water into America's favorite beverage, discover the fascinating 250-year journey of an industry that changed how we drink.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="text-base" asChild>
                  <a href="#fred-sipper">Meet the Bottled Water King</a>
                </Button>
                <Button size="lg" variant="outline" className="text-base" asChild>
                  <a href="#timeline">Explore the Timeline</a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/vintage-bottle-1.jpg"
                  alt="Vintage mineral water bottle from the 1800s"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="absolute -top-6 -right-6 w-48 h-48 bg-accent/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">1767</div>
              <div className="text-sm md:text-base opacity-90">First Commercial Distribution</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">1960</div>
              <div className="text-sm md:text-base opacity-90">Fred Sipper Starts Revolution</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">1978</div>
              <div className="text-sm md:text-base opacity-90">Modern Industry Begins</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">2016</div>
              <div className="text-sm md:text-base opacity-90">Surpassed Soda Sales</div>
            </div>
          </div>
        </div>
      </section>

      {/* Fred Sipper - The Bottled Water King */}
      <section id="fred-sipper" className="py-16 md:py-24 bg-gradient-to-br from-accent/20 to-primary/10">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium mb-4">
              <Award className="h-4 w-4" />
              The Bottled Water King
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Fred Sipper: The Man Who Made America Drink Bottled Water
            </h2>
            <p className="text-lg text-muted-foreground">
              Smithsonian Magazine crowned him "The King of Bottled Water" for transforming a niche European product into America's most popular beverage through revolutionary marketing and sheer determination.
            </p>
          </div>

          {/* Main Fred Sipper Story */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative">
              <img
                src="/images/fred-sipper-perrier-cases.jpg"
                alt="Fred Sipper in front of Perrier case displays at Irving's Food Center"
                className="w-full rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-6 py-3 rounded-lg shadow-lg">
                <p className="text-sm font-semibold">Irving's Food Center, NYC</p>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="border-2 border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Store className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-3">The Beginning: Irving's Food Center (1960)</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Born in Karlsruhe, Germany in 1933, Fred Sipper moved to the Bronx as a child. In 1960, operating a small grocery store at 867 9th Avenue in New York City, Fred had a revolutionary idea: sell Perrier to attract his French clientele. What started as a simple marketing ploy would transform the entire American beverage industry.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">From Cases to Containers</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Fred began by purchasing cases of Perrier at a time. His bold move? Running full-page advertisements in The New York Times to promote both Perrier and Irving's Food Center. Soon he was selling pallets, then entire overseas containers shipped from France.
                  </p>
                  <div className="bg-muted/50 rounded-lg p-4 mb-4">
                    <p className="text-sm font-semibold mb-2">📰 New York Times, June 27, 1979</p>
                    <p className="text-sm text-muted-foreground italic">
                      During the 1979 gas crisis, Irving's Food Center operated <strong className="text-foreground">4 vans and 5 bicycles</strong> delivering mineral water, soft drinks, beer and groceries. Despite vans spending early morning hours in gasoline lines, Fred maintained free deliveries throughout the week, demonstrating his commitment to customer service even during challenging times.
                    </p>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    When the grocery store became too small for the volume, Fred opened a warehouse and founded <strong className="text-foreground">Mootch and Muck</strong>—affectionately named after his parents' nicknames for each other—launching America's first major bottled water distribution company.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Revolutionary Innovations */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">Revolutionary Marketing Innovations</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-card hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-primary">1</span>
                  </div>
                  <h4 className="text-lg font-semibold mb-3">First Bottled Water Sections</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Fred pioneered the concept of dedicated bottled water sections in supermarkets. He convinced chain store buyers with a risk-free offer: free product fill for every inch of shelf space, with a promise to buy back any unsold merchandise at full retail price. Result: He never had to buy back a single bottle.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-primary">2</span>
                  </div>
                  <h4 className="text-lg font-semibold mb-3">The Evian Waiter Program</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Fred revolutionized fine dining by asking restaurant owners: "How much do you make on free bread? On free tap water with ice you pay for?" He showed them bottled water could add 15% to checks. Waiters earned an extra $30/night by placing Evian on tables and eliminating tap water glasses. The "Evian Mystery Shopper" gave $100 on the spot to waiters who mentioned Evian.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-primary">3</span>
                  </div>
                  <h4 className="text-lg font-semibold mb-3">Luxury Brand Positioning</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Fred partnered with Marvin Taub at Bloomingdales to display Evian in high-end departments like fur and expensive women's clothing. He secured a 60-day exclusive for the plastic Evian bottle launch, then leveraged this prestige to pre-sell all of NYC's supermarket chains.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Brand Portfolio & Growth */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-6">Building an Empire</h3>
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-semibold mb-3">Warehouse Expansion</h4>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span><strong>Mid-1970s:</strong> First warehouse, 1,000 sq ft (mostly Perrier)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span><strong>1982:</strong> Second warehouse, 35,000 sq ft</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span><strong>Mid-1980s:</strong> 60,000 sq ft warehouse on Grand Avenue</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span><strong>1985:</strong> 100,000 sq ft facility in Williamsburg, Brooklyn</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-semibold mb-3">Exclusive Distribution Rights</h4>
                    <p className="text-muted-foreground text-sm mb-3">
                      <strong className="text-foreground">1976-1988:</strong> Exclusive Evian distributor for New York ADI
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Mootch and Muck was also the first Vitamin Water distributor and shared exclusive distribution rights to San Pellegrino with a food service distributor. Beyond water, Fred pioneered the distribution of premium beverages including Clearly Canadian, Orbitz, Martinelli's apple juice, Orangina, Welch's, and legendary NYC gourmet sodas like Old Tyme Soda and SOHO Soda.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Brands Distributed</h3>
              
              {/* Search and Filter */}
              <Card className="mb-6">
                <CardContent className="p-4">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="text"
                        placeholder="Search brands..."
                        value={brandFilter}
                        onChange={(e) => setBrandFilter(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant={categoryFilter === "all" ? "default" : "outline"}
                        size="sm"
                        onClick={() => setCategoryFilter("all")}
                      >
                        All ({allBrands.length})
                      </Button>
                      <Button
                        variant={categoryFilter === "water" ? "default" : "outline"}
                        size="sm"
                        onClick={() => setCategoryFilter("water")}
                      >
                        Waters ({waterBrands.length})
                      </Button>
                      <Button
                        variant={categoryFilter === "beverage" ? "default" : "outline"}
                        size="sm"
                        onClick={() => setCategoryFilter("beverage")}
                      >
                        Beverages ({beverageBrands.length})
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  {filteredBrands.length > 0 ? (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                      {filteredBrands.map((brand) => (
                        <div key={brand} className="flex items-center gap-2">
                          <Droplets className="h-4 w-4 text-primary" />
                          <span>{brand}</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-center text-muted-foreground py-8">
                      No brands found matching your search.
                    </p>
                  )}
                  <p className="text-xs text-muted-foreground mt-6 italic border-t border-border pt-4">
                    Fred and Mootch and Muck were early pioneers in bringing premium and gourmet beverages to NYC, including the legendary Old Tyme Soda brand and many other European and American specialty drinks.
                  </p>
                </CardContent>
              </Card>

              <Card className="mt-6 bg-primary text-primary-foreground">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2">Partnership with Jack Maguire</h4>
                  <p className="text-sm opacity-90 mb-4">
                    Fred teamed up with Jack Maguire, former VP of Canada Dry and first CEO of Evian USA (Great Waters of France), to create the largest bottled water empire in the USA for many years. Together they sponsored the NYC Marathon and ran in Central Park wearing pink Evian shirts, always carrying glass Evian bottles.
                  </p>
                  <div className="bg-primary-foreground/10 rounded-lg p-4">
                    <img
                      src="/images/fred-sipper-jack-maguire.jpg"
                      alt="Fred Sipper and Jack Maguire at an Evian event"
                      className="w-full rounded-lg mb-3"
                    />
                    <p className="text-xs opacity-90 italic">Fred Sipper and Jack Maguire at an Evian event. The two remain close friends to this day.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* 1985 NYC Water Crisis - Pivotal Moment */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">The 1985 NYC Water Crisis: A Defining Moment</h3>
            <Card className="bg-card border-2 border-primary/20">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="inline-block px-3 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded mb-4">
                      New York Times, August 13, 1985
                    </div>
                    <h4 className="text-xl font-semibold mb-4">Sales Surge During Water Contamination Fears</h4>
                    <p className="text-muted-foreground mb-4">
                      When concerns about Hudson River water being pumped into NYC's drinking supply and traces of plutonium were announced in July 1985, Fred Sipper's business exploded overnight.
                    </p>
                    <blockquote className="border-l-4 border-primary pl-4 italic mb-4">
                      "We sold out a four-month supply of Evian water in two weeks. We used to sell a trailer a week of a brand called Cloister. Right now we're selling five trailers a week."
                      <footer className="text-sm text-muted-foreground mt-2">— Fred Sipper, President of Mootch and Muck Inc., NY Times 1985</footer>
                    </blockquote>
                  </div>
                  <div className="space-y-4">
                    <Card className="bg-primary/5">
                      <CardContent className="p-4">
                        <h5 className="font-semibold mb-2">Business Scale in 1985</h5>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Distributed <strong className="text-foreground">33 brands</strong> of bottled water</li>
                          <li>• Served <strong className="text-foreground">4,000 establishments</strong> in the metro area</li>
                          <li>• Sales more than <strong className="text-foreground">doubled</strong> in July 1985</li>
                          <li>• Evian sales increased <strong className="text-foreground">200%+</strong></li>
                        </ul>
                      </CardContent>
                    </Card>
                    <Card className="bg-primary/5">
                      <CardContent className="p-4">
                        <h5 className="font-semibold mb-2">Jack Maguire's Perspective</h5>
                        <p className="text-sm text-muted-foreground italic">
                          "We realize this is good for business, but we don't want to celebrate too loudly. We don't want to trade on bad news. It's in bad taste—no pun intended."
                        </p>
                        <p className="text-xs text-muted-foreground mt-2">— Jack Maguire, General Manager, Evian Waters of France Inc.</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground text-center">
                    This crisis moment demonstrated the infrastructure Fred and Jack had built—when demand surged 200-500%, they had the distribution network, warehouse capacity, and retail relationships to meet it. This cemented bottled water as an essential household staple in New York.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Media Recognition */}
          <div className="mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">Media Recognition & Legacy</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src="/images/fred-sipper-tv-show.webp"
                    alt="Fred Sipper on To Tell The Truth television show"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-1">To Tell The Truth</h4>
                  <p className="text-sm text-muted-foreground">Fred appeared on the popular TV game show, showcasing his unique story</p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src="/images/fred-sipper-modern-grocer.webp"
                    alt="Fred Sipper in Modern Grocer magazine November 1970"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-1">Modern Grocer (1970)</h4>
                  <p className="text-sm text-muted-foreground">"It's A Pepsi Holiday" - Fred at Irving's Food Center</p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src="/images/fred-sipper-mootch-muck.webp"
                    alt="Fred Sipper and Mootch and Muck distribution company"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-1">Industry Leader (1989)</h4>
                  <p className="text-sm text-muted-foreground">Building America's bottled water distribution infrastructure</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Legacy Quote */}
          <div className="bg-card rounded-xl p-8 shadow-lg border-2 border-primary/20">
            <blockquote className="text-lg md:text-xl italic text-center max-w-3xl mx-auto mb-4">
              "Fred Sipper didn't just sell bottled water—he created the entire category in America. His innovative marketing programs, from the Evian Waiter Program to the first supermarket water sections, laid the foundation for what is now a $200 billion global industry."
            </blockquote>
            <p className="text-center text-muted-foreground">— Smithsonian Magazine</p>
            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Today:</strong> Fred continues consulting for beverage companies, distributors, and restaurants, sharing his decades of expertise and passion for the bottled water industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ancient Origins Section */}
      <section id="origins" className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Clock className="h-4 w-4" />
              Ancient Origins
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              From Roman Earthenware to Holy Wells
            </h2>
            <p className="text-lg text-muted-foreground">
              The practice of bottling water dates back to ancient Rome, where naturally carbonated mineral water was transported in earthenware jars throughout the empire.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">The Roman Empire</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The earliest documented bottled water came from Apollinaris in northern Germany during the Roman Empire. Though glass was too expensive, earthenware jars served as the perfect vessels for transporting this prized naturally carbonated mineral water across vast distances.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Holy Wells (5th Century)</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Pilgrims visiting holy wells in Europe and the Middle East collected water in ceramic flasks with unique seals to prove authenticity. Ireland alone has over 3,000 holy wells, where drinking the water was believed to cure diseases and bring health benefits.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="relative">
              <img
                src="/images/natural-spring.jpg"
                alt="Natural mineral spring"
                className="w-full rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* European Spa Era */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Building2 className="h-4 w-4" />
              European Spa Era
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              The Golden Age of Spa Towns
            </h2>
            <p className="text-lg text-muted-foreground">
              During the 1400s-1800s, European spa towns became the birthplace of the modern bottled water industry, catering to wealthy elites seeking health and status.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card>
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">1572</div>
                <h3 className="text-xl font-semibold mb-3">Rogaška Slatina</h3>
                <p className="text-muted-foreground">
                  Foundation stone laid for the spa in Slovenia, considered by many as the birthplace of the modern bottled water industry. A glass factory was built next to the spa to bottle the healing waters.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">1665</div>
                <h3 className="text-xl font-semibold mb-3">Glass Manufacturing</h3>
                <p className="text-muted-foreground">
                  Glassmaking began at Rogaška Slatina. By the late 18th century, the town produced 20,000 glass bottles per year, revolutionizing water distribution.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">1783</div>
                <h3 className="text-xl font-semibold mb-3">Schweppes Founded</h3>
                <p className="text-muted-foreground">
                  Following Joseph Priestley's 1767 invention of artificially carbonated water, Schweppes company began bottling carbonated water for commercial distribution.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-card rounded-xl p-8 shadow-lg">
            <blockquote className="text-lg md:text-xl italic text-center max-w-3xl mx-auto">
              "This was the place where high society mixed and mingled. It was a status symbol to go to the spa for a couple of months over the summer to take to the waters and enjoy a more healthy lifestyle."
            </blockquote>
            <p className="text-center text-muted-foreground mt-4">— Michael Mascha, Water Sommelier & Anthropologist</p>
          </div>
        </div>
      </section>

      {/* Colonial America Timeline */}
      <section id="timeline" className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Bottled Water in Colonial America
            </h2>
            <p className="text-lg text-muted-foreground">
              The American bottled water industry began in the late 1700s, with Founding Fathers among its earliest enthusiasts.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {/* Timeline Item 1 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-32 pt-1">
                  <div className="text-2xl font-bold text-primary">1767</div>
                </div>
                <div className="flex-grow pb-8 border-l-2 border-primary/30 pl-8 relative">
                  <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-primary -translate-x-[9px]"></div>
                  <h3 className="text-xl font-semibold mb-2">Jackson's Spa, Boston</h3>
                  <p className="text-muted-foreground">
                    The first commercially distributed water in America was bottled and sold by Jackson's Spa in Boston. Customers paid a copper for a quart of bottled spring water.
                  </p>
                </div>
              </div>

              {/* Timeline Item 2 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-32 pt-1">
                  <div className="text-2xl font-bold text-primary">1783</div>
                </div>
                <div className="flex-grow pb-8 border-l-2 border-primary/30 pl-8 relative">
                  <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-primary -translate-x-[9px]"></div>
                  <h3 className="text-xl font-semibold mb-2">George Washington Visits Saratoga Springs</h3>
                  <p className="text-muted-foreground">
                    President Washington visited Saratoga Springs and wrote about bottling the natural effervescent mineral water. He noted the high carbon dioxide content caused bottles to break when corked tight.
                  </p>
                </div>
              </div>

              {/* Timeline Item 3 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-32 pt-1">
                  <div className="text-2xl font-bold text-primary">1786</div>
                </div>
                <div className="flex-grow pb-8 border-l-2 border-primary/30 pl-8 relative">
                  <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-primary -translate-x-[9px]"></div>
                  <h3 className="text-xl font-semibold mb-2">Benjamin Rush's Medical Report</h3>
                  <p className="text-muted-foreground">
                    Benjamin Rush, a physician and signer of the Declaration of Independence, published a 12-page booklet explaining the medicinal benefits of mineral water, establishing bottled water as medicine.
                  </p>
                </div>
              </div>

              {/* Timeline Item 4 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-32 pt-1">
                  <div className="text-2xl font-bold text-primary">1820</div>
                </div>
                <div className="flex-grow pb-8 border-l-2 border-primary/30 pl-8 relative">
                  <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-primary -translate-x-[9px]"></div>
                  <h3 className="text-xl font-semibold mb-2">First Saratoga Springs Bottled Water</h3>
                  <p className="text-muted-foreground">
                    The first Saratoga Springs bottled water was sold commercially, beginning a legacy that would make Saratoga one of America's most famous water brands.
                  </p>
                </div>
              </div>

              {/* Timeline Item 5 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-32 pt-1">
                  <div className="text-2xl font-bold text-primary">1844-1873</div>
                </div>
                <div className="flex-grow pl-8 relative">
                  <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-primary -translate-x-[9px]"></div>
                  <h3 className="text-xl font-semibold mb-2">Historic Brands Founded</h3>
                  <p className="text-muted-foreground mb-4">
                    The foundations of America's bottled water industry were laid with the establishment of brands that still exist today:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li><strong className="text-foreground">Poland Spring (1845)</strong> - Started by a Maine innkeeper who discovered therapeutic properties of local spring water</li>
                    <li><strong className="text-foreground">Mountain Valley Spring Water (1871)</strong></li>
                    <li><strong className="text-foreground">Saratoga Spring Water (1872)</strong></li>
                    <li><strong className="text-foreground">Deer Park (1873)</strong></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Historic Bottles Gallery */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Historic Bottles & Artifacts
            </h2>
            <p className="text-lg text-muted-foreground">
              Authentic bottles from the 1800s showcase the craftsmanship and artistry of early American bottled water.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src="/images/saratoga-bottle.jpg"
                  alt="Early Saratoga Springs bottle from 1825-1833"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-1">Saratoga Springs (1825-1833)</h3>
                <p className="text-sm text-muted-foreground">Black glass bottle manufactured for Thomas Lynch and John Clarke</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src="/images/saratoga-green-bottle.jpg"
                  alt="Emerald green Saratoga quart bottle"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-1">Red Spring Company</h3>
                <p className="text-sm text-muted-foreground">Emerald green Saratoga quart glass bottle, 19th century</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src="/images/poland-spring-museum.jpg"
                  alt="Poland Spring museum display"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-1">Poland Spring Museum</h3>
                <p className="text-sm text-muted-foreground">Historic collection showcasing Maine's famous water brand</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Modern Era Section */}
      <section id="modern" className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <TrendingUp className="h-4 w-4" />
              Modern Era
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              The Bottled Water Revolution
            </h2>
            <p className="text-lg text-muted-foreground">
              From the soda fountain era to surpassing soft drinks, bottled water made a remarkable comeback in the late 20th century—thanks in large part to Fred Sipper's pioneering work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">Early 1900s</div>
                  <h3 className="text-xl font-semibold mb-3">The Pharmacy Era</h3>
                  <p className="text-muted-foreground">
                    The biggest market for bottled water was pharmacies, where it was sold as medicine rather than for hydration. Meanwhile, Americans embraced soda fountains and sugary soft drinks.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">1976-1978</div>
                  <h3 className="text-xl font-semibold mb-3">Perrier's American Launch</h3>
                  <p className="text-muted-foreground">
                    Perrier began advertising in the United States in 1976, with the effective start of the modern American bottled water industry in 1978. Marketing focused on health benefits and aligned perfectly with the fitness craze—and Fred Sipper's distribution network made it all possible.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">1994-1999</div>
                  <h3 className="text-xl font-semibold mb-3">Purified Water Arrives</h3>
                  <p className="text-muted-foreground">
                    A major shift occurred when PepsiCo introduced Aquafina (1994) and Coca-Cola launched Dasani (1999), marking the transition from mineral/spring water to purified water.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <img
                src="/images/perrier-bottles.jpg"
                alt="Perrier sparkling water bottles"
                className="w-full rounded-xl shadow-lg"
              />
              <Card className="bg-primary text-primary-foreground">
                <CardContent className="p-6">
                  <div className="text-5xl font-bold mb-2">2016</div>
                  <h3 className="text-2xl font-semibold mb-3">Historic Milestone</h3>
                  <p className="opacity-90">
                    For the first time, bottled water sales surpassed soft drinks in the United States, marking a complete reversal from the soda fountain era—a testament to Fred Sipper's vision and the industry he helped create.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="bg-card rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-center">The Marketing Revolution</h3>
            <p className="text-muted-foreground text-center max-w-3xl mx-auto leading-relaxed">
              "The very first serious advertising efforts around bottled water were focused on convincing us that it was healthier than tap water, or as advertising does, that it made us sexier. Perrier really established that there was a commercial demand for it and a commercial market, leading the way to what has become the modern bottled water industry."
            </p>
            <p className="text-center text-muted-foreground mt-4">— Peter Gleick, Author of "The Three Ages of Water"</p>
          </div>
        </div>
      </section>

      {/* Then & Now Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Then & Now: Bottle Evolution
            </h2>
            <p className="text-lg text-muted-foreground">
              From ornate glass bottles of the 1800s to modern sustainable packaging, see how iconic water brands have evolved over the centuries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Poland Spring Comparison */}
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-primary/5 p-6 text-center">
                  <h3 className="text-2xl font-bold mb-2">Poland Spring</h3>
                  <p className="text-sm text-muted-foreground">From Maine's Historic Resort to National Brand</p>
                </div>
                <div className="grid grid-cols-2">
                  <div className="p-6 border-r border-border">
                    <div className="text-sm font-semibold text-primary mb-3">1800s - 1970s</div>
                    <div className="aspect-square bg-muted/50 rounded-lg overflow-hidden mb-3">
                      <img
                        src="/images/vintage-poland-spring-bottles.jpg"
                        alt="Vintage Poland Spring bottles"
                        className="w-full h-full object-contain p-4"
                      />
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Distinctive green glass bottles with embossed lettering, sold as medicinal spring water from the famous Poland Spring resort in Maine.
                    </p>
                  </div>
                  <div className="p-6">
                    <div className="text-sm font-semibold text-primary mb-3">2020s</div>
                    <div className="aspect-square bg-muted/50 rounded-lg overflow-hidden mb-3">
                      <img
                        src="/images/modern-poland-spring.webp"
                        alt="Modern Poland Spring bottle"
                        className="w-full h-full object-contain p-4"
                      />
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Lightweight recyclable plastic bottles with modern labeling, now one of America's most recognized water brands.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Saratoga Comparison */}
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-primary/5 p-6 text-center">
                  <h3 className="text-2xl font-bold mb-2">Saratoga Spring</h3>
                  <p className="text-sm text-muted-foreground">New York's Legendary Mineral Water</p>
                </div>
                <div className="grid grid-cols-2">
                  <div className="p-6 border-r border-border">
                    <div className="text-sm font-semibold text-primary mb-3">1800s - 1900s</div>
                    <div className="aspect-square bg-muted/50 rounded-lg overflow-hidden mb-3">
                      <img
                        src="/images/vintage-saratoga-bottle.jpg"
                        alt="Vintage Saratoga bottle"
                        className="w-full h-full object-contain p-4"
                      />
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Emerald green glass bottles with star emblem and 'Saratoga Red Spring' embossing, prized by collectors today.
                    </p>
                  </div>
                  <div className="p-6">
                    <div className="text-sm font-semibold text-primary mb-3">2020s</div>
                    <div className="aspect-square bg-muted/50 rounded-lg overflow-hidden mb-3">
                      <img
                        src="/images/modern-saratoga.jpg"
                        alt="Modern Saratoga bottle"
                        className="w-full h-full object-contain p-4"
                      />
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Elegant cobalt blue glass bottles maintaining premium heritage while meeting modern standards.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-6 text-center">
              <p className="text-sm text-muted-foreground">
                Fred Sipper distributed both vintage glass bottles and helped transition the industry to modern packaging, always maintaining focus on quality and brand heritage.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Download Timeline Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <Card className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="max-w-2xl mx-auto text-center">
                <Download className="h-12 w-12 mx-auto mb-4" />
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Download the Complete Timeline
                </h2>
                <p className="text-primary-foreground/90 mb-6">
                  Get a comprehensive PDF timeline of Fred Sipper's career milestones, from 1960 to present. Perfect for educators, historians, and industry professionals.
                </p>
                <Button
                  size="lg"
                  variant="secondary"
                  className="font-semibold"
                  onClick={() => window.open('/fred-sipper-timeline.pdf', '_blank')}
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download PDF Timeline
                </Button>
                <p className="text-xs text-primary-foreground/70 mt-4">
                  Includes detailed milestones, brand lists, and historical context
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Droplets className="h-6 w-6" />
                <span className="text-xl font-bold">Beverage Culture</span>
              </div>
              <p className="opacity-90">
                Exploring the rich history of bottled water in the United States, from ancient origins to Fred Sipper's revolutionary marketing that changed America's drinking habits forever.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 opacity-90">
                <li><a href="#origins" className="hover:underline">Ancient Origins</a></li>
                <li><a href="#fred-sipper" className="hover:underline">Fred Sipper - The Bottled Water King</a></li>
                <li><a href="#timeline" className="hover:underline">American Timeline</a></li>
                <li><a href="#modern" className="hover:underline">Modern Era</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Sources</h3>
              <ul className="space-y-2 opacity-90 text-sm">
                <li>Smithsonian Magazine</li>
                <li>History.com - Bottled Water History</li>
                <li>BeverageCulture.com - Fred Sipper Story</li>
                <li>Michael Mascha - Fine Waters</li>
                <li>Peter Gleick - The Three Ages of Water</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-primary-foreground/20 text-center opacity-90">
            <p>&copy; 2025 Beverage Culture. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
