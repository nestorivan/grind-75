function validParentheses(s: string): boolean {
  const stack: string[] = [];

  const openingParentheses = ["(", "[", "{"];
  const parenthesesPairs: Map<string, string> = new Map([
    [")", "("],
    ["}", "{"],
    ["]", "["],
  ]);

  //for each bracket/parentheses
  for (let char of s) {
    //we check if its an opening bracket
    if (openingParentheses.includes(char)) {
      // we push all opening brackets
      stack.push(char);
    } else if (
      // else its a closing bracket
      // we check if stack is empty
      stack.length === 0 ||
      // or if the type of closing bracket doesnt match the type of the last pushed bracket
      stack.pop() !== parenthesesPairs.get(char)
    ) {
      // we immediate fail
      return false;
    }
  }

  // once we checked all brackets we check if our stack is empty
  // meaning all opening brackets have a matching closing bracket
  return stack.length === 0;
}

export default validParentheses;
