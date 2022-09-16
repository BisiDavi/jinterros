import { updateMobileMenu } from "@/redux/ui-slice";
import { useAppDispatch, useAppSelector } from "./useRedux";

export default function useHeader() {
  const { mobileMenu } = useAppSelector((state) => state.UI);
  const dispatch = useAppDispatch();

  function onClickHandler() {
    dispatch(updateMobileMenu(!mobileMenu));
  }

  function onCloseHandler() {
    dispatch(updateMobileMenu(false));
  }

  return {
    onClickHandler,
    mobileMenu,
    onCloseHandler,
  };
}
