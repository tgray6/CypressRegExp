import { Parts } from "../types/types";
import { AnalyticResults } from "../../fixtures/truths/truth";

function findParts(audioId: string): Parts[] {
  const targetResult = AnalyticResults.find((item) => item.audioId === audioId);
  return targetResult.foundParts;
}

describe("Regex Tests", () => {
  it(`AudioTID ${AnalyticResults[0].audioId}`, () => {
    const parts: Parts[] = findParts("476369434285");

    console.log(parts);
    expect(parts)
      .to.contain("PartOne")
      .to.not.contain("PartTwo")
      .to.contain("PartThreeeFail");
  });
});
