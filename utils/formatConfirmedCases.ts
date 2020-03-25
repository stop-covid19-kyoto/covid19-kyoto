type DataType = {
  attr: '検査実施人数'
  value: number
  children: [
    {
      attr: '陽性患者数'
      value: number
      children: [
        {
          attr: '症状のない方'
          value: number
        },
        {
          attr: '症状のある方'
          value: number
        },
        {
          attr: '退院した方'
          value: number
        },
        {
          attr: '亡くなられた方'
          value: number
        }
      ]
    }
  ]
}

type ConfirmedCasesType = {
  検査実施人数: number
  陽性物数: number
  症状のある方: number
  症状のない方: number
  亡くなられた方: number
  退院した方: number
}

/**
 * Format for *Chart component
 *
 * @param data - Raw data
 */
export default (data: DataType) => {
  const formattedData: ConfirmedCasesType = {
    検査実施人数: data.value,
    陽性物数: data.children[0].value,
    症状のある方: data.children[0].children[1].value,
    症状のない方: data.children[0].children[0].value,
    亡くなられた方: data.children[0].children[3].value,
    退院した方: data.children[0].children[2].value
  }
  return formattedData
}
