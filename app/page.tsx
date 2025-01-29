import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        “We exist without nationality, skin color, or religious bias.”
      </h1>
      <p className="mb-4">
        {`FYI man, alright. You could sit at home, and do like absolutely nothing, and your name goes through like 17 computers a day. 1984? Yeah right, man. That's a typo. Orwell is here now. He's livin' large. We have no names, man. No names. We are nameless!`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
