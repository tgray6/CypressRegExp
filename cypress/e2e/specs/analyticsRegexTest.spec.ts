const testScriptString = ``;

let scriptTestLowerCase = testScriptString.toLowerCase();

// const RsnAncillaryScript = [
//   /(client|customer).{0,20}(helpful|useful).{0,50}(dental|vision|hearing)/g,
// ];

//used in all matches for dollar digit amounts: \d{1,3}(?:\s?,\s?\d{3})?     this matches 250|2500|2,500|2 ,500|250 ,000
const RsnDental = [
  /\b(i|we('ve)?) (have|got).{0,20} other.{0,10}dental.{0,20}plan/g,
  /important to you.{0,50}dental/g,
  /(you were looking|you interested in).{0,50}dental/g,
  /need.{0,10}any.{0,10}(extra|additional).{0,125}dental/g,
  /\b(add|get).{0,50}(separate|standalone) dental (plan|policy)/g,
  /dental (plan|policy).{0,25}(separate|standalone)/g,
  /(?<!(does(n't| not) (give|have)|(dentist.{0,20}name|name.{0,20}dentist)|recorded.{0,10}quality|flex car|exam|allowance|expense|network|copay|deductible|coal pay|co-pay|a year|per year|yearly|a month|per month|monthly|\$|dollar|zero|thousand|hundred|benefit|plan|policy|program|cover|pay|premium|questions|inform you|\bone you('re| are) on|service|out.{0,8}pocket|provider|vendor|(\bget|give).{0,20} \d{1,3}(?:\s?,\s?\d{3})?|\d{1,3}(?:\s?,\s?\d{3})? .{0,20}(\bget|give)|(\bget|give) you.{0,10}(more|\bany)).{0,200})\bdental(?!.{0,200}(recorded.{0,10}quality|flex car|allowance|expense|network|copay|deductible|coal pay|co-pay|a year|per year|yearly|a month|per month|monthly|\$|dollar|zero|thousand|hundred|benefit|plan|policy|program|cover|pay|premium|\bone you('re| are) on|service|center|facility|office|group|checkup|exam|routine|provider|vendor|(\bget|give).{0,20} \d{1,3}(?:\s?,\s?\d{3})?|\d{1,3}(?:\s?,\s?\d{3})? .{0,20}(\bget|give)))/g,
];

const RsnVision = [
  /\b(i|we('ve)?) (have|got).{0,20} other.{0,10}vision.{0,20}plan/g,
  /important to you.{0,50}vision/g,
  /(you were looking|you interested in).{0,50}vision/g,
  /need.{0,10}any.{0,10}(extra|additional).{0,125}vision/g,
  /\b(add|get).{0,50}(separate|standalone) vision (plan|policy)/g,
  /vision (plan|policy).{0,25}(separate|standalone)/g,
  /(?<!(recorded.{0,10}quality|flex car|exam|allowance|expense|network|copay|deductible|coal pay|co-pay|a year|per year|yearly|a month|per month|monthly|\$|dollar|zero|thousand|hundred|benefit|plan|policy|program|cover|pay|premium|questions|inform you|\bone you('re| are) on|service|out.{0,8}pocket|provider|vendor|(\bget|give).{0,20} \d{1,3}(?:\s?,\s?\d{3})?|\d{1,3}(?:\s?,\s?\d{3})? .{0,20}(\bget|give)|(\bget|give) you.{0,10}(more|\bany)).{0,200})\bvision(?!.{0,200}(recorded.{0,10}quality|flex car|allowance|expense|network|copay|deductible|coal pay|co-pay|a year|per year|yearly|a month|per month|monthly|\$|dollar|zero|thousand|hundred|benefit|plan|policy|program|cover|pay|premium|\bone you('re| are) on|service|center|facility|group|checkup|exam|routine|provider|vendor|(\bget|give).{0,20} \d{1,3}(?:\s?,\s?\d{3})?|\d{1,3}(?:\s?,\s?\d{3})? .{0,20}(\bget|give)))/g,
];

//hearing has an extra negative lookahead/behind, we also needed to exclude phrases like "thats what i am hearing from you" or "i cant hear anything": hearing(?!.{0,10}(from you|me ok)))
const RsnHearing = [
  /\b(i|we('ve)?) (have|got).{0,20} other.{0,10}hearing.{0,20}plan/g,
  /important to you.{0,50}hearing/g,
  /(you were looking|you interested in).{0,50}hearing/g,
  /need.{0,10}any.{0,10}(extra|additional).{0,125}hearing/g,
  /\b(add|get).{0,50}(separate|standalone) hearing (plan|policy)/g,
  /hearing (plan|policy).{0,25}(separate|standalone)/g,
  /(?<!(recorded.{0,10}quality|flex car|exam|allowance|expense|network|copay|deductible|coal pay|co-pay|a year|per year|yearly|a month|per month|monthly|\$|dollar|zero|thousand|hundred|benefit|plan|policy|program|cover|pay|premium|questions|inform you|\bone you('re| are) on|service|out.{0,8}pocket|provider|vendor|(\bget|give).{0,20} \d{1,3}(?:\s?,\s?\d{3})?|\d{1,3}(?:\s?,\s?\d{3})? .{0,20}(\bget|give)|(\bget|give) you.{0,10}(more|\bany)).{0,200})(?<!.{0,40}(\bcan|can't|cannot|hard time).{0,40})\b(hear|hearing)(?!.{0,20}(from you|me ok|story|you click))(?!.{0,200}(\baid|recorded.{0,10}quality|flex car|allowance|expense|network|copay|deductible|coal pay|co-pay|a year|per year|yearly|a month|per month|monthly|\$|dollar|zero|thousand|hundred|benefit|plan|policy|program|cover|pay|premium|\bone you('re| are) on|service|center|facility|group|checkup|exam|routine|provider|vendor|(\bget|give).{0,20} \d{1,3}(?:\s?,\s?\d{3})?|\d{1,3}(?:\s?,\s?\d{3})? .{0,20}(\bget|give)))/g,
];

//cancel is mistranscribed as cancer sometimes, so when you see negatives looking for like "call and _____", its to eliminate those mistranscriptions
const RsnCancer = [
  /cancer.{0,50}helpful to you/g,
  /(you were looking|you interested in|(good idea|smart to|want to consider|were to).{0,20} (\bget|go with)).{0,50}cancer/g,
  /\badd.{0,50}cancer/g,
  /family history.{0,10} cancer/g,
  /cancer.{0,20}runs in .{0,10}family/g,
  /need.{0,10}any.{0,10}(extra|additional).{0,125}cancer/g,
  /(have|recommend|sign up|offer).{0,175}cancer/g,
  //negative check before cancer for radiation|chemo
  /(need|want|pick up|diagnosed).{0,100}(?<!(radiation|chemo|call and ).{0,50})cancer(?!.{0,50}(pay))/g,
  /cancer.{0,100}((write|cut).{0,10}check|cash benefit|payout|pay you)/g,
  /(?<!(call and |drugs|medication|treatment|network|copay|deductible|coal pay|co-pay|a year|per year|yearly|a month|per month|past six month|monthly|\$|dollar|zero|thousand|hundred|benefit|plan|policy|program|cover|pay|premium|questions|inform you|\bone you('re| are) on|service|screen|out.{0,8}pocket|provider|vendor|(\bget|give).{0,20} \d{1,3}(?:\s?,\s?\d{3})?|\d{1,3}(?:\s?,\s?\d{3})? .{0,20}(\bget|give)).{0,200})\bcancer(?!.{0,200}(call and |network|copay|deductible|coal pay|co-pay|a year|per year|yearly|a month|per month|monthly|\$|dollar|zero|thousand|hundred|benefit|plan|policy|program|cover|pay|premium|\bone you('re| are) on|service|center|group|checkup|screen|institute|safeguarded|drug|medication|(dementia|cerebral palsy|cirrhosis|epilepsy)))/g,
];

const RsnStroke = [
  /stroke.{0,50}helpful to you/g,
  /(you were looking|you interested in|(good idea|smart to|want to consider).{0,20} (\bget|go with)).{0,50}stroke/g,
  /\badd.{0,50}stroke/g,
  /need.{0,10}any.{0,10}(extra|additional).{0,125}stroke/g,
  /(have|recommend|sign up|offer).{0,175}stroke/g,
  /(need|want|pick up|diagnosed).{0,100}stroke(?!.{0,50}(pay))/g,
  /stroke.{0,100}((write|cut).{0,10}check|cash benefit|payout|pay you)/g,
  /(?<!(treatment|network|copay|deductible|coal pay|co-pay|a year|per year|yearly|a month|per month|past six month|monthly|\$|dollar|zero|thousand|hundred|benefit|plan|policy|program|cover|pay|premium|questions|inform you|\bone you('re| are) on|service|out.{0,8}pocket|provider|vendor|(\bget|give).{0,20} \d{1,3}(?:\s?,\s?\d{3})?|\d{1,3}(?:\s?,\s?\d{3})? .{0,20}(\bget|give)).{0,200})\bstroke(?!.{0,200}(network|copay|deductible|coal pay|co-pay|a year|per year|yearly|a month|per month|monthly|\$|dollar|zero|thousand|hundred|benefit|plan|policy|program|cover|pay|premium|\bone you('re| are) on|service|center|checkup|safeguarded|(dementia|cerebral palsy|cirrhosis|epilepsy)))/g,
];

const RsnHeartAttack = [
  /(heart|harrow track|\bat attack).{0,50}helpful to you/g,
  /(you were looking|you interested in|(good idea|smart to|want to consider).{0,20} (\bget|go with)).{0,50}(heart|harrow track|\bat attack)/g,
  /\badd.{0,50}(heart|harrow track|\bat attack)/g,
  /need.{0,10}any.{0,10}(extra|additional).{0,125}(heart|harrow track|\bat attack)/g,
  /(have|recommend|sign up|offer).{0,175}(heart|harrow track|\bat attack)/g,
  /(need|want|pick up|diagnosed).{0,100}(heart|harrow track|\bat attack)(?!.{0,50}(pay))/g,
  /(heart|harrow track|\bat attack).{0,100}((write|cut).{0,10}check|cash benefit|payout|pay you)/g,
  /(?<!(treatment|network|copay|deductible|coal pay|co-pay|a year|per year|yearly|a month|per month|past six month|monthly|\$|dollar|zero|thousand|hundred|benefit|plan|policy|program|cover|pay|premium|questions|inform you|\bone you('re| are) on|service|out.{0,8}pocket|provider|vendor|(\bget|give).{0,20} \d{1,3}(?:\s?,\s?\d{3})?|\d{1,3}(?:\s?,\s?\d{3})? .{0,20}(\bget|give)).{0,200})(heart|\bat|harrow) (attack|track)(?!.{0,200}(network|copay|deductible|coal pay|co-pay|a year|per year|yearly|a month|per month|monthly|\$|dollar|zero|thousand|hundred|benefit|plan|policy|program|cover|pay|premium|\bone you('re| are) on|service|center|checkup|safeguarded|(dementia|cerebral palsy|cirrhosis|epilepsy)|had.{0,30}(chest pain|blood clot)))/g,
];

const RsnHospIndemn = [
  /(hospital|indem|demnity|demity).{0,50}helpful to you/g,
  /(you were looking|you interested in|go along with|you (can|may) .{0,10} get).{0,50}(hospital|indem|demnity|demity)/g,
  /\badd.{0,50}(hospital|indem|demnity|demity)/g,
  /need.{0,10}any.{0,10}(extra|additional).{0,125}hospital/g,
  /(recommend|sign up|offer).{0,175}(hospital|indem|demnity|demity)/g,
  /hospital.{0,100}((write|cut).{0,10}check|cash benefit|payout|pay you)/g,
  /hospital.{0,5}(indem|demnity|demity).{0,125}ever admitted/g,
  /(?<!(treatment|network|copay|deductible|coal pay|co-pay|a year|per year|yearly|a month|per month|monthly|\$|dollar|zero|thousand|hundred|benefit|plan|policy|program|cover|pay|premium|questions|inform you|\bone you('re| are) on|service|out.{0,8}pocket|provider|vendor|(\bget|give).{0,20} \d{1,3}(?:\s?,\s?\d{3})?|\d{1,3}(?:\s?,\s?\d{3})? .{0,20}(\bget|give)).{0,200})hospital.{0,5}(indem|demnity|demity)(?!.{0,200}(network|copay|deductible|coal pay|co-pay|a year|per year|yearly|a month|per month|monthly|\$|dollar|zero|thousand|hundred|benefit|plan|policy|program|cover|pay|premium|\bone you('re| are) on|service|center|checkup|safeguarded))/g,
];

const RsnFinalExpense = [
  /(?<!(treatment|network|copay|deductible|coal pay|co-pay|a year|per year|yearly|a month|per month|monthly|\$|dollar|zero|thousand|hundred|benefit|plan|policy|program|cover|pay|premium|questions|inform you|\bone you('re| are) on|service|out.{0,8}pocket|provider|vendor|(\bget|give).{0,20} \d{1,3}(?:\s?,\s?\d{3})?|\d{1,3}(?:\s?,\s?\d{3})? .{0,20}(\bget|give)).{0,200})final expense(?!.{0,200}(network|copay|deductible|coal pay|co-pay|a year|per year|yearly|a month|per month|monthly|\$|dollar|zero|thousand|hundred|benefit|plan|policy|program|cover|pay|premium|\bone you('re| are) on|service|center|checkup|safeguarded))/g,
];

describe(`Ancillary`, () => {
  // it("RsnAncillaryScript", () => {
  //   LogPatternMatchesAndTestAssert(RsnAncillaryScript);
  // });
  it("RsnDental", () => {
    LogPatternMatchesAndTestAssert(RsnDental);
  });

  it("RsnVision", () => {
    LogPatternMatchesAndTestAssert(RsnVision);
  });

  it("RsnHearing", () => {
    LogPatternMatchesAndTestAssert(RsnHearing);
  });

  it("RsnCancer", () => {
    LogPatternMatchesAndTestAssert(RsnCancer);
  });

  it("RsnStroke", () => {
    LogPatternMatchesAndTestAssert(RsnStroke);
  });

  it("RsnHeartAttack", () => {
    LogPatternMatchesAndTestAssert(RsnHeartAttack);
  });

  it("RsnHospIndemn", () => {
    LogPatternMatchesAndTestAssert(RsnHospIndemn);
  });

  it("RsnFinalExpense", () => {
    LogPatternMatchesAndTestAssert(RsnFinalExpense);
  });
});

function LogPatternMatchesAndTestAssert(regExpList: RegExp[]): void {
  // Initialize an array to store matched positions
  const matchedPositions: number[] = [];

  // Iterate through each pattern
  regExpList.forEach((pattern) => {
    let matchResult;
    while ((matchResult = pattern.exec(scriptTestLowerCase)) !== null) {
      const matchPosition = matchResult.index;
      const matchedPart = matchResult[0];
      const matchedLength = matchedPart.length;

      // Get context around the match (20 characters before and after)
      const start = Math.max(0, matchPosition - 20);
      const end = Math.min(scriptTestLowerCase.length, matchPosition + matchedLength + 20);
      const context = scriptTestLowerCase.substring(start, end);

      // Log match details
      // console.log(`Matched: ${matchedPart}`);
      cy.log(`Matched: ${matchedPart}`);
      cy.log(`Pattern: ${pattern}`);
      cy.log(`Context: "...${context}..."`); // Shows surrounding context

      // Store matched position to avoid duplicate logging
      matchedPositions.push(matchPosition);
    }
  });

  // Assert that at least one regex pattern matches the test string
  const matchFound = regExpList.some((pattern) => pattern.test(scriptTestLowerCase));
  expect(matchFound).to.be.true;
}
