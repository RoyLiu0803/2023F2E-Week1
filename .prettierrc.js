/** .prettierrc.js
 * 在VSCode中安裝prettier插件 打開插件配置填寫`.prettierrc.js` 將本文件作為其代碼格式化規範
 * 在本文件中修改格式化規則，不會同時觸發改變ESLint代碼檢查，所以每次修改本文件需要重啟VSCode，ESLint檢查才能同步代碼格式化
 * 需要相應的代碼格式化規範請自行查閱配置，下面為默認項目配置
 */
module.exports = {
  // 一行最多多少個字符
  printWidth: 120,
  // 指定每個縮進級別的空格數
  tabWidth: 2,
  // 使用製表符而不是空格縮進行
  useTabs: false,
  // 在語句末尾是否需要分號
  semi: true,
  // 是否使用單引號
  singleQuote: false,
  // 更改引用對象屬性的時間 可選值"<as-needed|consistent|preserve>"
  quoteProps: "as-needed",
  // 在JSX中使用單引號而不是雙引號
  jsxSingleQuote: false,
  // 多行時盡可能打印尾隨逗號。 （例如，單行數組永遠不會出現逗號結尾。） 可選值"<none|es5|all>"，默認none
  trailingComma: "es5",
  // 在對象文字中的括號之間打印空格 { a:0 }
  bracketSpacing: true,
  // 反尖括號需要換行
  bracketSameLine: false,
  // jsx 標籤的反尖括號需要換行
  jsxBracketSameLine: false,
  // 在單獨的箭頭函數參數周圍包括括號 always：(x) => x \ avoid：x => x
  arrowParens: "avoid",
  // 這兩個選項可用於格式化以給定字符偏移量（分別包括和不包括）開始和結束的代碼
  rangeStart: 0,
  rangeEnd: Infinity,
  // 指定要使用的解析器，不需要寫文件開頭的 @prettier
  requirePragma: false,
  // 不需要自動在文件開頭插入 @prettier
  insertPragma: false,
  // 使用默認的折行標準 always\never\preserve
  proseWrap: "preserve",
  // 指定HTML文件的全局空格敏感度 css\strict\ignore
  htmlWhitespaceSensitivity: "css",
  // Vue文件腳本和样式標籤縮進
  vueIndentScriptAndStyle: false,
  // 在 windows 操作系統中換行符通常是回車 (CR) 加換行分隔符 (LF)，也就是回車換行(CRLF)，
  // 然而在 Linux 和 Unix 中只使用簡單的換行分隔符 (LF)。
  // 對應的控製字符為 "\n" (LF) 和 "\r\n"(CRLF)。 auto意為保持現有的行尾
  // 換行符使用 lf 結尾是 可選值"<auto|lf|crlf|cr>"
  endOfLine: "auto",
  // 對引號中代碼使用智能格式化，選項：auto => 自動識別，off => 關閉
  embeddedLanguageFormatting: "auto",
  // 如果 HTML元素（包括 JSX 等）具有多個屬性，將其每個屬性格式化為單獨占一行
  singleAttributePerLine: false,
};
// 應該用不到
// "parser": "babel"
// "filepath": "c:\\Users\\user\\Desktop\\0327newZlcaiWap\\royLiu0803\\Vue3-Template-Project\\.prettierrc.js",
