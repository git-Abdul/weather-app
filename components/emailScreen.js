import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function EmailScreen() {
  return (
    <section className="w-full h-screen py-12 md:py-24 lg:py-32 xl:py-48 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 items-center">
          <div className="flex flex-col justify-center space-y-4 text-center">
            <div className="space-y-2 mb-10 mt-16">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                Revolutionize Your Experience of Weather.
              </h1>
              <p className="max-w-[600px] text-zinc-200 md:text-lg dark:text-zinc-100 mx-auto">
                Join us and know latest updates about your weather forcast. Fast, secure, and designed for modern life.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2 mx-auto">
              <form className="flex space-x-2" action="/submit">
                <input
                  className="max-w-lg flex-1 bg-gray-800 text-white border-gray-900 p-4 rounded-xl"
                  placeholder="Enter your email"
                  type="email"
                  name="email"
                />
                <Button className="bg-white transition ease-out duration-300 hover:bg-gray-600 hover:text-white hover:-translate-y-1 hover:scale-110 text-black font-medium rounded-xl" type="submit">
                  Join Now
                </Button>
              </form>
              <p className="text-xs text-zinc-200 dark:text-zinc-100">
                Get ready to redefine your weather experience.{" "}
                <Link className="underline underline-offset-2 text-white" href="/terms">
                  Terms & Conditions
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}