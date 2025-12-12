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
        {`🧱🔥 Cloudflare (Too Big to Fail)`}
      </p>      

      <p className="mb-4">
        {`🧱🔥 Firewall (Now why would i tell you what vendor?)`}
      </p>      
      
      <p className="mb-4">
        {`🛜 Managed Smart Switching  (Now why would i tell you what vendor?)`}
      </p>

      <p className="mb-4">
        {`⚡ Proxmox Hypervisor`}
      </p>

      <p className="mb-4">
        {`🗄️ Synology SAN`}
      </p>

      <p className="mb-4">
        {`💡 Smart Lighting`}
      </p>

      <p className="mb-4">
        {`🌡 Smart Heating`}
      </p>

      <p className="mb-4">
        {`🎦 Synology CCTV Controller`}
      </p>

      <p className="mb-4">
        {`🔊 Sonos (Rethinking this one)`}
      </p>

      <p className="mb-4">
        {`🔊 Dolby Atmos for TV (Denon  Amp)`}
      </p>

      <p className="mb-4">
        {`🖨️ 3D Printer - Creality Ender 3 Pro `}
      </p>

      <p className="mb-4">
        {`🖨️ "Boring" Lasetjet Printer`}
      </p>

      <p className="mb-4">
        {`🏠 Home Automation (Home Assistant)`}
      </p>

      <p className="mb-4">
        {`🪟 Windows Gaming PC`}
      </p>

      <p className="mb-4">
        {`📡 Plane Radar (Pi) (Reporting to Flight Radar 24)`}
      </p>
      
      <p className="mb-4">
        {`📱 Android FTW (Mobile)`}
      </p>
      
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
