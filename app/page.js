import Link from "next/link";
import Image from "next/image";
import MainLogo from "@/public/assets/images/main-logo.svg";
import MainLogo2X from "@/public/assets/images/Main@2x.svg";
import TrustPoint from "@/public/assets/images/trustpoint.png";
import FeatureIcon_1 from "@/public/assets/images/feature-icon_1.svg";
import FeatureIcon_2 from "@/public/assets/images/feature-icon-2.svg";
import FeatureIcon_3 from "@/public/assets/images/feature-icon-3.svg";
import Payment_methods from "@/public/assets/images/payment-methods.png";
import { LuArrowRight } from "react-icons/lu";
import { IoMdCheckmark } from "react-icons/io";
import Dropdown from "./components/page";
import RadioBtn from "./components/radion_button/page";

export default function Home() {
  return (
    <main>
      <header>
        <div className="px-5 py-8 md:px-20 md:py-8">
          <div className="flex justify-between items-center">
            <div>
              <Link
                href="https://dan.com/?utm_campaign=Parking&utm_medium=parking&utm_source=.com&utm_term=fayapp.com"
                target="_blank"
              >
                <Image src={MainLogo} className="max-h-16 md:hidden" />
                <Image
                  src={MainLogo2X}
                  className="max-h-16 hidden md:block w-80"
                />
              </Link>
            </div>
            <div className="gap-4 hidden md:flex">
              <Link
                href="https://www.trustpilot.com/review/dan.com"
                target="_blank"
              >
                <p>
                  <strong>Excellent 4.4</strong> out of 5
                </p>
              </Link>
              <Link
                href="https://www.trustpilot.com/review/dan.com"
                target="_blank"
              >
                <Image src={TrustPoint} className="max-w-24" />
              </Link>
            </div>
            <div className="md:hidden">
              <Link
                href="https://www.trustpilot.com/review/dan.com"
                target="_blank"
                className="flex justify-end py-3"
              >
                <Image src={TrustPoint} className="max-w-24" />
              </Link>
              <Link
                href="https://www.trustpilot.com/review/dan.com"
                target="_blank"
                className=""
              >
                <p className="text-xs font-normal">
                  <strong>Excellent 4.4</strong> out of 5
                </p>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <section className="hero-section bg-[#00112c] -z-10 h-[460px] md:h-80">
        <div className="container max-w-6xl pt-16 md:pt-10 lg:pt-16 pb-10 px-5 md:px-20 2xl:px-0">
          <div className="md:flex justify-between w-full">
            <div className="w-full 2xl:w-2/3">
              <p className="text-3xl font-normal text-white">The domain name</p>
              <h1 className="text-5xl md:text-5xl xl:text-6xl text-white font-bold pt-2 pb-1 tracking-wide">
                fayapp.com
              </h1>
              <p className="text-3xl font-normal text-white">is for sale!</p>
              <div className="hidden md:block">
                <div className="flex gap-3 items-center text-white mt-8 ">
                  <div className="bg-[#596f62] p-2 rounded-2xl text-3xl font-light">
                    DS
                  </div>
                  <div className="">
                    <div>Listed by</div>
                    <div>
                      <strong>Domain Seller</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg w-full 2xl:w-1/3 mt-10 md:mt-0 md:max-w-96 z-10 shadow-lg">
              <div className="py-6">
                <div>
                  <p className="text-black px-5 text-2xl font-extrabold">
                    Get this domain
                  </p>
                  <p className="px-5 text-lg font-normal text-[#143860]">
                    Pay the full USD $5,000 now, or select Lease to own
                  </p>
                </div>
                <div className="px-5">
                  <hr />
                </div>
                <RadioBtn />
                <div>
                  <div className="m-4">
                    <Link
                      href="https://dan.com/orders/checkout/fayapp.com?lease_to_own=yes&utm_campaign=LeaseToOwn&utm_category=BIN-LTO-STANDARD&utm_medium=parking&utm_source=.com&utm_term=fayapp.com&number_of_installments=60&cookie_settings=%7B%22performance%22%3Afalse%2C%22advertising%22%3Afalse%2C%22support%22%3Afalse%7D&cookie_permission=2025-01-17%2B13%3A39%3A37%2B%2B0100"
                      target="_blank"
                    >
                      {" "}
                      <div className="flex justify-center text-xl font-medium bg-emerald-500 py-4 rounded-lg gap-3 items-center hover:bg-emerald-600 hover:text-white">
                        Next <LuArrowRight />
                      </div>
                    </Link>
                  </div>
                  <hr />
                  <div className="p-4">
                    <div className="flex items-center gap-1">
                      <IoMdCheckmark className="text-emerald-500 text-xl" />
                      <span className="text-emerald-500 font-medium">Free</span>
                      Ownership transfer
                    </div>
                    <div className="flex items-center gap-1">
                      <IoMdCheckmark className="text-emerald-500 text-xl" />
                      <span className="text-emerald-500 font-medium">Free</span>
                      Transaction support
                    </div>
                    <div className="flex items-center gap-1">
                      <IoMdCheckmark className="text-emerald-500 text-xl font-medium" />
                      Secure payments
                    </div>
                  </div>
                  <div className="px-4 py-2 flex justify-center">
                    <Image
                      src={Payment_methods}
                      className="img-fluid"
                      alt="Payment_methods"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="our-features md:hidden">
          <div className="container max-w-6xl pt-5 md:pt-10 lg:pt-20 pb-10 px-5 md:px-20 2xl:px-0">
            <div className="md:hidden">
              <div className="flex gap-3 items-center text-white">
                <div className="bg-[#596f62] p-2 rounded-2xl text-3xl font-light">
                  DS
                </div>
                <div className="">
                  <div className="text-black">Listed by</div>
                  <div className="text-black">
                    <strong>Domain Seller</strong>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-10">
              <hr />
            </div>
            <div className="md:flex justify-between w-full">
              <div className="w-full 2xl:w-2/3 hidden xl:block">
                <div className="md:flex gap-14">
                  <div>
                    <div className="flex justify-center">
                      <Image src={FeatureIcon_1} />
                    </div>
                    <div className="text-center mt-5 max-w-40 font-semibold text-lg">
                      Buyer Protection program
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-center">
                      <Image src={FeatureIcon_2} />
                    </div>
                    <div className="text-center mt-5 max-w-40 font-semibold text-lg">
                      Fast & easy transfers
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-center">
                      <Image src={FeatureIcon_3} />
                    </div>
                    <div className="text-center mt-5 max-w-40 font-semibold text-lg">
                      Hassle free payments
                    </div>
                  </div>
                </div>
                <div className="my-8 max-w-xl">
                  <hr />
                </div>
              </div>
              <div className="w-full 2xl:w-2/3 xl:hidden">
                <div className="">
                  <div className="flex items-center py-3">
                    <div className="flex justify-center h-10 w-10">
                      <Image src={FeatureIcon_1} className="pe-3" />
                    </div>
                    <div className="text-center font-semibold text-lg">
                      Buyer Protection program
                    </div>
                  </div>
                  <div className="flex items-center py-3">
                    <div className="flex justify-center h-10 w-10">
                      <Image src={FeatureIcon_2} className="pe-3" />
                    </div>
                    <div className="text-center font-semibold text-lg">
                      Fast & easy transfers
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="flex justify-center h-10 w-10">
                      <Image src={FeatureIcon_3} className="pe-3" />
                    </div>
                    <div className="text-center font-semibold text-lg">
                      Fast & easy transfers
                    </div>
                  </div>
                </div>
                <div className="my-10 w-full md:max-w-80 2xl:max-w-2xl">
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container max-w-6xl px-5 md:px-20 2xl:px-0">
          <div className="w-full md:w-1/2">
            <div className="text-2xl font-bold">
              The simple, safe way to buy domain names
            </div>
            <div className="font-light mt-1">
              No matter what kind of domain you want to buy or lease, we make
              the transfer simple and safe.
            </div>
            <div className="mt-4 mb-10 text-xl text-[#1AAFD0] hover:underline hover:text-[#1aafd0ab]">
              <Link href="/" className="flex items-center">
                Here’s how it works <LuArrowRight className="ms-2" />
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full bg-[#00112c] text-white py-10">
          <div className="container max-w-6xl px-5 md:px-20 2xl:px-0">
            <div className="md:flex justify-between">
              <div className="text-xs tracking-wide font-normal w-full md:w-3/4 text-center md:text-start">
                <Link href="/" className="hover:underline">
                  Privacy policy
                </Link>{" "}
                ·{" "}
                <Link href="/" className="hover:underline">
                  Do not sell my personal information·Manage cookies
                </Link>{" "}
                ·{" "}
                <Link href="/" className="hover:underline">
                  Terms of use·Disclaimer
                </Link>{" "}
                ·{" "}
                <Link href="/" className="hover:underline">
                  {" "}
                  Sitemap{" "}
                </Link>
                ·© 2024 Dan.com an Undeveloped BV subsidiary. All Rights
                Reserved.
              </div>
              <div className="flex justify-center md:justify-end">
                <Dropdown />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="our-features hidden md:block">
          <div className="container max-w-6xl pt-20 md:pt-10 lg:pt-20 pb-10 px-5 md:px-20 2xl:px-0">
            <div className="md:flex justify-between w-full">
              <div className="w-full 2xl:w-2/3 hidden xl:block">
                <div className="md:flex gap-14">
                  <div>
                    <div className="flex justify-center">
                      <Image src={FeatureIcon_1} />
                    </div>
                    <div className="text-center mt-5 max-w-40 font-semibold text-lg">
                      Buyer Protection program
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-center">
                      <Image src={FeatureIcon_2} />
                    </div>
                    <div className="text-center mt-5 max-w-40 font-semibold text-lg">
                      Fast & easy transfers
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-center">
                      <Image src={FeatureIcon_3} />
                    </div>
                    <div className="text-center mt-5 max-w-40 font-semibold text-lg">
                      Hassle free payments
                    </div>
                  </div>
                </div>
                <div className="my-8 max-w-xl">
                  <hr />
                </div>
              </div>
              <div className="w-full 2xl:w-2/3 xl:hidden">
                <div className="">
                  <div className="flex items-center py-3">
                    <div className="flex justify-center h-10">
                      <Image src={FeatureIcon_1} />
                    </div>
                    <div className="text-center font-semibold text-lg">
                      Buyer Protection program
                    </div>
                  </div>
                  <div className="flex items-center py-3">
                    <div className="flex justify-center h-10">
                      <Image src={FeatureIcon_2} />
                    </div>
                    <div className="text-center font-semibold text-lg">
                      Fast & easy transfers
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="flex justify-center h-10">
                      <Image src={FeatureIcon_3} />
                    </div>
                    <div className="text-center font-semibold text-lg">
                      Fast & easy transfers
                    </div>
                  </div>
                </div>
                <div className="my-8 w-full md:max-w-80 2xl:max-w-2xl">
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="hidden">
        <div className="container max-w-6xl px-5 md:px-20 2xl:px-0">
          <div className="w-full md:w-1/2">
            <div className="text-2xl font-bold">
              The simple, safe way to buy domain names
            </div>
            <div className="font-light mt-1">
              No matter what kind of domain you want to buy or lease, we make
              the transfer simple and safe.
            </div>
            <div className="mt-4 mb-10 text-xl text-[#1AAFD0] hover:underline hover:text-[#1aafd0ab]">
              <Link href="/" className="flex items-center">
                Here’s how it works <LuArrowRight className="ms-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section></section>
    </main>
  );
}
