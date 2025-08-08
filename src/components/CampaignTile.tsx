// components/CampaignTile.tsx
import Link from 'next/link';

export default function CampaignTile({
  title,
  description,
  goal,
  raised,
}: {
  title: string;
  description: string;
  goal: number;
  raised: number;
}) {
  const progress = Math.min((raised / goal) * 100, 100);

  return (
    <div className="border p-4 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
        <div
          className="bg-green-500 h-2.5 rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="text-sm text-gray-700 mb-2">
        ₹{raised} raised of ₹{goal}
      </p>
      <Link href="/donate">
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
          Donate
        </button>
      </Link>
    </div>
  );
}
