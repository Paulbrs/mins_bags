'use client';

import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="flex justify-center px-12 py-16 min-h-screen bg-gray-50">
      <section className="max-w-3xl bg-white shadow-md rounded-lg p-10">
        <h1 className="text-center text-4xl font-semibold mb-8 text-gray-800">
          Политика конфиденциальности
        </h1>
        <p className="text-lg leading-relaxed text-gray-700 space-y-6">
          <span>
            На нашем сайте <b>не собираются и не обрабатываются персональные данные пользователей</b>.
          </span>
          <span>
            Мы не используем формы для сбора информации, не применяем куки для трекинга и не подключаем сторонние сервисы аналитики.
          </span>
          <span>
            Вы можете свободно просматривать содержимое сайта, не беспокоясь о передаче личной информации.
          </span>
          <span>
            Если в будущем на сайте появятся функции, связанные с обработкой данных, мы обязательно уведомим об этом пользователей и обновим данную страницу.
          </span>
          <span className='flex justify-center pt-30'>
            <Link className=" px-6 py-3 bg-sand-dark text-white rounded-2xl hover:underline transition" href="/">
                Вернуться на главную
            </Link>
          </span>
        </p>
      </section>
    </main>
  );
}
