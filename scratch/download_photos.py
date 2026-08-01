import re
import requests
import os
import sys

def download_google_photos(album_url, output_dir, prefix="summit1_", max_images=10):
    print(f"Fetching Google Photos Album: {album_url}")
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
    }
    
    try:
        response = requests.get(album_url, headers=headers, timeout=15)
        if response.status_code != 200:
            print(f"Failed to fetch Google Photos album. Status: {response.status_code}")
            return []
            
        html = response.text
        # Google Photos embeds image URLs in script tags. They look like https://lh3.googleusercontent.com/pw/AL9nZE...
        # Let's search for this pattern.
        pattern = r'https://lh3\.googleusercontent\.com/[a-zA-Z0-9/_-]+=w\d+-h\d+'
        matches = re.findall(pattern, html)
        
        # If w/h pattern fails, search for base URLs
        if not matches:
            pattern = r'https://lh3\.googleusercontent\.com/pw/[a-zA-Z0-9_-]+'
            matches = re.findall(pattern, html)
            
        if not matches:
            # Try a broader search
            pattern = r'https://lh3\.googleusercontent\.com/[a-zA-Z0-9_-]+'
            matches = [m for m in re.findall(pattern, html) if len(m) > 50] # filter short matches
            
        unique_urls = list(set(matches))
        print(f"Found {len(unique_urls)} potential image URLs in Google Photos album.")
        
        os.makedirs(output_dir, exist_ok=True)
        downloaded = []
        count = 0
        
        for url in unique_urls:
            if count >= max_images:
                break
                
            # Clean and append size/download modifiers
            # For Google Photos, appending '=w800-h600-no' or similar gives a direct clean image
            download_url = url
            if not download_url.endswith('=w800') and '=' not in download_url:
                download_url += '=w800'
            elif '=' in download_url:
                base = download_url.split('=')[0]
                download_url = f"{base}=w800"
                
            try:
                img_data = requests.get(download_url, headers=headers, timeout=10).content
                filename = f"{prefix}{count + 1}.jpg"
                filepath = os.path.join(output_dir, filename)
                with open(filepath, 'wb') as f:
                    f.write(img_data)
                print(f"Downloaded: {filename} from {download_url[:50]}...")
                downloaded.append(filename)
                count += 1
            except Exception as e:
                print(f"Failed to download image {count}: {e}")
                
        return downloaded
    except Exception as e:
        print(f"Error reading Google Photos album: {e}")
        return []

def download_playbook_photos(playbook_url, output_dir, prefix="summit2_", max_images=10):
    print(f"Fetching Playbook Album: {playbook_url}")
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
    }
    
    try:
        response = requests.get(playbook_url, headers=headers, timeout=15)
        if response.status_code != 200:
            print(f"Failed to fetch Playbook album. Status: {response.status_code}")
            return []
            
        html = response.text
        # Playbook.com shared pages usually store assets inside a JSON-like state or direct CDN paths.
        # Direct CDNs look like: https://cdn.playbook.com/assets/... or similar, or they are loaded via API.
        # Let's search for cdn.playbook.com or assets pattern.
        pattern = r'https://[a-zA-Z0-9.-]*playbook\.com/[a-zA-Z0-9/_-]+'
        matches = re.findall(pattern, html)
        
        # Let's see if we can find any image files (e.g. ending in jpg, png, or embedded in JSON keys)
        image_patterns = [
            r'https://[a-zA-Z0-9.-]*playbook\.com/assets/[a-zA-Z0-9/_-]+',
            r'https://cdn\.playbook\.com/[a-zA-Z0-9/_-]+',
            r'https://[a-zA-Z0-9/._-]+\.(?:jpg|jpeg|png)'
        ]
        
        urls = []
        for pat in image_patterns:
            urls.extend(re.findall(pat, html))
            
        unique_urls = list(set(urls))
        # Filter urls that are likely direct image assets
        filtered_urls = [u for u in unique_urls if 'asset' in u.lower() or 'cdn' in u.lower() or u.lower().endswith(('.jpg', '.jpeg', '.png'))]
        
        print(f"Found {len(filtered_urls)} potential image URLs in Playbook album.")
        
        # If we couldn't find any direct links, print a portion of HTML to help debug
        if not filtered_urls:
            print("No direct image URLs resolved. Let's dump some patterns from the page.")
            print("First 200 chars containing 'https':")
            all_https = re.findall(r'https://[^\s"\'>]+', html)
            for h in all_https[:20]:
                print(f" - {h[:100]}")
                
        os.makedirs(output_dir, exist_ok=True)
        downloaded = []
        count = 0
        
        for url in filtered_urls:
            if count >= max_images:
                break
                
            try:
                # Some playbook urls need special headers or tokens, let's try direct download
                img_response = requests.get(url, headers=headers, timeout=10)
                if img_response.status_code == 200 and len(img_response.content) > 10000: # must be larger than 10KB to be an image
                    filename = f"{prefix}{count + 1}.jpg"
                    filepath = os.path.join(output_dir, filename)
                    with open(filepath, 'wb') as f:
                        f.write(img_response.content)
                    print(f"Downloaded: {filename} from {url[:50]}...")
                    downloaded.append(filename)
                    count += 1
            except Exception as e:
                pass
                
        return downloaded
    except Exception as e:
        print(f"Error reading Playbook album: {e}")
        return []

if __name__ == "__main__":
    out_dir = "c:/Users/Lavenda/Downloads/wie-summit-3-0/public/images"
    google_url = "https://photos.app.goo.gl/nG5gdbWrHtVGWMeG8"
    playbook_url = "https://www.playbook.com/s/pichaperfect/LVXyHLJJK9SwrqhVHnhM3LWc"
    
    print("Starting album scraper...")
    g_pics = download_google_photos(google_url, out_dir, prefix="summit1_", max_images=12)
    print(f"Google Photos downloaded: {g_pics}")
    
    p_pics = download_playbook_photos(playbook_url, out_dir, prefix="summit2_", max_images=12)
    print(f"Playbook downloaded: {p_pics}")
