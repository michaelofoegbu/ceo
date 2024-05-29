function findPresident() {
  var inputText = document.getElementById("input").value;
  var domains = inputText.split(/\r?\n/);
  var presidentQueries = addPresidentQuery(domains);
  document.getElementById("output").value = presidentQueries.join("\n");
}

function addPresidentQuery(domains) {
  return domains.map((domain) => {
    var trimmedDomain = domain.trim();
    if (shouldIncludeDomain(trimmedDomain)) {
      return "Who is the current president of " + trimmedDomain;
    } else {
      return trimmedDomain;
    }
  });
}

function shouldIncludeDomain(domain) {
  var validExtensions = [".org", ".edu", ".org.uk"];
  var domainLower = domain.toLowerCase();

  for (var i = 0; i < validExtensions.length; i++) {
    if (domainLower.endsWith(validExtensions[i])) {
      return true;
    }
  }
  return false;
}
