FROM lsiobase/arch:version-2025-09-19 as base
WORKDIR /usr/src/app
EXPOSE 3000

FROM base as dev
RUN pacman -Suy --noconfirm
RUN pacman -S --noconfirm base-devel gcc nodejs npm node-gyp python3 make
COPY package.json .
RUN npm install
COPY . .
CMD npm run dev -- --host
