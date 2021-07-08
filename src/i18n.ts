import { nextTick } from "vue";
import { createI18n } from "vue-i18n";
import zh from "./locales/zh";

export const SUPPORT_LOCALES = ['en', 'zh']

const messages = {
  zh
};

const i18n = createI18n({
  legacy: false, // must set `false`, to use Composition API
  locale: "zh", // set locale
  // fallbackLocale: "zh", // set fallback locale
  messages, // set locale messages
});

export function setI18nLanguage(locale: string) {
  i18n.global.locale.value = locale
  /**
   * NOTE:
   * If you need to specify the language setting for headers, such as the `fetch` API, set it here.
   * The following is an example for axios.
   *
   * axios.defaults.headers.common['Accept-Language'] = locale
   */
  document.querySelector('html')?.setAttribute('lang', locale)
}
export async function loadLocaleMessages(locale: string) {
  // load locale messages with dynamic import
  const messages = await import(
    /* webpackChunkName: "locale-[request]" */ `./locales/${locale}.ts`
  )

  // set locale and locale message
  i18n.global.setLocaleMessage(locale, messages.default)

  return nextTick()
}

export default i18n;
