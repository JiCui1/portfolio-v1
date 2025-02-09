import Image from "next/image";

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
            <h2 className="text-gray-200 text-center tracking-tighter display-2 my-20">👋 Hi!</h2>
            <div className="w-3/5 mx-auto text-xl">
              <p className="">I'm Ji, a fullstack developer at <a href="https://brainboxlabs.com" target="_blank">Brain Box Labs</a> in Toronto 🇨🇦 .</p>
              <p className="">I graduated with a BSc degree in <strong>Mechanical Engineering</strong> from  Ontario Tech University. After working as a Mechanical Engineer for 2 years, I decided to transition into software because all the cool things happening on this side so I did a Interactive Media Design and Web Development program from Durham College.</p>
              <p className="">My tech stack at work is <strong>Vue, Nuxt, Typescript, Inertia, Vite</strong> for front-end and <strong>Laravel, MySQL</strong> for backend. While for my personal projects, I tend to use <strong>Next.js, Go, Ruby on Rails, Bun, Docker and Postgres</strong> or any cool stuff (<a href="https://turso.tech" target="_blank">Turso</a> is looking pretty interesting now 🤔) that I don't get to use at work.</p>
              <p className="">Other than the regular web dev things, I also dabble into a lof of AI stuff and got an <strong>Artificial Intelligence</strong> certificate from University of Toronto. In my free time, I usually play with <strong>Neural Nets, Ollama, HuggingFace, PyTorch, AI agents and Evals.</strong></p>
              <p className="">My dev setup is <strong>Kitty Terminal, Tmux, Neovim, Fish shell.</strong></p>
              <p className="">My life outside of coding tho (I do have one lol), you generally can catch me playing <strong>basketball 🏀</strong> with the boys. I also play <strong>badminton 🏸</strong> on and off. In the summer/fall, I do a lot of <strong>hiking</strong> as well in the cool national parks nearby. And also a big fan of <strong>travelling</strong>, been to 20+ countries at this point.</p>
            </div>
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
