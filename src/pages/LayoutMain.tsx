import { Outlet } from "react-router";
import Text from "../components/text";

export default function LayoutMain() {
  return (
    <>
      <Outlet />
      <hr />
      <Text variant="heading-large">Layout Main</Text>
    </>
  );
}
