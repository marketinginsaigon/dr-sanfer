import { motion } from 'motion/react';
import {
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Award,
  BookOpen,
  CheckCircle2,
  Stethoscope,
  HeartPulse,
  Sparkles
} from 'lucide-react';
import React, { useState } from 'react';

export default function App() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900 selection:bg-rose-200">
      {/* 1. Hero Banner */}
      <header className="relative overflow-hidden bg-rose-50 text-stone-900">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1542125387-c71274d94f0a?q=80&w=2070&auto=format&fit=crop" 
            alt="Pharmaceutical background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-rose-100/90 to-white/90"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold text-rose-600 ring-1 ring-inset ring-rose-300/50 mb-6 bg-white/60 backdrop-blur-sm">
              <Award className="w-4 h-4 mr-2" />
              Chiến dịch Push Sale 2024
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-stone-900 sm:text-6xl mb-6 leading-tight">
              Đẳng Cấp Chăm Sóc Sức Khỏe & Sắc Đẹp – <span className="text-rose-500">Nền Tảng Lợi Nhuận Bền Vững.</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-stone-600">
              Ra mắt hệ sinh thái chăm sóc toàn diện: <strong>Sanfer Intimate Care</strong> & <strong>FFC Glyneru Night Collagen</strong>. Minh bạch pháp lý, tiêu chuẩn quốc tế – Đồng hành cùng sự thịnh vượng của đối tác quầy thuốc và phòng khám.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a href="#lead-form" className="rounded-md bg-rose-500 px-6 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-rose-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-400 transition-all flex items-center">
                NHẬN BÁO GIÁ & CHÍNH SÁCH ĐẠI LÝ
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </header>

      {/* 2. Problem (Nỗi đau) */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-rose-500 uppercase tracking-wider">Thấu Hiểu Thị Trường</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
              Đằng Sau Mỗi Quầy Thuốc Là Bài Toán Kinh Doanh Không Dễ Dàng...
            </p>
            <p className="mt-6 text-lg leading-8 text-stone-600">
              Chúng tôi lắng nghe tiếng nói chân thành từ các đối tác phân phối. Giữa hàng ngàn sản phẩm phụ khoa và viên uống làm đẹp trên thị trường, đâu là rào cản thực sự của bạn?
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {[
                {
                  title: 'Vòng Xoáy Cạnh Tranh Giá',
                  description: 'Biên lợi nhuận ngày càng mỏng đi trong khi chi phí vận hành tăng cao. Những dòng sản phẩm phổ thông không còn mang lại dòng tiền kỳ vọng.',
                  icon: TrendingUp,
                },
                {
                  title: 'Rủi Ro Đánh Mất Uy Tín',
                  description: 'Nguy cơ từ hàng giả, kém chất lượng đe dọa trực tiếp đến niềm tin mà bạn vất vả xây dựng với bệnh nhân và khách hàng lâu năm.',
                  icon: ShieldCheck,
                },
                {
                  title: 'Sự Đồng Hành Mờ Nhạt',
                  description: 'Thiếu vắng sự hỗ trợ marketing, đào tạo sản phẩm và chăm sóc hậu mãi từ các nhãn hàng sau khi họ chốt xong những đơn hàng đầu tiên.',
                  icon: BookOpen,
                },
              ].map((feature) => (
                <div key={feature.title} className="flex flex-col items-center text-center p-8 rounded-2xl bg-stone-50 border border-stone-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-rose-100">
                    <feature.icon className="h-8 w-8 text-rose-500" aria-hidden="true" />
                  </div>
                  <dt className="text-xl font-semibold leading-7 text-stone-900">
                    {feature.title}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-stone-600">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="mt-16 text-center">
             <p className="text-xl font-medium text-stone-800">Bạn cần nhiều hơn một sản phẩm để bán, bạn cần một <span className="text-rose-500">giải pháp kinh doanh an tâm</span>.</p>
          </div>
        </div>
      </section>

      {/* 3. Solution (Giải pháp) */}
      <section className="py-24 sm:py-32 bg-rose-50/50 text-stone-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 transform opacity-10">
           <HeartPulse className="w-96 h-96 text-rose-300" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-3xl lg:text-center mb-16">
            <h2 className="text-base font-semibold leading-7 text-rose-500 uppercase tracking-wider">Giải Pháp Vượt Trội</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Tinh Hoa Khoa Học Tự Nhiên
            </p>
            <p className="mt-4 text-xl text-stone-600">
              Không chỉ cung cấp sản phẩm, chúng tôi mang đến "Lời Cam Kết Uy Tín" cho quầy thuốc của bạn. Mỗi sản phẩm bán ra là một khách hàng trung thành quay lại.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
             {/* Product 1 */}
             <div className="bg-white rounded-2xl p-8 border border-stone-100 shadow-sm hover:shadow-md hover:border-rose-200 transition-all">
                <div className="h-12 w-12 rounded-lg bg-rose-100 flex items-center justify-center mb-6">
                   <HeartPulse className="w-6 h-6 text-rose-500" />
                </div>
                <h3 className="text-xl font-bold mb-4">Sanfer Intimate Care Lactobacillus</h3>
                <p className="text-stone-600 leading-relaxed">
                  Tiên phong bổ sung hàng tỷ lợi khuẩn, phục hồi trọn vẹn môi trường vi sinh tự nhiên vùng kín một cách an toàn và nhẹ dịu nhất. Ngăn ngừa tái phát hiệu quả.
                </p>
             </div>
             
             {/* Product 2 */}
             <div className="bg-white rounded-2xl p-8 border border-stone-100 shadow-sm hover:shadow-md hover:border-rose-200 transition-all">
                <div className="h-12 w-12 rounded-lg bg-rose-100 flex items-center justify-center mb-6">
                   <ShieldCheck className="w-6 h-6 text-rose-500" />
                </div>
                <h3 className="text-xl font-bold mb-4">Sanfer Intimate Care Antibacterial</h3>
                <p className="text-stone-600 leading-relaxed">
                  Công thức kháng khuẩn chuyên sâu, hỗ trợ dứt điểm ngứa ngáy và mùi hôi, bảo vệ toàn diện, khôi phục sự tự tin tuyệt đối suốt 24h hoạt động.
                </p>
             </div>

             {/* Product 3 */}
             <div className="bg-white rounded-2xl p-8 border border-stone-100 shadow-sm hover:shadow-md hover:border-rose-200 transition-all">
                <div className="h-12 w-12 rounded-lg bg-rose-100 flex items-center justify-center mb-6">
                   <Sparkles className="w-6 h-6 text-rose-500" />
                </div>
                <h3 className="text-xl font-bold mb-4">FFC Glyneru Night Collagen</h3>
                <p className="text-stone-600 leading-relaxed">
                  Liệu pháp tái sinh thanh xuân trong giấc ngủ. Nguồn Collagen siêu vi phân tử giúp hấp thu tối đa, đánh thức vẻ đẹp rạng rỡ, căng mọng từ sâu bên trong.
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* 4. Proof (Bằng chứng) & 5. Policy (Chính sách) */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Proof */}
            <div>
              <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold text-rose-700 ring-1 ring-inset ring-rose-600/20 mb-6 bg-rose-100">
                <Stethoscope className="w-4 h-4 mr-2" />
                Được chuyên gia khuyên dùng
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl mb-6">
                Minh Bạch Pháp Lý<br/>Trọn Vẹn Niềm Tin
              </h2>
              <p className="text-lg leading-8 text-stone-600 mb-8">
                Bởi chúng tôi hiểu: Uy tín của sản phẩm là sinh mệnh của nhà thuốc. Hành trình đến tay người tiêu dùng là hành trình của sự khắt khe.
              </p>
              
              <ul className="space-y-4">
                {[
                  '100% sản phẩm được kiểm định và cấp phép lưu hành bởi Bộ Y Tế.',
                  'Hệ thống nhà máy sản xuất đạt chuẩn GMP Quốc tế (GMP-WHO).',
                  'Nguồn nguyên liệu tinh khiết, minh bạch xuất xứ.',
                  'Được hàng trăm Dược sĩ và bác sĩ phòng khám tin chọn.'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start text-stone-700">
                    <CheckCircle2 className="w-6 h-6 text-rose-500 mr-3 flex-shrink-0" />
                    <span className="leading-6">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Policy */}
            <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-xl shadow-rose-900/5 ring-1 ring-stone-200">
              <h3 className="text-2xl font-bold text-stone-900 mb-2">Đặc Quyền Đối Tác</h3>
              <p className="text-stone-500 mb-8">Chúng tôi không tìm người mua hàng, chúng tôi tìm kiếm đối tác chiến lược để cùng phát triển.</p>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-rose-100 text-rose-600 font-bold">1</div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-stone-900">Chiết khấu cực hấp dẫn</h4>
                    <p className="mt-1 text-stone-600">Lợi nhuận gộp cao, lũy tiến minh bạch ngay từ đơn hàng đầu tiên (Nhận bảng báo giá chi tiết).</p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-rose-100 text-rose-600 font-bold">2</div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-stone-900">Bao phủ công cụ bán hàng</h4>
                    <p className="mt-1 text-stone-600">Hỗ trợ 100% chi phí POSM, Standee, kệ mica trưng bày chuẩn sang trọng.</p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-rose-100 text-rose-600 font-bold">3</div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-stone-900">Bảo vệ rủi ro tồn kho</h4>
                    <p className="mt-1 text-stone-600">Chính sách đổi trả linh hoạt lên tới 90 ngày. Hoàn toàn xóa bỏ áp lực ôm hàng.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-rose-100 text-rose-600 font-bold">4</div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-stone-900">Đào tạo 1:1 chuyên sâu</h4>
                    <p className="mt-1 text-stone-600">Tham gia các buổi training từ đội ngũ Bác sĩ, Dược sĩ chuyên môn cao của nhãn hàng.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Lead Form & CTA */}
      <section id="lead-form" className="py-24 sm:py-32 bg-rose-100">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl mb-4">
            Sẵn Sàng Trở Thành Đối Tác Chiến Lược?
          </h2>
          <p className="text-lg leading-8 text-stone-600 mb-12 max-w-2xl mx-auto">
            Đăng ký ngay hôm nay để nhận <strong>Bộ Quà Trải Nghiệm (Sample Kit)</strong> và đặc quyền <strong>chiết khấu sớm</strong> dành riêng cho 50 đối tác đầu tiên trong tháng.
          </p>

          <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-2xl text-left">
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-6">
                  <CheckCircle2 className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-stone-900 mb-2">Đăng ký thành công!</h3>
                <p className="text-stone-600">
                  Cảm ơn sự tín nhiệm của bạn. Đội ngũ chuyên viên của chúng tôi sẽ liên hệ lại qua Zalo/Điện thoại trong vòng 24h làm việc.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold leading-6 text-stone-900">Họ và Tên</label>
                    <div className="mt-2.5">
                      <input required type="text" name="name" id="name" className="block w-full rounded-md border-0 px-3.5 py-2 text-stone-900 shadow-sm ring-1 ring-inset ring-stone-300 placeholder:text-stone-400 focus:ring-2 focus:ring-inset focus:ring-rose-600 sm:text-sm sm:leading-6" placeholder="Nhập tên người đại diện..." />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold leading-6 text-stone-900">Số điện thoại (Zalo)</label>
                    <div className="mt-2.5">
                      <input required type="tel" name="phone" id="phone" className="block w-full rounded-md border-0 px-3.5 py-2 text-stone-900 shadow-sm ring-1 ring-inset ring-stone-300 placeholder:text-stone-400 focus:ring-2 focus:ring-inset focus:ring-rose-600 sm:text-sm sm:leading-6" placeholder="Để chúng tôi liên hệ tư vấn..." />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="business" className="block text-sm font-semibold leading-6 text-stone-900">Tên Nhà thuốc / Đại lý / Phòng khám</label>
                    <div className="mt-2.5">
                      <input required type="text" name="business" id="business" className="block w-full rounded-md border-0 px-3.5 py-2 text-stone-900 shadow-sm ring-1 ring-inset ring-stone-300 placeholder:text-stone-400 focus:ring-2 focus:ring-inset focus:ring-rose-600 sm:text-sm sm:leading-6" placeholder="Ví dụ: Nhà thuốc Tâm An..." />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="location" className="block text-sm font-semibold leading-6 text-stone-900">Khu vực (Tỉnh/Thành phố)</label>
                    <div className="mt-2.5">
                      <input required type="text" name="location" id="location" className="block w-full rounded-md border-0 px-3.5 py-2 text-stone-900 shadow-sm ring-1 ring-inset ring-stone-300 placeholder:text-stone-400 focus:ring-2 focus:ring-inset focus:ring-rose-600 sm:text-sm sm:leading-6" placeholder="Ví dụ: TP. Hồ Chí Minh" />
                    </div>
                  </div>
                </div>
                
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex w-full justify-center items-center rounded-md bg-rose-600 px-3 py-4 text-base font-semibold text-white shadow-sm hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600 disabled:opacity-70 transition-all font-sans"
                  >
                    {isSubmitting ? 'ĐANG GỬI THÔNG TIN...' : 'TRỞ THÀNH ĐỐI TÁC NGAY'}
                  </button>
                  <p className="mt-4 text-center text-sm text-stone-500">
                    Bằng việc đăng ký, bạn đồng ý nhận thông tin tư vấn và CSKH từ chúng tôi.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-stone-100 py-12 text-center text-stone-500 text-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
           <p>© 2024 Sanfer & FFC. All rights reserved.</p>
           <p className="mt-2">Professional Care For Your Practice.</p>
        </div>
      </footer>
    </div>
  );
}

