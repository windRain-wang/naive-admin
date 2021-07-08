<template>
  <button @click="testMock">测试</button>
  <p>{{ t("message.hello") }}</p>
  <button @click="changeLanguage">切换语言</button>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import { loadLocaleMessages, setI18nLanguage } from "../i18n";
import {testGet} from '../api/test'

const {t, locale, availableLocales} = useI18n()
const testMock = () => {
    testGet().then((res:any) => {
        console.log(res)
    }).catch((err:any) => {
        console.log(err)
    })
}
// 改变语言
const changeLanguage = async () => {
    const lang = locale.value === 'en' ? 'zh' : 'en';
    // load locale messages
    if (!availableLocales.includes(lang)) {
      await loadLocaleMessages(lang)
    }

    // set i18n language
    setI18nLanguage(lang)
}
</script>

<style>

</style>