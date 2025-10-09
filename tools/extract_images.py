#!/usr/bin/env python3
"""
Simple helper: extract base64 image data URIs from an HTML file and write them to files.
Usage: python tools/extract_images.py path/to/file.html output_dir

This script prints suggested replacements (original data-URI -> images/filename.ext)
so you can replace them in the HTML and keep assets as separate files for optimization.
"""
import sys
import re
import os
import base64

DATA_URI_RE = re.compile(r'data:(image/[^;]+);base64,([A-Za-z0-9+/=\n\r]+)')

def ensure_dir(p):
    os.makedirs(p, exist_ok=True)

def ext_for_mime(mime):
    mapping = {
        'image/jpeg': 'jpg',
        'image/png': 'png',
        'image/gif': 'gif',
        'image/webp': 'webp',
        'image/svg+xml': 'svg'
    }
    return mapping.get(mime, 'bin')

def main():
    if len(sys.argv) < 3:
        print('Usage: extract_images.py input.html output_dir')
        sys.exit(1)
    infile = sys.argv[1]
    outdir = sys.argv[2]
    ensure_dir(outdir)
    with open(infile, 'r', encoding='utf-8') as f:
        html = f.read()
    matches = list(DATA_URI_RE.finditer(html))
    if not matches:
        print('No data URI images found.')
        return
    replacements = []
    for i, m in enumerate(matches, start=1):
        mime = m.group(1)
        b64 = m.group(2)
        ext = ext_for_mime(mime)
        filename = f'image_{i}.{ext}'
        outpath = os.path.join(outdir, filename)
        # sanitize base64: remove whitespace
        b64clean = ''.join(b64.split())
        with open(outpath, 'wb') as out:
            out.write(base64.b64decode(b64clean))
        print(f'Wrote: {outpath} (mime: {mime})')
        replacements.append((m.group(0), outpath))
    print('\nSuggested replacements (search for the data:... string and replace with the file path):')
    for old, new in replacements:
        print('---')
        print(old[:80] + '...')
        print('->', new)

if __name__ == '__main__':
    main()
