import { Container, Heading, Terminal } from "@/components";
import { getHealth } from "@/lib/api/health";

export default async function Home() {
  const data = await getHealth();
  return (
    <main className="min-h-dvh py-16">
      <Container className="space-y-4">
        <Heading>Prototype</Heading>
        <p className="text-base text-zinc-600 dark:text-zinc-400">
          Replace this page and start building.
        </p>
        <div>Backend status:{data.status}</div>
        <Terminal />
      </Container>
    </main>
  );
}
