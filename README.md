# gulpBuild
gulp build for Asap

Необходимые пакеты на ПК: Node.js - https://nodejs.org/en/

Быстрый старт: <br>

1. Клонируем этот репозиторий
2. В терминале вводим команду npm i
3. После установки вводим команду gulp<br>

**ВНИМАНИЕ** 
Все файлы в html подключаются по пути от папки build.
Папка ***src*** — рабочая область.

Сборка нового проекта завершена.

**Существующие команды:**<br>
***gulp build***: собирает все файлы проекта в папку билд сжимает их. **Без оптимизации изображений!** <br>
***gulp clean***: удаляет папку build. <br>
***gulp webserver***: запускает вебсервер с livereload. <br>
***gulp buildSass***: билдит .css в папку нашей работы области в 1 файл в несжатом виде. <br>
***gulp buildCss***: билдит .css в сжатом виде в папку build/css и выполняет buildSass. <br>
***gulp buildJs***: сжимает и минифицирует .js файлы и билдит их в 1 файл в папку build/js. <br>
***gulp vendors***: перемещает содержимое папки vendors (папка для файлов плагинов) в исходном состоянии в папку build/vendors. <br>
***gulp img***: перемещает изображения в папку build/img. **Без оптимизации!**<br>
***gulp imgmin***: оптимизирует изображения и закидывает их в build/img. <br>
***gulp buildFonts***: перемещает шрифты в build/fonts. <br>
***gulp buildHtml***: перемещает все .html файлы в папку build. <br>
***gulp***: выполняет все вышеперечисленные команды за исключением *gulp clean* и *gulp imgmin*.<br>
***gulp prod***: выполняет все вышеперечисленные команды, но в отличие от команды *gulp*, выполняет оптимизацию изображений.<br>
