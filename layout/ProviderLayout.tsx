import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { PropsWithChildren } from "react";
import { ToastContainer } from "react-toastify";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import store from "@/redux/store";
import NextNProgress from "@/components/loader/NextNProgress";

import "react-toastify/dist/ReactToastify.css";
import BeerLoader from "@/components/loader/BeerLoader";

export default function Providerlayout({ children }: PropsWithChildren<{}>) {
  let persistor = persistStore(store);

  const queryClient: any = new QueryClient({
    defaultOptions: {
      queries: {
        cacheTime: 1000 * 60 * 60 * 24,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
        retry: false,
        staleTime: 1000 * 60 * 30,
      },
    },
  });

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={<BeerLoader />} persistor={persistor}>
          <NextNProgress color="#bd6a2c" />
          <QueryClientProvider client={queryClient} contextSharing={true}>
            <ToastContainer />
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </PersistGate>
      </Provider>
    </>
  );
}
