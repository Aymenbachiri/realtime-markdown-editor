import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Edit3,
  Users,
  History,
  Shield,
  ImageIcon,
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export default async function HomePage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await (await supabase).auth.getUser();

  return (
    <div className="flex min-h-screen flex-col">
      <header className="mx-auto w-full max-w-7xl border-b">
        <div className="container flex items-center justify-between py-4">
          <h1 className="text-2xl font-bold">Markdown Editor</h1>
          <div className="flex items-center gap-4">
            {user ? (
              <Link href="/dashboard" passHref>
                <Button>Dashboard</Button>
              </Link>
            ) : (
              <>
                <Link href="/auth/signin" passHref>
                  <Button variant="ghost">Sign In</Button>
                </Link>
                <Link href="/auth/signup" passHref>
                  <Button>Sign Up</Button>
                </Link>
              </>
            )}
            <ThemeToggle />
          </div>
        </div>
      </header>
      <main className="mx-auto w-full max-w-7xl flex-1">
        <section className="bg-muted py-20">
          <div className="container text-center">
            <h2 className="mb-6 text-4xl font-bold">
              Real-time Collaborative Markdown Editor
            </h2>
            <p className="text-muted-foreground mx-auto mb-10 max-w-2xl text-xl">
              Create, edit, and collaborate on Markdown documents in real-time
              with your team. See who&apos;s typing, track changes, and more.
            </p>
            <Link href={user ? "/dashboard" : "/auth/signup"} passHref>
              <Button size="lg" className="gap-2">
                Get Started <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>
        <section className="py-20">
          <div className="container">
            <h2 className="mb-12 text-center text-3xl font-bold">Features</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center rounded-lg border p-6 text-center">
                <Edit3 className="text-primary mb-4 h-12 w-12" />
                <h3 className="mb-2 text-xl font-semibold">
                  Real-time Collaboration
                </h3>
                <p className="text-muted-foreground">
                  Edit documents simultaneously with your team using CRDT-based
                  conflict resolution.
                </p>
              </div>
              <div className="flex flex-col items-center rounded-lg border p-6 text-center">
                <Users className="text-primary mb-4 h-12 w-12" />
                <h3 className="mb-2 text-xl font-semibold">Live Presence</h3>
                <p className="text-muted-foreground">
                  See who&apos;s online and where they&apos;re editing with
                  collaborative cursors and selections.
                </p>
              </div>
              <div className="flex flex-col items-center rounded-lg border p-6 text-center">
                <History className="text-primary mb-4 h-12 w-12" />
                <h3 className="mb-2 text-xl font-semibold">Version History</h3>
                <p className="text-muted-foreground">
                  Track changes with immutable version history and per-line
                  blame information.
                </p>
              </div>
              <div className="flex flex-col items-center rounded-lg border p-6 text-center">
                <Shield className="text-primary mb-4 h-12 w-12" />
                <h3 className="mb-2 text-xl font-semibold">
                  Role-based Permissions
                </h3>
                <p className="text-muted-foreground">
                  Control who can view, edit, or manage your documents with
                  fine-grained permissions.
                </p>
              </div>
              <div className="flex flex-col items-center rounded-lg border p-6 text-center">
                <ImageIcon className="text-primary mb-4 h-12 w-12" />
                <h3 className="mb-2 text-xl font-semibold">Image Uploads</h3>
                <p className="text-muted-foreground">
                  Drag and drop images directly into your documents with
                  automatic storage and embedding.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6">
        <div className="text-muted-foreground container text-center text-sm">
          &copy; {new Date().getFullYear()} Markdown Editor. All rights
          reserved.
        </div>
      </footer>
    </div>
  );
}
