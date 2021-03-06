#!/usr/bin/env node
const { spawn } = require('child_process');
const program = require('commander');
 
program
  .usage('[options] [file]')
  .option('-i, --input <type>', 'input movie file')
  .option('-o, --output <type>', 'output gif file', 'output.gif')
  .option('-f, --ffmpeg <type>', 'ffmpeg path on your local filesystem', 'ffmpeg')
  .option('-s, --scale <type>', 'scale', '720')
  .option('-fps, --fps <type>', 'fps', '10')
  .option('-start, --startTime <type>', 'start time', '0')
  .option('-d, --duration <type>', 'duration')
  .option('-l, --loop <type>', 'loop', '0');

program.parse(process.argv);

const {
  input,
  output,
  ffmpeg,
  scale,
  fps,
  startTime,
  duration,
  loop,
} = program;

function validate() {
  if (!input) throw new Error('Please enter a valid input movie file path')
}
validate()

const cmd = `${ffmpeg} \
-ss ${startTime} \
${duration ? `-t ${duration}` : ' '} \
-i ${input} \
-vf "fps=${fps},scale=${scale}:-1:flags=lanczos,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse" \
-loop ${loop} \
${output}`

spawn(cmd, { stdio: 'inherit' , shell: true}, (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);
});