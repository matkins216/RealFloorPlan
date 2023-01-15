import FullBath from "../Bathrooms/FullBath";
import HalfBath from "../Bathrooms/HalfBath";
import Bedroom1 from "../Bedrooms/Bedroom1";
import Bedroom2 from "../Bedrooms/Bedroom2";
import Bedroom3 from "../Bedrooms/Bedroom3";
import Kitchen from "../Kitchen/Kitchen";
import LivingRoom from "../LivingRoom/LivingRoom";

export default function FloorPlan() {
  return (
    <>
      <Kitchen />
      <Bedroom1 />
      <Bedroom2 />
      <Bedroom3 />
      <LivingRoom />
      <FullBath />
      <HalfBath />
    </>
  );
}
