import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Socials
      </h1>

      <p className="mb-4">
        {`🌐 @lp0.uk on Bluesky`}
      </p>

      <p className="mb-4">
        {`👥 @lp0 on Mastodon (mastodon.online)`}
      </p>

      <p className="mb-4">
        {`📓 lp0nfire on Reddit`}
      </p>
      
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
