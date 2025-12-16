import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { CheckCircle, Users, Award, Target, MapPin, Phone, Mail, Wrench, Clock, Shield } from 'lucide-react'

export default function About() {
  const timeline = [
    {
      year: "2014",
      title: "Berdiri",
      description: "FIRMAN didirikan dengan fokus pada reparasi mesin pertanian di Tana Toraja"
    },
    {
      year: "2016",
      title: "Ekspansi Layanan",
      description: "Menambah layanan reparasi untuk mesin industri dan konstruksi"
    },
    {
      year: "2018",
      title: "Sertifikasi ISO",
      description: "Mendapatkan sertifikasi ISO 9001 untuk manajemen mutu"
    },
    {
      year: "2020",
      title: "Digitalisasi",
      description: "Meluncurkan sistem booking online dan layanan pelanggan digital"
    },
    {
      year: "2024",
      title: "10 Tahun Pengalaman",
      description: "Menjadi leader dalam reparasi mesin di Sulawesi Selatan"
    }
  ]

  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Profesionalisme",
      description: "Kami berkomitmen untuk memberikan layanan terbaik dengan standar profesionalisme tinggi."
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Kualitas",
      description: "Hasil kerja berkualitas dengan garansi untuk setiap layanan yang kami berikan."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Ketepatan Waktu",
      description: "Memahami pentingnya waktu dalam bisnis, kami selalu tepat waktu dalam setiap pelayanan."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Kepuasan Pelanggan",
      description: "Kepuasan pelanggan adalah prioritas utama kami dalam setiap interaksi."
    }
  ]

  const team = [
    {
      name: "FIRMAN",
      position: "Founder & Head Technician",
      experience: "15+ tahun",
      expertise: "Mesin Pertanian & Industri"
    },
    {
      name: "Tim Teknisi Senior",
      position: "Senior Technicians",
      experience: "10+ tahun",
      expertise: "Heavy Equipment & Genset"
    },
    {
      name: "Tim Support",
      position: "Customer Support",
      experience: "5+ tahun",
      expertise: "Layanan Pelanggan"
    }
  ]

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Tentang <span className="text-orange-400">FIRMAN</span>
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
              Spesialis reparasi mesin terpercaya dengan pengalaman lebih dari 10 tahun melayani kebutuhan industri, pertanian, dan konstruksi di Tana Toraja dan sekitarnya.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900">
                Cerita <span className="text-blue-600">FIRMAN</span>
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  <span className="font-bold text-gray-900">FIRMAN</span> berdiri pada tahun 2014 dengan visi menjadi penyedia layanan reparasi mesin terbaik di Tana Toraja. Dimulai dari bengkel kecil dengan fokus pada mesin pertanian, kami telah berkembang menjadi perusahaan reparasi mesin terkemuka di Sulawesi Selatan.
                </p>
                <p>
                  Dengan dedikasi dan komitmen terhadap kualitas, kami telah melayani lebih dari 500 pelanggan dari berbagai sektor industri. Setiap pekerjaan kami tangani dengan profesionalisme dan standar kualitas tinggi untuk memastikan kepuasan pelanggan.
                </p>
                <p>
                  Lokasi strategis di JL. KAMPUNG BALOMBONG, Desa Raru Sibunuan, Kec. Sangalla Selatan, memudahkan kami untuk melayani pelanggan di seluruh wilayah Tana Toraja dan sekitarnya dengan respon time yang cepat.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
                  <div className="text-gray-600">Tahun Pengalaman</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange-500 mb-2">500+</div>
                  <div className="text-gray-600">Pelanggan Puas</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-500 mb-2">1000+</div>
                  <div className="text-gray-600">Mesin Diperbaiki</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-500 mb-2">15+</div>
                  <div className="text-gray-600">Teknisi Ahli</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
              Perjalanan <span className="text-blue-600">Kami</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Milestone penting dalam perjalanan FIRMAN menjadi spesialis reparasi mesin terpercaya
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-center mb-8">
                <div className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold mr-6 min-w-[100px] text-center">
                  {item.year}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
              Nilai-Nilai <span className="text-blue-600">Perusahaan</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Prinsip yang memandu setiap keputusan dan tindakan kami
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
              Tim <span className="text-blue-600">Profesional</span> Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Didukung oleh tim teknisi berpengalaman dan tersertifikasi
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl font-bold">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{member.name}</h3>
                <p className="text-blue-600 mb-2">{member.position}</p>
                <p className="text-gray-600 text-sm mb-1">{member.experience} pengalaman</p>
                <p className="text-gray-500 text-sm">{member.expertise}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Visi Kami</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Menjadi penyedia layanan reparasi mesin terdepan di Indonesia yang dikenal karena kualitas, keandalan, dan inovasi dalam solusi teknis untuk berbagai industri.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <Award className="w-8 h-8 text-orange-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Misi Kami</h3>
              </div>
              <ul className="text-gray-700 space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Memberikan layanan reparasi mesin berkualitas tinggi dengan harga kompetitif</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Menggunakan teknologi modern dan suku cadang original</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Memberikan kepuasan pelanggan melalui layanan yang profesional</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Berkembang terus seiring dengan kemajuan teknologi mesin</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Hubungi <span className="text-orange-400">FIRMAN</span>
            </h2>
            <p className="text-xl text-gray-300">
              Kami siap membantu kebutuhan reparasi mesin Anda
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Alamat</h3>
              <p className="text-gray-300">
                JL. KAMPUNG BALOMBONG<br />
                Desa Raru Sibunuan, Kec. Sangalla Selatan<br />
                Kab. Tana Toraja, Sulawesi Selatan<br />
                Kode Pos: 91882
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Telepon</h3>
              <p className="text-gray-300">
                0877-2988-7794<br />
                (Layanan 24/7 untuk Darurat)
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-gray-300">
                info@firman-machine.com<br />
                support@firman-machine.com
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}