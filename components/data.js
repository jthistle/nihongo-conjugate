const forms = [
  "present-aff-long",
  "present-aff-short",
  "present-neg-long",
  "present-neg-short",
  "past-aff-long",
  "past-aff-short",
  "past-neg-long",
  "past-neg-short",
  "te-form",
];

const formNames = {
  "present-aff-long": "present aff. long form",
  "present-aff-short": "present aff. short form",
  "present-neg-long": "present neg. long form",
  "present-neg-short": "present neg. short form",
  "past-aff-long": "past aff. long form",
  "past-aff-short": "past aff. short form",
  "past-neg-long": "past neg. long form",
  "past-neg-short": "past neg. short form",
  "te-form": "て-form", 
};

const formMeanings = {
  "present-aff-long": "I %inf% / I'm going to %inf%",
  "present-aff-short": "I %inf% / I'm going to %inf%",
  "present-neg-long": "I don't %inf% / I'm not going to %inf%",
  "present-neg-short": "I don't %inf% / I'm not going to %inf%",
  "past-aff-long": "I %imp%",
  "past-aff-short": "I %imp%",
  "past-neg-long": "I didn't %inf%",
  "past-neg-short": "I didn't %inf%",
  "te-form": "て-form", 
}

const dictionary = [
  {
    base: "たべる",
    display: "食べる",
    english: {
      inf: "eat",
      imp: "ate",
    },
    class: "verb",
    ichidan: true,
  },
  {
    base: "はじめる",
    display: "始める",
    english: {
      inf: "begin",
      imp: "began",
    },
    class: "verb",
    ichidan: true,
  },
  {
    base: "よむ",
    display: "読む",
    english: {
      inf: "read",
      imp: "read",
    },
    class: "verb",
  },
  {
    base: "はなす",
    display: "話す",
    english: {
      inf: "speak",
      imp: "spoke",
    },
    class: "verb",
  },
  {
    base: "たつ",
    display: "立つ",
    english: {
      inf: "stand",
      imp: "stood",
    },
    class: "verb",
  },
  {
    base: "あそぶ",
    display: "遊ぶ",
    english: {
      inf: "play",
      imp: "played",
    },
    class: "verb",
  },
  {
    base: "しぬ",
    display: "死ぬ",
    english: {
      inf: "die",
      imp: "died",
    },
    class: "verb",
  },
  {
    base: "かう",
    display: "買う",
    english: {
      inf: "buy",
      imp: "bought",
    },
    class: "verb",
  },
  {
    base: "のぼる",
    display: "上る",
    english: {
      inf: "climb",
      imp: "climbed",
    },
    class: "verb",
    ichidan: false,
  },
  {
    base: "いく",
    display: "行く",
    english: {
      inf: "go",
      imp: "went",
    },
    class: "verb",
    exceptions: {
      "te-form": "いって",
      "past-aff-short": "いった",
    }
  },
  {
    base: "ある",
    english: {
      inf: "exist",
      imp: "existed",
    },
    class: "verb",
    ichidan: false,
    exceptions: {
      "present-neg-short": "ない",
    }
  },
  {
    base: "する",
    english: {
      inf: "do",
      imp: "did",
    },
    class: "verb",
    ichidan: false,
    exceptions: {
      "present-aff-long": "します",
      "present-aff-short": "する",
      "present-neg-long": "しません",
      "present-neg-short": "しない",
      "past-aff-long": "しました",
      "past-aff-short": "した",
      "past-neg-long": "しませんでした",
      "past-neg-long": "しなかった",
      "te-form": "して",
    }
  },
  {
    base: "くる",
    display: "来る",
    english: {
      inf: "come",
      imp: "came",
    },
    class: "verb",
    ichidan: false,
    exceptions: {
      "present-aff-long": "きます",
      "present-aff-short": "くる",
      "present-neg-long": "きません",
      "present-neg-short": "こない",
      "past-aff-long": "きました",
      "past-aff-short": "きた",
      "past-neg-long": "きませんでした",
      "past-neg-short": "こなかった",
      "te-form": "きて",
    }
  }
];

export { dictionary, forms, formNames, formMeanings };