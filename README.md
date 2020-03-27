<!-- PLEASE SAVE OUR HOMETOWN OF KYOTO -->

# 京都府 新型コロナウイルス 総合情報サイト (非公式)

![](https://github.com/stop-covid19-kyoto/covid19-kyoto/workflows/production%20deploy/badge.svg)

[![京都府 新型コロナウイルス 総合情報サイト (非公式)](https://raw.githubusercontent.com/stop-covid19-kyoto/covid19-kyoto/development/static/ogp.jpg)](#)

<!--
### 日本語 | [English](./docs/en/README.md) | [Español](./docs/es/README.md) | [한국어](./docs/ko/README.md) | [繁體中文](./docs/zh_TW/README.md) | [简体中文](./docs/zh_CN/README.md) | [Tiếng Việt](./docs/vi/README.md) | [ภาษาไทย](./docs/th/README.md) | [Français](./docs/fr/README.md)
-->

## 貢献の仕方

Discord でディスカッションを行っております。

サイト制作にご協力頂ける方であれば誰でも参加可能です。[ここ](https://discordapp.com/invite/afMbXc6)からご参加下さい。

コミュニケーションにあたっては、[行動規範](./CODE_OF_CONDUCT.md) もご確認ください。

### 行動原則

[サイト構築にあたっての行動原則](./CODE_OF_CONDUCT.md)を御覧ください。

## 東京都オリジナルから派生した他のサイト

[Link先](./FORKED_SITES.md)を御覧ください。

## 翻訳者向け情報

翻訳をお手伝いいただける方は、[こちらのドキュメント](./TRANSLATION.md)を御覧ください。

## 開発者向け情報

サイト制作・開発に関する詳細は[プロジェクトへの参加方法](./CONTRIBUTING.md)をご確認下さい。

### 環境構築手順

- 必要となるNode.jsのバージョン: 10.19.0以上

**yarn を使う場合**
```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev
```

**docker compose を使う場合**
```bash
# serve with hot reload at localhost:3000
$ docker-compose up --build
```

**Vagrant を使う場合**
```bash
# serve with hot reload at localhost:3000
$ vagrant up
```

### `Cannot find module ****` と怒られた時

**yarn を使う場合**
```bash
$ yarn install
```

**docker compose を使う場合**
```bash
$ docker-compose run --rm app yarn install
```

### 本番環境/その他の判定

`process.env.GENERATE_ENV` の値が、本番の場合は`'production'`に、それ以外の場合は `'development'` になっています。  
テスト環境のみで実行したい処理がある場合はこちらの値をご利用ください。


### CONTRIBUTORS.md への追加について

[CONTRIBUTORS.md](./CONTRIBUTORS.md) はご協力いただいた皆様を紹介するためのファイルです。

サイト制作に関わったエンジニアやデザイナーはもちろん、制作には関わらないけど貢献していただいた方々もご紹介できればと思ってます。何かしらの貢献を行った方はぜひ追記をお願いします。

追加をご希望の場合は Pull Request を送っていただくか、この [Issue](https://github.com/stop-covid19-kyoto/covid19-kyoto/issues/24) にコメントをお願いします。

## ライセンス

本ソフトウェアは、[MITライセンス](./LICENSE.txt)の元提供されています。


## ステージング・本番環境への反映
`master`ブランチがアップデートされると、自動的に本番サイト https://stop-covid19-kyoto.netlify.com/ または https://kyoto.stopcovid19.jp/ が更新されます。

`development`ブランチがアップデートされると、自動的に開発用サイト https://dev-stop-covid19-kyoto.netlify.com/ が更新されます。

