import os
from PIL import Image

assets_dir = 'public/assets'

for root, dirs, files in os.walk(assets_dir):
    for f in files:
        ext = os.path.splitext(f)[1].lower()
        if ext in ['.jpg', '.jpeg']:
            path = os.path.join(root, f)
            try:
                with Image.open(path) as img:
                    orig_size = os.path.getsize(path)
                    w, h = img.size
                    max_dim = 1600
                    if max(w, h) > max_dim:
                        scale = max_dim / max(w, h)
                        new_img = img.resize((int(w * scale), int(h * scale)), Image.Resampling.LANCZOS)
                    else:
                        new_img = img.copy()
                    
                    if new_img.mode != 'RGB':
                        new_img = new_img.convert('RGB')
                    
                    tmp_path = path + '.tmp'
                    new_img.save(tmp_path, format='JPEG', quality=82, optimize=True)
                    if os.path.getsize(tmp_path) < orig_size:
                        os.replace(tmp_path, path)
                        print(f"Compressed {path}: {orig_size/1024:.1f}KB -> {os.path.getsize(path)/1024:.1f}KB")
                    else:
                        os.remove(tmp_path)
            except Exception as e:
                print(f"Error processing {path}: {e}")
        elif ext == '.png' and f == 'Hero background image.png':
            path = os.path.join(root, f)
            try:
                orig_size = os.path.getsize(path)
                with Image.open(path) as img:
                    tmp_path = path + '.tmp'
                    p_img = img.convert('P', palette=Image.Palette.ADAPTIVE, colors=256)
                    p_img.save(tmp_path, format='PNG', optimize=True)
                    if os.path.getsize(tmp_path) < orig_size:
                        os.replace(tmp_path, path)
                        print(f"Compressed {path}: {orig_size/1024:.1f}KB -> {os.path.getsize(path)/1024:.1f}KB")
                    else:
                        os.remove(tmp_path)
            except Exception as e:
                print(f"Error processing {path}: {e}")
