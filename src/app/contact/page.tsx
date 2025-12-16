'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    serviceType: ''
  })
  
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitted(true)
    setIsSubmitting(false)
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      serviceType: ''
    })
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Alamat Workshop",
      details: [
        "JL. KAMPUNG BALOMBONG",
        "Desa Raru Sibunuan, Kec. Sangalla Selatan",
        "Kab. Tana Toraja, Sulawesi Selatan",
        "Kode Pos: 91882"
      ]
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Telepon & WhatsApp",
      details: [
        "0877-2988-7794 (Hotline)",
        "Senin - Sabtu: 08:00 - 18:00",
        "Minggu: 09:00 - 15:00",
        "Layanan Darurat: 24/7"
      ]
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: [
        "info@firman-machine.com",
        "support@firman-machine.com",
        "emergency@firman-machine.com",
        "Response time: 2-4 jam"
      ]
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Jam Operasional",
      details: [
        "Senin - Jumat: 08:00 - 18:00",
        "Sabtu: 08:00 - 15:00",
        "Minggu: 09:00 - 15:00",
        "Layanan Darurat: 24/7"
      ]
    }
  ]

  const faqs = [
    {
      question: "Apakah ada garansi untuk layanan reparasi?",
      answer: "Ya, semua layanan reparasi kami bergaransi hingga 6 bulan tergantung jenis perbaikan."
    },
    {
      question: "Berapa lama waktu pengerjaan reparasi?",
      answer: "Waktu pengerjaan bervariasi dari 1-7 hari tergantung kerusakan dan ketersediaan spare parts."
    },
    {
      question: "Apakah melayani panggilan darurat?",
      answer: "Ya, kami melayani panggilan darurat 24/7 untuk wilayah Tana Toraja dan sekitarnya."
    },
    {
      question: "Apakah menggunakan suku cadang original?",
      answer: "Ya, kami hanya menggunakan suku cadang original dan berkualitas untuk hasil terbaik."
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
              Hubungi <span className="text-orange-400">FIRMAN</span>
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
              Kami siap membantu kebutuhan reparasi mesin Anda. Hubungi kami untuk konsultasi gratis atau penawaran terbaik.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-4 text-blue-600">
                  {info.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900">{info.title}</h3>
                <ul className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <li key={idx} className="text-gray-600 text-sm">{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Kirim Pesan <span className="text-blue-600">Langsung</span>
              </h2>
              <p className="text-gray-600 mb-8">
                Isi form di bawah ini dan tim kami akan segera menghubungi Anda dalam 2-4 jam.
              </p>
              
              {isSubmitted && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg mb-6 flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Pesan Anda telah terkirim! Kami akan segera menghubungi Anda.
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Telepon *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="0812-3456-7890"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Jenis Layanan
                    </label>
                    <select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Pilih Layanan</option>
                      <option value="pertanian">Mesin Pertanian</option>
                      <option value="genset">Generator Set</option>
                      <option value="konstruksi">Mesin Konstruksi</option>
                      <option value="industri">Mesin Industri</option>
                      <option value="bengkel">Mesin Bengkel</option>
                      <option value="maintenance">Maintenance Kontrak</option>
                      <option value="lainnya">Lainnya</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Subjek *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Butuh bantuan reparasi mesin"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Pesan *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Jelaskan masalah mesin Anda secara detail..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white py-4 rounded-lg font-semibold transition-colors flex items-center justify-center"
                >
                  {isSubmitting ? (
                    "Mengirim..."
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Kirim Pesan
                    </>
                  )}
                </button>
              </form>
            </div>
            
            {/* Map & Quick Contact */}
            <div>
              <div className="bg-gray-100 h-96 rounded-xl mb-8 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className="w-12 h-12 mx-auto mb-4" />
                  <p className="text-lg font-medium">Lokasi Workshop</p>
                  <p className="text-sm">JL. KAMPUNG BALOMBONG, Tana Toraja</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Butuh Bantuan Cepat?</h3>
                <p className="text-gray-600 mb-6">
                  Untuk layanan darurat, hubungi kami langsung melalui telepon atau WhatsApp.
                </p>
                
                <div className="space-y-4">
                  <a 
                    href="tel:087729887794"
                    className="block bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors text-center"
                  >
                    <Phone className="inline-block w-5 h-5 mr-2" />
                    0877-2988-7794
                  </a>
                  
                  <a 
                    href="https://wa.me/627729887794"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors text-center"
                  >
                    <Send className="inline-block w-5 h-5 mr-2" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
              Pertanyaan yang <span className="text-blue-600">Sering Diajukan</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Temukan jawaban untuk pertanyaan umum tentang layanan kami
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md mb-4">
                <h3 className="text-lg font-semibold mb-3 text-gray-900">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}