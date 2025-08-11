import { Phone, Mail, Send, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-sand-dark text-white px-4 py-8">
      <div className="max-w-8xl mx-auto ml-7">
        {/* Верхняя часть футера */}
        <div className="flex flex-col md:flex-row md:justify-between gap-6">
          {/* Левая часть */}
          <div>
            <h3 className="text-3xl font-semibold mb-3">Связаться с нами</h3>
            <p>ИП: Прохоренко Ольга Александровна</p>
            <p>УНП: [укажешь сам]</p>
          </div>

          {/* Правая часть — контакты */}
          <div className="flex flex-col gap-3 mr-5">
            <a
              href="tel:+375 (29) 106-24-90"
              className="flex items-center gap-2 hover:underline"
            >
              <Phone size={20} /> +375 (29) 109-24-90
            </a>
            <a
              href="mailto:example@mail.com"
              className="flex items-center gap-2 hover:underline"
            >
              <Mail size={20} /> example@mail.com
            </a>
            <a
              href="https://t.me/olga_prokhorenko"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:underline"
            >
              <Send size={20} /> olga_prokhorenko
            </a>
            <a
              href="https://instagram.com/mins_bags"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:underline"
            >
              <Instagram size={20} /> mins_bags
            </a>
          </div>
        </div>

        {/* Нижняя полоса */}
        <div className="border-t border-white/30 mt-6 pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-white/80 mr-5">
          <p>© {new Date().getFullYear()} Mins_bags. Все права защищены.</p>
          <a href="/privacy" rel="noopener noreferrer" className="hover:underline">
            Политика конфиденциальности
          </a>
        </div>
      </div>
    </footer>
  );
}
