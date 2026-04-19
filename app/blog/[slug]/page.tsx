type Params = {
  params: {
    slug: string;
  };
};

const staticSlugs = ["test"];

export function generateStaticParams() {
  return staticSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params) {
  return { title: `Post: ${params.slug}` };
}

export default function Page({ params }: Params) {
  return (
    <>
      <h1>Slug: {params.slug}</h1>
      <p>Alex</p>
      <p>Welcome</p>
    </>
  );
}
