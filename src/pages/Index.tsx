import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-inter">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="font-playfair text-2xl font-bold text-primary">
              Пионерский
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#apartments" className="text-gray-600 hover:text-primary transition-colors">Апартаменты</a>
              <a href="#location" className="text-gray-600 hover:text-primary transition-colors">Расположение</a>
              <a href="#gallery" className="text-gray-600 hover:text-primary transition-colors">Галерея</a>
              <a href="#infrastructure" className="text-gray-600 hover:text-primary transition-colors">Инфраструктура</a>
            </nav>
            <Button className="hidden md:block">Узнать цену</Button>
            <button className="md:hidden">
              <Icon name="Menu" size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
        <img 
          src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920&h=1080&fit=crop&crop=center"
          alt="Балтийское море"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 text-center text-white px-6 max-w-4xl">
          <Badge className="mb-6 bg-white/20 text-white border-white/30 backdrop-blur-sm">
            🏖️ ПЕРВАЯ ЛИНИЯ МОРЯ
          </Badge>
          <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Эксклюзивные<br />
            <span className="text-yellow-300">Апартаменты</span><br />
            у Моря
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Единственный ЖК "Пионерский" всего в 50 метрах от Балтийского моря. 
            Просыпайтесь под шум прибоя каждый день.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4">
              Посмотреть апартаменты
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-4">
              Виртуальный тур
            </Button>
          </div>
        </div>
      </section>

      {/* Unique Features */}
      <section id="apartments" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary">Уникальность</Badge>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
              Что делает эти апартаменты особенными
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Не просто квартира – жемчужина города в единственном ЖК на первой береговой линии
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon name="Waves" size={32} className="text-primary" />
                </div>
                <h3 className="font-playfair text-2xl font-bold mb-4">50 метров до моря</h3>
                <p className="text-gray-600">
                  Единственный дом в Пионерском на ПЕРВОЙ береговой линии. 
                  Выходите из дома – и вы уже на пляже!
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in animation-delay-200">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon name="Building" size={32} className="text-primary" />
                </div>
                <h3 className="font-playfair text-2xl font-bold mb-4">Эксплуатируемая крыша</h3>
                <p className="text-gray-600">
                  Собственная терраса на крыше с панорамными видами на море. 
                  Закрытый доступ только для жильцов.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in animation-delay-400">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon name="Home" size={32} className="text-primary" />
                </div>
                <h3 className="font-playfair text-2xl font-bold mb-4">Дизайнерский ремонт</h3>
                <p className="text-gray-600">
                  54 м² с индивидуальной планировкой, две спальни, 
                  современная кухня с встроенной техникой.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Apartment Details */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary">Планировка</Badge>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
                Продуманное пространство для жизни у моря
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                    <Icon name="Check" size={16} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Просторные 54 м²</h4>
                    <p className="text-gray-600">Индивидуальная, продуманная планировка для максимального комфорта</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                    <Icon name="Check" size={16} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Большая кухня-гостиная</h4>
                    <p className="text-gray-600">Открытое пространство с видом на море и современной техникой</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                    <Icon name="Check" size={16} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Две отдельные спальни</h4>
                    <p className="text-gray-600">Уютные комнаты, гарантирующие комфорт и приватность</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                    <Icon name="Check" size={16} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Панорамные окна</h4>
                    <p className="text-gray-600">Завораживающие рассветы и романтичные закаты каждый день</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Button size="lg" className="mr-4">Записаться на просмотр</Button>
                <Button size="lg" variant="outline">Скачать планировку</Button>
              </div>
            </div>
            <div className="space-y-4">
              <img 
                src="/img/07a9dfd4-1158-463c-a856-ffc748460cb1.jpg"
                alt="Интерьер апартаментов с видом на море"
                className="rounded-lg shadow-lg w-full"
              />
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="/img/a1d02a43-70c1-46cf-8768-d7ebab618730.jpg"
                  alt="Премиальная кухня"
                  className="rounded-lg shadow-lg"
                />
                <img 
                  src="/img/b25489a7-ca1b-4b81-a3df-4602953421be.jpg"
                  alt="Терраса на крыше"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary">Галерея</Badge>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
              Интерьеры готовых апартаментов
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Дизайнерский ремонт премиум-класса. Каждая деталь продумана до мелочей.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Kitchen Photo */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="https://cdn.poehali.dev/files/e578a59c-95db-4279-b854-ddf1992666e5.JPG"
                alt="Современная кухня с золотой мойкой"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-semibold text-lg">Дизайнерская кухня</h4>
                  <p className="text-sm text-white/80">Премиум техника и материалы</p>
                </div>
              </div>
            </div>

            {/* Living Room Photo 1 */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="https://cdn.poehali.dev/files/1095e676-12de-4763-bdae-df134d353b1c.jpeg"
                alt="Гостиная с панорамными окнами"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-semibold text-lg">Просторная гостиная</h4>
                  <p className="text-sm text-white/80">Светлые тона и большие окна</p>
                </div>
              </div>
            </div>

            {/* Living Room Photo 2 */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="https://cdn.poehali.dev/files/3ace00fa-d718-4871-84d1-504e183b08c6.jpeg"
                alt="Гостиная с акцентной бирюзовой стеной"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-semibold text-lg">Акцентная стена</h4>
                  <p className="text-sm text-white/80">Стильные цветовые решения</p>
                </div>
              </div>
            </div>

            {/* Full Kitchen View */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 lg:col-span-2">
              <img 
                src="https://cdn.poehali.dev/files/a01a645b-2fee-4b23-8326-da19377b6863.JPG"
                alt="Полный вид кухни-гостиной"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-semibold text-lg">Кухня-гостиная</h4>
                  <p className="text-sm text-white/80">Открытое пространство с трековым освещением</p>
                </div>
              </div>
            </div>

            {/* Existing image as additional gallery item */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="/img/07a9dfd4-1158-463c-a856-ffc748460cb1.jpg"
                alt="Вид из окна на море"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-semibold text-lg">Вид на море</h4>
                  <p className="text-sm text-white/80">Балтийское море в 50 метрах</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="mr-4">Записаться на просмотр</Button>
            <Button size="lg" variant="outline">Виртуальный тур</Button>
          </div>
        </div>
      </section>

      {/* Location */}
      <section id="location" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary">Расположение</Badge>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
              Калининградская область,<br />г. Пионерский
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              ул. Портовая, дом 5 – в самом сердце курортного города, 
              в окружении природы Балтийского побережья
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="MapPin" size={32} className="text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">50м до моря</h3>
              <p className="text-gray-600">Прямой доступ к пляжу</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Car" size={32} className="text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">15 мин</h3>
              <p className="text-gray-600">До центра Калининграда</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Plane" size={32} className="text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">25 мин</h3>
              <p className="text-gray-600">До аэропорта Храброво</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Trees" size={32} className="text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Рядом</h3>
              <p className="text-gray-600">Куршская коса</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            Инвестиция в уникальный образ жизни
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
            Это не просто покупка жилья – это инвестиция в статус, неповторимые эмоции 
            и ежедневное наслаждение морскими пейзажами
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4">
              Узнать стоимость
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-4">
              Забронировать просмотр
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="font-playfair text-2xl font-bold mb-4">Пионерский</div>
              <p className="text-gray-400 mb-4">
                Эксклюзивные апартаменты на первой линии Балтийского моря
              </p>
              <div className="flex space-x-4">
                <Icon name="Phone" size={20} className="text-gray-400" />
                <Icon name="Mail" size={20} className="text-gray-400" />
                <Icon name="MessageSquare" size={20} className="text-gray-400" />
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Контакты</h3>
              <div className="space-y-2 text-gray-400">
                <p>📍 Калининградская обл., г. Пионерский</p>
                <p>ул. Портовая, дом 5</p>
                <p>📞 +7 (xxx) xxx-xx-xx</p>
                <p>✉️ info@pioneerskiy-apart.ru</p>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Время работы</h3>
              <div className="space-y-2 text-gray-400">
                <p>Пн-Вс: 9:00 - 21:00</p>
                <p>Просмотры квартир:</p>
                <p>По предварительной записи</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ЖК "Пионерский". Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;