import { exec } from 'child_process';
import fs from 'fs';
import cheerio from 'cheerio';
import path from 'path';
import { fileURLToPath } from 'url';

// Функция для запуска команды сборки
function runBuild() {
    return new Promise((resolve, reject) => {
        exec('npm run build', (error, stdout, stderr) => {
            if (error) {
                console.error(`Ошибка при выполнении сборки: ${error}`);
                return reject(error);
            }
            console.log(stdout);
            console.error(stderr);
            resolve();
        });
    });
}

async function combineStyles() {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const distPath = path.resolve(__dirname, 'dist');
    const assetsPath = path.join(distPath, 'assets');

    try {
        // Чтение содержимого папки assets
        const files = await fs.promises.readdir(assetsPath);

        // Поиск CSS файлов
        const cssFiles = files.filter(file => file.endsWith('.css'));

        // Создание строки для хранения всех стилей
        let combinedStyles = '';

        // Перебор найденных CSS файлов
        for (const cssFile of cssFiles) {
            const filePath = path.join(assetsPath, cssFile);
            const cssContent = await fs.promises.readFile(filePath, 'utf-8');

            const cssLines = cssContent.split('}');
            for (const line of cssLines) {
                if (line.includes('empty-cells:hide')) {
                    console.log(line);
                    combinedStyles += line + '}\n'; // Добавление строки в комбинированные стили
                }
            }
        }

        // Чтение HTML файла
        const htmlFilePath = path.join(distPath, 'index.html');
        const htmlContent = await fs.promises.readFile(htmlFilePath, 'utf-8');

        // Использование cheerio для модификации HTML
        const $ = cheerio.load(htmlContent);
        // Вставка комбинированных стилей внутрь тега <head>
        $('head').append(`<style>${combinedStyles}</style>`);

        // Запись изменений обратно в HTML файл
        await fs.promises.writeFile(htmlFilePath, $.html());

        console.log('Критические стили успешно перенесены в head.');
    } catch (error) {
        console.error('Ошибка при комбинировании стилей:', error);
    }
}

runBuild().then(() => {
    console.log('Сборка завершена. Начинаем объединение файлов...');
    combineStyles()
});