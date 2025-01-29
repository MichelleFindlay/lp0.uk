import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Hey I'm Michelle
      </h1>
      <p className="mb-4">
        {`🏳️‍⚧️⚤🏳️‍🌈🏴‍☠️</p>
        
        <p className="mb-4">30 "ish" year old person. Loves to Binge films and tv. All opinions are my own and not that of my employers et cetera et cetera.</p>

<p className="mb-4">Chief Harlequin at <a className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100" rel="noopener noreferrer" target="_blank" href="https://www.jesterscourt.uk"> <ArrowIcon /> <p className="ml-2 h-7">@jesterscourt.uk</p></a></p>

<p className="mb-4">Trustee at <a className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100" rel="noopener noreferrer" target="_blank" href="https://www.prideinglos.org.uk"> <ArrowIcon /> <p className="ml-2 h-7">@prideinglos.org.uk</p></a></p>
`}
      
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
