import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { compareDesc, format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import { Box, Container, Heading, useMultiStyleConfig } from "@chakra-ui/react";
import { SEO } from "components/seo";

const Blog: NextPage = ({ posts }: any) => {
  const styles = useMultiStyleConfig("Blog");
  return (
    <Box>
      <SEO title="Syft Blog" description="Free SaaS landingspage starter kit" />
      <Box position="relative" overflow="hidden">
        <Container maxW="container.xl" pt={{ base: 40, lg: 60 }} pb="40">
          <Heading size="lg" sx={styles.title}>
            Blog Example
          </Heading>
          {posts.map((post, idx) => (
            <PostCard key={idx} {...post} />
          ))}
          <a
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google
          </a>
          <a
            href="https://www.github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </Container>
      </Box>
    </Box>
  );
};

function PostCard(post) {
  return (
    <div className="mb-6">
      <time dateTime={post.date} className="block text-sm text-slate-600">
        {format(parseISO(post.date), "LLLL d, yyyy")}
      </time>
      <Heading size="md">
        <Link href={post.url}>{post.title}</Link>
      </Heading>
    </div>
  );
}

export default Blog;

export async function getStaticProps() {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });
  return { props: { posts } };
}
