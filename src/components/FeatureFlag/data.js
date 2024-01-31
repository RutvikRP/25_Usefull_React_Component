const apiRes = {
  showLightDarkTheam: true,
  showShunChowkdi: true,
  showColorChanger: true,
  showAccordian: true,
  showHirechicalMenu: true,
}
export default function featureFlagDataSevice() {
  return new Promise((resolve, reject) => {
    if (apiRes) setTimeout(resolve(apiRes), 500)
    else reject('There is error occure')
  })
}