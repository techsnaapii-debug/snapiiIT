import Metaverse from "../metaverse/metaverse";
import Ai from "../ai-development/ai";
import Mobile from "../mobile-app/mobile";

import VirtualSection from "../../virtual";

const Services = () => {
  return (
    <div>

      <Metaverse hideVirtual />

      <Ai hideVirtual />

      <Mobile hideVirtual />

      {/* ONLY ONE TIME */}
      <VirtualSection />

    </div>
  );
};

export default Services;