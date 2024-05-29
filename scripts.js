function extractEmailDomains() {
  var inputText = document.getElementById("input").value;
  var emailDomains = extractDomains(inputText);
  document.getElementById("output").value = emailDomains.join("\n");
}

function extractDomains(text) {
  var emailRegex = /@([^\s@]+\.[^\s@]+)/g;
  var matches = text.match(emailRegex);
  return matches
    ? matches.map((domain) => "@" + domain.replace(/@/g, "").trim())
    : [];
}
