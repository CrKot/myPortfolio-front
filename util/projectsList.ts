type Project = {
  title: string,
  subtitle: string,
  description: string,
  images: Array<string>,
  link: string
}

 const projects: Project[] = [
  {
    title: 'Текущий проект портфолио',
    subtitle:
      'В данном проекте я старюсь использовать те техногии, которыми владею в конкретный момент времени',
    description: 'Проект состоит из 3 частей(фронт, бэк и дев), в данный момент вы находить в текущем проекте, пожалуйста ознакомьтесь с описанием проекта',
    images: ['catEpic.jpg'],
    link: 'https://github.com/CrKot/myPortfolio-dev',
  },
  {
    title: 'Панель администратора',
    subtitle:
      'Данный проект был реализован в рамках мокапа для демонстрации возможностей заказчику',
    description:
      'Проект представляет собой панель администратора состоящую из основной странице со статистикой продаж(таблица и графики), статистикой по чекам и редактором товаров, реализован как мокап для демонстрации ТЗ',
    images: [
      'admin-panel1.jpg',
      'admin-panel2.jpg',
      'admin-panel3.jpg',
      'admin-panel4.jpg',
    ],
    link: 'https://github.com/CrKot/admin-panel',
  },
  {
    title: 'Интерфейс взаимодейсвия маркеров на карте с пользователем',
    subtitle: 'Реализован как мокап без бэка и бд',
    description:
      'Интерфейс представляет собой взаимодействие пользователя с маркерами на карте, есть функционал фильтрации маркеров по названию, по клику на маркере или списку маркеров экран центрируется с зумом на выделенном маркере',
    images: ['mapPoint1.jpg', 'mapPoint2.jpg'],
    link: 'https://github.com/CrKot/mapsMarkers',
  },
 ]

export default projects