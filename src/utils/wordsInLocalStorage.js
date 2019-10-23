export const loadWords = () => {
  if (typeof window === "undefined") {
    return []
  }
  const item = window.localStorage.getItem("words")
  if (!item) {
    return []
  }
  return JSON.parse(item)
}

export const saveWords = newWords => {
  const hiddenWords = loadWords()
  const combinedWords = [...hiddenWords, ...newWords]
  localStorage.setItem("words", JSON.stringify(combinedWords))
}
