function findDisplayedSection(sections) {
    for (const sectionsKey in sections) {
        if (!sections[sectionsKey].hasAttribute("hidden")) {
            console.log(sections[sectionsKey].getAttribute("id")); // Debug
            return sections[sectionsKey];
        }
    }
}