import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import city from '../../public/city.jpg'
import coat from '../../public/hh-coat.webp'
import bean from '../../public/bean.jpg'
import kicks from '../../public/kicks.jpg'

export default function Component() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <section className="py-12 lg:py-16 xl:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Convert more leads with the power of personalization!!!!!
                </h2>
                <p className="max-w-[600px] text-gray-500 dark:text-gray-400">
                  Personalization is the key to unlocking more conversions. Let your visitors know you understand their
                  needs with targeted messaging.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="grid grid-cols-2 gap-2">
                  <Input placeholder="Name" required type="text" />
                  <Input placeholder="Email" required type="email" />
                  <Button
                    className="bg-gradient-to-r from-pink-500 to-pink-400 text-white hover:from-pink-600 hover:to-pink-500"
                    type="submit"
                  >
                    Sign Up
                  </Button>
                </form>
                <p className="text-xs text-gray-500 dark:text-gray-400">Sign up to get notified when we launch.</p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                alt="Hero"
                className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                height="280"
                src={city}
                width="500"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 lg:py-16 xl:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col space-y-2">
              <Image
                alt="Avatar"
                className="rounded-full object-cover"
                height="160"
                src={bean}
                style={{
                  aspectRatio: "160/160",
                  objectFit: "cover",
                }}
                width="160"
              />
              <div className="space-y-2">
                <blockquote className="text-lg font-bold leading-6">
                  I love how easy it is to use. The drag-and-drop editor is fantastic!
                </blockquote>
                <cite className="font-semibold">- Alice M.</cite>
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <Image
                alt="Avatar"
                className="rounded-full object-cover"
                height="160"
                src={coat}
                style={{
                  aspectRatio: "160/160",
                  objectFit: "cover",
                }}
                width="160"
              />
              <div className="space-y-2">
                <blockquote className="text-lg font-bold leading-6">
                  It feels like the website knows exactly what I want. The recommendations are spot on.
                </blockquote>
                <cite className="font-semibold">- Bob J.</cite>
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <Image
                alt="Avatar"
                className="rounded-full object-cover"
                height="160"
                src={kicks}
                style={{
                  aspectRatio: "160/160",
                  objectFit: "cover",
                }}
                width="160"
              />
              <div className="space-y-2">
                <blockquote className="text-lg font-bold leading-6">
                  The personalized emails make me feel special. I&apps;m more likely to click through!
                </blockquote>
                <cite className="font-semibold">- Carol S.</cite>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 lg:py-16 xl:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Ready to supercharge your lead generation?
              </h2>
              <p className="max-w-[600px] text-gray-500 dark:text-gray-400">
                Our platform makes it easy to create personalized experiences that convert. Try it for yourself with our
                14-day free trial.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                className="inline-block w-[140px] py-2 text-center rounded-lg bg-gray-100 text-sm dark:bg-gray-800 dark:text-gray-300"
                href="#"
              >
                Start Trial
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="border-t border-gray-200 dark:border-gray-800">
        <div className="container px-4 md:px-6 py-10">
          <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Product</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#">Personalization</Link>
                </li>
                <li>
                  <Link href="#">Recommendations</Link>
                </li>
                <li>
                  <Link href="#">A/B Testing</Link>
                </li>
                <li>
                  <Link href="#">Analytics</Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#">About Us</Link>
                </li>
                <li>
                  <Link href="#">Contact Us</Link>
                </li>
                <li>
                  <Link href="#">Customers</Link>
                </li>
                <li>
                  <Link href="#">Careers</Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#">Blog</Link>
                </li>
                <li>
                  <Link href="#">Guides</Link>
                </li>
                <li>
                  <Link href="#">Webinars</Link>
                </li>
                <li>
                  <Link href="#">Developer Tools</Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Connect</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Get the latest updates on our product and company.
              </p>
              <form className="flex flex-col max-w-sm space-y-2">
                <Input placeholder="Email" type="email" />
                <Button type="submit">Sign Up</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}