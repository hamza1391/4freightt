import type { Metadata } from "next";
import { FleetExplorer } from "@/components/FleetExplorer";
import { PageIntro } from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "Trucks",
  description: "Trucks dispatched by 4 Freight, including 16- to 26-foot box trucks, with lanes, status, and last week’s gross.",
};

export default function FleetPage() {
  return (
    <>
      <PageIntro
        eyebrow="Trucks working with us"
        title="Partners on a 48-truck board."
        lede="These are active trucks dispatched by 4 Freight, including 16- to 26-foot box trucks. Gross figures are the carrier’s last full week, before fuel and operating costs. The rest of the board is on regional and dedicated lanes with the same desk."
      />
      <section className="py-12">
        <div className="mx-auto w-[min(1140px,calc(100%-2.5rem))]">
          <FleetExplorer />
        </div>
      </section>
    </>
  );
}
