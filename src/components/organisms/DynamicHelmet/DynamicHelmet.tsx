import { memo } from 'react'
import { useSelector } from 'react-redux'
import { RootReducerType } from 'store/spec/index.spec'
import { Helmet } from 'react-helmet'
import { LanguageOptions } from 'utils/const'

function DynamicHelmet () {
  const lang = useSelector((store: RootReducerType) => store.ui.lang)
  const isUkrainian = lang === LanguageOptions.UA

  const title = isUkrainian
    ? `Ми переможемо`
    : `We will win`

  const description = isUkrainian
    ? `Благодійний фонд "Ми переможемо"`
    : `"We will win" charity fund`

  return (
    <Helmet
      htmlAttributes={{
        lang: lang === LanguageOptions.UA ? `uk` : `en`
      }}
    >
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta
        name="description"
        content={description}
      />
    </Helmet>
  )
}

export default memo(DynamicHelmet)