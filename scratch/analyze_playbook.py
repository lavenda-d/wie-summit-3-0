import requests
import re
import json

url = "https://www.playbook.com/s/pichaperfect/LVXyHLJJK9SwrqhVHnhM3LWc"
headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
}

print("Fetching playbook content...")
r = requests.get(url, headers=headers)
html = r.text

print(f"HTML Length: {len(html)}")

# Find next.js state
next_data = re.search(r'<script id="__NEXT_DATA__" type="application/json">(.*?)</script>', html)
if next_data:
    print("Found __NEXT_DATA__!")
    try:
        data = json.loads(next_data.group(1))
        # Save json to a file to examine
        with open("scratch/playbook_data.json", "w") as f:
            json.dump(data, f, indent=2)
        print("Saved json state to scratch/playbook_data.json")
    except Exception as e:
        print(f"Error parsing JSON: {e}")
else:
    print("Could not find __NEXT_DATA__.")
    # Search for any large script blocks or JSON-like strings
    script_blocks = re.findall(r'<script[^>]*>(.*?)</script>', html, re.DOTALL)
    print(f"Found {len(script_blocks)} script blocks.")
    for idx, block in enumerate(script_blocks):
        if "props" in block or "state" in block or "assets" in block:
            print(f"Block {idx} contains interesting keywords. Length: {len(block)}")
            with open(f"scratch/playbook_script_{idx}.js", "w", encoding="utf-8") as f:
                f.write(block)
