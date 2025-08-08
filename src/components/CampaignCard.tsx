interface Props {
  title: string;
  description: string;
  goal: number;
  raised: number;
}

export default function CampaignCard({ title, description, goal, raised }: Props) {
  const percentage = Math.min((raised / goal) * 100, 100);

  return (
    <div className="border p-4 rounded shadow-sm bg-white">
      <h3 className="text-lg font-semibold text-blue-700">{title}</h3>
      <p className="text-gray-600 mt-2 mb-4">{description}</p>
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
        <div
          className="bg-blue-600 h-2.5 rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <p className="text-sm text-gray-500">
        Raised ₹{raised.toLocaleString()} of ₹{goal.toLocaleString()}
      </p>
    </div>
  );
}
