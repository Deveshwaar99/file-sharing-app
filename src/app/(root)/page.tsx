import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="relative">
      <div
        className="pointer-events-none absolute inset-0 h-full blur-xl"
        style={{
          background:
            'linear-gradient(143.6deg, rgba(192, 132, 252, 0) 20.79%, rgba(232, 121, 249, 0.26) 40.92%, rgba(204, 171, 238, 0) 70.35%)',
        }}
      ></div>

      <section>
        <div className="mx-auto flex max-w-screen-xl flex-col gap-12 overflow-hidden px-4 py-24 text-gray-600 md:flex md:flex-row md:px-8">
          <div className="max-w-xl flex-none space-y-5">
            <h1 className="text-4xl font-extrabold text-gray-800 sm:text-7xl">
              Sharing on the Go Anytime, Anywhere.
            </h1>
            <p className="text-lg">
              Effortlessly share files securely: Drag and drop your files to instantly create
              password-protected links for secure email sharing.
            </p>
            <div className="flex items-center gap-x-3 sm:text-sm">
              <Link
                href="/upload"
                className="flex items-center justify-center gap-x-1 rounded-full bg-indigo-500 px-4 py-2 font-medium text-white duration-150 hover:bg-gray-700 active:bg-gray-900 md:inline-flex"
              >
                Get started
                <Image src="/icons/arrow.svg" alt="button" width={20} height={20} />
              </Link>
              <Link
                href="/"
                className="flex items-center justify-center gap-x-1 px-4 py-2 font-medium text-gray-700 duration-150 hover:text-indigo-500 md:inline-flex"
              >
                Contact sales
                <Image src="/icons/arrow.svg" alt="button" width={20} height={20} />
              </Link>
            </div>
          </div>
          <div className="md:mx-20">
            <Image
              src="https://raw.githubusercontent.com/sidiDev/remote-assets/c86a7ae02ac188442548f510b5393c04140515d7/undraw_progressive_app_m-9-ms_oftfv5.svg"
              className="max-w-xl"
              alt="banner"
              width={600}
              height={700}
            />
          </div>
        </div>
      </section>
    </div>
  )
}
