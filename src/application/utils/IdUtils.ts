export function idFormatter(id: string) {
  if (!id) return
  let newId = id
  while (newId.length < 4) {
    newId = "0" + newId
  }
  return "N.° " + newId
}
