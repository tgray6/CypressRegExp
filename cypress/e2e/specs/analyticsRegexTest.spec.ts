const testScriptString = `is there anybody that helps you with making your health care decisions? & Is there any one that assists you in making your health care decisionszzzz?`;

let scriptTestLowerCase = testScriptString.toLowerCase();

const Test = [
  //Is there anyone that assists you in making your *Healthcare decisions*?
  /(any|some)(one|body).{0,12}(assist(s|ing)?|help(s|ing)?).{0,8}(make|making|help(s|ing)?).{0,14} (health|medical|insurance|plan|medicaid|medicare)( )?(care|related)? decision(s)?/g,
  /(any|some)(one|body).{0,8}(assist(s|ing)?|help(s|ing)?).{0,18} (health|medical|insurance|plan|medicaid|medicare)( )?(care|related)? decision(s)?/g,
  /(any|some)(one|body).{0,6}(make|making).{0,14}decisions (for you|on your behalf)/g,
  /need (any|some)(one|body).{0,8}(make|making|help(s|ing)?) your decision(s)?/g,
  //do you make your own healthcare decisions
  /your.{0,4} (health|medical)( )?(care) (decision(s)|choices)?/g,
  /you.{0,6} make your own decision(s)?/g,
  /you.{0,12} make decision(s)? for yourself/g,
  /(you|he|she).{0,10}(make|making|help(s|ing)?).{0,16} (health|medical|insurance|plan|medicaid|medicare)( )?(care)? decision(s)?/g,
  /(make|making|help(s|ing)?).{0,8}(your|his|her|their).{0,16}(health|medical|insurance|plan|medicaid|medicare)( )?(care)? decision(s)?/g,
  /(make|making|help(s|ing)?).{0,8}(your).{0,6} decision(s)?.{0,14}your (medicaid|medicare)/g,
  //power of attorney
  /have.{0,12} power (of |for )?(attorney|returning)/g,
  /are you.{0,12} power (of |for )?(attorney|returning)/g,
  /you( are|'re).{0,12} power (of |for )?(attorney|returning)/g,
  /you .{0,4} (his|her|their) .{0,12} power (of |for )?(attorney|returning)/g,
];

describe(`TEST`, () => {
  it("TEST", () => {
    LogPatternMatchesAndTestAssert(Test);
  });
});

function LogPatternMatchesAndTestAssert(regExpList: RegExp[]): void {
  // Initialize an array to store matched positions
  const matchedPositions: number[] = [];

  // Iterate through each pattern
  regExpList.forEach((pattern) => {
    // Use exec to get the match results iteratively
    let matchResult;
    while ((matchResult = pattern.exec(scriptTestLowerCase)) !== null) {
      const matchPosition = matchResult.index;

      // Check if this position has already been matched by another pattern
      if (!matchedPositions.includes(matchPosition)) {
        const matchedPart = matchResult[0];
        const matchedLength = matchedPart.length;
        cy.log(`Matched: ${matchedPart}`);
        // cy.log(`Position: ${matchPosition}`);
        // cy.log(`Length: ${matchedLength}`);
        cy.log(`Pattern: ${pattern}`);

        // Store the matched position to avoid logging it again
        matchedPositions.push(matchPosition);
      }
    }
  });

  // Assert that the test string matches at least one regex pattern
  const matchFound = regExpList.some((pattern) =>
    pattern.test(scriptTestLowerCase)
  );

  expect(matchFound).to.be.true;
}
