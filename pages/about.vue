<template>
  <div class="About">
    <page-header class="mb-3">
      {{ $t('当サイトについて') }}
    </page-header>
    <static-card>
      {{
        $t(
          '当サイトは京都府内の新型コロナウイルス感染症（COVID-19）に関する最新情報を提供するために作成されました。'
        )
      }}<br />
      {{
        $t(
          '運営・開発は以下の学生エンジニアによってボランティアで行われています。'
        )
      }}<br />
      <br />
      ・藤原出帆 (
      <a href="//twitter.com/fujiwaraizuho" target="_blank">
        {{ $t('@fujiwaraizuho') }}
      </a>
      )
      <br />
      ・Genbu (
      <a href="//twitter.com/genbugraphy" target="_blank">
        {{ $t('@genbugraphy') }}
      </a>
      )
      <br />
      ・0505Keitan (
      <a href="//twitter.com/0505Keitan" target="_blank">
        {{ $t('@0505Keitan') }}
      </a>
      )
      <br />
      ・y-chan (
      <a href="//twitter.com/Xperia_Build_Y" target="_blank">
        {{ $t('@Xperia_Build_Y') }}
      </a>
      )
      <br />
      ・laminne (
      <a href="//resume.id/lamin" target="_blank">
        {{ $t('Resume.id') }}
      </a>
      )
      <br />
      ・はす (
      <a href="//twitter.com/83_hasu" target="_blank">
        {{ $t('@83_hasu') }}
      </a>
      )
      <br />
      ・f0reach
      <br />
      ・maco
      <br /><br />
      複製・改変が許されたオープンソースライセンスで公開されている、
      <a href="//stopcovid19.metro.tokyo.lg.jp/" target="_blank">
        {{ $t('東京都公式新型コロナウイルス対策サイト') }}
      </a>
      の
      <a href="//github.com/tokyo-metropolitan-gov/covid19" target="_blank">
        {{ $t('仕組み') }}
      </a>
      を利用しています
      <br />
      <br />
      {{
        $t(
          '京都府による公式情報と客観的な数値をわかりやすく伝えることで、京都府にお住まいの方や、京都府内に拠点を持つ企業の方、京都府を訪れる方が、現状を把握して適切な対策を取れるようにすることを目的としています。'
        )
      }}
    </static-card>
    <static-card>
      <h3>{{ $t('ブラウザ環境について') }}</h3>
      <p>
        {{ $t('当サイトは以下の環境でご覧いただくことを推奨いたします。') }}
      </p>
      <ul>
        <li>{{ $t('Microsoft Edge 最新版') }}</li>
        <li>{{ $t('Mozilla Firefox 最新版') }}</li>
        <li>
          {{ $t('Google Chrome 最新版（Windows 10以上, Android 8.0以上）') }}
        </li>
        <li>{{ $t('Safari 最新版（macOS, iOS）') }}</li>
        <li>{{ $t('Opera 最新版') }}</li>
      </ul>
      <p class="StaticCard-Note">
        <span>{{ $t('※') }}</span>
        <span>
          {{
            $t(
              '※ 推奨環境以外で利用された場合や、推奨環境下でもご利用のブラウザの設定等によっては、正しく表示されない場合がありますのでご了承ください。'
            )
          }}
        </span>
      </p>
    </static-card>
    <static-card>
      <h3>{{ $t('当サイトへのリンクについて') }}</h3>
      <p>{{ $t('当サイトへのリンクは自由です。') }}</p>
    </static-card>
    <static-card>
      <h3>{{ $t('JavaScriptについて') }}</h3>
      <p>
        {{ $t('当サイトではJavaScriptを使用しております。') }}<br />
        {{
          $t(
            'JavaScriptを無効にして使用された場合、各ページが正常に動作しない、または、表示されない場合がございます。'
          )
        }}<br />
        {{
          $t(
            '当サイトをご利用の際には、JavaScriptを有効にして頂きますようお願いいたします。'
          )
        }}
      </p>
    </static-card>
    <static-card>
      <h3>{{ $t('クッキー (Cookie) について') }}</h3>
      <p>
        {{ $t('当サイトの一部ではクッキーを使用しています。') }}<br />
        {{
          $t(
            'クッキーとは、Webコンテンツからの要求で利用者の手元の端末に一時的に保存されるデータのことで、当サイトでは利用状況の把握のためにクッキーを使用する場合があります。'
          )
        }}<br />
      </p>
      <p>
        {{
          $t(
            'ブラウザに関する情報の収集を希望しない場合は、インターネット閲覧ソフト（ブラウザ）をご自身で設定することにより、クッキーの機能が働かないようにすることも可能です。'
          )
        }}
      </p>
      <p>
        {{
          $t(
            'ただし、クッキーを受け入れない設定をされている場合は、当サイトの機能が正常に動作しない場合がございます。'
          )
        }}
      </p>
    </static-card>
    <static-card>
      <h3>{{ $t('Google Analyticsの利用について') }}</h3>
      <p>
        {{
          $t(
            '当サイトでは、サービス向上やサイトの改善のためにGoogle LLCの提供するアクセス分析のツールであるGoogle Analyticsを利用した計測を行っております。'
          )
        }}
      </p>
      <p>
        {{
          $t(
            'Google Analyticsでは、当サイトが発行するクッキー (Cookie) 等を利用して、Webサイトの利用データ（アクセス状況、トラフィック、閲覧環境、IPアドレスなど）を収集しております。クッキーの利用に関してはGoogleのプライバシーポリシーと規約に基づいております。'
          )
        }}
      </p>
      <p>
        {{
          $t(
            '取得したデータはWebサイト利用状況を分析しサービスの改善につなげるため、またはサイト運営者へのレポートを作成するため、その他のサービスの提供に関わる目的に限り、これを使用します。（サイト運営者へのレポートでは、クッキーはブラウザ単位で本サイトのユーザー数をカウントするため、IPアドレスはGoogle Analyticsの分析機能を通じてアクセス元の地域分布（国、州・都道府県、都市）を把握するために利用されています。）'
          )
        }}
      </p>
      <p>
        {{
          $t(
            'Google Analyticsの利用規約及びプライバシーポリシーに関する説明については、Google Analyticsのサイトをご覧ください。'
          )
        }}
      </p>
      <ul>
        <li>
          <external-link
            :url="
              $t(
                'https://marketingplatform.google.com/about/analytics/terms/jp/'
              )
            "
            :icon-size="16"
          >
            {{ $t('Google Analytics利用規約') }}
          </external-link>
        </li>
        <li>
          <external-link
            :url="$t('https://policies.google.com/privacy?hl=ja')"
            :icon-size="16"
          >
            {{ $t('Googleのプライバシーポリシー') }}
          </external-link>
        </li>
        <li>
          <external-link
            :url="
              $t('https://support.google.com/analytics/answer/6004245?hl=ja')
            "
            :icon-size="16"
          >
            {{ $t('Google Analyticsに関する詳細情報') }}
          </external-link>
        </li>
      </ul>
      <i18n
        tag="p"
        path="Google Analyticsによる情報送信を回避する場合は、Google がサポートする{addon}をご利用ください。"
      >
        <template v-slot:addon>
          <external-link
            :url="$t('https://tools.google.com/dlpage/gaoptout?hl=ja')"
            :icon-size="16"
          >
            {{ $t('測定を無効にするブラウザ アドオン') }}
          </external-link>
        </template>
      </i18n>
    </static-card>
    <static-card>
      <h3>{{ $t('免責事項') }}</h3>
      <p>
        {{
          $t(
            '当サイトに掲載されている情報の正確性については万全を期していますが、京都府やサイト運営者は利用者が当サイトの情報を用いて行う一切の行為について責任を負うものではありません。'
          )
        }}
      </p>
      <p>
        {{
          $t(
            'また、利用者が当サイトを利用したことにより発生した利用者の損害及び利用者が第三者に与えた損害に対して、責任を負うものではありません。'
          )
        }}
      </p>
      <p>
        {{
          $t(
            '当サイトに掲載されている情報は、予告なしに変更又は削除することがあります。'
          )
        }}
      </p>
    </static-card>
    <static-card>
      <h3>{{ $t('データについて') }}</h3>
      <i18n
        tag="p"
        path="本サイトで使用しているデータは、{officialWebsite}にて誰でも閲覧可能です。（データは順次追加予定です）"
      >
        <template v-slot:officialWebsite>
          <external-link
            url="https://www.pref.kyoto.jp/kentai/news/novelcoronavirus.html"
            :icon-size="16"
          >
            {{ $t('京都府公式サイト') }}
          </external-link>
        </template>
      </i18n>
    </static-card>
    <static-card>
      <h3>{{ $t('ソースコードについて') }}</h3>
      <p>
        {{
          $t(
            '当サイトのソースコードはMITライセンスで公開されており、誰でも自由に利用することができます。'
          )
        }}
        <i18n path="詳しくは、{githubRepo}をご確認ください。">
          <template v-slot:githubRepo>
            <external-link
              url="https://github.com/stop-covid19-kyoto/covid19-kyoto"
              :icon-size="16"
            >
              {{ $t('GitHub リポジトリ') }}
            </external-link>
          </template>
        </i18n>
      </p>
    </static-card>
    <static-card>
      <h3>{{ $t('お問い合わせ先') }}</h3>
      <p>{{ $t('京都府 新型コロナウイルス感染症 対策サイト 運営組織') }}</p>
      <p>
        {{ $t('メール') }}:
        <a href="mail:stop.covid19.kyoto.contact@gmail.com">
          stop.covid19.kyoto.contact@gmail.com
        </a>
      </p>
    </static-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'
import PageHeader from '@/components/PageHeader.vue'
import StaticCard from '@/components/StaticCard.vue'
import ExternalLink from '@/components/ExternalLink.vue'

export default Vue.extend({
  components: {
    PageHeader,
    StaticCard,
    ExternalLink,
  },
  head(): MetaInfo {
    return {
      title: this.$t('当サイトについて') as string,
    }
  },
})
</script>
