"use client";

import { useMDXComponent } from "next-contentlayer/hooks";
import Preview from "@/components/preview";

const components = {
  Preview,
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="mb-4 mt-8 text-2xl font-semibold" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="mb-4 mt-8 text-xl font-semibold" {...props} />
  ),
  table: (props: React.HTMLAttributes<HTMLTableElement>) => (
    <div>
      <table
        className="border-background-400 [&_tr]:border-background-400 block w-full overflow-x-auto [&_td]:px-4 [&_td]:py-2 [&_th]:px-4 [&_th]:py-2 [&_th]:text-left [&_tr]:border-b"
        {...props}
      />
    </div>
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className="[&_code]:bg-background-400 my-4 [&_code]:rounded-md [&_code]:px-2 [&_code]:py-1"
      {...props}
    />
  ),
  a: (props: React.HTMLAttributes<HTMLAnchorElement>) => (
    <a className="text-primary" {...props} />
  ),
  figure: (props: React.HTMLAttributes<HTMLDivElement>) => (
    <figure
      className="bg-background-400 [&_code]:bg-background-400 overflow-hidden rounded-lg p-4 text-sm"
      {...props}
    />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="list-inside list-disc" {...props} />
  ),
};

function Mdx({ code }: { code: string }) {
  const Component = useMDXComponent(code);

  return <Component components={components} />;
}

export default Mdx;
