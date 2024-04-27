import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { Inter } from "next/font/google";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import Head from "next/head";
import React from "react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const onClickAnywhere = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-expect-error
    inputRef.current.focus();
  };

  return (
    <SessionProvider session={session}>
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
            key="viewport"
            maximum-scale="1"
          />
        </Head>

        <div
          className="text-light-foreground dark:text-dark-foreground min-w-max text-xs md:min-w-full md:text-base"
          onClick={onClickAnywhere}
        >
          <main
        className={`font-sans ${inter.variable} bg-light-background dark:bg-dark-background h-full p-2`}
      >
        <Component {...pageProps} inputRef={inputRef} />
      </main>
          
        </div>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
