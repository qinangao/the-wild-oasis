import { HiArrowRightOnRectangle } from "react-icons/hi2";
import ButtonIcon from "../../ui/ButtonIcon";
import { useLogout } from "./useLogout";
import SpinnerMini from "../../ui/SpinnerMini";
function Logout() {
  const { logout, isPending } = useLogout();
  return (
    <div>
      <ButtonIcon disabled={isPending} onClick={logout}>
        {!isPending ? <HiArrowRightOnRectangle /> : <SpinnerMini />}
      </ButtonIcon>
    </div>
  );
}

export default Logout;
