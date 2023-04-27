export function format(text: string, ...value: string[]) {
  return text.replace(/{([0-9]+)}/g, function (match, index) {
    return typeof value[index] == 'undefined' ? match : value[index];
  });
}
