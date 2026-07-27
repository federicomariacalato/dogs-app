"use client";

import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDog } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import type { ReactNode } from "react";

type HeroProps = {
  children?: ReactNode;
};

const navigation = [
  { name: "Home", href: "#" },
  { name: "Breeds", href: "#" },
  { name: "Random", href: "#" },
  { name: "Favorites", href: "#" },
];

export default function Hero({ children }: HeroProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <div className="bg-linear-to-b from-amber-50 via-orange-50 to-white min-h-screen">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:px-8"
        >
          <div className="flex lg:flex-1 items-center gap-3">
            <a href="#" className="-m-1.5 p-1.5 flex items-center gap-3">
              <FontAwesomeIcon
                icon={faDog}
                className="text-amber-600 text-5xl"
              />

              <span className="text-2xl font-bold text-amber-950">
                Dog Breeds
              </span>
            </a>
          </div>

          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-amber-900"
            >
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="size-6" />
            </button>
          </div>

          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold text-amber-900 hover:text-amber-600 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="#"
              className="rounded-full bg-amber-500 px-5 py-2 text-sm font-semibold text-white hover:bg-amber-600 transition"
            >
              Explore
            </a>
          </div>
        </nav>

        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />

          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-amber-50 p-6 sm:max-w-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FontAwesomeIcon
                  icon={faDog}
                  className="text-amber-600 text-3xl"
                />

                <span className="font-bold text-amber-950">
                  Dog Breeds
                </span>
              </div>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-amber-900"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="size-6" />
              </button>
            </div>

            <div className="mt-8 space-y-3">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block rounded-lg px-3 py-2 font-semibold text-amber-900 hover:bg-amber-100"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <div className="relative isolate overflow-hidden px-6 pt-16 lg:px-8">

        {/* Blob superiore */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 blur-3xl"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%,100% 61.6%,97.5% 26.9%,85.5% .1%,80.7% 2%,72.5% 32.5%,60.2% 62.4%,52.4% 68.1%,47.5% 58.3%,45.2% 34.5%,27.5% 76.7%,.1% 64.9%,17.9% 100%,27.6% 76.8%,76.1% 97.7%,74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-xl -translate-x-1/2 rotate-12 bg-linear-to-tr from-amber-300 to-orange-300 opacity-20 sm:left-[calc(50%-30rem)] sm:w-6xl"
          />
        </div>

       <div className="mx-auto max-w-7xl min-h-screen flex items-center pt-20 pb-24">

          <div className="grid items-center gap-20 lg:grid-cols-2">

           <div className="flex justify-center lg:justify-start">
    {children}
  </div>

            <div className="text-center lg:text-left">

              <div className="hidden sm:mb-8 sm:flex lg:justify-start">
                <div className="rounded-full border border-amber-300 bg-white/70 px-4 py-2 text-sm font-medium text-amber-700">
                  Discover over 300 dog breeds
                </div>
              </div>

              <h1 className="text-5xl font-bold tracking-tight text-amber-950 sm:text-7xl">
                Dogs App!
              </h1>

              <p className="mt-8 text-lg leading-8 text-amber-800">
                Browse hundreds of dog breeds, discover their history,
                personality and temperament with beautiful photos.
              </p>

              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">

                <a
                  href="#"
                  className="rounded-md bg-amber-500 px-4 py-3 text-sm font-semibold text-white shadow hover:bg-amber-600"
                >
                  Browse breeds
                </a>

                <a
                  href="#"
                  className="text-sm font-semibold text-amber-900"
                >
                  Learn more →
                </a>

              </div>

            </div>

          </div>

        </div>
               
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 overflow-hidden blur-3xl sm:top-[calc(100%-25rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%,100% 61.6%,97.5% 26.9%,85.5% .1%,80.7% 2%,72.5% 32.5%,60.2% 62.4%,52.4% 68.1%,47.5% 58.3%,45.2% 34.5%,27.5% 76.7%,.1% 64.9%,17.9% 100%,27.6% 76.8%,76.1% 97.7%,74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-36rem -translate-x-1/2 bg-linear-to-tr from-orange-300 to-amber-300 opacity-20 sm:left-[calc(50%+36rem)] sm:w-6xl"
          />
        </div>
      </div>
    </div>
  );
}