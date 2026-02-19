import Image from 'next/image'

const outputs = [
  {
    src: '/assets/ui-output-linkedin.png',
    label: 'LinkedIn Post',
  },
  {
    src: '/assets/ui-output-blog.png',
    label: 'Blog Post Intro',
  },
  {
    src: '/assets/ui-output-tweet.png',
    label: 'Tweet Thread',
  },
]

export default function OutputShowcase() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
          One conversation. Every format.
        </h2>
        <p className="text-gray-500 text-center mb-14 max-w-2xl mx-auto">
          Ideoloop turns a single session into content across every platform you publish on.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {outputs.map((output) => (
            <div key={output.label} className="flex flex-col gap-3">
              <p className="text-sm font-semibold text-gray-500 text-center">{output.label}</p>
              <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                <Image
                  src={output.src}
                  alt={output.label}
                  width={600}
                  height={480}
                  className="w-full h-auto"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
