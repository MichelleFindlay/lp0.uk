import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Hey I'm Michelle
      </h1>
      <p className="mb-4">
        {`🏳️‍⚧️⚤🏳️‍🌈🏴‍☠️
          30 "ish" year old person. Loves to Binge films and tv. All opinions are my own and not that of my employers et cetera et cetera.`}
      </p>
      <p className="mb-4">
        {`Chief Harlequin at Jesters Court`}
      </p>

      <p className="mb-4">
        {`Trustee at Pride in Gloucestershire`}
      </p>

          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/MichelleFindlay/lp0.uk"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">view source</p>
          </a>
      
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
