import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Privacy() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Kebijakan <span className="text-orange-400">Privasi</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-blue-100">
              Kebijakan privasi <span className="font-bold text-white">FIRMAN</span> untuk melindungi data dan informasi pribadi Anda.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <div className="bg-gray-50 p-8 rounded-xl mb-8">
              <p className="text-gray-600 leading-relaxed">
                Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">1. Pendahuluan</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Selamat datang di kebijakan privasi <span className="font-semibold text-blue-600">FIRMAN</span>. Kami sangat menghargai privasi Anda dan berkomitmen untuk melindungi data pribadi yang Anda berikan kepada kami. Kebijakan privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda ketika menggunakan layanan reparasi mesin kami.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Dengan menggunakan layanan kami, Anda menyetujui pengumpulan dan penggunaan data sesuai dengan kebijakan ini.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">2. Informasi yang Kami Kumpulkan</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">2.1 Informasi Pribadi</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Kami dapat mengumpulkan informasi pribadi berikut:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 ml-4 space-y-1">
                      <li>Nama lengkap</li>
                      <li>Alamat email</li>
                      <li>Nomor telepon</li>
                      <li>Alamat lengkap</li>
                      <li>Informasi pembayaran</li>
                      <li>Data perusahaan (jika berlaku)</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">2.2 Informasi Teknis</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Informasi teknis yang kami kumpulkan meliputi:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 ml-4 space-y-1">
                      <li>Alamat IP</li>
                      <li>Jenis browser</li>
                      <li>Sistem operasi</li>
                      <li>Data penggunaan website</li>
                      <li>Cookies dan data tracking</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">2.3 Informasi Layanan</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Informasi terkait layanan yang Anda gunakan:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 ml-4 space-y-1">
                      <li>Jenis mesin yang diperbaiki</li>
                      <li>Riwayat servis</li>
                      <li>Informasi garansi</li>
                      <li>Catatan teknis</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">3. Penggunaan Informasi</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Kami menggunakan informasi yang Anda berikan untuk:
                </p>
                <ul className="list-disc list-inside text-gray-600 ml-4 space-y-2">
                  <li><strong>Menyediakan Layanan:</strong> Untuk memberikan layanan reparasi mesin yang Anda butuhkan</li>
                  <li><strong>Komunikasi:</strong> Menghubungi Anda terkait layanan, penawaran, dan update</li>
                  <li><strong>Penagihan:</strong> Memproses pembayaran dan mengirim invoice</li>
                  <li><strong>Penyempurnaan Layanan:</strong> Menganalisis data untuk meningkatkan kualitas layanan</li>
                  <li><strong>Keamanan:</strong> Melindungi dari penipuan dan penyalahgunaan</li>
                  <li><strong>Legal:</strong> Mematuhi kewajiban hukum dan peraturan yang berlaku</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">4. Berbagi Informasi</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Kami tidak menjual, menyewakan, atau membagikan informasi pribadi Anda kepada pihak ketiga tanpa persetujuan Anda, kecuali dalam kondisi berikut:
                </p>
                <ul className="list-disc list-inside text-gray-600 ml-4 space-y-2">
                  <li><strong>Penyedia Layanan:</strong> Pihak ketiga yang membantu kami menyediakan layanan (payment gateway, hosting, dll)</li>
                  <li><strong>Kewajiban Hukum:</strong> Jika diwajibkan oleh hukum atau perintah pengadilan</li>
                  <li><strong>Perlindungan:</strong> Untuk melindungi hak, properti, atau keselamatan kami atau pelanggan lain</li>
                  <li><strong>Transfer Bisnis:</strong> Dalam kasus merger, akuisisi, atau penjualan aset perusahaan</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">5. Keamanan Data</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  <span className="font-semibold text-blue-600">FIRMAN</span> berkomitmen untuk melindungi keamanan data pribadi Anda dengan:
                </p>
                <ul className="list-disc list-inside text-gray-600 ml-4 space-y-2">
                  <li>Enkripsi data saat transmisi dan penyimpanan</li>
                  <li>Akses terbatas ke informasi pribadi</li>
                  <li>System keamanan yang terus diperbarui</li>
                  <li>Training reguler untuk staf tentang keamanan data</li>
                  <li>Backup data yang aman</li>
                </ul>
                <p className="text-gray-600 leading-relaxed mt-4">
                  Namun, perlu diingat bahwa tidak ada sistem yang 100% aman. Kami tidak dapat menjamin keamanan absolut data Anda.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">6. Hak Anda</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Anda memiliki hak terhadap data pribadi Anda:
                </p>
                <ul className="list-disc list-inside text-gray-600 ml-4 space-y-2">
                  <li><strong>Akses:</strong> Meminta salinan data pribadi yang kami simpan</li>
                  <li><strong>Koreksi:</strong> Memperbaiki data yang tidak akurat</li>
                  <li><strong>Penghapusan:</strong> Meminta penghapusan data pribadi Anda</li>
                  <li><strong>Pembatasan:</strong> Membatasi penggunaan data Anda</li>
                  <li><strong>Portabilitas:</strong> Meminta transfer data ke pihak ketiga</li>
                  <li><strong>Penolakan:</strong> Menolak penggunaan data untuk tujuan tertentu</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">7. Cookies</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Website kami menggunakan cookies untuk:
                </p>
                <ul className="list-disc list-inside text-gray-600 ml-4 space-y-2">
                  <li>Mengingat preferensi Anda</li>
                  <li>Menganalisis traffic website</li>
                  <li>Mempersonalisasi pengalaman pengguna</li>
                  <li>Menyediakan fitur social media</li>
                </ul>
                <p className="text-gray-600 leading-relaxed">
                  Anda dapat mengatur cookies melalui pengaturan browser Anda.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">8. Penyimpanan Data</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Kami menyimpan data pribadi Anda selama:
                </p>
                <ul className="list-disc list-inside text-gray-600 ml-4 space-y-2">
                  <li>Diperlukan untuk menyediakan layanan</li>
                  <li>Memenuhi kewajiban hukum dan perpajakan</li>
                  <li>Menyelesaikan perselisihan</li>
                  <li>Menegakkan perjanjian kami</li>
                </ul>
                <p className="text-gray-600 leading-relaxed">
                  Setelah periode tersebut, data akan dihapus atau di-anonimkan.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">9. Perubahan Kebijakan</h2>
                <p className="text-gray-600 leading-relaxed">
                  Kami dapat memperbarui kebijakan privasi ini dari waktu ke waktu. Perubahan akan diinformasikan melalui website atau email Anda. Penggunaan layanan yang berkelanjutan berarti Anda menyetujui perubahan tersebut.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">10. Kontak Kami</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Jika Anda memiliki pertanyaan atau keluhan tentang kebijakan privasi kami, silakan hubungi:
                </p>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-2">
                    <strong>FIRMAN Machine Repair Specialist</strong>
                  </p>
                  <p className="text-gray-600 mb-1">
                    Email: privacy@firman-machine.com
                  </p>
                  <p className="text-gray-600 mb-1">
                    Telepon: 0877-2988-7794
                  </p>
                  <p className="text-gray-600">
                    Alamat: JL. KAMPUNG BALOMBONG, Desa Raru Sibunuan, Kec. Sangalla Selatan, Kab. Tana Toraja, Sulawesi Selatan, 91882
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">11. Hukum yang Berlaku</h2>
                <p className="text-gray-600 leading-relaxed">
                  Kebijakan privasi ini diatur oleh hukum Republik Indonesia. Setiap perselisihan akan diselesaikan melalui perundingan atau melalui yurisdiksi pengadilan di Indonesia.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}