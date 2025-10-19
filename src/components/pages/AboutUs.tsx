import {
  Home,
  Users,
  Award,
  TrendingUp,
  Heart,
  Shield,
  Target,
  Clock,
} from "lucide-react";

function AboutUs() {
  const stats = [
    { icon: Home, value: "10,000+", label: "Properties Listed" },
    { icon: Users, value: "50,000+", label: "Happy Clients" },
    { icon: Award, value: "15+", label: "Years Experience" },
    { icon: TrendingUp, value: "$2B+", label: "Properties Sold" },
  ];

  const values = [
    {
      icon: Heart,
      title: "Customer First",
      description:
        "Your satisfaction is our top priority. We go above and beyond to ensure you find your perfect home.",
    },
    {
      icon: Shield,
      title: "Trust & Transparency",
      description:
        "We believe in honest communication and transparent processes throughout your property journey.",
    },
    {
      icon: Target,
      title: "Excellence",
      description:
        "We maintain the highest standards in every aspect of our service, from listings to customer care.",
    },
    {
      icon: Clock,
      title: "Always Available",
      description:
        "Our dedicated team is here to support you 24/7, making your property search seamless and stress-free.",
    },
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    },
    {
      name: "Michael Chen",
      role: "Chief Operations Officer",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Customer Success",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
    },
    {
      name: "David Williams",
      role: "Technology Director",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sky-600 to-blue-600 text-white py-20">
        <div className="w-[90%] max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Property Finder
          </h1>
          <p className="text-lg md:text-xl text-sky-100 max-w-3xl mx-auto">
            We're on a mission to revolutionize the way people find their dream
            homes. Connecting buyers, sellers, and agents through innovative
            technology and personalized service.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="w-[90%] max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-sky-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-sky-600 w-8 h-8" />
                  </div>
                  <p className="text-3xl font-bold text-gray-800 mb-1">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="w-[90%] max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Founded in 2010, Property Finder started with a simple idea:
                make finding the perfect home easier, faster, and more
                enjoyable. What began as a small startup with a handful of
                listings has grown into one of the most trusted property
                platforms in the region.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Our journey has been driven by innovation and a deep commitment
                to our users. We've built advanced search algorithms, virtual
                tour capabilities, and AI-powered recommendations to ensure you
                find exactly what you're looking for.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, we're proud to serve thousands of families, investors,
                and first-time buyers, helping them navigate the complex world
                of real estate with confidence and ease.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop"
                alt="Modern office space"
                className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-sky-600 text-white p-6 rounded-xl shadow-xl">
                <p className="text-4xl font-bold">15+</p>
                <p className="text-sm">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="w-[90%] max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do and shape the way we serve
              our community
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-br from-sky-100 to-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-sky-600 w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="w-[90%] max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Passionate professionals dedicated to transforming the real estate
              experience
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative overflow-hidden rounded-2xl mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gradient-to-r from-sky-600 to-blue-600 text-white">
        <div className="w-[90%] max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl text-sky-100 leading-relaxed mb-8">
            To empower everyone with the tools, information, and support they
            need to make confident real estate decisions. We believe finding a
            home should be exciting, not overwhelming.
          </p>
          <button className="bg-white text-sky-600 px-8 py-3 rounded-full font-semibold hover:bg-sky-50 transition-colors">
            Join Our Journey
          </button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="w-[90%] max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Ready to Find Your Dream Home?
          </h2>
          <p className="text-gray-600 mb-8">
            Join thousands of satisfied customers who found their perfect
            property with us
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-sky-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-sky-700 transition-colors">
              Browse Properties
            </button>
            <button className="bg-gray-200 text-gray-800 px-8 py-3 rounded-full font-semibold hover:bg-gray-300 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
