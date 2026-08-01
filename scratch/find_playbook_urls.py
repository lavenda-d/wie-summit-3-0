import re
import os

def find_urls_in_file(filepath):
    print(f"\nAnalyzing: {filepath}")
    if not os.path.exists(filepath):
        print("File does not exist.")
        return
        
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
        
    print(f"File size: {len(content)} characters.")
    
    # Look for anything resembling a URL containing media or assets
    # Playbook URLs might look like: https://assets.playbook.com/ or https://cdn.playbook.com/
    # or have .jpg / .png extensions
    urls = re.findall(r'https?://[^\s"\'\\<>]+', content)
    unique_urls = list(set(urls))
    
    print(f"Found {len(unique_urls)} total URLs in this block.")
    
    # Filter for interesting ones
    playbook_urls = [u for u in unique_urls if 'playbook' in u]
    print(f"Found {len(playbook_urls)} Playbook URLs. First 20:")
    for u in playbook_urls[:20]:
        print(f" - {u}")
        
    # Look for files ending with extensions
    media_urls = [u for u in unique_urls if u.lower().endswith(('.jpg', '.jpeg', '.png', '.gif', '.svg'))]
    print(f"Found {len(media_urls)} media URLs. First 20:")
    for u in media_urls[:20]:
        print(f" - {u}")

find_urls_in_file("scratch/playbook_script_104.js")
find_urls_in_file("scratch/playbook_script_1.js")
