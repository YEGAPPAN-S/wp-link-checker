# Link Checker

The **Link Checker** Chrome extension helps you monitor and validate the links within a webpage. It alerts you if the same internal link is used more than once (duplicate links) or if the links use **HTTP** instead of **HTTPS**. This extension ensures your content is both optimized for SEO and secure.

## Features

- **Duplicate Link Detection**: Alerts you when the same internal link appears more than once on the page.
- **HTTP Link Detection**: Notifies you if any link uses **HTTP** instead of the more secure **HTTPS**.
- **Real-Time Monitoring**: Runs automatically in the background while you're working in the webpage.

## Installation

1. Clone or download the repository.
2. Open Chrome and go to `chrome://extensions/`.
3. Enable **Developer Mode**.
4. Click **Load unpacked** and select the folder where you saved the extension files.
5. The extension will be installed and active.

## Usage

- Open any webpage you want to check.
- The extension will automatically check for duplicate links and HTTP links.
- If duplicate links or HTTP links are found, an **alert** will notify you of the issue.

## How It Works

1. When the extension is installed, it automatically runs on any webpage.
2. It scans all the links (`<a href="...">`) in the page for:
   - **Duplicate internal links**.
   - **HTTP links**.
3. If duplicate internal links or HTTP links are found, it triggers an **alert** to notify you.
