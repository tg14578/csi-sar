# Video assets

Drop the demo video here as `demonstration.mp4`. It is referenced by `app/project/page.js` in the Demonstration section as `/video/demonstration.mp4`.

## File-size guidance

- Vercel serves files in `public/` directly via its CDN — no Lambda/build-output limit applies to static assets.
- GitHub warns on files over 50 MB and **rejects pushes over 100 MB** without Git LFS. Aim for a 720p H.264 MP4 at ~2–3 Mbps (a 3-minute clip lands around 50 MB).
- If the encode comes out larger than 100 MB, either re-encode (HandBrake "Web Optimized" preset works well) or set up Git LFS for `*.mp4`.

## Encoding tips

- Container: `.mp4`
- Video codec: H.264 (most compatible)
- Audio codec: AAC
- Add a poster image: drop `demonstration-poster.jpg` in this folder and add `poster="/video/demonstration-poster.jpg"` to the `<video>` tag in `app/project/page.js` so the first frame doesn't start as a black box.
