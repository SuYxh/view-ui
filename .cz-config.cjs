module.exports = {
  types: [
    { value: 'feat', name: '🎉 特性:    一个新的特性' },
    { value: 'fix', name: '🐛 修复:    修复一个Bug' },
    { value: 'docs', name: '📚 文档:    文档变更' },
    { value: 'style', name: '💄 格式:    代码格式（不影响代码运行的变动）' },
    {
      value: 'refactor',
      name: '🔨 重构:    代码重构（既不是新增功能，也不是修复bug）'
    },
    { value: 'perf', name: '⚡️ 性能:    性能优化' },
    { value: 'test', name: '✅ 测试:    添加一个测试' },
    { value: 'chore', name: '🔧 工具:    开发工具变动（构建、脚手架工具等）' },
    { value: 'revert', name: '⏪ 回退:    代码回退' }
  ],

  scopes: [],

  allowTicketNumber: false,
  isTicketNumberRequired: false,
  ticketNumberPrefix: 'TICKET-',
  ticketNumberRegExp: '\\d{1,5}',

  messages: {
    type: '选择一种你的提交类型:',
    scope: '选择一个scope (可选):',
    customScope: 'Denote the SCOPE of this change:',
    subject: '短说明:\n',
    body: '长说明，使用"|"换行(可选)：\n',
    breaking: '非兼容性说明 (可选):\n',
    footer: '关联关闭的issue，例如：#31, #34(可选):\n',
    confirmCommit: '确定提交说明?'
  },

  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],
  skipQuestions: ['scope', 'body', 'footer'],

  subjectLimit: 100
};
