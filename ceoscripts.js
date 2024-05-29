function findCEO() {
  var inputText = document.getElementById("input").value;
  var domains = inputText.split(/\r?\n/);
  var ceoQueries = addCEOQuery(domains);
  document.getElementById("output").value = ceoQueries.join("\n");
}

function addCEOQuery(domains) {
  return domains.map((domain) => {
    var trimmedDomain = domain.trim();
    if (!shouldExcludeDomain(trimmedDomain)) {
      return "Who is the current CEO of " + trimmedDomain;
    } else {
      return trimmedDomain;
    }
  });
}

function shouldExcludeDomain(domain) {
  var validExtensions = [".org", ".edu", ".org.uk"];
  var domainLower = domain.toLowerCase();

  for (var i = 0; i < validExtensions.length; i++) {
    if (domainLower.endsWith(validExtensions[i])) {
      return true;
    }
  }
  return false;
}
