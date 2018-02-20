# Google Search Console Report External Links

This extension adds an external link to each row in the drill down reports.

![Google Search Console External Links](https://merj.com/uploads/github/gsc-external-links-example.gif)

## Installation

Download the Chrome extension here:

```git clone https://github.com/ryansiddle/gsc-external-links```

Open Google Chrome and enter the address:

```chrome://extensions```

Click the "Load unpacked extension..."

Locate the GSC External Links folder and click "Select".

Go to your drill down reports https://search.google.com/search-console/index/drilldown?resource_id=https://example.com. Click a "reason", then hit refresh. You will see the new "[Visit]" link next to the rows of links.

## Known Problems

When navigating between "Reasons", the [Visit] link is not triggered. Hit `CMD + R` or `F5` to refresh the window. This is because the new Search Console uses pushState().

## TODO

* Fix: Changing scope of "Reasons" does not show the [Visit] link.
* Move to the `aria-expanded` panel.


