export default function ActivityTimeline({ activities = [] }) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-[0_20px_27px_0_rgba(0,0,0,0.05)]">
      <h3 className="mb-5 text-lg font-bold text-[#252f40]">
        Activity Timeline
      </h3>

      <div className="space-y-5">
        {activities.map((item, index) => (
          <div key={index} className="flex gap-4">
            <div className="mt-1 h-3 w-3 rounded-full bg-gradient-to-r from-[#7928ca] to-[#ff0080]" />

            <div>
              <h4 className="font-bold text-[#252f40]">{item.title}</h4>
              <p className="text-sm font-semibold text-[#8392ab]">
                {item.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}