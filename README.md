# Chef.in

Этот проект предоставляет интерфейс для поиска рецептов и общения с ИИ-помощником, используя API Edamam для рецептов и OpenAI API(GPT3.5) для чата.

Чтобы начать пользоваться сайтом нужно напечатать то что вы хотите приготовить в поиск, после этого будут отображены самые подходящие рецепты. 

Возможности

Поиск рецептов: Поиск рецептов по ключевым словам.
Чат-интерфейс: Общение с помощником по любым вопросам, связанным с рецептами или кулинарией.
Адаптивный дизайн: Оптимизирован для использования как на настольных компьютерах, так и на мобильных устройствах.

Используемые технологии

React: Библиотека для создания пользовательских интерфейсов.
Next.js: Фреймворк для React для серверного рендеринга и создания статических веб-сайтов.
TypeScript: Типизированное надмножество JavaScript, которое добавляет статические типы.
Tailwind CSS: CSS-фреймворк, основанный на утилитах, для стилизации.
API Edamam: API для доступа к огромной базе данных рецептов.


- [Node.js](https://nodejs.org/en/) 
- [npm](https://www.npmjs.com/)

Установка

git clone https://github.com/yourusername/chef.in.git
cd chef.in
npm install

REACT_APP_API_ID=dc3a6efe
REACT_APP_API_KEY=f5a24df5188782e061d36bd8cf98af8e

npm run dev


Настройка для менторов

Нужно проверить, что все необходимые зависимости установлены и нет ошибок. Так же надо убедиться, что приложение запускается локально без ошибок и доступно по адресу http://localhost:3000.

Проектирование и разработка веб-сайта Chef.in:

Выбор технологий таких как Next.js, TypeScript и Tailwind CSS.
Настройка окружения разработки и Next.js.
Реализация компонентов интерфейса, включая поиск рецептов и чат.
Интеграция с API Edamam для рецептов.

Компромиссы
Ограниченное количество рецептов
Ответы чат-бота могут обрываться, если не будет хватать токенов для респонса