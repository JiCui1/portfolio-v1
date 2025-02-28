type tParams = Promise<{ slug: string[] }>;

export default async function BlogSlugPage(props: { params: tParams }) {
  // Suspense(Loading) component test 
  // await new Promise((resolve) => {
  //   setTimeout(() => resolve(), 2000);
  // })

  const params = await props.params
  const slug = params.slug

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        Blog Details
        { slug }
      </main>
    </div>
  );
}
