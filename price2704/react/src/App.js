import Card from "./cards";

export default function App() {
  const price = [
    {
      plan: "Free",
      price: 0,
      item: [
        "✔️ Single User",
        "✔️ 5GB Storage",
        "✔️ Unlimited Public Projects",
        "✔️ Community Access",
        "✖️ Unlimited Private Projects",
        "✖️ Dedicated Phone Support",
        "✖️ Free Subdomain",
        "✖️ Monthly Status Reports",
      ],
    },
    {
      plan: "Plus",
      price: 9,
      item: [
        "✔️ 5 Users",
        "✔️ 50 GB Storage",
        "✔️ Unlimited Public Projects",
        "✔️ Community Access",
        "✔️ Unlimited Private Projects",
        "✔️ Dedicated Phone Support",
        "✔️ Free Subdomain",
        "✖️ Monthly Status Reports",
      ],
    },
    {
      plan: "Pro",
      price: 49,
      item: [
        "✔️ Unlimited Users",
        "✔️ 150 GB Storage",
        "✔️ Unlimited Public Projects",
        "✔️ Community Access",
        "✔️ Unlimited Private Projects",
        "✔️ Dedicated Phone Support",
        "✔️ Free Subdomain",
        "✔️ Monthly Status Reports",
      ],
    },
  ];
  return (
    <div className="container container__">
      <div className="row">
        <div className="col-lg-12">
          <h1 className="price my-2 text-white text-center">Price Component</h1>
        </div>
      </div>
      <div className="row mx-4">
        {price.map((p) => {
          return (
            <Card
              plan={p.plan}
              price={p.price}
              item={p.item.map((i) => {
                return i;
              })}
            ></Card>
          );
        })}
      </div>
    </div>
  );
}
