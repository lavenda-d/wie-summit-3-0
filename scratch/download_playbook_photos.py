import re
import os
import requests

def download_playbook_media(script_path, output_dir, prefix="summit2_", max_images=12):
    print(f"Reading from script: {script_path}")
    if not os.path.exists(script_path):
        print("Script file not found.")
        return []
        
    with open(script_path, "r", encoding="utf-8") as f:
        content = f.read()
        
    # Extract Playbook image cdn URLs
    pattern = r'https://img\.playbook\.com/[^\s"\'\\<>]+'
    urls = re.findall(pattern, content)
    unique_urls = list(set(urls))
    
    print(f"Found {len(unique_urls)} unique Playbook media URLs.")
    
    # We want to skip small sizes or generic elements if possible.
    # Playbook urls have sizing info in them like "/w:750/" or "/s:3000:2000/".
    # Let's filter for larger sizes if available, or just take the ones containing preview/large_preview.
    filtered_urls = [u for u in unique_urls if 'preview' in u.lower() or 'w:' in u or 's:' in u]
    if not filtered_urls:
        filtered_urls = unique_urls
        
    print(f"Filtered to {len(filtered_urls)} candidate asset URLs.")
    
    os.makedirs(output_dir, exist_ok=True)
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
    }
    
    downloaded = []
    count = 0
    
    for url in filtered_urls:
        if count >= max_images:
            break
            
        try:
            filename = f"{prefix}{count + 1}.jpg"
            filepath = os.path.join(output_dir, filename)
            
            # Fetch image bytes
            response = requests.get(url, headers=headers, timeout=12)
            if response.status_code == 200 and len(response.content) > 15000: # must be larger than 15KB
                with open(filepath, "wb") as f:
                    f.write(response.content)
                print(f"Successfully downloaded: {filename} from {url[:60]}...")
                downloaded.append(filename)
                count += 1
            else:
                print(f"Skipping url (status {response.status_code}, size {len(response.content)} bytes)")
        except Exception as e:
            print(f"Failed download for url {count}: {e}")
            
    return downloaded

if __name__ == "__main__":
    out_dir = "c:/Users/Lavenda/Downloads/wie-summit-3-0/public/images"
    download_playbook_media("scratch/playbook_script_104.js", out_dir, prefix="summit2_", max_images=14)
