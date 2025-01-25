function validParentheses(s: string): boolean {
  const stack: string[] = [];

  const openingParentheses = ["(", "[", "{"];
  const parenthesesPairs: Map<string, string> = new Map([
    [")", "("],
    ["}", "{"],
    ["]", "["],
  ]);

  for (let char of s) {
    if (openingParentheses.includes(char)) {
      stack.push(char);
    } else if (
      stack.length === 0 ||
      stack.pop() !== parenthesesPairs.get(char)
    ) {
      return false;
    }
  }

  return stack.length === 0;
}

export default validParentheses;
