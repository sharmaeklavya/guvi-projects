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
    <div class="container container__">
      <div class="row">
        <div class="col-lg-12">
          <h1 class="price my-2 text-white text-center">Price Component</h1>
        </div>
      </div>
      <div class="row mx-4">
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
