# ts-course-node

## Кроки створення та налаштування проєкту Node.js з TypeScript:

• `npm install express routing-controllers reflect-metadata class-transformer class-validator cors` - встановлення необхідних бібліотек;

• `npm install --save-dev @types/express @types/node ts-node tsconfig-paths typescript nodemon` - встановлення типів для бібліотек;

• налаштувати `tsconfig.json` (див конспект);

• створення `nodemon.json`
{
"watch": ["src"],
"ext": "ts",
"exec": "ts-node -r tsconfig-paths/register src/main.ts"
};

• додати кілька скриптів у `package.json`
"scripts": {
"start": "node -r tsconfig-paths/register ./dist/main.js",
"dev": "nodemon",
"build": "tsc -p tsconfig.json"
}

• `npm run dev` - запуск nodemon;
