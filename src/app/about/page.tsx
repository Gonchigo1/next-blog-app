export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-purple-50 to-pink-50 p-6 md:p-10">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl border border-gray-200 p-8 md:p-12 space-y-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-purple-700 flex items-center gap-2">
          🧾 <span>Бидний тухай</span>
        </h1>
        <p className="text-lg leading-relaxed text-gray-700">
          Самнах машины тооцооллын веб платформ нь үйлдвэрлэлийн инженерүүд,
          техникчид болон мэргэжилтнүүдэд зориулсан нарийн мэргэжлийн тооцооны
          хэрэгсэл юм. Манай зорилго бол хэрэглэгчдэд самнах процессын үндсэн
          үзүүлэлтүүдийг хялбар, хурдан бөгөөд алдаагүй тооцоолох боломжийг олгох юм.
        </p>

        <section>
          <h2 className="text-3xl font-bold text-sky-700 mb-3">🎯 Бидний эрхэм зорилго</h2>
          <ul className="list-disc list-inside pl-4 space-y-2 text-base text-gray-800">
            <li>Тооцооллыг автоматжуулах замаар хэрэглэгчийн цагийг хэмнэх</li>
            <li>Үр ашигтай үйлдвэрлэлд дэмжлэг үзүүлэх</li>
            <li>Техникийн мэдлэг шаардсан тооцооллыг хүн бүрт ойлгомжтой болгох</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-pink-700 mb-3">🛠️ Юуг бид санал болгодог вэ?</h2>
          <ul className="list-disc list-inside pl-4 space-y-2 text-base text-gray-800">
            <li>Самнах машины үндсэн параметрүүдийг тооцоолох олон төрлийн загвар</li>
            <li>Хялбар хэрэглэгчийн интерфэйс</li>
            <li>Үр дүнг хадгалах, хуваалцах боломж</li>
            <li>Үргэлж сайжирч хөгжиж буй платформ</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-green-700 mb-3">🤝 Та бүхний итгэл бидний урам зориг</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            Бид таны хэрэгцээ шаардлагад нийцсэн, найдвартай, мэргэжлийн шийдэл хүргэхийг зорьдог.
            Хамтдаа илүү үр бүтээлтэй, технологид суурилсан үйлдвэрлэлийг бүтээцгээе!
          </p>
        </section>
      </div>
    </div>
  );
}
