# ASTON REACT PROJECT
![workflow](https://github.com/afect13/aston-react-project/actions/workflows/github-actions.yml/badge.svg)

## **1 уровень (необходимый минимум)**

- Реализованы все требования к функциональности, описанные в задании:

## React

- Пишем функциональные компоненты c хуками в приоритете над классовыми:  [components](https://github.com/afect13/aston-react-project/tree/main/src/components).
- Есть разделение на умные и глупые компоненты : [умный](https://github.com/afect13/aston-react-project/blob/main/src/components/characterProfile/CharacterProfile.tsx)
, [глупый](https://github.com/afect13/aston-react-project/blob/main/src/components/layout/Layout.tsx).
- Есть рендеринг списков: [Main](https://github.com/afect13/aston-react-project/blob/main/src/pages/main/Main.tsx),
  [Favorites](https://github.com/afect13/aston-react-project/blob/main/src/pages/favorites/Favorites.tsx), [History](https://github.com/afect13/aston-react-project/blob/main/src/pages/history/History.tsx) и.т.д.
- Реализована хотя бы одна форма: [Form](https://github.com/afect13/aston-react-project/blob/main/src/components/form/Form.tsx), [SearchBar](https://github.com/afect13/aston-react-project/blob/main/src/components/searchBar/SearchBar.tsx).
- Есть применение Контекст API: [ThemeContext](https://github.com/afect13/aston-react-project/blob/main/src/components/themeProvider/ThemeProvider.tsx) в [App](https://github.com/afect13/aston-react-project/blob/main/src/App.tsx).
- Есть применение предохранителя: [router](https://github.com/afect13/aston-react-project/blob/main/src/router.tsx).
- Есть хотя бы один кастомный хук: [addToHistory](https://github.com/afect13/aston-react-project/blob/main/src/hooks/addToHistory/addToHistory.ts), [debounce](https://github.com/afect13/aston-react-project/blob/main/src/hooks/debounce/debounce.ts).
- Хотя бы несколько компонентов используют PropTypes: [Header](https://github.com/afect13/aston-react-project/blob/main/src/components/header/Header.tsx), [CharacterCard](https://github.com/afect13/aston-react-project/blob/main/src/components/characterCard/CharacterCard.tsx), [Button](https://github.com/afect13/aston-react-project/blob/main/src/components/button/Button.tsx).
- Поиск не должен триггерить много запросов к серверу: хук [debounce](https://github.com/afect13/aston-react-project/blob/main/src/hooks/debounce/debounce.ts) использован в компоненте [SearchBar](https://github.com/afect13/aston-react-project/blob/main/src/components/searchBar/SearchBar.tsx).
- Есть применение lazy + Suspense: [router](https://github.com/afect13/aston-react-project/blob/main/src/router.tsx).

## Redux

- Используем Modern Redux with Redux Toolkit: [store](https://github.com/afect13/aston-react-project/blob/main/src/store/index.tsx).
- Используем слайсы: [auth.slice](https://github.com/afect13/aston-react-project/blob/main/src/features/auth/auth.slice.ts).
- Есть хотя бы одна кастомная мидлвара или createListenerMiddleware: [favoritesListener](https://github.com/afect13/aston-react-project/blob/main/src/features/listeners/favoritesListener.ts).
- Используется RTK Query: [rickandmorty.api](https://github.com/afect13/aston-react-project/blob/main/src/features/api/rickandmorty.api.ts).
- Используется Transforming Responses: [rickandmorty.api](https://github.com/afect13/aston-react-project/blob/main/src/features/api/rickandmorty.api.ts).

## **2 уровень (необязательный)**

- Использование TypeScript.
- Использование Firebase для учетных записей, избранного и истории поиска: [auth.actions](https://github.com/afect13/aston-react-project/blob/main/src/features/auth/auth.actions.ts),
[favorites.actions](https://github.com/afect13/aston-react-project/blob/main/src/features/favorites/favorites.actions.ts), [history.actions](https://github.com/afect13/aston-react-project/blob/main/src/features/history/history.actions.ts).
- Настроен CI/CD: [CI](https://github.com/afect13/aston-react-project/blob/main/src/features/history/history.actions.ts)/[CD](https://aston-react-project.netlify.app/)
- Feature Flags. Реализовать фичу “Поделиться в телеграм”, закрытую под фича флагом.
  
  - Если флаг с этой фичей включен, то у карточки единицы информации должна появиться кнопка “Поделиться” : [CharacterProfile](https://github.com/afect13/aston-react-project/blob/main/src/components/characterProfile/CharacterProfile.tsx).
  - Флаг должен присылаться с локального сервера.[server](https://github.com/afect13/aston-react-project/tree/main/server).
  - Флаг положить в react context, забрать из контекста в необходимом месте приложения: [FeatureProvider](https://github.com/afect13/aston-react-project/blob/main/src/components/featureProvider/FeatureProvider.tsx).

- **Project Console API**.

	- **Цель:** Предоставить пользователю Console API для работы с приложением: [Console API](https://github.com/afect13/aston-react-project/tree/main/src/console).
  - **Мотивация:** Демонстрация навыков построения архитектуры, в которой ядро приложения существует независимо от типа ввода/вывода.
    
- **Принцип работы Console API:**

1. Открываем приложение в браузере.
2. Переходим в консоль.
3. Вводим команду command('/help') для просмотра списка комнад.
```javascript
input:
command('/help')
```
4. Выводится список команд.
```javascript
output:
Command list:
/show - show characters
/search [name] - search by name
/character [id] - character details
/signin [email] [password]- sign-in
/signup [login] [password]- sign-up
/add [id] - add to favorites
/remove [id] - remove from favorites
```
5. Пример использования.
```javascript
command('/signin [exampl@ex.ru] [123456789]')
```
- **Функционал:**
  
  - Показать список персонажей /show.
  - Поиск персонажа /search [name].
  - Отобразить детали персонажа /character [id].
  - Войти /signin [email] [password].
  - Зарегистрироваться /signup [login] [password].
  - Добавить персонажа в избранное /add [id].
  - Удалить персонажа из избранного /remove [id].
