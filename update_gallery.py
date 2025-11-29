import os
import json
import re

def update_script():
    image_dir = 'photos'
    script_file = 'script.js'
    
    # Get list of images
    allowed_extensions = ('.jpg', '.jpeg', '.png', '.gif', '.webp', '.JPG', '.JPEG', '.PNG')
    files = [f for f in os.listdir(image_dir) if f.lower().endswith(allowed_extensions)]
    files.sort()
    
    # Create JS array content
    # We only need src for now based on the new script.js
    images_data = [{'src': f'photos/{f}'} for f in files]
    json_str = json.dumps(images_data, indent=4)
    
    # Read script.js
    with open(script_file, 'r') as f:
        content = f.read()
    
    # Replace the photos array
    # Regex to find "const photos = [ ... ];" or "const photos = [];"
    
    new_content = re.sub(
        r'const photos = \[.*?\];', 
        f'const photos = {json_str};', 
        content, 
        flags=re.DOTALL
    )
    
    # Write back
    with open(script_file, 'w') as f:
        f.write(new_content)
    
    print(f"Updated script.js with {len(files)} images.")

if __name__ == "__main__":
    update_script()
