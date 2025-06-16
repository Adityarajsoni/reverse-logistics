import './Features.css';

export default function Features() {
  const features = [
    {
      title: "🔐 Immutable Return Tracking",
      description: "Tamper-proof record of every return lifecycle event (initiation, pickup, inspection, refund).",
    },
    {
      title: "🤖 Smart Contract Automation",
      description: "Auto-approve refunds, reroute items (refurbish/recycle), and update systems based on predefined rules.",
    },
    {
      title: "🎯 Digital Twin per Item",
      description: "Each product unit gets a unique token (e.g., NFT) that tracks its status, ownership, and history.",
    },
    {
      title: "🔗 Multi-Party Transparency",
      description: "All stakeholders (retailer, carrier, return center, refurbisher) access and update a shared ledger.",
    },
    {
      title: "📉 Fraud Prevention",
      description: "Prevents false returns, counterfeit swaps, and duplicate claims via immutable verification.",
    },
    {
      title: "📦 ERP/OMS/WMS Integration",
      description: "Blockchain events sync with existing business systems using APIs and middleware.",
    },
    {
      title: "📊 Real-Time Analytics Ready",
      description: "Unified, trustworthy data for insights on return reasons, processing times, carrier performance, and product quality.",
    },
    {
      title: "♻ Sustainability & Compliance",
      description: "Track recycling, refurbishing, and disposal for ESG goals and regulatory compliance.",
    },
  ];

  return (
    <section className="features-wrapper">
      <h2 className="features-heading">Key Features</h2>
      <div className="features">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
