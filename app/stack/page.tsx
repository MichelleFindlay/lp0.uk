import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        👩‍💻 The Tech Stack
      </h1>

      <p className="mb-4">
        {`📧🔑📁 Proton`}
      </p>
      
      <p className="mb-4">
        {`🛜 Ubiquiti Network`}
      </p>

      <p className="mb-4">
        {`⚡ Proxmox Hypervisor`}
      </p>

      <p className="mb-4">
        {`🗄️ Synology SAN`}
      </p>

      <p className="mb-4">
        {`🏠 Home Automation (Home Assistant)`}
      </p>

      <p className="mb-4">
        {`💡 Hue Lighting`}
      </p>

      <p className="mb-4">
        {`🎦 Synology (Various Brands of Camera)`}
      </p>

      <p className="mb-4">
        {`🪟 Windows Desktop (MSI)`}
      </p>





      
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
