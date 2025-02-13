import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Home() {
  return (
    <div>
      <main className="items-center relative justify-items-center min-h-screen p-8 pb-20 gap-16 sm:ps-10" >
        <Image
          src="/pfp.png"
          alt="File icon"
          className="rounded-full fixed left-15 top-20"
          width={150}
          height={150}
        />
        <section className="flex flex-col relative gap-8 row-start-2 justify-items-center items-center sm:items-start">
          <div className="flex gap-4 items-center flex-col">
            <h1 className="text-gray-200 text-center tracking-tighter display-1 mt-20">Jiahua Cui</h1>
            <h1 className="text-gray-200 text-center tracking-tighter display-1">Software <span className="block">Developer</span></h1>
            <i className="bi bi-chevron-double-down absolute -bottom-20 text-2xl"></i>
          </div>
        </section>
        <section className="mt-40" id="about">
            <h2 className="text-gray-200 text-center display-2 my-20">👋 Hi!</h2>
            <div className="w-3/5 mx-auto text-xl">
              <p className="">I&apos;m Ji, a fullstack developer at <a href="https://brainboxlabs.com" target="_blank">Brain Box Labs</a> in Toronto 🇨🇦 .</p>
              <p className="">I graduated with a BSc degree in <strong>Mechanical Engineering</strong> from  Ontario Tech University. After working as a Mechanical Engineer for 2 years, I decided to transition into software because all the cool things happening on this side so I did a Interactive Media Design and Web Development program from Durham College.</p>
              <p className="">My tech stack at work is <strong>Vue, Nuxt, Typescript, Inertia, Vite</strong> for front-end and <strong>Laravel, MySQL</strong> for backend. While for my personal projects, I tend to use <strong>Next.js, Go, Ruby on Rails, Bun, Docker, Postgres or serverless with AWS</strong> or any cool stuff (<a href="https://turso.tech" target="_blank">Turso</a> is looking pretty interesting now 🤔) that I don&apos;t get to use at work.</p>
              <p className="">Other than the regular web dev things, I also dabble into a lof of AI stuff and got an <strong>Artificial Intelligence</strong> certificate from University of Toronto. In my free time, I usually play with <strong>Neural Nets, Ollama, HuggingFace, PyTorch, AI agents and Evals.</strong></p>
              <p className="">My dev setup is <strong>Kitty Terminal, Tmux, Neovim, Fish shell.</strong></p>
              <p className="">My life outside of coding tho (I do have one lol), you generally can catch me playing <strong>basketball 🏀</strong> with the boys. I also play <strong>badminton 🏸</strong> on and off. In the summer/fall, I do a lot of <strong>hiking</strong> as well in the cool national parks nearby. And also a big fan of <strong>travelling</strong>, been to 20+ countries at this point.</p>
            </div>
        </section>
        <section className="w-3/5 hidden" id="work">
            <h2 className="text-gray-200 text-center display-2 mt-20 mb-10">Work Projects</h2>
            <Card>
              <CardHeader>
                <CardTitle><a href="https://www.brokerlink.ca" target="_blank">Brokerlink</a></CardTitle>
              </CardHeader>
              <CardContent>
                <p>Brokerlink is an insurance brokerage company that serves over 1 million users with around 3 billion dollars annual revenue. Brokerlink itself is a subsidiary of Intact Financial Corporation (TSX:IFC).</p>
                <p>My work on brokerlink actively involves: </p>
                <ul className="card-list">
                  <li className="list-disc">Custom Content Management System(CMS)</li>
                  <li className="list-disc">Online Quoting Tool and Quoting Algorithms intergration with Applied Rating System (ARS)</li>
                  <li className="list-disc">Moneris Payment System</li>
                  <li className="list-disc">UI Components Library</li>
                  <li className="list-disc">Security Vulnerbility Patches</li>
                  <li className="list-disc">Accessibility and Performance Improvement</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle><a href="https://zetique.com" target="_blank">Zetique</a></CardTitle>
              </CardHeader>
              <CardContent>
                <p>Zetique is a bookkeeping company for small businesses. There&apos;s an internal custom task management application that they use. Prior to this task management application, Zetique team mostly managed their tasks with Excel and this task management system automated 90% of the work that they do manually with Excel and hugely increased their efficiency. </p>
                <p>My work on zetique task management application actively involves: </p>
                <ul className="card-list">
                  <li className="list-disc">Transition to Event-Driven Architecture</li>
                  <li className="list-disc">Database Query Optimization</li>
                  <li className="list-disc">Documents Manager (Basically Google Drive MVP)</li>
                  <li className="list-disc">Time Tracking System (Basically Harvest MVP)</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle><strong>Midway</strong> (Internal)</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Midway is an internal tool developed by <a href="https://brainboxlabs.com">Brain Box Labs</a> used for managing tasks. It groups all the tasks from Basecamp, Jira, Sentry, Donedone into the application and then with a custom sorting mechanism in place to sort the tasks by priority. With the application, employee can clearly see the priority of their tasks and work on them accordingly and management team can have a better visual of everyone&apos;s work load and manage the company resources more effectively</p>
                <p>My work on midway actively involves: </p>
                <ul className="card-list">
                  <li className="list-disc">API integration and management for Jira, Donedone, Basecamp, Sentry</li>
                  <li className="list-disc">API Security</li>
                  <li className="list-disc">Caching Strategy</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle><a href="https://helixassessment.com" target="_blank">Helix</a></CardTitle>
              </CardHeader>
              <CardContent>
                <p>Helix is a human resource management start-up. The innovative solution used here is that through 12 questions, an employee gets catogorized into 1 out of 4 personalities. Management can then have detail insights into the each employee&apos;s personality and adjust their management styles based on which personality the whole team is leaning towards and create teams based on the personalities that work well with each other to maximize team efficiency</p>
                <p>My work on helix actively involves: </p>
                <ul className="card-list">
                  <li className="list-disc">Personality Calculation Algorithms</li>
                  <li className="list-disc">Data Visualizations (Custom Scatterplot Label Collision Solution)</li>
                </ul>
              </CardContent>
            </Card>
        </section>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
