import Head from "next/head";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";
import { NextPage } from "next";

import { useMDXComponent } from "next-contentlayer/hooks";
import { Box, Container, Heading, useMultiStyleConfig } from "@chakra-ui/react";
import { SEO } from "components/seo";

export async function getStaticPaths() {
  const paths = allPosts.map((post) => post.url);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  return {
    props: {
      post,
    },
  };
}

const PostLayout: NextPage = ({ post }: any) => {
  const MDXContent = useMDXComponent(post.body.code);
  const styles = useMultiStyleConfig("Post");
  return (
    <Box>
      <SEO
        title={post.title}
        description="Free SaaS landingspage starter kit"
      />
      <Box position="relative" overflow="hidden">
        <Container maxW="container.xl" pt={{ base: 40, lg: 60 }} pb="40">
          <Heading size="lg" sx={styles.title}>
            {post.title}
          </Heading>
          <MDXContent />
          <time dateTime={post.date} className="text-sm text-slate-600">
            {format(parseISO(post.date), "LLLL d, yyyy")}
          </time>
        </Container>
      </Box>
    </Box>
  );
};

export default PostLayout;
