import Header from "@/components/dashboard/Header";
import News from "@/components/dashboard/News";

export default async function Page() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    <div className="h-screen flex items-center justify-center">
      <Header />
      <News />
    </div>
  );
}
