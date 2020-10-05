// pages/index.jsx
/** @jsx jsx */
import { jsx } from "theme-ui";

import dynamic from "next/dynamic";

const Browser = dynamic(() => import("../src/components/browser"), {
  ssr: false,
});

export default function Index({ content }) {
  return (
    <div sx={{ height: `calc(100vh - 60px)` }}>
      <div
        sx={{
          variant: "containers.page",
          display: "flex",
          alignItems: "center",
          height: "100%",
        }}
      >
        <h1 sx={{ fontSize: 8, my: 0 }}>{content.title}</h1>
        <Browser />
      </div>
    </div>
  );
}

export function getStaticProps() {
  // Get data from a CMS
  return {
    props: {
      content: {
        title: "This is my really nice app",
      },
    },
  };
}
