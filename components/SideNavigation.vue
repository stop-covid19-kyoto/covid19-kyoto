<template>
  <div ref="Side" class="SideNavigation" tabindex="-1">
    <header class="SideNavigation-Header">
      <v-icon
        class="SideNavigation-OpenIcon"
        :aria-label="$t('サイドメニュー項目を開く')"
        @click="$emit('openNavi', $event)"
      >
        mdi-menu
      </v-icon>
      <h1 class="SideNavigation-HeaderTitle">
        <nuxt-link :to="`${localePath('/')}`" class="SideNavigation-HeaderLink">
          <img
            class="SideNavigation-HeaderLogo"
            src="/hlogo.gif"
            :alt="$t('京都府')"
            width="110"
          />
          <div class="SideNavigation-HeaderText">
            {{ $t('menu/新型コロナウイルス感染症') }}<br />{{
              $t('menu/対策サイト')
            }}
          </div>
        </nuxt-link>
      </h1>
    </header>

    <div :class="['SideNavigation-Body', { '-opened': isNaviOpen }]">
      <v-icon
        class="SideNavigation-CloseIcon"
        :aria-label="$t('サイドメニュー項目を閉じる')"
        @click="$emit('closeNavi', $event)"
      >
        mdi-close
      </v-icon>

      <nav class="SideNavigation-Menu">
        <div class="SideNavigation-Language">
          <div
            v-if="this.$i18n.locales.length > 1"
            class="SideNavigation-Language"
          >
            <label class="SideNavigation-LanguageLabel" for="LanguageSelector">
              {{ $t('多言語対応選択メニュー') }}
            </label>
            <language-selector />
          </div>
        </div>
        <menu-list :items="items" @click="$emit('closeNavi', $event)" />
      </nav>

      <footer class="SideNavigation-Footer">
        <div class="SideNavigation-Social">
          <!--<a
            href="https://line.me/R/ti/p/%40822sysfc"
            target="_blank"
            rel="noopener noreferrer"
            class="SideNavigation-SocialLink"
          >
            <picture>
              <source srcset="/line.webp" type="image/webp" />
              <img src="/line.png" alt="LINE" />
            </picture>
          </a>
          <a
            href="https://twitter.com/tokyo_bousai"
            target="_blank"
            rel="noopener noreferrer"
            class="SideNavigation-SocialLink"
          >
            <picture>
              <source srcset="/twitter.webp" type="image/webp" />
              <img src="/twitter.png" alt="Twitter" />
            </picture>
          </a>
          <a
            href="https://www.facebook.com/tochokoho"
            target="_blank"
            rel="noopener noreferrer"
            class="SideNavigation-SocialLink"
          >
            <picture>
              <source srcset="/facebook.webp" type="image/webp" />
              <img src="/facebook.png" alt="Facebook" />
            </picture>
          </a>-->
          <a
            href="https://github.com/stop-covid19-kyoto/covid19-kyoto"
            target="_blank"
            rel="noopener noreferrer"
            class="SideNavigation-SocialLink"
          >
            <picture>
              <source srcset="/github.webp" type="image/webp" />
              <img src="/github.png" alt="GitHub" />
            </picture>
          </a>
          <!--<a
            href="https://www.youtube.com/user/tokyo/videos"
            target="_blank"
            rel="noopener noreferrer"
            class="SideNavigation-SocialLink"
          >
            <picture>
              <source srcset="/youtube.webp" type="image/webp" />
              <img src="/youtube.png" alt="YouTube" />
            </picture>
          </a>-->
        </div>
        <small class="SideNavigation-Copyright">
          <!--{{ $t('このサイトの内容物は') }}
          <a
            :href="$t('https://creativecommons.org/licenses/by/4.0/deed.ja')"
            target="_blank"
            rel="noopener noreferrer license"
            class="SideNavigation-LicenseLink"
          >
            {{ $t('クリエイティブ・コモンズ 表示 4.0 ライセンス') }}
          </a>
          {{ $t('の下に提供されています。') }}
          <br />-->
          &copy; 2020 Stop Covid19 Kyoto
        </small>
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { TranslateResult } from 'vue-i18n'
import LanguageSelector from '@/components/LanguageSelector.vue'
import MenuList from '@/components/MenuList.vue'

type Item = {
  icon?: string
  title: TranslateResult
  link: string
  divider?: boolean
}

export default Vue.extend({
  components: {
    LanguageSelector,
    MenuList,
  },
  props: {
    isNaviOpen: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    items(): Item[] {
      return [
        {
          // icon: 'mdi-chart-timeline-variant',
          title: this.$t('京都府内の最新感染動向'),
          link: this.localePath('/'),
        },
        {
          // icon: 'mdi-chart-timeline-variant',
          title: this.$t('「新しい生活様式」の実践例'),
          link: 'http://www.pref.kyoto.jp/kikikanri/corona_youshiki.html',
        },
        {
          // icon: 'mdi-chart-timeline-variant',
          title: this.$t('個人の方へ'),
          link: 'http://www.pref.kyoto.jp/koho/corona/kojin.html',
        },
        {
          // icon: 'mdi-chart-timeline-variant',
          title: this.$t('事業者の方へ'),
          link: 'http://www.pref.kyoto.jp/koho/corona/jigyosha.html',
          divider: true,
        },
        {
          // icon: 'mdi-chart-timeline-variant',
          title: this.$t(
            '京都府新型コロナウイルス緊急連絡サービス（こことろ）'
          ),
          link: 'http://www.pref.kyoto.jp/kikikanri/coronakinkyurenraku.html',
        },
        {
          // icon: 'mdi-chart-timeline-variant',
          title: this.$t(
            '京都府LINE公式アカウント「京都府-新型コロナ対策パーソナルサポート」'
          ),
          link:
            'http://www.pref.kyoto.jp/gyomusuishin/novelcoronavirus-line.html',
        },
        {
          // icon: 'mdi-chart-timeline-variant',
          title: this.$t('京都府公式Twitter'),
          link: 'https://twitter.com/Kyoto_corona',
          divider: true,
        },
        /*
        {
          // icon: 'mdi-chart-timeline-variant',
          title: this.$t(
            '京都府からの注目情報、各種コールセンター問い合わせ先'
          ),
          link: 'http://www.pref.kyoto.jp/index.html#tyumokujoho',
        },
        */
        {
          // icon: 'mdi-chart-timeline-variant',
          title: this.$t('新型コロナウイルス感染症に関連する情報について'),
          link: 'http://www.pref.kyoto.jp/kentai/news/novelcoronavirus.html',
        },
        {
          // icon: 'mdi-chart-timeline-variant',
          title: this.$t('新型コロナウイルスに関する支援制度まとめ'),
          link: 'http://www.pref.kyoto.jp/koho/corona/index.html',
        },
        {
          // icon: 'mdi-chart-timeline-variant',
          title: this.$t('新型コロナウイルス感染症対策応援寄附金'),
          link: 'http://www.pref.kyoto.jp/somucho/news/coronakifukin.html',
        },
        {
          // icon: 'mdi-chart-timeline-variant',
          title: this.$t(
            '京都府新型コロナウイルス感染症対策本部会議（きょうと危機管理WEB）'
          ),
          link: 'https://www.bousai.pref.kyoto.lg.jp/dis_portal/',
          divider: true,
        },
        {
          // icon: 'mdi-chart-timeline-variant',
          title: this.$t('京都市の情報'),
          link: 'https://www.city.kyoto.lg.jp/',
        },
        {
          // icon: 'mdi-chart-timeline-variant',
          title: this.$t('福知山市の情報'),
          link: 'https://www.city.fukuchiyama.lg.jp/site/coronavirus/',
        },
        {
          // icon: 'mdi-chart-timeline-variant',
          title: this.$t('舞鶴市の情報'),
          link:
            'https://www.city.maizuru.kyoto.jp/kurashi/category/8-3-8-0-0.html',
        },
        {
          // icon: 'mdi-chart-timeline-variant',
          title: this.$t('綾部市の情報'),
          link:
            'http://www.city.ayabe.lg.jp/bosai/kurashi/anzen/bosai/singatakoronatyukubo.html',
        },
        {
          // icon: 'mdi-chart-timeline-variant',
          title: this.$t('宇治市の情報'),
          link: 'https://www.city.uji.kyoto.jp/site/corona/',
        },
        {
          // icon: 'mdi-chart-timeline-variant',
          title: this.$t('宮津市の情報'),
          link: 'http://www.city.miyazu.kyoto.jp/www/info/detail.jsp?id=4431',
        },
        {
          // icon: 'mdi-chart-timeline-variant',
          title: this.$t('亀岡市の情報'),
          link: 'http://www.city.kameoka.kyoto.jp/korona-index.html',
        },
        {
          // icon: 'mdi-chart-timeline-variant',
          title: this.$t('城陽市の情報'),
          link: 'https://www.city.joyo.kyoto.jp/category/10-0-0-0-0.html',
        },
        {
          // icon: 'mdi-chart-timeline-variant',
          title: this.$t('向日市の情報'),
          link:
            'https://www.city.muko.kyoto.jp/kurashi/soshiki/hurusatosouseisuisinnbu/kikakukouhouka/1/30/osirase/1585896380695.html',
        },
        {
          // icon: 'mdi-chart-timeline-variant',
          title: this.$t('長岡京市の情報'),
          link: 'http://www.city.nagaokakyo.lg.jp/category/14-0-0-0-0.html',
        },
        {
          // icon: 'mdi-chart-timeline-variant',
          title: this.$t('八幡市の情報'),
          link: 'http://www.city.yawata.kyoto.jp/category/4-6-0-0-0.html',
        },
        {
          // icon: 'mdi-chart-timeline-variant',
          title: this.$t('京田辺市の情報'),
          link: 'https://www.kyotanabe.jp/',
        },
        {
          // icon: 'mdi-chart-timeline-variant',
          title: this.$t('京丹後市の情報'),
          link: 'https://www.city.kyotango.lg.jp/covid_19/index.html',
        },
        {
          // icon: 'mdi-chart-timeline-variant',
          title: this.$t('南丹市の情報'),
          link:
            'https://www.city.nantan.kyoto.jp/www/life/113/006/000/index_74314.html',
        },
        {
          // icon: 'mdi-chart-timeline-variant',
          title: this.$t('木津川市の情報'),
          link: 'http://www.city.kizugawa.lg.jp/index.cfm',
        },
        {
          // icon: 'mdi-chart-timeline-variant',
          title: this.$t('大山崎町の情報'),
          link:
            'http://www.town.oyamazaki.kyoto.jp/annai/kenkoka/kenkokakenkozoshinkakari/korona/index.html',
        },
        {
          // icon: 'mdi-chart-timeline-variant',
          title: this.$t('久御山町の情報'),
          link: 'http://www.town.kumiyama.lg.jp/contents_detail.php?frmId=3421',
        },
        {
          // icon: 'mdi-chart-timeline-variant',
          title: this.$t('井手町の情報'),
          link: 'http://www.town.ide.kyoto.jp/soshiki/kinkyu2020/index.html',
        },
        {
          // icon: 'mdi-chart-timeline-variant',
          title: this.$t('宇治田原町の情報'),
          link:
            'https://www.town.ujitawara.kyoto.jp/iryo_kenko_fukushi/covid19/index.html',
        },
        {
          // icon: 'mdi-chart-timeline-variant',
          title: this.$t('笠置町の情報'),
          link: 'https://www.town.kasagi.lg.jp/topics_list.php',
        },
        {
          // icon: 'mdi-chart-timeline-variant',
          title: this.$t('和束町の情報'),
          link: 'http://www.town.wazuka.lg.jp/index.php',
        },
        {
          // icon: 'mdi-chart-timeline-variant',
          title: this.$t('精華町の情報'),
          link: 'https://www.town.seika.kyoto.jp/kinkyu_list/13612.html',
        },
        {
          // icon: 'mdi-chart-timeline-variant',
          title: this.$t('南山城村の情報'),
          link:
            'http://www.vill.minamiyamashiro.lg.jp/category_list.php?frmCd=11-15-0-0-0',
        },
        {
          // icon: 'mdi-chart-timeline-variant',
          title: this.$t('京丹波町の情報'),
          link: 'http://www.town.kyotamba.kyoto.jp/category/8-0-0-0-0.html',
        },
        {
          // icon: 'mdi-chart-timeline-variant',
          title: this.$t('伊根町の情報'),
          link: 'http://www.town.ine.kyoto.jp/kinkyu/1583369396903.html',
        },
        {
          // icon: 'mdi-chart-timeline-variant',
          title: this.$t('与謝野町の情報'),
          link: 'https://www.town.yosano.lg.jp/',
          divider: true,
        },
        // 知事からのメッセージが京都府では確認できていないのでコメントアウト
        // {
        //  title: this.$t('知事からのメッセージ'),
        //  link: 'https://www.youtube.com/watch?v=Mm-xFX7Csf8'
        // },
        {
          title: this.$t('当サイトについて'),
          link: this.localePath('/about'),
        },
        /* {
          title: this.$t('お問い合わせ先一覧'),
          link: this.localePath('/contacts'),
        }, */
        {
          title: this.$t('京都府ホームページ'),
          link: 'https://www.pref.kyoto.jp/',
        },
      ]
    },
  },
  watch: {
    $route: 'handleChageRoute',
  },
  methods: {
    handleChageRoute() {
      // nuxt-link で遷移するとフォーカスが残り続けるので $route を監視して SideNavigation にフォーカスする
      return this.$nextTick().then(() => {
        const $Side = this.$refs.Side as HTMLEmbedElement | undefined
        if ($Side) {
          $Side.focus()
        }
      })
    },
  },
})
</script>

<style lang="scss" scoped>
.SideNavigation {
  position: relative;
  @include lessThan($small) {
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.15);
  }
  &:focus {
    outline: 1px dotted $gray-3;
  }
}

.SideNavigation-Header {
  height: 64px;
  padding-left: 52px;
  @include largerThan($small) {
    height: auto;
    padding: 20px;
  }
  @include lessThan($small) {
    display: flex;
  }
  @include lessThan($tiny) {
    padding-left: 44px;
  }
}

.SideNavigation-OpenIcon {
  position: absolute;
  top: 0;
  left: 0;
  padding: 18px 8px 18px 16px;
  font-size: 28px;
  @include lessThan($tiny) {
    font-size: 24px;
    padding: 20px 10px;
  }
  @include largerThan($small) {
    display: none;
  }
}

.SideNavigation-CloseIcon {
  position: absolute;
  top: 0;
  left: 0;
  padding: 18px 8px 18px 16px;
  font-size: 28px;
  @include lessThan($tiny) {
    font-size: 24px;
    padding: 20px 10px;
  }
  @include largerThan($small) {
    display: none;
  }
}

.SideNavigation-HeaderTitle {
  width: 100%;
  color: #707070;
  @include font-size(13);
  @include largerThan($small) {
    margin: 0;
    margin-top: 10px;
  }
}

.SideNavigation-HeaderLink {
  display: flex;
  align-items: center;
  padding-right: 10px;
  @include lessThan($small) {
    height: 64px;
  }
  @include lessThan($tiny) {
    justify-content: space-between;
  }
  &:link,
  &:hover,
  &:focus,
  &:visited,
  &:active {
    color: inherit;
    text-decoration: none;
  }

  &:hover,
  &:focus {
    font-weight: bold;
  }

  &:focus {
    outline: dotted $gray-3 1px;
  }

  @include largerThan($small) {
    display: block;
    padding: 15px 0;
  }
}

.SideNavigation-HeaderLogo {
  @include lessThan($tiny) {
    width: 100px;
  }
}

.SideNavigation-HeaderText {
  margin: 10px 0 0 0;
  @include lessThan($small) {
    margin: 0 0 0 10px;
  }

  @include lessThan($tiny) {
    margin: 0;
  }
}

.SideNavigation-Body {
  padding: 0 20px 20px;
  @include lessThan($small) {
    display: none;
    padding: 0 36px 36px;
    &.-opened {
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      display: block !important;
      width: 100%;
      z-index: z-index-of(opened-side-navigation);
      background-color: $white;
      height: 100%;
      overflow: auto;
      -webkit-overflow-scrolling: touch;
    }
  }
}

.SideNavigation-Menu {
  @include lessThan($small) {
    padding-top: 50px;
  }
}

.SideNavigation-LanguageLabel {
  display: block;
  margin-bottom: 5px;
  @include font-size(14);
}

.SideNavigation-Footer {
  padding-top: 20px;
}

.SideNavigation-Social {
  display: flex;
}

.SideNavigation-SocialLink {
  border: 1px dotted transparent;
  border-radius: 30px;
  color: $gray-3;

  &:link,
  &:hover,
  &:visited,
  &:active {
    color: inherit;
    text-decoration: none;
  }

  &:focus {
    color: inherit;
    text-decoration: none;
    border: 1px dotted $gray-3;
    outline: none;
  }

  & + & {
    margin-left: 10px;
  }

  img {
    width: 30px;
  }
}

.SideNavigation-Copyright {
  display: block;
  margin-top: 15px;
  color: $gray-1;
  line-height: 1.3;
  font-weight: bold;
  @include font-size(10);
}

.SideNavigation-LicenseLink {
  &:focus {
    outline: 1px dotted $gray-3;
  }
}
</style>
