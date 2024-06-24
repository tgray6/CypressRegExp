type FoundParts =
  | "OrgName"
  | "AgentName"
  | "LicensedInsuranceAgent"
  | "NegativeAgentSelfReference"
  | null;

interface AnalyticResult {
  audioId: string;
  foundParts: FoundParts[];
}

interface AnalyticResults {
  results: AnalyticResult[];
}

export const AnalyticResults: AnalyticResults = {
  results: [
    {
      audioId: "476369434285",
      foundParts: ["OrgName", "AgentName"],
    },
    {
      audioId: "476369508372",
      foundParts: ["OrgName", "AgentName"],
    },
    {
      audioId: "476369610651",
      foundParts: ["OrgName", "AgentName"],
    },
    {
      audioId: "476369658121",
      foundParts: ["OrgName", "AgentName"],
    },
    {
      audioId: "476369696598",
      foundParts: ["AgentName"],
    },
    {
      audioId: "476369722232",
      foundParts: ["OrgName", "AgentName"],
    },
    {
      audioId: "476370064546",
      foundParts: ["OrgName", "AgentName", "LicensedInsuranceAgent"],
    },
    {
      audioId: "476534609927",
      foundParts: ["OrgName", "AgentName"],
    },
    {
      audioId: "476534633365",
      foundParts: ["OrgName", "AgentName", "LicensedInsuranceAgent"],
    },
    {
      audioId: "476534970088",
      foundParts: ["OrgName", "AgentName", "NegativeAgentSelfReference"],
    },
    {
      audioId: "476535358451",
      foundParts: ["OrgName", "AgentName"],
    },
    {
      audioId: "476535417343",
      foundParts: ["OrgName", "AgentName", "NegativeAgentSelfReference"],
    },
    {
      audioId: "476535442879",
      foundParts: ["OrgName", "AgentName", "NegativeAgentSelfReference"],
    },
    {
      audioId: "476535748757",
      foundParts: ["AgentName"],
    },
    {
      audioId: "476694661390",
      foundParts: ["OrgName", "AgentName"],
    },
    {
      audioId: "476694835152",
      foundParts: ["OrgName", "AgentName", "LicensedInsuranceAgent"],
    },
    {
      audioId: "476694916580",
      foundParts: ["OrgName", "AgentName"],
    },
    {
      audioId: "476696078622",
      foundParts: ["OrgName", "AgentName", "LicensedInsuranceAgent"],
    },
    {
      audioId: "476835786967",
      foundParts: ["OrgName", "AgentName", "LicensedInsuranceAgent"],
    },
    {
      audioId: "476835950379",
      foundParts: ["OrgName", "AgentName", "LicensedInsuranceAgent"],
    },
    {
      audioId: "476836034538",
      foundParts: ["OrgName", "AgentName"],
    },
    {
      audioId: "476836705993", //mentions "Melcare" but is beyond the intro and is in regard to a follow up request on information, so did not match on this
      foundParts: ["AgentName"],
    },
    {
      audioId: "476836756698",
      foundParts: ["OrgName", "AgentName"],
    },
    {
      audioId: "476836814941",
      foundParts: ["OrgName", "AgentName", "LicensedInsuranceAgent"],
    },
    {
      audioId: "476837043472",
      foundParts: ["OrgName", "AgentName"],
    },
    {
      audioId: "476837073393",
      foundParts: ["OrgName", "AgentName"],
    },
    {
      audioId: "476968746234",
      foundParts: ["AgentName"],
    },
    {
      audioId: "476968953981",
      foundParts: ["OrgName", "AgentName", "LicensedInsuranceAgent"],
    },
    {
      audioId: "476969030381",
      foundParts: ["OrgName", "AgentName"],
    },
    {
      audioId: "476969751173",
      foundParts: ["OrgName", "AgentName"],
    },
    {
      audioId: "476969768610",
      foundParts: ["AgentName"],
    },
    {
      audioId: "476969938982",
      foundParts: ["OrgName", "AgentName", "NegativeAgentSelfReference"],
    },
    {
      audioId: "477122140338",
      foundParts: ["OrgName", "AgentName", "NegativeAgentSelfReference"],
    },
    {
      audioId: "477122485450",
      foundParts: ["OrgName", "AgentName"],
    },
    {
      audioId: "477122938277",
      foundParts: ["OrgName", "AgentName"],
    },
    {
      audioId: "477123063941",
      foundParts: ["OrgName", "AgentName", "NegativeAgentSelfReference"],
    },
    {
      audioId: "477123146036",
      foundParts: ["OrgName", "AgentName", "LicensedInsuranceAgent"],
    },
    {
      audioId: "477123418412",
      foundParts: ["OrgName", "AgentName", "LicensedInsuranceAgent"],
    },
    {
      audioId: "477267548542",
      foundParts: ["OrgName", "AgentName"],
    },
    {
      audioId: "477268313591",
      foundParts: ["OrgName", "AgentName", "LicensedInsuranceAgent"],
    },
    {
      audioId: "477268548705",
      foundParts: ["OrgName", "AgentName"],
    },
    {
      audioId: "477269233658",
      foundParts: ["OrgName", "AgentName", "NegativeAgentSelfReference"],
    },
    {
      audioId: "477416999003",
      foundParts: ["OrgName", "AgentName", "LicensedInsuranceAgent"],
    },
    {
      audioId: "477417169811",
      foundParts: ["OrgName", "AgentName"],
    },
    {
      audioId: "477417322526",
      foundParts: ["OrgName", "AgentName", "LicensedInsuranceAgent"],
    },
    {
      audioId: "477417551179",
      foundParts: ["OrgName", "AgentName", "NegativeAgentSelfReference"],
    },
    {
      audioId: "477418313307",
      foundParts: ["OrgName", "AgentName"],
    },
    {
      audioId: "477544548271",
      foundParts: ["OrgName", "AgentName"],
    },
    {
      audioId: "477544919219",
      foundParts: ["OrgName", "AgentName", "LicensedInsuranceAgent"],
    },
    {
      audioId: "477545250675",
      foundParts: ["OrgName", "AgentName", "LicensedInsuranceAgent"],
    },
    {
      audioId: "477545283776",
      foundParts: ["OrgName", "AgentName", "LicensedInsuranceAgent"],
    },
    {
      audioId: "477545599014",
      foundParts: ["OrgName", "AgentName"],
    },
    {
      audioId: "477545729234",
      foundParts: [null],
    },
    {
      audioId: "477545750014",
      foundParts: ["OrgName", "AgentName", "NegativeAgentSelfReference"],
    },
    {
      audioId: "477546317886",
      foundParts: ["AgentName", "NegativeAgentSelfReference"],
    },
    {
      audioId: "477685796527",
      foundParts: ["OrgName", "AgentName", "NegativeAgentSelfReference"],
    },
    {
      audioId: "477686611065",
      foundParts: ["OrgName", "AgentName"],
    },
    {
      audioId: "477687510831",
      foundParts: ["AgentName"],
    },
    {
      audioId: "477687532203",
      foundParts: ["OrgName", "AgentName", "NegativeAgentSelfReference"],
    },
    {
      audioId: "477838600665",
      foundParts: ["OrgName", "AgentName"],
    },
    {
      audioId: "477839544634",
      foundParts: ["OrgName", "AgentName"],
    },
    {
      audioId: "477839621485",
      foundParts: ["OrgName", "AgentName"],
    },
    {
      audioId: "477839938003",
      foundParts: ["OrgName", "AgentName"],
    },
    {
      audioId: "477994540892",
      foundParts: ["OrgName", "AgentName"],
    },
    {
      audioId: "477994648119",
      foundParts: ["OrgName", "AgentName", "NegativeAgentSelfReference"],
    },
    {
      audioId: "477994866855",
      foundParts: ["OrgName", "AgentName"],
    },
    {
      audioId: "477995028081",
      foundParts: ["OrgName", "AgentName", "LicensedInsuranceAgent"],
    },
    {
      audioId: "477995079573",
      foundParts: ["AgentName"],
    },
    {
      audioId: "477995345528",
      foundParts: ["OrgName", "AgentName", "LicensedInsuranceAgent"],
    },
    {
      audioId: "477995393876",
      foundParts: ["AgentName"],
    },
    {
      audioId: "477995454430",
      foundParts: ["OrgName", "AgentName"],
    },
    {
      audioId: "477995568205",
      foundParts: ["OrgName", "AgentName"],
    },
    {
      audioId: "477995647377",
      foundParts: ["OrgName", "AgentName"],
    },
    {
      audioId: "477995647767",
      foundParts: ["OrgName", "AgentName"],
    },
    {
      audioId: "478577394855",
      foundParts: ["OrgName", "AgentName"],
    },
    {
      audioId: "478720571811",
      foundParts: ["OrgName", "AgentName"],
    },
    {
      audioId: "478720827761",
      foundParts: ["OrgName", "AgentName", "LicensedInsuranceAgent"],
    },
    {
      audioId: "478720861548",
      foundParts: ["OrgName", "AgentName", "LicensedInsuranceAgent"],
    },
    {
      audioId: "478720865975",
      foundParts: ["OrgName", "AgentName"],
    },
    {
      audioId: "478721674711",
      foundParts: ["OrgName", "AgentName", "LicensedInsuranceAgent"],
    },
    {
      audioId: "478721859472",
      foundParts: ["OrgName", "AgentName"],
    },
    {
      audioId: "478721884155",
      foundParts: ["OrgName", "AgentName", "LicensedInsuranceAgent"],
    },
    {
      audioId: "478722397271",
      foundParts: ["OrgName", "AgentName", "LicensedInsuranceAgent"],
    },
    {
      audioId: "478871555354",
      foundParts: ["OrgName", "AgentName", "LicensedInsuranceAgent"],
    },
    {
      audioId: "478872014848",
      foundParts: ["OrgName", "AgentName", "NegativeAgentSelfReference"],
    },
    {
      audioId: "478872023515",
      foundParts: ["AgentName", "LicensedInsuranceAgent"], //mentions wellcare, but lack of intro makes the catch miss it
    },
    {
      audioId: "478872483451",
      foundParts: ["OrgName", "AgentName", "NegativeAgentSelfReference"],
    },
    {
      audioId: "478872634333",
      foundParts: ["OrgName", "AgentName", "NegativeAgentSelfReference"],
    },
    {
      audioId: "478872867057",
      foundParts: [],
    },
    {
      audioId: "478872932693",
      foundParts: ["OrgName", "NegativeAgentSelfReference"], //says agent name, but uses "i'm", and does not have proper intro, so cannot pinpoint accurately
    },
    {
      audioId: "478873517326",
      foundParts: ["OrgName", "AgentName"],
    },
    {
      audioId: "478997603263",
      foundParts: ["AgentName"],
    },
    {
      audioId: "478997726934",
      foundParts: ["OrgName", "AgentName"],
    },
    {
      audioId: "478999386309",
      foundParts: ["OrgName", "AgentName"],
    },
    {
      audioId: "479139086941",
      foundParts: ["OrgName", "AgentName", "NegativeAgentSelfReference"],
    },
    {
      audioId: "479139101906",
      foundParts: ["OrgName", "AgentName", "NegativeAgentSelfReference"],
    },
    {
      audioId: "479139450291",
      foundParts: ["OrgName", "AgentName"],
    },
    {
      audioId: "504303372979",
      foundParts: ["OrgName", "AgentName", "LicensedInsuranceAgent"],
    },
    {
      audioId: "504464989140",
      foundParts: ["OrgName", "AgentName", "NegativeAgentSelfReference"],
    },
    {
      audioId: "504608679481",
      foundParts: ["OrgName", "AgentName", "LicensedInsuranceAgent"],
    },
  ],
};
