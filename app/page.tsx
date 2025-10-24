export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <main className="max-w-4xl w-full">
        <div className="space-y-8">
          {/* Header */}
          <header className="text-center space-y-4">
            <h1 className="text-5xl font-bold tracking-tight">
              Ellen Ma
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Welcome to my personal website
            </p>
          </header>

          {/* Navigation */}
          <nav className="flex justify-center gap-6 text-sm">
            <a href="#about" className="hover:underline">About</a>
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>

          {/* About Section */}
          <section id="about" className="space-y-4">
            <h2 className="text-3xl font-semibold">About</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Add your bio here. Tell visitors about yourself, your interests, and what you do.
            </p>
          </section>

          {/* Projects Section */}
          <section id="projects" className="space-y-4">
            <h2 className="text-3xl font-semibold">Projects</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-2">Project 1</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Description of your project goes here.
                </p>
              </div>
              <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-2">Project 2</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Description of your project goes here.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="space-y-4">
            <h2 className="text-3xl font-semibold">Contact</h2>
            <div className="flex gap-4">
              <a
                href="https://github.com/ellenma"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                GitHub
              </a>
              <a
                href="mailto:your.email@example.com"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Email
              </a>
            </div>
          </section>
        </div>
      </main>

      <footer className="mt-16 text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} Ellen Ma. All rights reserved.</p>
      </footer>
    </div>
  );
}
