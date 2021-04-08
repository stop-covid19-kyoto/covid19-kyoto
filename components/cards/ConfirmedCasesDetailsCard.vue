<template>
  <v-col cols="12" md="6" class="DataCard">
    <client-only>
      <data-view
        :title="$t('検査陽性者の状況')"
        :title-id="'details-of-confirmed-cases'"
        :date="mainSummary.last_update"
      >
        <template v-slot:infoPanel>
          <data-view-basic-info-panel
            :r-text="
              $t(
                `${
                  confirmedCasesDate.getMonth() + 1
                }月${confirmedCasesDate.getDate()}日の累計`
              )
            "
          />
        </template>
        <template v-slot:additionalDescription>
          <span>{{ $t('（注）') }}</span>
          <ul>
            <!--<li>
              {{ $t('チャーター機帰国者、クルーズ船乗客等は含まれていない') }}
            </li>-->
            <li>
              {{ $t('「調整中」には、入院先等を調整している方を計上') }}
            </li>
            <li>
              {{
                $t(
                  '「重症」は、人工呼吸器管理（ECMOを含む）が必要な患者数を計上'
                )
              }}
            </li>
            <!--<li>
              {{
                $t(
                  '退院者数の把握には一定の期間を要しており、確認次第数値を更新している'
                )
              }}
            </li>-->
          </ul>
        </template>
        <confirmed-cases-details-table
          :aria-label="$t('検査陽性者の状況')"
          v-bind="confirmedCases"
        />
        <!--<template v-slot:footer>
          <open-data-link
            url="https://www.pref.kyoto.jp/kentai/corona/pcrkensa.html"
          />
        </template>-->
      </data-view>
    </client-only>
  </v-col>
</template>

<script>
import inspectionsSummary from '@/data/inspections_summary.json'
import mainSummary from '@/data/main_summary.json'
import formatConfirmedCases from '@/utils/formatConfirmedCases'
import DataView from '@/components/DataView.vue'
import DataViewBasicInfoPanel from '@/components/DataViewBasicInfoPanel.vue'
import ConfirmedCasesDetailsTable from '@/components/ConfirmedCasesDetailsTable.vue'
// import OpenDataLink from '@/components/OpenDataLink.vue'

export default {
  components: {
    DataView,
    DataViewBasicInfoPanel,
    ConfirmedCasesDetailsTable,
    // OpenDataLink,
  },
  data() {
    // 最新の検査日
    const confirmedCasesDate = new Date(
      inspectionsSummary.data[inspectionsSummary.data.length - 1]['日付']
    )

    // 検査陽性者の状況
    const confirmedCases = formatConfirmedCases(mainSummary)

    return {
      confirmedCasesDate,
      mainSummary,
      confirmedCases,
    }
  },
}
</script>
