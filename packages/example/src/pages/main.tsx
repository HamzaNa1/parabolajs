import type { Parabola } from "@parabolajs/parabola";

function Header() {
  return (
    <header class="bg-base-300">
      <div className="container mx-auto py-4 flex justify-between">
        <a p-href="/" p-target="content" p-swap="welcome" class="link">
          ParabolaJs
        </a>

        <a
          href="https://github.com/webdevcody/parabolajs"
          target="_blank"
          class="link"
        >
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            class="size-6 stroke-base-content"
          >
            <title>GitHub</title>
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
          </svg>
        </a>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer class="bg-base-300">
      <div className="container mx-auto py-4">ParabolaJs</div>
    </footer>
  );
}

export function registerMain(parabola: Parabola) {
  parabola.template("main", () => {
    return (
      <>
        <Header />

        <div class="bg-base-100 py-12">
          <div
            id="content"
            p-template="welcome"
            class="mx-auto container min-h-screen"
          ></div>
        </div>

        <Footer />
      </>
    );
  });

  parabola.template("welcome", () => {
    return (
      <div>
        <h1 class="text-2xl font-bold">ParabolaJs</h1>

        <p>
          Everything is realtime and shared using Paraboljs, load up multiple
          tabs and try it out. Here are some examples below
        </p>

        <div class="flex gap-4">
          <a
            p-href="/poll"
            p-target="content"
            p-swap="poll"
            class="btn btn-primary mt-4"
          >
            Poll Example
          </a>

          <a
            p-href="/counter"
            p-target="content"
            p-swap="counter"
            class="btn btn-primary mt-4"
          >
            Counter Example
          </a>

          <a
            p-href="/views"
            p-target="content"
            p-swap="views"
            class="btn btn-primary mt-4"
          >
            Views Example
          </a>

          <a
            p-href="/chat"
            p-target="content"
            p-swap="chat"
            class="btn btn-primary mt-4"
          >
            Chat Example
          </a>

          <a
            p-href="/grid"
            p-target="content"
            p-swap="grid"
            class="btn btn-primary mt-4"
          >
            Grid Example
          </a>
        </div>
      </div>
    );
  });
}
