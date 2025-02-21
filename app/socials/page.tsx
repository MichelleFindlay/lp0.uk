import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Contact Me
      </h1>
      <p className="mb-4">
        {`📧 Send me an e-mail at mf@lp0.uk`}
      </p>

      <p className="mb-4">
        {`🌐 Mention or DM me on Bluesky`}
      </p>

      <p className="mb-4">
        {`👥 Connect with me on Mastodon`}
      </p>
      
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
