export default function AboutPage() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="bg-card rounded-xl shadow-sm p-6 space-y-4 text-muted-foreground">
        <h1 className="text-3xl font-bold text-foreground">🧾 Бидний тухай</h1>
        <p>
          Самнах машины тооцооллын веб платформ нь үйлдвэрлэлийн инженерүүд,
          техникчид болон мэргэжилтнүүдэд зориулсан нарийн мэргэжлийн тооцооны
          хэрэгсэл юм. Манай зорилго бол хэрэглэгчдэд самнах процессын үндсэн
          үзүүлэлтүүдийг хялбар, хурдан бөгөөд алдаагүй тооцоолох боломжийг
          олгох юм.
        </p>

        <h2 className="text-2xl font-semibold text-foreground mt-6">🎯 Бидний эрхэм зорилго</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Тооцооллыг автоматжуулах замаар хэрэглэгчийн цагийг хэмнэх</li>
          <li>Үр ашигтай үйлдвэрлэлд дэмжлэг үзүүлэх</li>
          <li>Техникийн мэдлэг шаардсан тооцооллыг хүн бүрт ойлгомжтой болгох</li>
        </ul>

        <h2 className="text-2xl font-semibold text-foreground mt-6">🛠️ Юуг бид санал болгодог вэ?</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Самнах машины үндсэн параметрүүдийг тооцоолох олон төрлийн загвар</li>
          <li>Хялбар хэрэглэгчийн интерфэйс</li>
          <li>Үр дүнг хадгалах, хуваалцах боломж</li>
          <li>Үргэлж сайжирч хөгжиж буй платформ</li>
        </ul>

        <h2 className="text-2xl font-semibold text-foreground mt-6">🤝 Та бүхний итгэл бидний урам зориг</h2>
        <p>
          Бид таны хэрэгцээ шаардлагад нийцсэн, найдвартай, мэргэжлийн шийдэл
          хүргэхийг зорьдог. Хамтдаа илүү үр бүтээлтэй, технологид суурилсан
          үйлдвэрлэлийг бүтээцгээе!
        </p>
      </div>
    </div>
  );
}
