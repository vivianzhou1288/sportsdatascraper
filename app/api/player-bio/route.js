import { NextResponse } from "next/server";
import { JSDOM } from "jsdom";

export async function GET(request) {
  const url = new URL(request.url).searchParams.get("url");

  if (!url) {
    return NextResponse.json({ error: "URL parameter is required" });
  }

  try {
    // Fetch the stats page
    const bioRes = await fetch(url);
    if (!bioRes.ok) {
      return NextResponse.json({ error: "Failed to fetch the stats page" });
    }
    const bioHtml = await bioRes.text();

    // Parse the stats page using JSDOM
    const bioDom = new JSDOM(bioHtml);
    const bioDocument = bioDom.window.document;

    // Find all instances of PageLayout__Main
    const pageLayouts = bioDocument.querySelectorAll(".PageLayout__Main");

    let targetPageLayout = null;

    // Iterate through all PageLayout__Main elements to find the one with "Card Bio"
    pageLayouts.forEach((pageLayout, idx) => {
      const cardBioSection = pageLayout.querySelector("section.Card.Bio");
      if (cardBioSection) {
        targetPageLayout = pageLayout;
      }
    });

    if (!targetPageLayout) {
      return NextResponse.json({
        error: "PageLayout with Card Bio section not found",
      });
    }

    // Find all the Bio__Item elements within the Card Bio section
    const bioItems = targetPageLayout.querySelectorAll(".Bio__Item");

    let team = "Team not found";
    let position = "Position not found";

    // Iterate through each Bio__Item to find the Team and Position
    bioItems.forEach((item) => {
      const labelElement = item.querySelector(".Bio__Label");
      const label = labelElement?.textContent?.trim();

      // Find the adjacent sibling to find the value
      const valueElement = labelElement?.nextElementSibling;

      const value = valueElement
        ? valueElement.textContent?.trim() || "Value not found"
        : "Value not found";

      if (label === "Team") {
        team = value || "Team not found";
      } else if (label === "Position") {
        position = value || "Position not found";
      }
    });
    // Combine extracted data into one object
    const extractedData = {
      team,
      position,
    };

    // Return the extracted data as JSON
    return NextResponse.json(extractedData);
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
