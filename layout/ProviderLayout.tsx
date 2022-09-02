import { Provider } from "react-redux";
import { PropsWithChildren } from "react";
import { ToastContainer } from "react-toastify";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

import store from "@/redux/store";
import NextNProgress from "@/components/loader/NextNProgress";

import "react-toastify/dist/ReactToastify.css";
import BeerLoader from "@/components/loader/BeerLoader";

export default function Providerlayout({ children }: PropsWithChildren<{}>) {
  let persistor = persistStore(store);

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={<BeerLoader />} persistor={persistor}>
          <NextNProgress color="#4e44c4" />
          <ToastContainer />
          {children}
        </PersistGate>
      </Provider>
    </>
  );
}
