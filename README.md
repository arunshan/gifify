## Gifify

Converts any video file into a gif. \
You can take a screencap/recording using Quicktime \
and then you can use this tool to create an optimized gif which you can share in github

## Prerequisites

- FFMPEG

  MacOS
  ```
  brew install ffmpeg
  ```
  Linux and Windows
  https://www.ffmpeg.org/download.html

- Node and NPM

## Installation

- `npm i giphyfy -g`

## Usage

```
Usage: gifify [options] [file]

Options:
  -i, --input <type>          Input movie file
  -o, --output <type>         Output gif file (default: "output.gif")
  -f, --ffmpeg <type>         FFMPEG path on your local filesystem (default: "ffmpeg")
  -s, --scale <type>          Scale (default: "720")
  -fps, --fps <type>          FPS (default: "10")
  -start, --startTime <type>  Start Time (default: "0")
  -d, --duration <type>       Duration
  -l, --loop <type>           Loop (default: "0")
  -h, --help                  output usage information
```

## Example

Outputs an optimized gif to output.gif. You can specify `-o` option to output the gif to a specific file.
```
gifify -i <input_video_file>
```

Outputs a GIF with scale 720p. You can change this to whatever you want (360, 480 etc)
```
gifify -s 720 -i <input_video_file>
```

Outputs a gif with a certain FPS
c

You can pass in the path to your local ffmpeg build
```
gifify -f <my-local-ffmpeg-path> -s 720 -i <input_video_file>
```

## Contributions
Please reach out to me if you would like to contribute to this project.
