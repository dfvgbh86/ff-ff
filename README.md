### Для переключений карточки в/из состояния disabled, нужно зайти в файл data.js и изменить у нужной карточки значение ключа disabled.

##### Перед ответами на вопросы хотелось бы сказать, что тестовое, как и процесс его реализации очень понравился, особенно понравилось создавать саму карточку с такой необычной формой

## Level I

### Q1 Расскажите, чем, на ваш взгляд, отличается хорошая верстка от плохой с точки зрения 
#### Пользователя
Пользователю важно хорошее сочетание ui + ux. То есть чтобы на сайте были удобные кнопки достаточного размера, 
хорошо читаемый шрифт, понятная навигация, а так же приятная цветовая схема блоков. Так же важна скорость рендера 
элементов сайта(если сайт работает с большим потоком серверных данных, то  крайне желательно добавить скелетоны на сайт для юллизии более быстрой загрузки) и минимальная перерисовка  DOM дерева(в случае частых 
    перерисовок пользователь будет видеть неприятные моргания). Так же одним из основных отличий является её 
    отзывчивость, понятное глазу отображение на разных устройствах, браузерах и ширинах экрана.
#### менеджера проекта
   Менеджеру проекта важна скорость сдачи верстки, так же её внешний вид отвечающий ТЗ. Не мало важным фактором
    является её расширяемость, чтобы в дальнейшем, если требования поменяются или добавятся - можно было их в срок
    реализовать.
#### дизайнера
   Дизайнеру важно соответствие верстки и макета.
#### верстальщика
   Верстальщику важна расширяемость верстки и понятные в соответствии с договоренностями имена css классов.
#### клиентского программиста
   Клиентскому программисту важно, чтобы верстка была разделена на компоненты, которые можно быстро адаптировать 
    в проект, крайне желательно, чтобы компонент не тащил за собой какие-либо лишние зависимости, использовал 
    минимум js кода для реализации отрисовки. Ведь помимо кода для отображения стилей обычно рядышком в компоненте
    могут лежать вспомогательные функции для управления состоянием компонента.
#### серверного программиста
   Серверному программисту важна скорость реализации верстки, чтобы можно было потестировать приложение.
    
   Так же хочется добавить, мне кажется каждому из перечисленных вне зависимости это серверный программист или
    пользователь хорошая верстка отличается своим приятным видом, считаю, когда лицевая сторона продукта выглядит
    приятно, то пользователю больше хочется провести на сайте время, людям на проекте приятнее работать над продуктом
### Q2 Опишите основные особенности верстки крупных многостраничных сайтов, дизайн которых может меняться в процессе реализации и поддержки. 
### Расскажите о своем опыте верстки подобных сайтов: какие методологии, инструменты и технологии вы применяли на практике. 
   Особенность верстки многостраничных сайтов в делении верстки сайта на отдельные подкомпоненты, которые можно будет
    переиспользовать в других местах. Так же важно использовать препроцессор, вводить переменные, миксины для 
    повторяющихся свойств css. По итогу верстка проекта получается очень гибкая и легко изменяемая/расширяемая.
    
   Из методологий, инструментов и технологий давайте опишу, то что ближе к верстке сначала по моему мнению.
    Это БЭМ, SCSS, flexbox, webpack, React, classnames - библиотеку для упрощения работы с css классами,
    normalize.css - мини библиотеку для обнуля стилей, css - фреймворк Ant Design.
    
   Из того, что дальше от верстки.
    Redux, React/Redux, Redux-thunk, Typescript, Axios.
### Q3 Опишите основные особенности верстки сайтов, которые должны одинаково хорошо отображаться как на любом современном компьютере, так и на смартфонах и планшетах под управлением iOS и Android. Расскажите о своем опыте верстки подобных сайтов: какие инструменты и технологии вы применяли, как проверяли результат на различных устройствах, какие именно устройства требовалось поддерживать. 
   Важно добавить нужные метатэги, после обнулить стили, для этого я использую библиотеку normalize.css,
    далее, когда основная верстка готова, написать медиа запросы под различные ширины и высоты экранов. 
    После начать тестирование в различных браузерах и устройствах, при необходимости дописывать свойства для конкретных
    браузеров, например в этом тестовом блок контента карточки отображался некорректно в IE 11 при тестировании. Как 
    оказалось, благодаря https://caniuse.com/ псевдоэлемент ::before не поддерживается в IE 11, но благодаря приписанному
     свойству
    
    _:-ms-fullscreen, :root .card__content { 
     margin-top: -200px;
    }
    
   отдельно отображающемуся в IE 11 блок контента отображается корректно. 
    Так же для отображения современных сайтов требуется установка полифила отдельно, в этом тестовом я использовал cra,
    поэтому после установки полифила ничего настраивать не было нужно, но в случае с боевым проектом так же необходимо
    внести соответствующие правки в конфиг вебпака.
    
   Для тестирования обычно я использую свои установленные браузеры, а для поддержки смартфонов использую f12 и 
    проверяю различные устройства там, при необходимости добавляю устройства, прописывая их характеристики такие, 
    как user-agent вручную.
    
  
### Q4 Расскажите, какие инструменты помогают вам экономить время в процессе написания, проверки и отладки кода. 
   Самый главный помощник в написании кода это редактор кода - WebStorm, а точнее его и не только его настройка.
    Быстрые клавиши для создания темплейта компонент, различные подсветки синтаксиса и многое другое.
     
   Второй по значимости помощник это правила eslint, можно подобрать любые нужные правила, следуя которым цикл
    разработки упрощается.
    
   Далее хотелось бы выделить целый цикл технологий/инструментов - БЭМ, SCSS, Typescript(честно сначала не понимал
    зачем он, лишний код писать, но со временем привыкаешь, а польза приятно сказывается), так же старый добрый 
    debugger и Redux DevTools.
### Q5 Вам нужно понять, почему страница отображается некорректно в Safari на iOS и в IE на Windows. Код писали не вы, доступа к исходникам у вас нет. Ваши действия? Сталкивались ли вы с подобными проблемами на практике?
   С подобной проблемой на практике не сталкивался, но решу её путем изучения стилей некорректно отображающихся элеметов
    через f12 и изучением подробнее стилей на сайте https://caniuse.com/
### Q6 Дизайнер отдал вам макет, в котором не показано, как должны выглядеть интерактивные элементы при наведении мыши. Ваши действия?
   Если есть возможность, то спрошу по поводу вида интерактивных элементов при наведении мыши. Если в ближайшее время
    такой возможности нет, то сделаю на свой вкус, но с учетом, чтобы их можно было быстро изменить/дополнить дизайнерскими
    мыслями.
### Q7 Какие ресурсы вы используете для развития в профессиональной сфере? Приведите несколько конкретных примеров (сайты, блоги и так далее). Какое направление развития вам более близко: JS-программирование, HTML/CSSверстка или и то, и другое? Какие ещё области знаний, кроме тех, что непосредственно относятся к работе, вам интересны? 
   Изначально это был youtube(каналы IT-KAMASUTRA, WebDev с нуля. Канал Алекса Лущенко, Владилен Минин), но со временем
    я перешел на статьи с медиума(каждое утро на почту падает пак статей на англе), иногда читаю ответы на вопросы чате 
    телеграмма по реакту, gitgub(иногда захожу поразбирать чужие проекты, посмотреть, как правильно архитектурно строить
    свои приложения), читаю официальную документацию, а по дизайну книги. Так же у меня есть хороший знакомый сеньер,
    который советует иногда, что прочитать, что изучить.
    
   Мне интересно и то, и другое, так нет ощущения какого то застоя чтоли).
    
   Кроме тех, что непосредственно относятся к работе мне на данный момент интересно делать сборки компьютеров исходя из 
    потребностей и цены, следить за новинками компьютерного железа и изучать их возможности, а так же изучение английского. 
    Считаю это важный навык для взаимодействия с западной частью и не только, полушария).
### Q8 Расскажите нам о себе и предоставьте несколько ссылок на последние работы, выполненные вами. 
   Здравствуйте, меня зовет Андрей, мне 23 года. В декабре 2019 года на 4 курсе я решил взять паузу на пару лет и
    заняться действительно интересным для себя делом. По началу у меня сложилось неверное представление о верстке,
    что ей занимаются низкоквалифицированные специалисты, поэтому я её избегал, не учил. Но относительно недавно у меня 
    возникла идея создать с другом(python developer) свой онлайн магазин по продаже softreg instagram аккаунтов. Я 
    так сильно хотел его создать, что создав быстро макет в паинте принялся изучать верстку и сверстал его прототип.
    Правда после оказалось бот моего друга ещё совсем не готов, поэтому идею пришлось отложить до лучших времен.
    Вот ссылка - https://accshoptemplate.herokuapp.com/ . Так, как я стремился сделать быстро прототип, то использовал
    Ant Design.
    
   После ко мне обратился знакомый с просьбой за символическую плату сделать другому знакомому сайт визитку адвокатского 
    кабинета, дали лист А4 с информацией и сказали сделать, но в силу специфичных правок, а так же символического бюджета
    он получился на мой взгляд не очень, но заказчику все понравилось, считаю это главное :)
    
   Вот ссылка - https://advocat-karamyshev.herokuapp.com/ . Пока заказчик занят и не дает добра на деплой сайт лежит 
    на бесплатном хостинге. Тут, тк это простая визитка, ничего не требующая, я решил все сделать на html css.
       
   На этом этапе я понял, что ошибался и верстка, разработка дизайна, это интересно и что я долгое время зря себя 
    огораживал от него. В это же время мой знакомый сеньер после моих рассказов, как мне интересно верстать посоветовал 
    прочитать первую книгу по дизайну, которую я с интересом прочитал "Дизайн для недизайнера", где рассказывались
    базовые принципы дизайна. Сейчас я планирую прочитать что то более близкое именно к веб дизайну, чтобы расширить 
    свои знания.
    
   Теперь о моих скилах.
    
   Сначала немного про софт скилы, особо какую то выделяющееся черту выделить не могу, кроме неконликтности - порой
    мне проще сделать действие в урон своей личности, лишь бы не привести к конфликту с другой. Опыта командной 
    разработки у меня не было, но я молод, амциозен и с позитивом хотел бы начать работать над реальными проектами и 
    решать реальные бизнес задачи с командой, поэтому думаю тут все будет хорошо.
    
   Теперь про хард скилы.
   
   Оценить мой скил верстки вы думаю сможете по моему тестовому, в котором я постарался выложиться на полную и сверстал
    четко по макету из фигмы, несколько раз его даже перекачивал, казалось уголок в стоковом состоянии не должен так 
    отличаться, но видимо он все таки такой, столкнулся по пути с проблемами, которые не решал никогда ранее(привет IE 11),
    вспомнил, что есть такая библеотека, как classnames и надеюсь применил её правильно.
    
   Что касается остального, чем я владею описывал выше продублирую:
        БЭМ, SCSS, flexbox, webpack, React, classnames - библеотеку для упрощения работы с css классами,
        normalize.css - мини библеотеку для обнуля стилей, css - фрейворк Ant Design.
    
   Из того, что дальше от верстки.
        Redux, React/Redux, Redux-thunk, Typescript, Axios.
        
   Немного прокомментирую последние технологии. Редаксом я хорошо пока не владею, но если мне будет поставлена задача
    реализовать какой то функционал, то считаю посмотрев на уже готовый функционал и если нужно спросив более опытного
    коллегу - я с задачей справлюсь, написав в похожем, читаемом стиле.
    
   Спасибо за внимание! =)
    