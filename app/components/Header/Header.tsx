'use client';

import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Header() {
  const pathname = usePathname();

  const minimalPages = ["/privacy"];
  const isMinimal = minimalPages.includes(pathname);

  if(isMinimal) {
    return (
      <header className="bg-sand-dark px-10 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image 
            src="/logo.png"
            alt="Логотип Mins_bags"
            width={64}
            height={64}
            style={{ objectFit: 'contain' }}
          />
          <span className="text-white font-semibold text-3xl">Mins_bags</span>
        </div>
      </header>
    )
  }


  return (
    <header className="bg-sand-dark px-10 py-4 flex items-center justify-between">
      {/* Левая часть — логотип + название */}
      <div className="flex items-center gap-4 flex-shrink-0">
        <div className="w-16 h-16 rounded-full overflow-hidden flex items-center justify-center bg-white">
          <Image 
            src="/logo.png"
            alt="Логотип Mins_bags"
            width={64}
            height={64}
            style={{ objectFit: 'contain' }}
          /> 
        </div>
        <span className="text-white font-semibold text-3xl leading-none">
          Mins_bags
        </span>
      </div>

      {/* Правая часть — меню */}
      <nav className="flex flex-wrap gap-x-8 gap-y-2 text-2xl">
        <a href="#about" className="text-white hover:underline whitespace-nowrap">О нас</a>
        <a href="#products" className="text-white hover:underline whitespace-nowrap">Товары</a>
        <a href="#delivery" className="text-white hover:underline whitespace-nowrap">Доставка</a>
        <a href="#contacts" className="text-white hover:underline whitespace-nowrap">Контакты</a>
      </nav>
    </header>
  );
}
