import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { CheckCircle, Wrench, Clock, Shield, Phone, ArrowRight, Star } from 'lucide-react'

export default function Services() {
  const services = [
    {
      title: "Reparasi Mesin Pertanian",
      description: "Perbaikan dan maintenance untuk berbagai jenis mesin pertanian modern dan tradisional.",
      icon: "🚜",
      features: [
        "Traktor roda 2 dan roda 4",
        "Mesin Rice Mill",
        "Mesin Perontok Padi",
        "Sprayer Manual dan Elektrik",
        "Mesin Penanam Benih"
      ],
      price: "Mulai dari Rp 500.000"
    },
    {
      title: "Reparasi Generator Set (Genset)",
      description: "Layanan lengkap untuk perbaikan dan maintenance generator set berbagai kapasitas.",
      icon: "⚡",
      features: [
        "Genset Portable (1-10 KVA)",
        "Genset Industrial (10-500 KVA)",
        "Overhaul Engine",
        "Repair Electrical System",
        "Maintenance Rutin"
      ],
      price: "Mulai dari Rp 750.000"
    },
    {
      title: "Reparasi Mesin Konstruksi",
      description: "Spesialis perbaikan heavy equipment dan mesin konstruksi berbagai merek.",
      icon: "🏗️",
      features: [
        "Excavator & Bulldozer",
        "Wheel Loader & Backhoe",
        "Compactor & Motor Grader",
        "Tower Crane & Hoist",
        "Concrete Mixer"
      ],
      price: "Mulai dari Rp 1.000.000"
    },
    {
      title: "Reparasi Mesin Industri",
      description: "Perbaikan mesin produksi dan manufacturing untuk berbagai industri.",
      icon: "🏭",
      features: [
        "Mesin Bubut & Milling",
        "Conveyor System",
        "Packaging Machine",
        "Printing Press",
        "CNC Machine"
      ],
      price: "Mulai dari Rp 800.000"
    },
    {
      title: "Reparasi Mesin Bengkel",
      description: "Layanan perbaikan untuk berbagai peralatan bengkel otomotif dan umum.",
      icon: "🔧",
      features: [
        "Engine Hoist",
        "Compressor",
        "Tire Changer",
        "Wheel Alignment",
        "Car Lift"
      ],
      price: "Mulai dari Rp 400.000"
    },
    {
      title: "Maintenance Kontrak",
      description: "Layanan maintenance berkala untuk mencegah kerusakan dan memastikan performa optimal.",
      icon: "📋",
      features: [
        "Inspection Bulanan",
        "Preventive Maintenance",
        "Emergency Support 24/7",
        "Spare Parts Replacement",
        "Technical Report"
      ],
      price: "Mulai dari Rp 2.000.000/bulan"
    }
  ]

  const benefits = [
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Teknisi Berpengalaman",
      description: "Tim kami memiliki pengalaman lebih dari 10 tahun dalam reparasi berbagai jenis mesin."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Layanan Cepat",
      description: "Respon time maksimal 24 jam untuk layanan darurat di seluruh wilayah Tana Toraja."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Garansi 100%",
      description: "Semua pekerjaan kami bergaransi hingga 6 bulan untuk jaminan kualitas terbaik."
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Spare Parts Original",
      description: "Menggunakan suku cadang asli dan berkualitas untuk hasil perbaikan yang maksimal."
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
              Layanan <span className="text-orange-400">Reparasi Mesin</span> Profesional
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
              <span className="font-bold text-white text-2xl">FIRMAN</span> menyediakan layanan reparasi mesin komprehensif untuk berbagai kebutuhan industri, pertanian, dan konstruksi Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg">
                <Phone className="inline-block w-5 h-5 mr-2" />
                Konsultasi Gratis
              </button>
              <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-700 px-8 py-4 rounded-lg font-semibold transition-all">
                Lihat Portofolio
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
              Semua Layanan <span className="text-blue-600">FIRMAN</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kami menangani berbagai jenis mesin dengan teknisi profesional dan peralatan modern
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 text-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="text-4xl bg-white/20 p-3 rounded-lg">
                        {service.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{service.title}</h3>
                        <p className="text-blue-100 text-sm">{service.price}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Layanan meliputi:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors group-hover:bg-blue-700">
                    Pesan Layanan Ini
                    <ArrowRight className="inline-block w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
              Keunggulan Layanan <span className="text-blue-600">FIRMAN</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mengapa ribuan pelanggan mempercayakan mesin mereka kepada kami
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
              Proses Pelayanan <span className="text-blue-600">Mudah & Cepat</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              4 langkah sederhana untuk mendapatkan layanan reparasi mesin terbaik
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Konsultasi", desc: "Hubungi kami untuk konsultasi gratis tentang masalah mesin Anda" },
              { step: "2", title: "Inspeksi", desc: "Tim kami akan melakukan inspeksi menyeluruh untuk mendiagnosis masalah" },
              { step: "3", title: "Perbaikan", desc: "Teknisi profesional kami akan melakukan perbaikan dengan presisi" },
              { step: "4", title: "Testing", desc: "Mesin diuji coba untuk memastikan berfungsi dengan baik" }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {process.step}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">{process.title}</h3>
                <p className="text-gray-600 text-sm">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
            Siap Memperbaiki Mesin Anda?
          </h2>
          <p className="text-xl mb-8 text-orange-100 max-w-2xl mx-auto">
            Hubungi <span className="font-bold text-white">FIRMAN</span> sekarang juga untuk mendapatkan layanan reparasi mesin profesional dengan garansi terbaik.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all">
              <Phone className="inline-block w-5 h-5 mr-2" />
              0877-2988-7794
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-lg font-semibold transition-all">
              Request Quote Online
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}