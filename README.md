# Rollup-boilerplate

Шаблон для сборки проектов на Rollup.js. Для его установки его нужно скачать, и набрать в консоли "npm install". После того, как установка закончится будет доступно 5 команд:

- "npm run dev" - будет запущен локальный сервер, произойдет сборка файла "src/index.js", выходной файл будет не минимизирован, будет доступен sourcemap, сборка будет работать в 11 IE;
- "npm run build" - произойдет сборка файла "src/index.js". Выходной файл будет сжат terser-ом, сборка будет работать в 11 IE;
- "npm run buildextract" - произойдет сборка файла "src/index.js". Выходной файл будет сжат terser-ом, будет извлечена CSS-ка по пути "public/js/css/extract.css", сборка будет работать в 11 IE;
- "npm run chunkdev" - пример сборки чанков. Будет запущен локальный сервер с открытой страницей "chunk.html", произойдет сборка файлов "src/modules/module-1.js" и "src/modules/module-2.js". У этих модулей будут изъяты общие зависимости. Будут созданы файлы "public/js/modules/common.js" (общие зависимости), "public/js/modules/module-1.js" и "public/js/modules/module-2.js". В режиме разработки файлы будут оптимизированы под последние браузеры;
- "npm run chunkbuild" - пример сборки чанков. Произойдет сборка файлов "src/modules/module-1.js" и "src/modules/module-2.js". У этих модулей будут изъяты общие зависимости. Будут созданы файлы "public/js/modules/common.js" (общие зависимости), "public/js/modules/module-1.js" и "public/js/modules/module-2.js". Для старых браузеров будут созданы файлы "public/js/modules-old-support/common.js", "public/js/modules-old-support/module-1.js" и "public/js/modules-old-support/module-2.js". Все выходные файлы будут сжаты.

Данный шаблон позволяет собирать JS-файлы, компоненты на React.js. Данный шаблон включает babel (поддержка 11 IE), autoprefixer(последние 4 версии браузеров). Так-же он позволяет подключать SASS и LESS файлы.

В интернете пишут, что rollup собирает проекты быстрее чем webpack. Когда webpack был 4 версии это действительно было так, я скорость не замерял, но это было видно. С выходом 5 версии webpack, по моим ощущениям скорость сравнялась, опять же скорость я не замерял. Единственное чем rollup лучше, так это тем, что он позволяет компилировать JS-файлы в большем количестве форматов, и выходные файлы меньше чем файлы компилируемые webpack-ом (где-то 10-20 килобайт разница).

Смотрите, если вы фанат typeScript, то тут я вас разочарую. Если вкратце, то typeScript не поддерживает rollup вместе с плагином "plugin-node-resolve", у них не много разные пути. Конечно это все можно починить, если в файле "tsconfig.json" пути поменять, но в общем-то оно того не стоит. Если вы фанат typeScript, собирайте проекты на webpack. Лично мне rollup.js очень понравился, я всем советую его использовать, а так смотрите сами. Если rollup вам тоже нравится, и вы хотите использовать его вместе с typeScript, посмотрите <a href = "https://github.com/open-wc/open-wc/pull/487">данный форум</a>, тут описывается как это можно сделать.

ВАЖНО!!! Если вы захотите разбить проект на чанки, посмотрите как они подключаются в файле "public/chunk.html". Разработку можно осуществлять командой "npm run chunkdev", а вот для поддержки старых браузеров (если это нужно) необходимо собрать проект командой "npm run chunkbuild", подключить библиотеку System.js если вы не знаете что это такое почитайте в интернете, вещь очень полезная. Если вкратце, мы отдельно собираем файлы под последние браузеры, они становятся меньше, так как нет лишнего кода (полифилов), и отдельно файлы под старые браузеры, в формате "systemjs".