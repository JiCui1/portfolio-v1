import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
  CardTitle,
  CardFooter,
} from "@/components/ui/card"

export default function Blogs() {
  return (
    <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main>
        <h1 className="display-2">Blogs</h1>
        <section className="blogs-container">
          <Card className="hover:border-gray-300 duration-500">
            <CardHeader>
              <CardTitle className="text-6xl"><a href="#" className="text-pretty no-underline hover:text-gray-300 duration-300">Preventing Destructive Commands from Running in Laravel</a></CardTitle>
              <CardDescription>Published Feb 22, 2025 by Jiahua Cui</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Read about how to use the <span className="font-extrabold">Illuminate\Console\Prohibitable</span> trait to prevent destructive commands from running in your Laravel application. We&apos;ll also look at how to prevent your own custom Artisan commands from running using this trait.</p>
            </CardContent>
            <CardFooter>
              <a href="#" className="hover:text-gray-300 duration-300">Read More <i className="bi bi-arrow-right"></i></a>
            </CardFooter>
          </Card>

          <Card className="hover:border-gray-300 duration-500">
            <CardHeader>
              <CardTitle className="text-6xl"><a href="#" className="text-pretty no-underline hover:text-gray-300 duration-300">Deploying a Laravel Project on Forge with Reverb WebSockets | Real-Time Setup Tutorial</a></CardTitle>
              <CardDescription>Published Feb 22, 2025 by Jiahua Cui</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Want to deploy your Laravel project on Forge with real-time WebSockets using Reverb? In this step-by-step tutorial, we’ll walk you through setting up Laravel Forge, configuring your server, and integrating Reverb for real-time communication. Whether youe&apos;re building a chat app, notifications system, or live updates, this guide will help you get everything running smoothly.</p>
            </CardContent>
            <CardFooter>
              <a href="#" className="hover:text-gray-300 duration-300">Read More <i className="bi bi-arrow-right"></i></a>
            </CardFooter>
          </Card>

          <Card className="hover:border-gray-300 duration-500">
            <CardHeader>
              <CardTitle className="text-6xl"><a href="#" className="text-pretty no-underline hover:text-gray-300 duration-300">Five Practical Tips to Improve Search in Laravel Apps With Typesense</a></CardTitle>
              <CardDescription>Published Feb 22, 2025 by Jiahua Cui</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Learn how to install and configure Typesense in a Laravel app, then optimize search by sorting records, using filters, adjusting typo tolerance, accessing raw responses, and leveraging facets for better filtering.</p>
            </CardContent>
            <CardFooter>
              <a href="#" className="hover:text-gray-300 duration-300">Read More <i className="bi bi-arrow-right"></i></a>
            </CardFooter>
          </Card>
        </section>
      </main>
    </div>
  );
}
