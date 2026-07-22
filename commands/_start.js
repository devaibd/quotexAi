/*CMD
  command: /start
  help:
  need_reply: false
  auto_retry_time:
  answer:
  keyboard:
CMD*/

Api.sendMessage({
  text:
"👋 *Welcome to the VIP QUOTEX AI Signal Bot!*\n\nChoose an option below:\n\n📊 Get Signal\n📚 Risk Rules\n🌐 Open Broker App",
  parse_mode: "Markdown",
  reply_markup: {
    keyboard: [
      [{ text: "📊 Get Signal" }, { text: "📚 Risk Rules" }],
      [{ text: "🌐 Open Broker App", web_app: { url: "https://qxbroker.com" } }]
    ],
    resize_keyboard: true
  }
});