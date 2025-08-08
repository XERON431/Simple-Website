import CampaignCard from "@/components/CampaignCard";

export default function Home() {
  return (
    <div className="p-6 space-y-8">
      <section className="text-center py-16 bg-blue-50 rounded-xl">
        <h1 className="text-4xl font-bold text-blue-700">Support a Cause, Change a Life</h1>
        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          Join us in making a difference. Every contribution helps bring hope to those in need.
        </p>
        <a href="/donate" className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">
          Donate Now
        </a>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Featured Campaigns</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CampaignCard
            title="Help Build a School"
            description="Support us in building a school for underprivileged children in rural India."
            goal={50000}
            raised={32000}
          />
          <CampaignCard
            title="Medical Aid for Flood Victims"
            description="Urgent funds needed to provide medical help for flood-affected families."
            goal={40000}
            raised={15000}
          />
          <CampaignCard
            title="Feed the Hungry"
            description="Every ₹100 you donate feeds a child for a week. Join us to fight hunger."
            goal={20000}
            raised={18000}
          />
        </div>
      </section>
    </div>
  );
}