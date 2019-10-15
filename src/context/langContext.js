import React, { useState, useMemo } from "react"
import enData from "../data/en.json"
import heData from "../data/he.json"

const LangContext = React.createContext(null)

const DATA = {
  en: enData,
  he: heData,
}

const INVERT_LANG = {
  en: "he",
  he: "en",
}

export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState(localStorage.getItem("lang") || "en")
  const value = useMemo(
    () => ({
      lang,
      toggleLang: () => {
        setLang(INVERT_LANG[lang])
        localStorage.setItem("lang", INVERT_LANG[lang])
      },
      data: DATA[lang],
    }),
    [lang]
  )

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

export default LangContext
