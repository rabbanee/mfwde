const path = require('path');
// eslint-disable-next-line import/no-extraneous-dependencies
const FFmpeg = require('fluent-ffmpeg');

const gify = new FFmpeg({ source: path.resolve(__dirname, 'src/public/images/ripple.gif') });

gify.clone()
  .withVideoCodec('libx264')
  .withFps(25)
  .toFormat('mp4')
  .saveToFile(path.resolve(__dirname, 'src/public/images/ripple.mp4'));

gify.clone()
  .withFps(25)
  .toFormat('webm')
  .saveToFile(path.resolve(__dirname, 'src/public/images/ripple.webm'));
