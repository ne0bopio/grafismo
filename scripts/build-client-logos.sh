#!/usr/bin/env bash
# Builds the client-reel logos: reference/client-logos/<slug>.{svg,png}
# -> public/images/clients/<slug>.png, trimmed and sized alike.
#
# Every logo becomes a transparent PNG 120px tall at most (2x the ~40px it
# shows at), trimmed to its ink, so the tiles can fit them with one rule.
# A raster with a flat background (the corner pixel is opaque) gets that
# colour knocked out first, otherwise the tile would show a coloured block.
#
# Needs rsvg-convert and magick (brew install librsvg imagemagick).
# reference/ is gitignored: the originals live on Juan's machine only.
set -euo pipefail
cd "$(dirname "$0")/.."

src=reference/client-logos
out=public/images/clients
tmp=$(mktemp -d)
# Logos that only exist as white ink: the tiles are cream, so flip them dark.
invert=" laberinto lissia "
# Logos whose wordmark is white next to a coloured symbol: inverting would
# turn the symbol the wrong colour, so only the near-white ink goes dark.
white_text=" terranum "
mkdir -p "$out"

for f in "$src"/*.svg "$src"/*.png; do
  [ -e "$f" ] || continue
  slug=$(basename "${f%.*}")
  raster="$tmp/$slug.png"

  if [[ $f == *.svg ]]; then
    rsvg-convert -h 480 "$f" -o "$raster"
  else
    cp "$f" "$raster"
    alpha=$(magick "$raster" -alpha on -format '%[fx:p{0,0}.a]' info:)
    if [ "$alpha" = "1" ]; then
      bg=$(magick "$raster" -format '%[pixel:p{0,0}]' info:)
      magick "$raster" -alpha set -fuzz 12% -fill none -draw "color 0,0 replace" "$raster"
      echo "  $slug: knocked out background $bg"
    fi
  fi

  if [[ $invert == *" $slug "* ]]; then
    magick "$raster" -channel RGB -negate +channel "$raster"
    echo "  $slug: inverted white ink"
  fi

  if [[ $white_text == *" $slug "* ]]; then
    magick "$raster" -fuzz 25% -fill '#2A2B31' -opaque white "$raster"
    echo "  $slug: darkened white wordmark"
  fi

  magick "$raster" -trim +repage -resize 480x120\> -strip "$out/$slug.png"
  echo "$slug -> $out/$slug.png ($(magick identify -format '%wx%h' "$out/$slug.png"))"
done

rm -rf "$tmp"
