import { allDocs } from "contentlayer/generated";
import { notFound } from "next/navigation";
import Mdx from "@/components/mdx";
import TableOfContents from "@/components/toc";
import Pagination from "@/components/pagination";
import { Metadata } from "next";
import { cn } from "@/lib/cn";

type Props = { params: { slug: string[] } };

export const generateStaticParams = async () =>
  allDocs.map((doc) => doc.path.split("/"));

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const doc = allDocs.find((doc) => doc.path === params.slug.join("/"));

  return {
    title: `Arke Client - ${doc?.title}`,
  };
}

const DocPage = async ({ params }: Props) => {
  const doc = allDocs.find((doc) => doc.path === params.slug.join("/"));

  if (!doc) {
    return notFound();
  }

  return (
    <>
      <div
        className={cn(
          "gap-8",
          doc.toc && "md:grid md:grid-cols-[minmax(0,1fr)_220px]",
        )}
      >
        <div className="min-h-[80vh]">
          <div className="mb-8">
            <h1 className="text-4xl font-semibold">{doc.title}</h1>
          </div>
          <Mdx code={doc.body.code} />
          <Pagination />
        </div>
        {doc.toc && <TableOfContents headings={doc.headings} />}
      </div>
    </>
  );
};

export default DocPage;
