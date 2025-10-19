import EnvelopeIcon from "@/components/svgs/EnvelopeIcon";
import GlobeIcon from "@/components/svgs/GlobeIcon";
import PhoneIcon from "@/components/svgs/PhoneIcon";
import FiveStarsRate from "../reusables/FiveStarsRate";
import { Navigate, useParams } from "react-router-dom";
import { useGetAgentByID } from "@/hooks/useGetAgentByID";
import { Award, Briefcase, MapPin, TrendingUp, Home } from "lucide-react";
import { LoadingSpinner } from "../reusables/LoadingSpinner";
// import LoadingSpinner from "@/components/LoadingSpinner";

function AgentDetails() {
  const { id } = useParams();
  const { agentRequest, notFound } = useGetAgentByID(Number(id));

  if (notFound) {
    return <Navigate to="/not-found" replace />;
  }

  if (agentRequest.isLoading) {
    return (
      <section className="mt-24 w-[90%] mx-auto flex justify-center py-20">
        <LoadingSpinner />
      </section>
    );
  }

  if (agentRequest.errorMsg) {
    return (
      <section className="mt-24 w-[90%] mx-auto">
        <div className="text-center py-10 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-700 text-sm">{agentRequest.errorMsg}</p>
        </div>
      </section>
    );
  }

  const agent = agentRequest.agent;

  return (
    <section className="mt-24 w-[90%] mx-auto pb-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-sky-50 to-blue-50 rounded-2xl p-8 mb-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img
            src={agent.profileImageUrl}
            alt={agent.name}
            className="size-32 rounded-full object-cover border-4 border-white shadow-lg"
          />
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              {agent.name}
            </h1>
            <div className="flex items-center gap-2 justify-center md:justify-start mb-4">
              <FiveStarsRate rating={agent.rating} />
              <span className="text-sm text-gray-600">({agent.rating}/5)</span>
            </div>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start text-sm">
              <div className="flex items-center gap-2 text-gray-600">
                <PhoneIcon size="size-4" />
                <a
                  href={`tel:${agent.phoneNumber}`}
                  className="hover:text-sky-600"
                >
                  {agent.phoneNumber}
                </a>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <EnvelopeIcon />
                <a
                  href={`mailto:${agent.email}`}
                  className="hover:text-sky-600"
                >
                  {agent.email}
                </a>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <GlobeIcon />
                <a
                  href={agent.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-600"
                >
                  Visit Website
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          About {agent.name.split(" ")[0]}
        </h2>
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <p className="text-sm text-gray-600 leading-relaxed">{agent.bio}</p>
        </div>
      </div>
      {/* Stats Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Professional Highlights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg border border-gray-200 p-6 text-center">
            <div className="bg-sky-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <Home className="text-sky-600 w-6 h-6" />
            </div>
            <p className="text-2xl font-bold text-gray-800">150+</p>
            <p className="text-sm text-gray-600">Properties Sold</p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-6 text-center">
            <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <TrendingUp className="text-green-600 w-6 h-6" />
            </div>
            <p className="text-2xl font-bold text-gray-800">$50M+</p>
            <p className="text-sm text-gray-600">Total Sales Volume</p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-6 text-center">
            <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <Award className="text-purple-600 w-6 h-6" />
            </div>
            <p className="text-2xl font-bold text-gray-800">98%</p>
            <p className="text-sm text-gray-600">Client Satisfaction</p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-6 text-center">
            <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <Briefcase className="text-orange-600 w-6 h-6" />
            </div>
            <p className="text-2xl font-bold text-gray-800">10+</p>
            <p className="text-sm text-gray-600">Years Experience</p>
          </div>
        </div>
      </div>
      {/* Specializations Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Specializations
        </h2>
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex flex-wrap gap-2">
            <span className="px-4 py-2 bg-sky-50 text-sky-700 rounded-full text-sm font-medium">
              Luxury Properties
            </span>
            <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
              First-Time Buyers
            </span>
            <span className="px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-medium">
              Investment Properties
            </span>
            <span className="px-4 py-2 bg-purple-50 text-purple-700 rounded-full text-sm font-medium">
              Commercial Real Estate
            </span>
            <span className="px-4 py-2 bg-orange-50 text-orange-700 rounded-full text-sm font-medium">
              Property Management
            </span>
          </div>
        </div>
      </div>
      {/* Service Areas Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Service Areas</h2>
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Downtown, New York",
              "Brooklyn, New York",
              "Manhattan, New York",
              "Queens, New York",
              "Soho, New York",
              "Boston, Massachusetts",
              "Miami Beach, Florida",
              "San Francisco, California",
            ].map((area) => (
              <div key={area} className="flex items-center gap-2">
                <MapPin className="text-sky-600 w-4 h-4 flex-shrink-0" />
                <p className="text-sm text-gray-600">{area}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Contact CTA Section */}
      <div className="bg-gradient-to-r from-sky-600 to-blue-600 rounded-2xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-3">
          Ready to Find Your Dream Home?
        </h2>
        <p className="text-sky-100 mb-6">
          Contact {agent.name.split(" ")[0]} today to start your real estate
          journey
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href={`tel:${agent.phoneNumber}`}
            className="bg-white text-sky-600 px-6 py-3 rounded-full font-semibold hover:bg-sky-50 transition-colors"
          >
            Call Now
          </a>
          <a
            href={`mailto:${agent.email}`}
            className="bg-sky-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-sky-800 transition-colors border-2 border-white"
          >
            Send Email
          </a>
        </div>
      </div>
    </section>
  );
}

export default AgentDetails;
