module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react-hooks/recommended',
	],
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	parser: '@typescript-eslint/parser',
	plugins: ['react-refresh', 'import'],
	rules: {
		'react-refresh/only-export-components': [
			'warn',
			{ allowConstantExport: true },
		],
		"indent": ["warn", "tab"], // Устанавливаем один таб для отступов
		"semi": ["error", "never"], // Удаляем точки с запятой в конце строк
		"quotes": ["error", "single"], // Устанавливаем одинарные ковычки для строк
		"jsx-quotes": ["error", "prefer-double"], // Устанавливаем двойные кавычки для JSX
		"no-console": "warn", // Показываем предупреждение если в коде есть консоль (чтобы не забыть убрать)
		"prefer-const": "error", // Меняем let на const если эта переменная не изменяется
		"max-len": ["warn", {"code": 120}], // Устанавливаем максимальную длину строки в 120 символов
		"import/order": ["error", { // Устанавливаем порядок импортов
			"groups": ["builtin", "external", "internal", "parent", "sibling", "index", "object", "type"],
			"newlines-between": "always-and-inside-groups" // Делаем пустые строки между группами импортов
		}]
	},
}