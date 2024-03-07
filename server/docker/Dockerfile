
# Используем официальный образ Node.js
FROM node:latest

RUN rm -f /usr/local/bin/yarn

# Устанавливаем Yarn
RUN npm install -g --force yarn

# Создаем рабочую директорию для приложения
WORKDIR /app

# Копируем файлы package.json и yarn.lock в рабочую директорию
COPY . .

# Устанавливаем зависимости с помощью Yarn
RUN yarn install

# Копируем все файлы внутрь образа
COPY . .

# Опционально: Указываем порт, который будет прослушивать контейнер
EXPOSE 3000

# Команда для запуска приложения
CMD ["yarn", "start"]
