// app/campaigns/page.tsx
'use client';
import CampaignTile from "@/components/CampaignTile";

const campaigns = [
  {
    title: "Help Children with Education",
    description: "Provide books, stationery, and online learning tools to underprivileged children.",
    goal: 50000,
    raised: 22000,
  },
  {
    title: "Support Flood Relief Efforts",
    description: "Help families affected by the recent floods with food, shelter, and medicine.",
    goal: 100000,
    raised: 47000,
  },
];

export default function Campaigns() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">Our Campaigns</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {campaigns.map((campaign, index) => (
          <CampaignTile key={index} {...campaign} />
        ))}
      </div>
    </main>
  );
}
