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
        <section className="flex flex-col gap-8 row-start-2 justify-items-center items-center mt-40 sm:items-start">
          <div className="flex gap-4 items-center flex-col">
            <h2 className="text-gray-200 text-center tracking-tighter display-2 mt-20">Stats</h2>
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
