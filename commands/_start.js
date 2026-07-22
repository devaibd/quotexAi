/*CMD
  command: 📊 Get Signal
  help:
  need_reply: false
  auto_retry_time:
CMD*/

Api.sendMessage({
  text:
"📊 *QUOTEX OTC SIGNAL*\n" +
"━━━━━━━━━━━━━━━━━━\n" +
"🌐 *Market:* OTC\n" +
"💱 *Pair:* USD/BRL (OTC)\n\n" +
"🕒 *Entry Time:* 14:30:00\n" +
"⏱️ *Expiry:* 1 Minute\n\n" +
"📈 *Direction:* ⬆️ UP\n\n" +
"⚠️ Trading involves risk. No outcome is guaranteed.",
  parse_mode: "Markdown"
});