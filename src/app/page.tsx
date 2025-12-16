import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { CheckCircle, Wrench, Clock, Users, Shield, Phone, Mail, MapPin, ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Spesialis Reparasi <span className="text-orange-400">Mesin</span> Terpercaya di Tana Toraja
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                <span className="font-bold text-white text-2xl">FIRMAN</span> - Solusi terbaik untuk perbaikan dan maintenance mesin industri, pertanian, dan konstruksi Anda. Bergaransi, profesional, dan terpercaya.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg">
                  <Phone className="inline-block w-5 h-5 mr-2" />
                  Hubungi Kami Sekarang
                </button>
                <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-700 px-8 py-4 rounded-lg font-semibold transition-all">
                  Lihat Layanan Kami
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-400">10+</div>
                    <div className="text-sm text-blue-100">Tahun Pengalaman</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-400">500+</div>
                    <div className="text-sm text-blue-100">Pelanggan Puas</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-400">24/7</div>
                    <div className="text-sm text-blue-100">Layanan Darurat</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-400">100%</div>
                    <div className="text-sm text-blue-100">Bergaransi</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
              Mengapa Memilih <span className="text-blue-600">FIRMAN</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kami adalah pilihan terbaik untuk kebutuhan reparasi mesin Anda karena dedikasi dan profesionalisme kami
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Wrench className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Teknisi Profesional</h3>
              <p className="text-gray-600">
                Tim teknisi berpengalaman dan tersertifikasi untuk menangani berbagai jenis mesin dengan presisi tinggi.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Pelayanan Cepat</h3>
              <p className="text-gray-600">
                Respon cepat untuk layanan darurat 24/7. Kami memahami bahwa waktu adalah uang dalam bisnis Anda.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Garansi Layanan</h3>
              <p className="text-gray-600">
                Semua pekerjaan kami bergaransi untuk memberikan Anda ketenangan pikiran dan jaminan kualitas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
              Layanan <span className="text-blue-600">Unggulan</span> Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Berbagai jenis layanan reparasi mesin untuk memenuhi kebutuhan industri Anda
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Mesin Pertanian", desc: "Traktor, rice mill, dll", icon: "🚜" },
              { title: "Mesin Konstruksi", desc: "Excavator, bulldozer, dll", icon: "🏗️" },
              { title: "Generator Set", desc: "Genset berbagai kapasitas", icon: "⚡" },
              { title: "Mesin Industri", desc: "Produksi dan manufaktur", icon: "🏭" }
            ].map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl hover:shadow-lg transition-all hover:scale-105">
                <div className="text-4xl mb-4 text-center">{service.icon}</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 text-center">{service.title}</h3>
                <p className="text-gray-600 text-center text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center">
              Lihat Semua Layanan
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
            Butuh Bantuan Reparasi Mesin?
          </h2>
          <p className="text-xl mb-8 text-orange-100 max-w-2xl mx-auto">
            Hubungi <span className="font-bold text-white">FIRMAN</span> sekarang juga untuk konsultasi gratis dan penawaran terbaik untuk kebutuhan reparasi mesin Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all">
              <Phone className="inline-block w-5 h-5 mr-2" />
              0877-2988-7794
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-lg font-semibold transition-all">
              <Mail className="inline-block w-5 h-5 mr-2" />
              Kirim Email
            </button>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Alamat</h3>
              <p className="text-gray-300">
                JL. KAMPUNG BALOMBONG, Desa Raru Sibunuan<br />
                Kec. Sangalla Selatan, Kab. Tana Toraja<br />
                Sulawesi Selatan, 91882
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