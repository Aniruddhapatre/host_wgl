import { CheckCircle, Leaf, Droplets, Globe, Handshake } from "lucide-react";

// A new component for the glowing cards to keep the code clean.
const ImpactCard = ({ value, label, desc }) => {
  return (
    <div
      // The 'group' class is essential for the hover effects to work on child elements.
      // Reduced height from h-48 to h-40 and padding from p-6 to p-4
      className="group relative rounded-lg p-4 text-center border border-lime-900/50 
                 overflow-hidden transition-all duration-500 ease-in-out
                 bg-[#0c815b] h-40 flex flex-col justify-center" 
    >
      {/* This is the dark overlay that fades away to reveal the light */}
      <div 
        className="absolute inset-0 bg-gradient-to-t from-green-800 via-green-950 to-green-950
                   transition-all duration-500 ease-in-out 
                   group-hover:opacity-0"
      />
      {/* This is the glowing effect. It's a radial gradient that starts transparent
          and becomes visible and larger on hover. */}
      <div 
        className="absolute inset-0 bg-radial-gradient from-lime-300/30 via-lime-400/10 to-transparent 
                   opacity-0 transition-all duration-500 ease-in-out 
                   scale-50 group-hover:opacity-100 group-hover:scale-125"
      />
      
      {/* This pseudo-element creates a spotlight effect from the top on hover */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-1/2 
                     bg-lime-300/20 rounded-full blur-3xl
                     opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />

      {/* The content is positioned relative to the container. */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full">
        <h3 
          // Reduced font size for better fit in the smaller card
          className="text-3xl lg:text-4xl font-bold text-gray-400 
                     transition-all duration-500 ease-in-out
                     group-hover:text-lime-300 group-hover:scale-110 
                     group-hover:[text-shadow:0_0_25px_theme(colors.lime.400)]"
        >
          {value}
        </h3>
        <p className="text-sm font-semibold mt-2 text-lime-400 transition-colors duration-500">
          {label}
        </p>

        {/* The description is hidden by default and fades in on hover. */}
        <div className="max-h-0 opacity-0 transition-all duration-500 ease-in-out 
                      group-hover:max-h-20 group-hover:opacity-100 group-hover:mt-2">
          <p className="text-xs text-gray-300">{desc}</p>
        </div>
      </div>
    </div>
  );
};


export default function ImpactSection() {
  return (
    <section className=" text-white py-16 px-4 sm:px-16">
      <div className="max-w-6xl mx-auto">
      {/* Title Section (Unchanged) */}
      <div className="text-center mb-12">
        <h2 className="text-3xl text-lime-300 font-bold mb-2">Our Impact</h2>
        <p className="text-gray-300 max-w-xl mx-auto">
          Through our dedicated efforts and your support, we've made significant
          progress in environmental conservation.
        </p>
        <div className="w-20 h-1 bg-lime-300 mt-4 mx-auto rounded-full" />
      </div>

      {/* Impact Cards - Now using the new ImpactCard component */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12 text-center">
        {[
          {
            value: "5,000+",
            label: "Trees Planted",
            desc: "Native species planted across various regions",
          },
          {
            value: "12",
            label: "Water Bodies Restored",
            desc: "Ponds and lakes revitalized for communities",
          },
          {
            value: "25,000+",
            label: "People Benefited",
            desc: "Through clean water and green spaces",
          },
          {
            value: "30+",
            label: "Schools Engaged",
            desc: "In environmental education programs",
          },
        ].map((item, idx) => (
          <ImpactCard 
            key={idx}
            value={item.value}
            label={item.label}
            desc={item.desc}
          />
        ))}
      </div>

      {/* Goals & Assessment (Unchanged) */}
      <div className="grid md:grid-cols-2 gap-8 rounded-xl bg-[#09513A] border border-green-600 shadow-lg p-6">
        {/* Sustainable Goals */}
        <div className="rounded-xl p-6 ">
          <h4 className="text-lg font-semibold mb-4 text-lime-300">
            Sustainable Development Goals
          </h4>
          <p className="text-sm text-gray-300 mb-4">
            Our work contributes to multiple UN Sustainable Development Goals,
            creating lasting positive change for communities and ecosystems.
          </p>
          <div className="pt-4 grid grid-cols-2 gap-y-4 gap-x-6">
            <div className="flex items-center gap-3">
              <span className="bg-blue-600 rounded-full px-3 py-1 text-sm font-semibold">
                6
              </span>
              <span className="text-sm">Clean Water and Sanitation</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="bg-green-600 rounded-full px-3 py-1 text-sm font-semibold">
                13
              </span>
              <span className="text-sm">Climate Action</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="bg-lime-600 rounded-full px-3 py-1 text-sm font-semibold">
                15
              </span>
              <span className="text-sm">Life on Land</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="bg-purple-600 rounded-full px-3 py-1 text-sm font-semibold">
                17
              </span>
              <span className="text-sm">Partnerships for the Goals</span>
            </div>
          </div>
        </div>

        {/* Impact Assessment */}
        <div className="bg-[#07583F] rounded-xl p-6 border border-green-600 shadow-lg">
          <h4 className="text-lg font-semibold text-lime-300 mb-4">
            Environmental Impact Assessment
          </h4>
          {[
            { label: "Carbon Sequestration", value: 85 },
            { label: "Water Quality Improvement", value: 92 },
            { label: "Biodiversity Enhancement", value: 78 },
            { label: "Community Engagement", value: 95 },
          ].map((item, idx) => (
            <div key={idx} className="mb-4">
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-white">
                  {item.label}
                </span>
                <span className="text-sm font-medium text-green-300">
                  {item.value}%
                </span>
              </div>
              <div className="w-full bg-gray-600 rounded-full h-2">
                <div
                  className="bg-green-500 h-2 rounded-full"
                  style={{ width: `${item.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}
