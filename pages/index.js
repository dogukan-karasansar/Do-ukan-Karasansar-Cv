import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div class="container mx-auto">
          <div className="columns-2">
            <div class="mt-3 flex overflow-hidden columns-2">
              <Image
                class="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                src="/1668185015059.jpeg"
                alt=""
              />
              <div className="container">
                <h3 className="mx-8 text-xl font-bold text-black font-sans">
                  DOĞUKAN KARASANSAR
                </h3>
                <p className="mx-8 text-sm text-black font-sans">
                  Full Stack Developer{" "}
                  <span className="text-slate-600	">Since 01.15.2016</span>
                </p>
              </div>
            </div>
            <div className="mt-3 flex justify-end overflow-hidden align-middle">
              <button class="rounded-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-2 flex flex-row">
                Ask me
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-4 mt-1"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 01-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 01-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 01-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584zM12 18a.75.75 0 100-1.5.75.75 0 000 1.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <a
                href="https://www.linkedin.com/in/dogukan-karasansar"
                class="rounded-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-2"
              >
                Linkedin
              </a>
            </div>
          </div>
        </div>
        <div className="container py-8">
          <div className="grid grid-cols-3 gap-4">
            <div class="col-span-2 ...">
              <div class="flex w-full">
                <div class="block w-full p-6 rounded-lg shadow-lg bg-white">
                  <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">
                    My Information
                    <p className="my-1 text-sm text-slate-600 font-sans">
                      Personal details and contacts
                    </p>
                  </h5>
                  <hr class="my-2 h-px bg-gray-500 border-0 dark:bg-gray-200" />
                  <p class="text-gray-700 text-base mb-4">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <button
                    type="button"
                    class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Button
                  </button>
                </div>
              </div>
            </div>
            <div class="...">05</div>
          </div>
        </div>
      </main>
    </>
  );
}
