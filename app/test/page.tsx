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
      
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}

