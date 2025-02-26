function checkDuplicateLinksAndHttp() {
    let observer = new MutationObserver(() => {
        let links = document.querySelectorAll('.block-editor-rich-text__editable a');
        let linkMap = {};
        let duplicateLinks = [];
        let httpLinks = [];

        console.log("Checking links...");

        links.forEach(link => {
            let href = link.href.trim();
            console.log("Found link:", href);

            // Check for duplicates
            if (linkMap[href]) {
                if (!duplicateLinks.includes(href)) {
                    duplicateLinks.push(href);
                }
            } else {
                linkMap[href] = true;
            }

            // Check if the link uses http instead of https
            if (href.startsWith("http://")) {
                httpLinks.push(href);
            }
        });

        // If duplicates are found, alert the user
        if (duplicateLinks.length > 0) {
            console.log("Duplicate links detected:", duplicateLinks);
            alert("⚠️ Duplicate links detected:\n\n" + duplicateLinks.join("\n"));
        }

        // If http links are found, alert the user
        if (httpLinks.length > 0) {
            console.log("Links using HTTP detected:", httpLinks);
            alert("⚠️ The following links are using HTTP instead of HTTPS:\n\n" + httpLinks.join("\n"));
        }

        // If no issues, log the results
        if (duplicateLinks.length === 0 && httpLinks.length === 0) {
            console.log("No issues detected.");
        }
    });

    // Observe changes in the Gutenberg editor
    let editorArea = document.querySelector('.block-editor-writing-flow');
    if (editorArea) {
        observer.observe(editorArea, { childList: true, subtree: true });
    } else {
        console.log("Gutenberg editor area not found.");
    }
}

// Wait for Gutenberg to load before running the script
window.addEventListener("load", () => {
    setTimeout(checkDuplicateLinksAndHttp, 3000);
});
