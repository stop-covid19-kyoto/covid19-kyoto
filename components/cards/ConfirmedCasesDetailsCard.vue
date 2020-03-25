<template>
  <v-col cols="12" md="6" class="DataCard">
    <svg-card
      :title="$t('検査陽性者の状況')"
      :title-id="'details-of-confirmed-cases'"
      :date="mainSummary.last_update"
      :url="'https://www.pref.kyoto.jp/kentai/pcrkensa.html'"
    >
      <confirmed-cases-table
        :aria-label="$t('検査陽性者の状況')"
        v-bind="confirmedCases"
      />
    </svg-card>
  </v-col>
</template>

<i18n>
{
  "ja": {
    "検査陽性者の状況": "検査陽性者の状況"
  },
  "en": {
    "検査陽性者の状況": "Details of confirmed cases"
  },
  "zh-cn": {
    "検査陽性者の状況": "确诊案例状况"
  },
  "zh-tw": {
    "検査陽性者の状況": "確診案例狀況"
  },
  "ko": {
    "検査陽性者の状況": "확진자의 현황"
  },
  "ja-basic": {
    "検査陽性者の状況": "びょうきの ひとは いま"
  }
}
</i18n>

<script>
import mainSummary from '@/data/main_summary.json'
import formatConfirmedCases from '@/utils/formatConfirmedCases'
import SvgCard from '@/components/SvgCard.vue'
import ConfirmedCasesTable from '@/components/ConfirmedCasesTable.vue'

export default {
  components: {
    SvgCard,
    ConfirmedCasesTable
  },
  data() {
    // 検査陽性者の状況
    const confirmedCases = formatConfirmedCases(mainSummary)

    const data = {
      mainSummary,
      confirmedCases
    }
    return data
  }
}
</script>
