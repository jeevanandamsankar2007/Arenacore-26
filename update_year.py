import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('October 26, 28, 29, 2025', 'October 26, 28, 29, 2026')
content = content.replace('Edition 2025-2026', 'Edition 2026-2027')
content = content.replace('gdg@psna2025', 'gdg@psna2026')
content = content.replace('GDG-PSNA-2025', 'GDG-PSNA-2026')
content = content.replace('© 2025', '© 2026')
content = content.replace('data-year="2025"', 'data-year="2026"')
content = content.replace('filterGalleryByYear(\'2025\')">2025', 'filterGalleryByYear(\'2026\')">2026')
content = content.replace('<span class="tag-year">2025', '<span class="tag-year">2026')

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)
print('Replaced 2025 with 2026')
