<template>
  <v-col cols="12" md="6" class="DataCard">
    <client-only>
      <time-bar-chart
        :title="$t('検査実施数')"
        :title-id="'number-of-tested'"
        :chart-id="'time-bar-chart-inspections'"
        :chart-data="inspectionsGraph"
        :date="inspectionsSummary.last_update"
        :unit="$t('件.tested')"
        :url="'https://www.pref.kyoto.jp/kentai/corona/pcrkensa.html'"
      />
      <!-- 件.tested = 検査数 -->
      <!--<time-stacked-bar-chart
        :title="$t('検査実施件数')"
        :title-id="'number-of-tested'"
        :chart-id="'time-stacked-bar-chart-inspections'"
        :chart-data="inspectionsGraph"
        :date="date"
        :items="inspectionsItems"
        :labels="inspectionsLabels"
        :unit="$t('件.tested')"
        :data-labels="inspectionsDataLabels"
        :table-labels="inspectionsTableLabels"
      >
        <template v-slot:additionalDescription>
          <span>{{ $t('（注）') }}</span>
          <ul>
            <li>
              {{
                $t(
                  '検体採取日を基準とする。ただし、一部検査結果判明日に基づくものを含む'
                )
              }}
            </li>
            <li>
              {{ $t('同一の対象者について複数の検体を検査する場合がある') }}
            </li>
            <li>
              {{ $t('5月13日以降は、PCR検査に加え、抗原検査の件数を含む') }}
            </li>
            <li>
              {{
                $t(
                  '速報値として公開するものであり、後日確定データとして修正される場合がある'
                )
              }}
            </li>
          </ul>
        </template>
      </time-stacked-bar-chart>-->
    </client-only>
  </v-col>
</template>

<script>
import inspectionsSummary from '@/data/inspections_summary.json'
import formatGraph from '@/utils/formatGraph'
import TimeBarChart from '@/components/TimeBarChart.vue'

export default {
  components: {
    TimeBarChart,
  },
  data() {
    const inspectionsGraph = formatGraph(inspectionsSummary.data)

    return {
      inspectionsSummary,
      inspectionsGraph,
    }
  },
}
</script>
