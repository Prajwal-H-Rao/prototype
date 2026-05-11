import { Container, Heading } from "@/components";

export default function Home() {
  return (
    <main className="min-h-dvh py-16">
      <Container className="space-y-4">
        <Heading>Prototype</Heading>
        <p className="text-base text-zinc-600 dark:text-zinc-400">
          Replace this page and start building.
        </p>
      </Container>
    </main>
  );
}
