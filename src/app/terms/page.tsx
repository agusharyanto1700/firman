import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Terms() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Syarat & <span className="text-orange-400">Ketentuan</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-blue-100">
              Syarat dan ketentuan layanan <span className="font-bold text-white">FIRMAN</span> untuk penggunaan jasa reparasi mesin.
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
                <h2 className="text-2xl font-bold mb-4 text-gray-900">1. Penerimaan Syarat</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Dengan menggunakan layanan reparasi mesin dari <span className="font-semibold text-blue-600">FIRMAN</span>, Anda setuju untuk terikat oleh syarat dan ketentuan ini. Jika Anda tidak setuju dengan bagian manapun dari syarat ini, Anda tidak boleh menggunakan layanan kami.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Syarat dan ketentuan ini berlaku untuk semua pelanggan, baik individu maupun perusahaan, yang menggunakan layanan reparasi mesin kami.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">2. Definisi</h2>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-gray-800">"FIRMAN"</p>
                    <p className="text-gray-600 ml-4">Merupakan nama usaha reparasi mesin yang beralamat di JL. KAMPUNG BALOMBONG, Desa Raru Sibunuan, Kec. Sangalla Selatan, Kab. Tana Toraja, Sulawesi Selatan.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">"Pelanggan"</p>
                    <p className="text-gray-600 ml-4">Individu atau perusahaan yang menggunakan layanan reparasi mesin dari FIRMAN.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">"Layanan"</p>
                    <p className="text-gray-600 ml-4">Semua jasa reparasi, maintenance, dan konsultasi mesin yang disediakan oleh FIRMAN.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">"Mesin"</p>
                    <p className="text-gray-600 ml-4">Peralatan, kendaraan, atau mesin yang akan diperbaiki atau dirawat oleh FIRMAN.</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">3. Layanan yang Disediakan</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  FIRMAN menyediakan layanan reparasi mesin meliputi:
                </p>
                <ul className="list-disc list-inside text-gray-600 ml-4 space-y-2">
                  <li>Reparasi mesin pertanian (traktor, rice mill, dll)</li>
                  <li>Reparasi generator set (genset)</li>
                  <li>Reparasi mesin konstruksi (excavator, bulldozer, dll)</li>
                  <li>Reparasi mesin industri</li>
                  <li>Reparasi mesin bengkel</li>
                  <li>Maintenance kontrak</li>
                  <li>Konsultasi teknis</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">4. Kewajiban Pelanggan</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Sebagai pelanggan, Anda setuju untuk:
                </p>
                <ul className="list-disc list-inside text-gray-600 ml-4 space-y-2">
                  <li><strong>Informasi Akurat:</strong> Memberikan informasi yang benar dan lengkap tentang mesin yang akan diperbaiki</li>
                  <li><strong>Akses Mesin:</strong> Memastikan mesin dapat diakses oleh teknisi kami</li>
                  <li><strong>Keamanan:</strong> Menjamin keamanan lokasi kerja teknisi</li>
                  <li><strong>Pembayaran:</strong> Melakukan pembayaran sesuai dengan kesepakatan</li>
                  <li><strong>Kerjasama:</strong> Memberikan informasi tambahan jika diperlukan untuk diagnosis</li>
                  <li><strong>Resiko:</strong> Bertanggung jawab atas kerusakan yang disebabkan oleh kelalaian penggunaan</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">5. Kewajiban FIRMAN</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  FIRMAN berkomitmen untuk:
                </p>
                <ul className="list-disc list-inside text-gray-600 ml-4 space-y-2">
                  <li><strong>Profesionalisme:</strong> Memberikan layanan dengan standar profesionalisme tinggi</li>
                  <li><strong>Kualitas:</strong> Menggunakan suku cadang original dan teknik reparasi yang tepat</li>
                  <li><strong>Waktu:</strong> Menyelesaikan pekerjaan sesuai dengan waktu yang disepakati</li>
                  <li><strong>Garansi:</strong> Memberikan garansi untuk setiap pekerjaan yang dilakukan</li>
                  <li><strong>Keamanan:</strong> Menjamin keamanan mesin selama proses reparasi</li>
                  <li><strong>Konsultasi:</strong> Memberikan informasi yang jelas tentang kondisi mesin</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">6. Harga dan Pembayaran</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">6.1 Penentuan Harga</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Harga layanan ditentukan berdasarkan:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 ml-4 space-y-1">
                      <li>Jenis dan kerumitan kerusakan</li>
                      <li>Suku cadang yang dibutuhkan</li>
                      <li>Waktu pengerjaan</li>
                      <li>Lokasi (untuk layanan panggilan)</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">6.2 Metode Pembayaran</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Pembayaran dapat dilakukan melalui:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 ml-4 space-y-1">
                      <li>Tunai</li>
                      <li>Transfer bank</li>
                      <li>E-wallet (jika tersedia)</li>
                      <li>Kartu kredit/debit (jika tersedia)</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">6.3 Syarat Pembayaran</h3>
                    <ul className="list-disc list-inside text-gray-600 ml-4 space-y-1">
                      <li>DP minimal 50% untuk pekerjaan di atas Rp 5.000.000</li>
                      <li>Pelunasan sebelum pengambilan mesin</li>
                      <li>Denda 2% per hari untuk keterlambatan pembayaran</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">7. Garansi</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">7.1 Masa Garansi</h3>
                    <ul className="list-disc list-inside text-gray-600 ml-4 space-y-1">
                      <li>Reparasi umum: 1-3 bulan</li>
                      <li>Overhaul mesin: 3-6 bulan</li>
                      <li>Penggantian suku cadang: 1-3 bulan</li>
                      <li>Maintenance kontrak: sesuai kontrak</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">7.2 Syarat Garansi</h3>
                    <ul className="list-disc list-inside text-gray-600 ml-4 space-y-1">
                      <li>Garansi tidak berlaku untuk kerusakan akibat kelalaian penggunaan</li>
                      <li>Garansi tidak mencakup suku cadang aus normal</li>
                      <li>Klaim garansi harus disertai bukti pembayaran</li>
                      <li>Biaya transportasi untuk klaim garansi ditanggung pelanggan</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">8. Batasan Tanggung Jawab</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  FIRMAN tidak bertanggung jawab atas:
                </p>
                <ul className="list-disc list-inside text-gray-600 ml-4 space-y-2">
                  <li>Kerugian bisnis akibat mesin tidak berfungsi</li>
                  <li>Kerusakan yang disebabkan oleh penggunaan yang tidak benar</li>
                  <li>Kerusakan akibat bencana alam atau force majeure</li>
                  <li>Data yang hilang dari mesin digital</li>
                  <li>Kerugian tidak langsung atau konsekuensial</li>
                </ul>
                <p className="text-gray-600 leading-relaxed">
                  Tanggung jawab maksimal FIRMAN adalah sebesar biaya reparasi yang telah dibayar oleh pelanggan.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">9. Pembatalan dan Pengembalian</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">9.1 Pembatalan oleh Pelanggan</h3>
                    <ul className="list-disc list-inside text-gray-600 ml-4 space-y-1">
                      <li>Pembatalan 24 jam sebelum: denda 10%</li>
                      <li>Pembatalan kurang dari 24 jam: denda 25%</li>
                      <li>Pembatalan setelah pekerjaan dimulai: pembayaran penuh</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">9.2 Pengembalian Dana</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Pengembalian dana akan diproses dalam 7-14 hari kerja setelah persetujuan.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">10. Kekayaan Intelektual</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Semua konten, merek, dan materi milik FIRMAN dilindungi oleh hukum kekayaan intelektual. Pelanggan tidak boleh:
                </p>
                <ul className="list-disc list-inside text-gray-600 ml-4 space-y-2">
                  <li>Menyalin atau mendistribusikan materi milik FIRMAN</li>
                  <li>Menggunakan nama atau logo FIRMAN tanpa izin</li>
                  <li>Membuat karya turunan dari layanan FIRMAN</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">11. Privasi</h2>
                <p className="text-gray-600 leading-relaxed">
                  Perlindungan data pribadi Anda diatur dalam Kebijakan Privasi kami yang terpisah. Dengan menggunakan layanan kami, Anda setuju dengan pengumpulan dan penggunaan data sesuai kebijakan privasi kami.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">12. Force Majeure</h2>
                <p className="text-gray-600 leading-relaxed">
                  FIRMAN tidak bertanggung jawab atas keterlambatan atau kegagalan dalam melaksanakan kewajiban jika disebabkan oleh kejadian di luar kendali kami, termasuk tetapi tidak terbatas pada bencana alam, perang, kerusuhan, pemogokan, atau regulasi pemerintah.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">13. Perubahan Syarat dan Ketentuan</h2>
                <p className="text-gray-600 leading-relaxed">
                  FIRMAN berhak mengubah syarat dan ketentuan ini kapan saja. Perubahan akan diinformasikan melalui website atau kontak pelanggan. Penggunaan layanan yang berkelanjutan setelah perubahan berarti Anda menyetujui syarat yang baru.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">14. Penyelesaian Sengketa</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Sengketa yang timbul dari penggunaan layanan kami akan diselesaikan melalui:
                </p>
                <ol className="list-decimal list-inside text-gray-600 ml-4 space-y-2">
                  <li>Musyawarah dan mufakat antara kedua belah pihak</li>
                  <li>Mediasi melalui pihak ketiga netral</li>
                  <li>Penyelesaian melalui pengadilan di wilayah hukum Tana Toraja</li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">15. Kontak</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Untuk pertanyaan atau klarifikasi mengenai syarat dan ketentuan ini, silakan hubungi:
                </p>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-2">
                    <strong>FIRMAN Machine Repair Specialist</strong>
                  </p>
                  <p className="text-gray-600 mb-1">
                    Email: info@firman-machine.com
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
                <h2 className="text-2xl font-bold mb-4 text-gray-900">16. Hukum yang Berlaku</h2>
                <p className="text-gray-600 leading-relaxed">
                  Syarat dan ketentuan ini diatur oleh dan ditafsirkan sesuai dengan hukum Republik Indonesia. Setiap perselisihan akan diselesaikan melalui yurisdiksi pengadilan di Indonesia.
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