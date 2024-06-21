module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended", // 使用推薦的eslint
    "plugin:vue/vue3-recommended", // 使用插件支持vue3
    "plugin:prettier/recommended",
    "eslint-config-prettier",
  ],
  overrides: [],
  parser: "vue-eslint-parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      modules: true,
      jsx: true,
    },
    requireConfigFile: false,
    parser: "@babel/eslint-parser",
  },
  plugins: [
    "vue", // 引入vue的插件 vue <==> eslint-plugin-vue
    "prettier", // 引入規範插件  prettier <==>  eslint-plugin-prettier
  ],
  globals: {
    defineProps: "readonly",
    defineEmits: "readonly",
    defineExpose: "readonly",
    withDefaults: "readonly",
  },
  rules: {
    semi: ["warn", "always"], // 禁止尾部使用分號
    "no-unused-vars": "warn",
    // "no-console": "warn", // 禁止出現console
    "no-debugger": "warn", // 禁止出現debugger
    "no-duplicate-case": "warn", // 禁止出現重複case
    "no-empty": "warn", // 禁止出現空語句塊
    "no-extra-parens": "warn", // 禁止不必要的括號
    "no-func-assign": "warn", // 禁止對Function聲明重新賦值
    "no-unreachable": "warn", // 禁止出現[return|throw]之後的代碼塊
    "no-else-return": "warn", // 禁止if語句中return語句之後有else塊
    "no-empty-function": "warn", // 禁止出現空的函數塊
    "no-lone-blocks": "warn", // 禁用不必要的嵌套塊
    "no-multi-spaces": "warn", // 禁止使用多個空格
    "no-redeclare": "warn", // 禁止多次聲明同一變量
    "no-return-assign": "warn", // 禁止在return語句中使用賦值語句
    "no-return-await": "warn", // 禁用不必要的[return/await]
    "no-self-compare": "warn", // 禁止自身比較表達式
    "no-useless-catch": "warn", // 禁止不必要的catch子句
    "no-useless-return": "warn", // 禁止不必要的return語句
    "no-mixed-spaces-and-tabs": "warn", // 禁止空格和tab的混合縮進
    "no-multiple-empty-lines": "warn", // 禁止出現多行空行
    "no-trailing-spaces": "warn", // 禁止一行結束後面不要有空格
    "no-useless-call": "warn", // 禁止不必要的.call()和.apply()
    "no-var": "warn", // 禁止出現var用let和const代替
    "no-undef": "off", // 允許出現delete變量的使用
    "no-delete-var": "off", // 允許出現delete變量的使用
    "no-shadow": "off", // 允許變量聲明與外層作用域的變量同名
    "dot-notation": "warn", // 要求盡可能地使用點號
    "default-case": "warn", // 要求switch語句中有default分支
    eqeqeq: "warn", // 要求使用 === 和 !==
    curly: "warn", // 要求所有控制語句使用一致的括號風格
    "space-before-blocks": "warn", // 要求在塊之前使用一致的空格
    "space-in-parens": "warn", // 要求在圓括號內使用一致的空格
    "space-infix-ops": "warn", // 要求操作符周圍有空格
    "space-unary-ops": "warn", // 要求在一元操作符前後使用一致的空格
    "switch-colon-spacing": "warn", // 要求在switch的冒號左右有空格
    "arrow-spacing": "warn", // 要求箭頭函數的箭頭前後使用一致的空格
    "array-bracket-spacing": "warn", // 要求數組方括號中使用一致的空格
    "brace-style": "warn", // 要求在代碼塊中使用一致的大括號風格
    camelcase: "warn", // 要求使用駱駝拼寫法命名約定
    indent: ["warn", 2], // 要求使用JS一致縮進4個空格
    "max-depth": ["warn", 4], // 要求可嵌套的塊的最大深度4
    "max-statements": ["warn", 100], // 要求函數塊最多允許的的語句數量20
    "max-nested-callbacks": ["warn", 3], // 要求回調函數最大嵌套深度3
    "max-statements-per-line": ["warn", { max: 1 }], // 要求每一行中所允許的最大語句數量
    // quotes: ["warn", "single", "avoid-escape"], // 要求統一使用單引號符號
    "vue/require-default-prop": 0, // 關閉屬性參數必須默認值
    "vue/singleline-html-element-content-newline": 0, // 關閉單行元素必須換行符
    "vue/multiline-html-element-content-newline": 0, // 關閉多行元素必須換行符
    // 要求每一行標籤的最大屬性不超五個
    "vue/max-attributes-per-line": ["warn", { singleline: 5 }],
    // 要求html標籤的縮進為需要4個空格
    "vue/html-indent": [
      "warn",
      2,
      {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: true,
        ignores: [],
      },
    ],
    // 取消關閉標籤不能自閉合的限制設置
    "vue/html-self-closing": [
      "error",
      {
        html: {
          void: "always",
          normal: "never",
          component: "always",
        },
        svg: "always",
        math: "always",
      },
    ],
  },
};
