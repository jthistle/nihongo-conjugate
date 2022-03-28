import { toRomaji, toHiragana } from "wanakana";

function conjugate(item, form) {
  if (item.class === "verb") {
    return conjugateVerb(item, form);
  }
}

function conjugateVerb(verb, form) {
  if (verb.exceptions && form in verb.exceptions) {
    return verb.exceptions[form];
  }
  
  const { base } = verb;
  const last = base.slice(base.length - 1);
  
  let godan = true;
  if (last === "る") {
    godan = !verb.ichidan;
  }

  if (godan) {
    return conjugateGodan(verb, form);
  } else {
    return conjugateIchidan(verb, form);
  }
}

function conjugateGodan(verb, form) {
  const { base } = verb;
  const first = base.slice(0, base.length - 1);
  const last = base.slice(base.length - 1);

  let istem;
  if (last === "つ") {
    istem = first + "ち";
  } else {
    istem = changeLastSound(base, "i");
  }

  switch (form) {
    case "present-aff-long":
      return istem + "ます";
    case "present-neg-long":
      return istem + "ません";
    case "present-aff-short":
      return base; 
    case "present-neg-short": {
      let stem;
      if (last === "う") {
        stem = first + "わ"; 
      } else if (last === "つ") {
        stem = first + "た";
      } else {
        stem = changeLastSound(base, "a");
      }

      return stem + "ない";
    }
    case "past-aff-long": {
      let stem = changeLastSound(base, "i");
      return stem + "ました";
    }
    case "past-aff-short": {
      let te = conjugateGodan(verb, "te-form");
      return changeLastSound(te, "a");
    }
    case "past-neg-long": {
      let stem = changeLastSound(base, "i");
      return stem + "ませんでした";
    }
    case "past-neg-short": {
      let stem = conjugateGodan(verb, "present-neg-short");
      return changeLastSound(stem, "katta");
    }
    case "te-form": {
      if (last === "う" || last === "つ" || last === "る") {
        return first + "って";
      } else if (last === "む" || last === "ぬ" || last === "ぶ") {
        return first + "んで";
      } else if (last === "く") {
        return first + "いて";
      } else if (last === "ぐ") {
        return first + "いで";
      } else if (last === "す") {
        return first + "して";
      }
    }
    default:
      console.error("Something went wrong with conjugating", base, "to", form);
      return "err";
  }
}

function conjugateIchidan(verb, form) {
  const { base } = verb;
  const first = base.slice(0, base.length - 1);
  const last = base.slice(base.length - 1);

  switch (form) {
    case "present-aff-long":
      return first + "ます";
    case "present-neg-long":
      return first + "ません";
    case "present-aff-short":
      return base; 
    case "present-neg-short":
      return first + "ない";
    case "past-aff-long":
      return first + "ました";
    case "past-aff-short":
      return first + "た";
    case "past-neg-long":
      return first + "ませんでした";
    case "past-neg-short":
      return first + "なかった";
    case "te-form":
      return first + "て";
    default:
      console.error("Something went wrong with conjugating", base, "to", form);
      return "err";
  }
}

function changeLastSound(txt, to) {
  let romj = toRomaji(txt);
  romj = romj.slice(0, romj.length - 1) + to;
  return toHiragana(romj);
}

export default conjugate;
