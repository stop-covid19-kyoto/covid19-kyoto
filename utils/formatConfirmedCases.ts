type DataType = {
  attr: '検査実施人数'
  value: number
  children: [
    {
      attr: '陽性患者数'
      value: number
      children: [
        {
          attr: '入院中・入院調整中'
          value: number
        },
        {
          attr: '宿泊施設'
          value: number
        },
        {
          attr: '自宅療養'
          value: number
        },
        {
          attr: '死亡'
          value: number
        },
        {
          attr: '退院・解除'
          value: number
        }
      ]
    }
  ]
}

type ConfirmedCasesType = {
  検査実施人数: number
  陽性者数: number
  入院中: number
  宿泊施設: number
  自宅療養: number
  死亡: number
  退院: number
}

/**
 * Format for *Chart component
 *
 * @param data - Raw data
 */
export default (data: DataType) => {
  const formattedData: ConfirmedCasesType = {
    検査実施人数: data.value,
    陽性者数: data.children[0].value,
    入院中: data.children[0].children[0].value,
    宿泊施設: data.children[0].children[1].value,
    自宅療養: data.children[0].children[2].value,
    死亡: data.children[0].children[3].value,
    退院: data.children[0].children[4].value
  }
  return formattedData
}
