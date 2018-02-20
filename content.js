// Find the rows by the data-rowid.
let tr = document.querySelectorAll('tr[data-rowid]');

for (var i = 0, l = tr.length; i < l; i++) {
  // Find the rows of links.
  let span = tr[i].querySelector('td content span');

  // Create the external link.
  var a = document.createElement('a');
  var linkText = document.createTextNode('[Visit]');
  a.appendChild(linkText);
  a.rel = 'noopener noreferrer';
  a.target = '_blank';
  a.title = 'Visit URL';
  a.style = 'margin-right: 5px;'
  a.href = span.title;

  // Append to the current row.
  span.insertBefore(a, span.childNodes[0]);
}

