import React from "react"
import { LangProvider } from "./langContext"

const withLang = Component => {
  const ComponentWithLang = () => (
    <LangProvider>
      <Component />
    </LangProvider>
  )
  return ComponentWithLang
}

export default withLang
