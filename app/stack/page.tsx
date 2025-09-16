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
        {`🧱🔥 Cloudflare`}
      </p>      

      <p className="mb-4">
        {`🧱🔥 Firewall (Now why would i tell you what vendor?)`}
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
        {`💡 Hue Lighting`}
      </p>

      <p className="mb-4">
        {`🌡 Hive`}
      </p>

      <p className="mb-4">
        {`🎦 Synology (Various Brands of Camera)`}
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
        {`🖨️ "Boring" Printer - HP Laserjet`}
      </p>

      <p className="mb-4">
        {`🏠 Home Automation (Home Assistant)`}
      </p>

      <p className="mb-4">
        {`🪟 Windows Desktop (MSI)`}
      </p>

      <p className="mb-4">
        {`📡 Plane Radar (https://radar.lp0.uk/ reporting to Flight Radar 24 `}
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
